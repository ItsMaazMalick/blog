import prisma from "@/helper/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { title, author, date, category, description } = reqBody;
    if (!title || !author || !date || !category || !description) {
      console.log(reqBody);
      return NextResponse.json({ message: "All fields must be provided" });
    }
    await prisma.post.create({
      data: {
        title,
        author,
        date,
        category,
        description,
      },
    });
    return NextResponse.json({ message: "data saved" });
  } catch (error) {
    console.log(error);
  }
}

export async function GET() {
  try {
    const posts = await prisma.post.findMany();
    return NextResponse.json(posts);
  } catch (error) {
    console.log(error);
  }
}
