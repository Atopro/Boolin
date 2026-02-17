import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { db, projects, projectStatusHistory } from "@/lib/db";
import { eq } from "drizzle-orm";

const validStatuses = [
  "brief",
  "concept",
  "iteration",
  "feedback",
  "delivered",
  "archived",
];

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user || session.user.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const projectId = parseInt(params.id);
    if (isNaN(projectId)) {
      return NextResponse.json(
        { error: "Invalid project ID" },
        { status: 400 }
      );
    }

    const body = await request.json();
    const { status } = body;

    if (!status || !validStatuses.includes(status)) {
      return NextResponse.json({ error: "Invalid status" }, { status: 400 });
    }

    // Get current project to check current status
    const currentProject = await db
      .select({ status: projects.status })
      .from(projects)
      .where(eq(projects.id, projectId))
      .limit(1);

    if (currentProject.length === 0) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    const currentStatus = currentProject[0].status;

    // Update project status
    const result = await db
      .update(projects)
      .set({
        status,
        updatedAt: new Date(),
      })
      .where(eq(projects.id, projectId))
      .returning();

    if (result.length === 0) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    // Log status change
    await db.insert(projectStatusHistory).values({
      projectId,
      fromStatus: currentStatus,
      toStatus: status,
      changedBy: parseInt(session.user.id),
    });

    return NextResponse.json({ project: result[0] });
  } catch (error) {
    console.error("Error updating project status:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
