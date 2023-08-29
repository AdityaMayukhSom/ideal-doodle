import CodeBlock from "@/components/CodeBlock";

// markdown-to-jsx uses <pre><code/></pre> for code blocks.
export default function PreBlock({ children, ...rest }: { children: any }) {
    if ("type" in children && children["type"] === "code") {
        return CodeBlock(children["props"]);
    }
    return <pre {...rest}>{children}</pre>;
}
