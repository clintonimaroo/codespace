"use client";

// This script enhances the admin interface to display YouTube links as embeds
if (typeof window !== 'undefined') {
    // Function to convert YouTube URL to embedded iframe
    const createYouTubeEmbed = (url) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);

        if (match && match[2].length === 11) {
            const videoId = match[2];
            const iframe = document.createElement('iframe');
            iframe.width = '100%';
            iframe.height = '315';
            iframe.src = `https://www.youtube.com/embed/${videoId}`;
            iframe.frameBorder = '0';
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            iframe.allowFullscreen = true;
            iframe.style.marginTop = '1rem';
            iframe.style.marginBottom = '1rem';
            iframe.style.borderRadius = '0.5rem';

            return iframe;
        }
        return null;
    };

    // Function to replace YouTube links with embeds
    const enhanceYouTubeLinks = () => {
        // Wait for the content to be rendered
        setTimeout(() => {
            // Find all paragraphs that may contain YouTube links
            document.querySelectorAll('p, a').forEach(element => {
                const text = element.textContent || '';
                const href = element.getAttribute('href') || '';

                if (
                    (text.includes('youtu.be/') || text.includes('youtube.com/')) ||
                    (href.includes('youtu.be/') || href.includes('youtube.com/'))
                ) {
                    const url = href || text;
                    const embed = createYouTubeEmbed(url);

                    if (embed && element.parentNode) {
                        element.parentNode.insertBefore(embed, element.nextSibling);
                    }
                }
            });
        }, 1000); // Give the admin UI some time to render
    };

    // Run when the page loads
    window.addEventListener('load', enhanceYouTubeLinks);

    // Also run when navigation happens in the admin (SPA)
    const observer = new MutationObserver((mutations) => {
        mutations.forEach(() => {
            enhanceYouTubeLinks();
        });
    });

    // Start observing once the DOM is ready
    setTimeout(() => {
        const targetNode = document.body;
        const config = { childList: true, subtree: true };
        observer.observe(targetNode, config);
    }, 1000);
} 