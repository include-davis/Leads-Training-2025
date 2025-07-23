import { blogPosts } from "@/app/(data)/blogData";
import Link from "next/link";
import styles from "./page.module.scss";

export async function generateStaticParams(){
    return blogPosts.map((post) => ({
            blog: post.slug,
    }));
}

export default function BlogPost({ params }) {
  const post = blogPosts.find((p) => p.slug === params.blog);

  if (!post) {
    return <div> Post Not Found. </div>
  }

  return (
    <div className={styles.page}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.content}>{post.content}</p>
         <Link href="/task_3">← Back to all posts</Link>
    </div>
  );
}