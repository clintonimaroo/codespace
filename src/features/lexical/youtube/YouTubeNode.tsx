"use client";

import { NodeKey, EditorConfig, LexicalNode, SerializedLexicalNode, Spread } from 'lexical';
import { DecoratorNode } from '@lexical/react/LexicalDecoratorNode.js';
import React from 'react';

export type SerializedYouTubeNode = Spread<
    {
        url: string;
        nodeKey: NodeKey;
    },
    SerializedLexicalNode
>;

export class YouTubeNode extends DecoratorNode<JSX.Element> {
    __url: string;

    static getType(): string {
        return 'youtube';
    }

    static clone(node: YouTubeNode): YouTubeNode {
        return new YouTubeNode(node.__url, node.__key);
    }

    constructor(url: string, key?: NodeKey) {
        super(key);
        this.__url = url;
    }

    createDOM(config: EditorConfig): HTMLElement {
        const div = document.createElement('div');
        div.style.display = 'flex';
        div.style.justifyContent = 'center';
        div.style.width = '100%';
        return div;
    }

    updateDOM(): false {
        return false;
    }

    getUrl(): string {
        return this.__url;
    }

    decorate(): JSX.Element {
        return <YouTubeComponent url={this.__url} />;
    }

    exportJSON(): SerializedYouTubeNode {
        return {
            url: this.__url,
            nodeKey: this.getKey(),
            type: 'youtube',
            version: 1,
        };
    }

    static importJSON(serializedNode: SerializedYouTubeNode): YouTubeNode {
        return $createYouTubeNode(serializedNode.url);
    }
}

const YouTubeComponent: React.FC<{ url: string }> = ({ url }) => {
    // Extract video ID from YouTube URL
    const getYouTubeVideoId = (url: string) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return match && match[2].length === 11 ? match[2] : null;
    };

    const videoId = getYouTubeVideoId(url);
    if (!videoId) return null;

    return (
        <div className="relative w-full aspect-video my-8 editor-youtube-embed" data-youtube-url={url}>
            <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    );
};

export function $createYouTubeNode(url: string): YouTubeNode {
    return new YouTubeNode(url);
}

export function $isYouTubeNode(node: LexicalNode | null | undefined): node is YouTubeNode {
    return node instanceof YouTubeNode;
} 