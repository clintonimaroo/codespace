import { useEffect } from 'react';
import Prism from 'prismjs';

// Import Prism languages
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-ruby';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-rust';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-yaml';

// Import Prism theme
import 'prismjs/themes/prism-tomorrow.css';

interface SyntaxHighlighterProps {
    code: string;
    language: string;
    onCopy?: () => void;
}

export const SyntaxHighlighter: React.FC<SyntaxHighlighterProps> = ({ code, language, onCopy }) => {
    useEffect(() => {
        Prism.highlightAll();
    }, [code, language]);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        onCopy?.();
    };

    // Map common language aliases
    const languageMap: { [key: string]: string } = {
        'js': 'javascript',
        'ts': 'typescript',
        'py': 'python',
        'cpp': 'cpp',
        'rb': 'ruby',
        'sh': 'bash',
        'shell': 'bash',
        'yml': 'yaml',
    };

    const normalizedLanguage = languageMap[language.toLowerCase()] || language.toLowerCase();

    return (
        <div className="relative my-6 rounded-lg overflow-hidden">
            <div className="bg-gray-800 px-4 py-2 text-white text-sm flex justify-between items-center">
                <span className="font-mono">{language}</span>
                <button
                    onClick={handleCopy}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                    <span>Copy</span>
                </button>
            </div>
            <pre className="!m-0 !bg-gray-900">
                <code className={`language-${normalizedLanguage}`}>
                    {code}
                </code>
            </pre>
        </div>
    );
}; 