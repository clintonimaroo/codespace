"use client";

import React, { Fragment } from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { Button } from '@payloadcms/ui';
import { $createParagraphNode, $createTextNode, $getSelection, $isRangeSelection } from 'lexical';
import { $createYouTubeNode } from './YouTubeNode';
import { YouTubePlugin } from './YouTubePlugin';

export const YouTubeFeature = () => {
    const [editor] = useLexicalComposerContext();
    const [youtubeURL, setYoutubeURL] = React.useState('');
    const [showInput, setShowInput] = React.useState(false);

    const handleInsertYouTube = () => {
        if (!youtubeURL.trim()) return;

        editor.update(() => {
            const selection = $getSelection();
            if ($isRangeSelection(selection)) {
                // Clear the selection
                selection.insertText('');

                // Create the YouTube node
                const youtubeNode = $createYouTubeNode(youtubeURL);

                // Insert YouTube node and add a paragraph below
                selection.insertNodes([youtubeNode, $createParagraphNode().append($createTextNode(''))]);

                // Reset the input
                setYoutubeURL('');
                setShowInput(false);
            }
        });
    };

    return (
        <Fragment>
            <YouTubePlugin />
            <Button
                type="button"
                buttonStyle="icon-label"
                onClick={() => setShowInput(!showInput)}
                icon="video"
                tooltip="Insert YouTube Video"
            >
                YouTube
            </Button>
            {showInput && (
                <div style={{ position: 'absolute', zIndex: 10, background: 'white', padding: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)', borderRadius: '4px', marginTop: '4px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <input
                        type="text"
                        placeholder="Enter YouTube URL"
                        value={youtubeURL}
                        onChange={(e) => setYoutubeURL(e.target.value)}
                        style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
                    />
                    <div style={{ display: 'flex', gap: '8px' }}>
                        <Button
                            type="button"
                            buttonStyle="primary"
                            onClick={handleInsertYouTube}
                        >
                            Insert
                        </Button>
                        <Button
                            type="button"
                            buttonStyle="secondary"
                            onClick={() => {
                                setYoutubeURL('');
                                setShowInput(false);
                            }}
                        >
                            Cancel
                        </Button>
                    </div>
                </div>
            )}
        </Fragment>
    );
};

export default YouTubeFeature; 