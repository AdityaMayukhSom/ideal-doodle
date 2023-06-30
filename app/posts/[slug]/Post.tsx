"use client";

import React, { useEffect } from "react";
import Markdown from "markdown-to-jsx";

const useScript = (url: string) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = url;
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
};
export default function Post({ content }: { content: string }) {
  useScript("/js/prism.js");
  return (
    <article className="min-w-full prose line-numbers">
      <Markdown>{content}</Markdown>
    </article>
  );
}
