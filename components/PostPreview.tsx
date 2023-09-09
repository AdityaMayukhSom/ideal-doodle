import Link from "next/link";
import { PostMetadata } from "../types/PostMetadata";

const PostPreview = (metadata: PostMetadata) => {
    return (
        <div className="p-4 bg-white border rounded-sm shadow-sm border-slate-300">
            <p className="text-xs font-medium text-slate-700">
                {metadata.author}&nbsp;&middot;&nbsp;{metadata.date}
            </p>

            <Link href={`/posts/${metadata.slug}`}>
                <h2 className="mt-2 mb-4 text-xl font-semibold hover:underline">
                    {metadata.title}
                </h2>
            </Link>
            <p className="text-slate-700">{metadata.subtitle.slice(0, 100)}</p>

            <div>
                {metadata.tags?.map((tag: string) => {
                    return (
                        <span className="py-0.5 px-2 text-xs rounded-sm bg-slate-200 text-slate-600">
                            {tag}
                        </span>
                    );
                })}
            </div>
        </div>
    );
};

export default PostPreview;
