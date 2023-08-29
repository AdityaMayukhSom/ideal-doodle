import { LightAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark as CodeStyle } from "react-syntax-highlighter/dist/esm/styles/hljs";
import CopyToClipboard from "@/components/CopyToClipboard";

export default function CodeBlock({
    className,
    children,
}: {
    children: string;
    className: string;
}) {
    let lang = "text"; // default monospaced text
    if (className && className.startsWith("lang-")) {
        lang = className.replace("lang-", "");
    }

    // console.log(typeof children);
    return (
        <article className="relative">
            <CopyToClipboard textToCopy={children} />
            <SyntaxHighlighter
                wrapLines={true}
                showLineNumbers={true}
                language={lang}
                style={CodeStyle}
            >
                {children}
            </SyntaxHighlighter>
        </article>
    );
}
