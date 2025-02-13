import connectDB from "@/lib/mongodb";
import Post from "@/models/Post";

export async function GET() {
  try {
    await connectDB();
    const posts = await Post.find({}).populate("author", "name email");
    return Response.json({ posts });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();
    const data = await request.json();
    const post = await Post.create(data);
    return Response.json({ post });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
