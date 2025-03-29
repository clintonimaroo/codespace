"use client";

import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useEffect } from "react";
import { YouTubeNode } from "./YouTubeNode";

// Register our custom node with Lexical
export function YouTubePlugin(): null {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    if (!editor.hasNodes([YouTubeNode])) {
      editor.registerNodes([YouTubeNode]);
    }

    return () => {
      // Cleanup if needed
    };
  }, [editor]);

  return null;
} 