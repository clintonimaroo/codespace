"use client";

import React from 'react';
import { Prism as SyntaxHighlighterPrism } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface Props {
    language: string;
    children: string;
}

export function SyntaxHighlighter({ language, children }: Props) {
    return (
        <SyntaxHighlighterPrism
            language={language}
            style={vscDarkPlus}
            customStyle={{
                margin: 0,
                padding: '1rem',
                borderRadius: '0.5rem',
                fontSize: '0.875rem',
                lineHeight: '1.25rem',
            }}
        >
            {children}
        </SyntaxHighlighterPrism>
    );
}

export default SyntaxHighlighter; 