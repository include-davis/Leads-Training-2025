import { blogPosts } from '../data/blogData';
import styles from './page.module.scss';

export default function BlogPostPage({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) return <p>404 - Post Not Found</p>;

  return (
    <div>
      <p><a href="/day3" className={styles.back}>← Back to all posts</a></p>
      <div className={styles.post}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.content}>{post.content}</p>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
