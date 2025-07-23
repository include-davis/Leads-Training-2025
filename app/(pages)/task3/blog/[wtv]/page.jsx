import blogData from "../../../../../(data)/blogData.js";

export function generateStaticParams() {
  return blogData.map((post) => ({
    wtv: post.slug,
  }));
}

export default function BlogPost({ params }) {
  const post = blogData.find((p) => p.slug === params.wtv);

  if (!post) return <div>Post not found</div>;

  return (
    <main>
      <h1>{post.title}</h1>
	  
      <p>{post.content}</p>
    </main>
  );
}
