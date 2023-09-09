import { PostMetadata } from "@/types/PostMetadata";
import { getPostDetails } from "@/lib/postDetails";
import { formatDateString } from "@/lib/formatter";
import { getPostMetadata, getPostMetadataByName } from "@/lib/postMetadata";
import { Metadata } from "next";

import Post from "./Post";

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

const PostPage = ({
    params,
}: {
    params: { slug: string };
    searchParams?: { [key: string]: string | string[] | undefined };
}) => {
    const slug = params.slug;
    const post = getPostDetails(slug);

    return (
        <main className="grid grid-cols-12 gap-x-12">
            <article className="col-span-9">
                <section className="pb-6 mb-6 border-b border-slate-300 text-slate-400">
                    <div className="flex flex-row gap-x-2">
                        {post.data.tags?.map((tag: string) => {
                            return (
                                <span className="py-0.5 px-2 text-xs rounded-sm bg-slate-200 text-slate-600">
                                    {tag}
                                </span>
                            );
                        })}
                    </div>
                    <h1 className="mt-2 text-5xl font-semibold leading-tight text-slate-800">
                        {post.data.title}
                    </h1>
                    <p className="mt-2 font-medium text-blue-600 text- ">
                        {formatDateString(post.data.date)}
                        &nbsp;&middot;&nbsp;
                        {post.data.author}
                    </p>
                </section>
                <Post content={post.content} />
            </article>
            <aside className="col-span-3">
                <h2>Contents</h2>
                <ul>
                    <h1>hello</h1>
                    <li>content1</li>
                    <li>content2</li>
                </ul>
            </aside>
        </main>
    );
};

export default PostPage;
