import "@/styles/prism.css";
import { PostMetadata } from "@/types/PostMetadata";
import { getPostContent } from "@/lib/postContent";
import { getPostMetadata, getPostMetadataByName } from "@/lib/postMetadata";
import { Metadata } from "next";

import Post from "./Post";
import { formatDateString } from "@/lib/formatter";

export const generateStaticParams = () => {
  const posts = getPostMetadata();
  return posts;
};

export function generateMetadata({
  params,
}: {
  params: PostMetadata;
}): Metadata {
  const postMetadata = getPostMetadataByName(params.slug);
  return {
    title: postMetadata.title,
    description: postMetadata.subtitle,
  };
}

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  return (
    <div>
      <div className="pb-6 mt-12 mb-6 text-center border-b border-slate-300 text-slate-400">
        <h1 className="text-2xl text-slate-600 ">{post.data.title}</h1>
        <p className="mt-2 text-slate-500">{formatDateString(post.data.date)}</p>
      </div>

      <Post content={post.content} />
    </div>
  );
};

export default PostPage;
