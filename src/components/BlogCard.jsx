import { CalendarDays, FolderOpen, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function BlogCard({ blog }) {
  return (
    <div className="w-full border-2">
      <div className="relative w-full h-[200px]">
        <Image
          src={
            "https://school.net.pk/wp-content/uploads/2024/03/Dainty-Crafting-Materials-Facebook-App-2024-03-29T124129.731-768x427.png"
          }
          fill
        />
      </div>
      {/* DESC */}
      <div className="flex flex-col gap-2 p-4">
        <h3 className="text-xl font-semibold">{blog.title.slice(0, 50)}...</h3>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-sm">
            <UserRound size={16} />
            <p>By {blog.author}</p>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <CalendarDays size={16} />
            <p>{blog.date}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <FolderOpen size={16} />
          <p>{blog.category}</p>
        </div>
        <p className="text-sm">{blog.description}</p>
        <Link className="px-4 py-2 border border-black w-fit" href={"/"}>
          Read More
        </Link>
      </div>
    </div>
  );
}
