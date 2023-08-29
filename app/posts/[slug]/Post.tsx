"use client";

import React from "react";
import Markdown from "markdown-to-jsx";
import PreBlock from "@/components/PreBlock";

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
