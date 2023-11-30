import { NextResponse } from "next/server";
import resources from "~/data.json";

type ResponseDto = {
  data: Resource[];
  status: "OK";
};

export async function GET() {
  return NextResponse.json<ResponseDto>({ data: resources, status: "OK" });
}
