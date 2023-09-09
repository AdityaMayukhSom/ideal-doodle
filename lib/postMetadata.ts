import fs, { PathLike } from "fs";
import matter from "gray-matter";
import { PostMetadata } from "@/types/PostMetadata";
import env from "@/env";
import { formatDateString } from "./formatter";

export const getPostMetadata = (): PostMetadata[] => {
    const files = fs.readdirSync(env.POSTS_DIR as PathLike);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));

    // Get gray-matter data from each file.
    const posts = markdownPosts.map((fileName) => {
        const fileContents = fs.readFileSync(
            `${process.env.POSTS_DIR}${fileName}`,
            "utf8"
        );
        const matterResult = matter(fileContents);
        return {
            title: matterResult.data.title,
            date: formatDateString(matterResult.data.date),
            subtitle: matterResult.data.subtitle,
            slug: fileName.replace(".md", ""),
            tags: matterResult.data.tags,
            author: matterResult.data.author,
        };
    });

    return posts;
};

export const getPostMetadataByName = (postName: string): PostMetadata => {
    // Get gray-matter data from each file.
    const fileContents = fs.readFileSync(
        `${env.POSTS_DIR}${postName}.md`,
        "utf8"
    );
    const matterResult = matter(fileContents);
    return {
        title: matterResult.data.title,
        date: matterResult.data.date,
        subtitle: matterResult.data.subtitle,
        slug: postName,
        tags: matterResult.data.tags,
        author: matterResult.data.author,
    };
};
