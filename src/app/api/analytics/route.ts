import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../lib/db";
import { analyticsEvents } from "../../../lib/db/schema";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      eventName,
      eventCategory,
      eventLabel,
      eventValue,
      userId,
      sessionId,
      ipAddress,
      userAgent,
      referrer,
      pageUrl,
      metadata,
    } = body;

    // Store analytics event
    await db.insert(analyticsEvents).values({
      eventName,
      eventCategory,
      eventLabel,
      eventValue,
      userId,
      sessionId,
      ipAddress,
      userAgent,
      referrer,
      pageUrl,
      metadata,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Analytics event storage error:", error);
    return NextResponse.json(
      { error: "Failed to store analytics event" },
      { status: 500 }
    );
  }
}
