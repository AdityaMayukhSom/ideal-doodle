import fs from "fs";
import matter from "gray-matter";
import env from "@/env";

export const getPostContent = (slug: string) => {
  const file = `${env.POSTS_DIR}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};
