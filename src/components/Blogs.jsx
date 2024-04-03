import BlogCard from "./BlogCard";

export default async function Blogs() {
  const response = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });
  const blogs = await response.json();
  console.log(blogs);
  return (
    <div className="mt-10">
      <h3 className="mb-4 text-2xl font-semibold">Blogs</h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard blog={blog} />
        ))}
      </div>
    </div>
  );
}
