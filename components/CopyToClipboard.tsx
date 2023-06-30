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
      >
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
