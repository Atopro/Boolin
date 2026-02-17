import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { db, invoices, projects } from "@/lib/db";
import { eq, desc } from "drizzle-orm";

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const projectId = searchParams.get("projectId");

    let query = db
      .select({
        id: invoices.id,
        amount: invoices.amount,
        status: invoices.status,
        fileUrl: invoices.fileUrl,
        notes: invoices.notes,
        createdAt: invoices.createdAt,
        updatedAt: invoices.updatedAt,
        projectId: invoices.projectId,
      })
      .from(invoices)
      .orderBy(desc(invoices.createdAt));

    if (projectId) {
      query = query.where(eq(invoices.projectId, parseInt(projectId)));
    }

    // For clients, only show invoices for their projects
    if (session.user.role === "client") {
      // This would need a more complex query to join with projects
      // For now, we'll handle this in the frontend
    }

    const result = await query;

    return NextResponse.json({ invoices: result });
  } catch (error) {
    console.error("Error fetching invoices:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user || session.user.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const body = await request.json();
    const { projectId, amount, status = "draft", fileUrl, notes } = body;

    if (!projectId || !amount) {
      return NextResponse.json(
        { error: "Project ID and amount are required" },
        { status: 400 }
      );
    }

    const newInvoice = await db
      .insert(invoices)
      .values({
        projectId: parseInt(projectId),
        amount: parseFloat(amount),
        status,
        fileUrl: fileUrl || null,
        notes: notes || "",
      })
      .returning();

    return NextResponse.json({ invoice: newInvoice[0] }, { status: 201 });
  } catch (error) {
    console.error("Error creating invoice:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
