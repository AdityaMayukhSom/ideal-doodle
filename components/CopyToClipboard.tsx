"use client";

import React, { useState } from "react";
import Image from "next/image";
import ClipBoardSVG from "@/public/icons/clipboard.svg";
import TickedClipBoardSVG from "@/public/icons/tickedClipboard.svg";

export default function CopyToClipboard({
    textToCopy,
}: {
    textToCopy: string;
}) {
    const [showToolTip, setShowToolTip] = useState<boolean>(false);
    const [copyToClipboardText, setCopyToClipboardText] = useState<string>("");
    function handleCopyButtonClick() {
        navigator.clipboard.writeText(textToCopy);
        setShowToolTip(true);
        setTimeout(() => {
            setShowToolTip(false);
        }, 2000);
    }

    return (
        <span className="absolute top-2 right-2">
            <button
                className="flex items-center justify-center h-8 px-1 rounded-md "
                type="button"
                onClick={handleCopyButtonClick}
                onMouseEnter={() => setCopyToClipboardText("Copy To Clipboard")}
                onMouseLeave={() => setCopyToClipboardText("")}
            >
                <p className="p-2 pr-3 text-sm text-white">
                    {!showToolTip && copyToClipboardText}
                </p>
                <Image
                    src={showToolTip ? TickedClipBoardSVG : ClipBoardSVG}
                    className="invert"
                    height={20}
                    alt="Clipboard SVG"
                />
            </button>
        </span>
    );
}
