
import Link from "next/link";
import { blogPosts } from "@/app/(data)/blogData";
import styles from "./page.module.scss";

export default function Task_3() {
  return (
    <div className={styles.container}>
      <h1>Blog Posts</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}