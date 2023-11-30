import { NextResponse } from "next/server";
import resources from "~/data.json";

export async function GET(request: Request) {
  const id = request.url.slice(request.url.lastIndexOf("/") + 1);
  const resource = resources.find((r) => r.id === id);
  if (resource) {
    return NextResponse.json({ data: [resource], status: "OK" });
  }
  return NextResponse.json({ data: [], status: "NOT FOUND" });
}
