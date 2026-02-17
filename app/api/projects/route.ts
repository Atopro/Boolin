import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { db, projects, users } from "@/lib/db";
import { eq, desc } from "drizzle-orm";

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");
    const service = searchParams.get("service");

    let query = db
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
      .orderBy(desc(projects.createdAt));

    // Filter by user role
    if (session.user.role === "client") {
      query = query.where(eq(projects.userId, parseInt(session.user.id)));
    }

    // Additional filters for admin
    if (session.user.role === "admin") {
      if (status) {
        query = query.where(eq(projects.status, status));
      }
      if (service) {
        query = query.where(eq(projects.service, service));
      }
    }

    const result = await query;

    return NextResponse.json({ projects: result });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const {
      clientType,
      service,
      styleTags,
      colors,
      items,
      notes,
      links,
      contactName,
      contactEmail,
      contactPhone,
    } = body;

    const newProject = await db
      .insert(projects)
      .values({
        userId: parseInt(session.user.id),
        clientType,
        service,
        styleTags: styleTags || [],
        colors: colors || [],
        items: items || [],
        notes: notes || "",
        links: links || [],
        contactName: contactName || "",
        contactEmail: contactEmail || "",
        contactPhone: contactPhone || "",
      })
      .returning();

    return NextResponse.json({ project: newProject[0] }, { status: 201 });
  } catch (error) {
    console.error("Error creating project:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
