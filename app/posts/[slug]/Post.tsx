"use client";

import React from "react";
import Markdown from "markdown-to-jsx";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark as CodeStyle } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = ({
    className,
    children,
}: {
    children: any;
    className: string;
}) => {
    let lang = "text"; // default monospaced text
    if (className && className.startsWith("lang-")) {
        lang = className.replace("lang-", "");
    }
    return (
        <SyntaxHighlighter
            wrapLines={true}
            // wrapLongLines={true}
            showLineNumbers={true}
            language={lang}
            style={CodeStyle}
        >
            {children}
        </SyntaxHighlighter>
    );
};

// markdown-to-jsx uses <pre><code/></pre> for code blocks.
const PreBlock = ({ children, ...rest }: { children: any }) => {
    if ("type" in children && children["type"] === "code") {
        return CodeBlock(children["props"]);
    }
    return <pre {...rest}>{children}</pre>;
};

export default function Post({ content }: { content: string }) {
    return (
        <article className="min-w-full prose">
            <Markdown
                options={{
                    overrides: {
                        pre: PreBlock,
                    },
                }}
            >
                {content}
            </Markdown>
        </article>
    );
}
