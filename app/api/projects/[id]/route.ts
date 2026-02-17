import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { db, projects, users } from "@/lib/db";
import { eq, and } from "drizzle-orm";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const projectId = parseInt(params.id);
    if (isNaN(projectId)) {
      return NextResponse.json(
        { error: "Invalid project ID" },
        { status: 400 }
      );
    }

    let whereCondition = eq(projects.id, projectId);

    // Clients can only see their own projects
    if (session.user.role === "client") {
      whereCondition = and(
        eq(projects.id, projectId),
        eq(projects.userId, parseInt(session.user.id))
      );
    }

    const result = await db
      .select({
        id: projects.id,
        status: projects.status,
        clientType: projects.clientType,
        service: projects.service,
        styleTags: projects.styleTags,
        colors: projects.colors,
        items: projects.items,
        notes: projects.notes,
        links: projects.links,
        contactName: projects.contactName,
        contactEmail: projects.contactEmail,
        contactPhone: projects.contactPhone,
        createdAt: projects.createdAt,
        updatedAt: projects.updatedAt,
        user: {
          id: users.id,
          username: users.username,
          role: users.role,
        },
      })
      .from(projects)
      .innerJoin(users, eq(projects.userId, users.id))
      .where(whereCondition)
      .limit(1);

    if (result.length === 0) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json({ project: result[0] });
  } catch (error) {
    console.error("Error fetching project:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const projectId = parseInt(params.id);
    if (isNaN(projectId)) {
      return NextResponse.json(
        { error: "Invalid project ID" },
        { status: 400 }
      );
    }

    const body = await request.json();
    const updateData: any = {};

    // Only admins can update projects
    if (session.user.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    // Allow updating specific fields
    const allowedFields = [
      "status",
      "clientType",
      "service",
      "styleTags",
      "colors",
      "items",
      "notes",
      "links",
      "contactName",
      "contactEmail",
      "contactPhone",
    ];

    for (const field of allowedFields) {
      if (field in body) {
        updateData[field] = body[field];
      }
    }

    updateData.updatedAt = new Date();

    const result = await db
      .update(projects)
      .set(updateData)
      .where(eq(projects.id, projectId))
      .returning();

    if (result.length === 0) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json({ project: result[0] });
  } catch (error) {
    console.error("Error updating project:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(
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

    const result = await db
      .delete(projects)
      .where(eq(projects.id, projectId))
      .returning();

    if (result.length === 0) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Project deleted successfully" });
  } catch (error) {
    console.error("Error deleting project:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
