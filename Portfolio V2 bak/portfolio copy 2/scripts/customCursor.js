// Custom Cursor Effect
(function () {
    'use strict';

    // Wait for DOM to be ready
    function initCursor() {
        try {
            console.log('Initializing custom cursor...');
            console.log('Setting cursor color to white for mix-blend-mode: difference');

            // Create cursor elements
            const cursorDot = document.createElement('div');
            cursorDot.className = 'cursor-dot';
            cursorDot.style.opacity = '1'; // Set initial opacity to 1
            document.body.appendChild(cursorDot);

            const cursorOutline = document.createElement('div');
            cursorOutline.className = 'cursor-outline';
            cursorOutline.style.opacity = '1'; // Set initial opacity to 1
            document.body.appendChild(cursorOutline);

            console.log('Cursor elements created');

            // Track mouse position
            let mouseX = 0;
            let mouseY = 0;
            let outlineX = 0;
            let outlineY = 0;

            // Update mouse position
            document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;

                // Update dot position immediately
                cursorDot.style.left = mouseX + 'px';
                cursorDot.style.top = mouseY + 'px';

                // Ensure cursor is visible when moving
                cursorDot.style.opacity = '1';
                cursorOutline.style.opacity = '1';
            });

            // Animate outline with smooth following effect
            function animateOutline() {
                // Smooth following with easing
                outlineX += (mouseX - outlineX) * 0.15;
                outlineY += (mouseY - outlineY) * 0.15;

                cursorOutline.style.left = outlineX + 'px';
                cursorOutline.style.top = outlineY + 'px';

                requestAnimationFrame(animateOutline);
            }
            animateOutline();

            // Add hover effects for interactive elements
            function addHoverEffects() {
                const interactiveElements = document.querySelectorAll('a, button, .filter-btn, input, textarea');

                interactiveElements.forEach(el => {
                    el.addEventListener('mouseenter', () => {
                        cursorDot.classList.add('cursor-hover');
                        cursorOutline.classList.add('cursor-hover');
                    });

                    el.addEventListener('mouseleave', () => {
                        cursorDot.classList.remove('cursor-hover');
                        cursorOutline.classList.remove('cursor-hover');
                    });
                });
            }

            // Initial hover effects
            addHoverEffects();

            // Re-add hover effects when new elements are added (for dynamically loaded content)
            const observer = new MutationObserver(() => {
                addHoverEffects();
            });
            observer.observe(document.body, { childList: true, subtree: true });

            // Hide default cursor
            document.body.style.cursor = 'none';

            console.log('Custom cursor initialized successfully');
        } catch (error) {
            console.error('Error initializing custom cursor:', error);
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCursor);
    } else {
        // DOM is already ready
        initCursor();
    }
})();
