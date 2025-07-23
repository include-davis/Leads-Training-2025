import Link from "next/link";
import blogData from "../../../(data)/blogData";

export default function BlogList() {
  return (
    <div>
      <h1>Blog Posts</h1>
	  
      <ul>
        {blogData.map((post) => (
          <li key={post.slug}>
            <Link href={`/task3/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
