"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !author || !date || !description || !category) {
      alert("All fields must be provided");
    } else {
      setLoading(true);
      const response = await fetch("http://localhost:3000/api/posts", {
        method: "POST",
        body: JSON.stringify({ title, author, date, description, category }),
      });
      const data = await response.json();
      setTitle("");
      setAuthor("");
      setDate("");
      setCategory("");
      setDescription("");
      setLoading(false);
      router.push("/");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-[calc(100vh-130px)] flex flex-col justify-center items-center gap-2"
    >
      <input
        className="px-2 py-1 rounded-md ring-1"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter Title..."
      />
      <input
        className="px-2 py-1 rounded-md ring-1"
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Enter Author..."
      />
      <input
        className="px-2 py-1 rounded-md ring-1"
        type="text"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder="Enter Date..."
      />
      <input
        className="px-2 py-1 rounded-md ring-1"
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Enter Category..."
      />
      <input
        className="px-2 py-1 rounded-md ring-1"
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter Description..."
      />
      <button
        disabled={
          !title || !author || !date || !description || !category || loading
        }
        className="p-2 bg-green-500 rounded-md "
        type="submit"
      >
        {loading ? "Loading..." : "Add Record"}
      </button>
    </form>
  );
}
