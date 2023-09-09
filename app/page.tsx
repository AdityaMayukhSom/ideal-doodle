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
        <section className="">
            <h4 className="w-full text-xl text-center">
                Articles that matters
            </h4>
            <h1 className="w-full py-5 text-5xl font-medium text-center">
                Writings from our team
            </h1>
            <h3 className="w-full pb-12 font-medium text-center ">
                Stay ahead in tech with our information rich blog posts.
            </h3>
            <section className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {postMetadata.map((post) => (
                    <PostPreview key={post.slug} {...post} />
                ))}
            </section>
        </section>
    );
};

export default HomePage;
