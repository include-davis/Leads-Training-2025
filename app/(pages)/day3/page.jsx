
'use client';
import Link from 'next/link';
import { blogPosts } from './data/blogData';
import styles from './page.module.scss';

export default function Page() {
    
    return (
    <main>
      <h1 className={styles.title}>Blog Post</h1>
      <ul className={styles.blogs}>

        {blogPosts.map((blogPosts) => (
                <Link href={`/day3/${blogPosts.slug}`} key={blogPosts.slug} className={styles.blogPost}>
                    {blogPosts.title}
                </Link>
        ))}
      </ul>
    </main>
  );
}