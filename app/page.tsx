import { getPostMetadata } from "@/lib/postMetadata";
import PostPreview from "@/components/PostPreview";

export const metadata = {
  title: "devstream.",
  generator: "Next.js",
  applicationName: "devstream.",
  referrer: "origin-when-cross-origin",
  keywords: ["Next.js", "React", "JavaScript"],
  authors: [
    {
      name: "Aditya Mayukh Som",
      url: "https://www.linkedin.com/in/adityamayukhsom",
    },
  ],
  // colorScheme: "dark",
  creator: "Aditya Mayukh Som",
  publisher: "Aditya Mayukh Som",
};

const HomePage = () => {
  const postMetadata = getPostMetadata();

  return (
    <section className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-2">
      {postMetadata.map((post) => (
        <PostPreview key={post.slug} {...post} />
      ))}
    </section>
  );
};

export default HomePage;
