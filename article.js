const fadeButton = document.getElementById('fadeButton');
const assembleButton = document.getElementById('assembleButton');
const blurPic = document.getElementById('blur--pic'); 
const blurVid = document.querySelector('.blur--block--image--video');
const blurVid2 = document.querySelector('.blur--block--image--video2');

// Shared function to reset visual state
function resetVisuals() {
    blurVid.style.opacity = "0";
    blurVid2.style.opacity = "0";
    blurPic.querySelector('img').style.opacity = "1";
    blurPic.querySelector('img').style.animation = "";
}

// Flag to track if any animation is running
let isAnimating = false;

fadeButton.addEventListener('click', () => { 
    if (isAnimating) return;
    
    isAnimating = true;
    assembleButton.disabled = true;
    fadeButton.disabled = true;
    resetVisuals();

    setTimeout(() => {
        blurPic.querySelector('img').style.animation = "fadeOut 1s ease";
    }, 100);

    setTimeout(() => {
        blurPic.querySelector('img').style.opacity = "0";
    }, 1100); 

    setTimeout(() => {
        blurVid.style.opacity = "1";
    }, 1300);

    setTimeout(() => {
        blurVid.style.opacity = "0";
    }, 9300);

    setTimeout(() => {
        blurPic.querySelector('img').style.animation = "fadeIn 1s ease";
    }, 11500); 

    setTimeout(() => {
        blurPic.querySelector('img').style.opacity = "1";
    }, 12500); 

    setTimeout(() => { 
        assembleButton.disabled = false;
        fadeButton.disabled = false;
        isAnimating = false;
    }, 13500); 
});

assembleButton.addEventListener('click', () => {
    if (isAnimating) return;
    
    isAnimating = true;
    fadeButton.disabled = true;
    assembleButton.disabled = true;
    resetVisuals();

    setTimeout(() => {
        blurPic.querySelector('img').style.animation = "fadeOut 1s ease";
    }, 100);

    setTimeout(() => {
        blurPic.querySelector('img').style.opacity = "0";
    }, 1100); 

    setTimeout(() => {
        blurVid2.style.opacity = "1";
    }, 1300);

    setTimeout(() => {
        blurVid2.style.opacity = "0";
    }, 9300);

    setTimeout(() => {
        blurPic.querySelector('img').style.animation = "fadeIn 1s ease";
    }, 11500); 

    setTimeout(() => {
        blurPic.querySelector('img').style.opacity = "1";
    }, 12500); 

    setTimeout(() => { 
        fadeButton.disabled = false;
        assembleButton.disabled = false;
        isAnimating = false;
    }, 13500); 
});

const webTemp = document.getElementById('article1');
const jsEffect = document.getElementById('article2');
const termsPop = document.getElementById('footLink4');
const privyPop = document.getElementById('footLink5');
const cookPop = document.getElementById('footLink6');
const closeJS = document.getElementById('close-js');
const closeJS2 = document.getElementById('close-js2');
const closeJS3 = document.getElementById('close-js3');
const closeJS4 = document.getElementById('close-js4');
const closeJS5 = document.getElementById('close-js5');
const jsArt = document.getElementById('jsArticle');
const blurBack = document.querySelector('.blur--back');
const blurBack2 = document.querySelector('.blur--back2');
const webArt = document.getElementById('webArticle'); 
const privyArt = document.getElementById('article3');
const termsArt = document.getElementById('article4');
const cookArt = document.getElementById('article5');
const newsAnim = document.querySelector('.stocks');
const galaAnim = document.querySelector('.blur--galleria--cat--div');
const webAnims = [newsAnim, galaAnim];

// Function to open the popup
function openPopup5() {
    if (blurBack) {
        blurBack.style.display = "flex";
        blurBack.style.zIndex = "9998";
    }
    cookArt.style.display = "grid";
    closeJS5.style.display = "flex";
    
    // Reset transforms and opacity before animating in
    setTimeout(() => {
        blurBack.style.opacity = "1";
        closeJS5.style.opacity = "1";
    }, 50); // Short delay to ensure display changes are applied
    
    setTimeout(() => {
        cookArt.style.transform = "translateX(0px)";
    }, 100);
}

// Function to close the popup
function closePopup5() {
    cookArt.style.transform = "translateX(120%)";
    closeJS5.style.opacity = "0";
    
    setTimeout(() => {
        blurBack.style.opacity = "0";
    }, 500);
    
    setTimeout(() => {
        cookArt.style.display = "none";
        closeJS5.style.display = "none";
        // Don't set blurBack2 display to none if you want it reusable
    }, 1000);
    
    setTimeout(() => {
        if (blurBack) {
            blurBack.style.zIndex = "-1";
        }
        // Reset transform for next opening
        cookArt.style.transform = "translateX(120%)";
        cookArt.style.opacity = "1";
    }, 1500);
}

// Event listeners
cookPop.addEventListener('click', () => {
    audioFiles.click.currentTime = 0;
    audioFiles.click.play().catch(e => console.log("Sound error:", e));
    setTimeout(openPopup5, 500);
});

closeJS5.addEventListener('click', () => {
    audioFiles.click.currentTime = 0;
    audioFiles.click.play().catch(e => console.log("Sound error:", e));
    closePopup5();
});

// Function to open the popup
function openPopup4() {
    if (blurBack) {
        blurBack.style.display = "flex";
        blurBack.style.zIndex = "9998";
    }
    termsArt.style.display = "grid";
    closeJS4.style.display = "flex";
    
    // Reset transforms and opacity before animating in
    setTimeout(() => {
        blurBack.style.opacity = "1";
        closeJS4.style.opacity = "1";
    }, 50); // Short delay to ensure display changes are applied
    
    setTimeout(() => {
        termsArt.style.transform = "translateX(0px)";
    }, 100);
}

// Function to close the popup
function closePopup4() {
    termsArt.style.transform = "translateX(120%)";
    closeJS4.style.opacity = "0";
    
    setTimeout(() => {
        blurBack.style.opacity = "0";
    }, 500);
    
    setTimeout(() => {
        termsArt.style.display = "none";
        closeJS4.style.display = "none";
        // Don't set blurBack2 display to none if you want it reusable
    }, 1000);
    
    setTimeout(() => {
        if (blurBack) {
            blurBack.style.zIndex = "-1";
        }
        // Reset transform for next opening
        termsArt.style.transform = "translateX(120%)";
        termsArt.style.opacity = "1";
    }, 1500);
}

// Event listeners
termsPop.addEventListener('click', () => {
    audioFiles.click.currentTime = 0;
    audioFiles.click.play().catch(e => console.log("Sound error:", e));
    setTimeout(openPopup4, 500);
});

closeJS4.addEventListener('click', () => {
    audioFiles.click.currentTime = 0;
    audioFiles.click.play().catch(e => console.log("Sound error:", e));
    closePopup4();
});

// Function to open the popup
function openPopup3() {
    if (blurBack2) {
        blurBack2.style.display = "flex";
        blurBack2.style.zIndex = "9998";
    }
    privyArt.style.display = "grid";
    closeJS3.style.display = "flex";
    
    // Reset transforms and opacity before animating in
    setTimeout(() => {
        blurBack2.style.opacity = "1";
        closeJS3.style.opacity = "1";
    }, 50); // Short delay to ensure display changes are applied
    
    setTimeout(() => {
        privyArt.style.transform = "translateX(0px)";
    }, 100);
}

// Function to close the popup
function closePopup3() {
    privyArt.style.transform = "translateX(120%)";
    closeJS3.style.opacity = "0";
    
    setTimeout(() => {
        blurBack2.style.opacity = "0";
    }, 500);
    
    setTimeout(() => {
        privyArt.style.display = "none";
        closeJS3.style.display = "none";
        // Don't set blurBack2 display to none if you want it reusable
    }, 1000);
    
    setTimeout(() => {
        if (blurBack2) {
            blurBack2.style.zIndex = "-1";
        }
        // Reset transform for next opening
        privyArt.style.transform = "translateX(120%)";
        privyArt.style.opacity = "1";
    }, 1500);
}

// Event listeners
privyPop.addEventListener('click', () => {
    audioFiles.click.currentTime = 0;
    audioFiles.click.play().catch(e => console.log("Sound error:", e));
    setTimeout(openPopup3, 500);
});

closeJS3.addEventListener('click', () => {
    audioFiles.click.currentTime = 0;
    audioFiles.click.play().catch(e => console.log("Sound error:", e));
    closePopup3();
});

jsEffect.addEventListener('click', () => {  
    setTimeout(() => {
        if (blurBack) {
            blurBack.style.zIndex = "9998";
        }
        jsArt.style.display = "grid";
        closeJS2.style.display = "flex";
    }, 500); 

    setTimeout(() => {
        blurBack.style.opacity = "1";
        closeJS.style.opacity = "1";
    }, 1500);

    setTimeout(() => {
        jsArt.style.transform = "translate(0px)";
    }, 2250); 
});

// Function to open the popup
function openPopup2() {
    if (blurBack) {
        blurBack.style.display = "flex";
        blurBack.style.zIndex = "9998";
    }
    jsArt.style.display = "grid";
    closeJS.style.display = "flex";
    
    // Reset transforms and opacity before animating in
    setTimeout(() => {
        blurBack.style.opacity = "1";
        closeJS.style.opacity = "1";
    }, 50); // Short delay to ensure display changes are applied
    
    setTimeout(() => {
        jsArt.style.transform = "translateX(0px)";
    }, 100);
}

// Function to close the popup
function closePopup2() {
    jsArt.style.transform = "translateX(120%)";
    closeJS.style.opacity = "0";
    
    setTimeout(() => {
        blurBack.style.opacity = "0";
    }, 500);
    
    setTimeout(() => {
        jsArt.style.display = "none";
        closeJS.style.display = "none";
        // Don't set blurBack2 display to none if you want it reusable
    }, 1000);
    
    setTimeout(() => {
        if (blurBack) {
            blurBack.style.zIndex = "-1";
        }
        // Reset transform for next opening
        jsArt.style.transform = "translateX(120%)";
        jsArt.style.opacity = "1";
    }, 1500);
}

// Event listeners
jsEffect.addEventListener('click', () => {
    audioFiles.click.currentTime = 0;
    audioFiles.click.play().catch(e => console.log("Sound error:", e));
    setTimeout(openPopup2, 500);
});

closeJS.addEventListener('click', () => {
    audioFiles.click.currentTime = 0;
    audioFiles.click.play().catch(e => console.log("Sound error:", e));
    closePopup2();
});
 
// Function to open the popup
function openPopup() {
    if (blurBack2) {
        blurBack2.style.display = "flex";
        blurBack2.style.zIndex = "9998";
    }
    webArt.style.display = "grid";
    closeJS2.style.display = "flex";
    
    // Reset transforms and opacity before animating in
    setTimeout(() => {
        blurBack2.style.opacity = "1";
        closeJS2.style.opacity = "1";
        webAnims.forEach(anim => {
            anim.style.animationPlayState = "running";
        });
    }, 50); // Short delay to ensure display changes are applied
    
    setTimeout(() => {
        webArt.style.transform = "translateX(0px)";
    }, 100);
}

// Function to close the popup
function closePopup() {
    webArt.style.transform = "translateX(120%)";
    closeJS2.style.opacity = "0";
    
    setTimeout(() => {
        blurBack2.style.opacity = "0";
    }, 500);
    
    setTimeout(() => {
        webArt.style.display = "none";
        closeJS2.style.display = "none";
        webAnims.forEach(anim => {
            anim.style.animationPlayState = "paused";
        });
        // Don't set blurBack2 display to none if you want it reusable
    }, 1000);
    
    setTimeout(() => {
        if (blurBack2) {
            blurBack2.style.zIndex = "-1";
        }

        // Reset transform for next opening
        webArt.style.transform = "translateX(120%)";
        webArt.style.opacity = "1";
    }, 1500);
}

// Event listeners
webTemp.addEventListener('click', () => {
    audioFiles.click.currentTime = 0;
    audioFiles.click.play().catch(e => console.log("Sound error:", e));
    setTimeout(openPopup, 500);
});

closeJS2.addEventListener('click', () => {
    audioFiles.click.currentTime = 0;
    audioFiles.click.play().catch(e => console.log("Sound error:", e));
    closePopup();
});

document.addEventListener('DOMContentLoaded', function() {
    // Get all elements
    const headings = document.querySelectorAll('.blur--web--article2 h3');
    const visualPanels = [
        document.querySelector('.blur---web--gallery--neu1'),
        document.querySelector('.blur--focal--grid'),
        document.querySelector('.blur--instant--grid'),
        document.querySelector('.blur---web--gallery--neu4'),
        document.querySelector('.blur--news--grid'),
        document.querySelector('.blur--maga--grid'),
        document.querySelector('.blur--galleria'),
        document.querySelector('.blur--splotch')
    ].filter(panel => panel !== null);

    // Exit if no elements found
    if (headings.length === 0 || visualPanels.length === 0) return;

    // Set initial z-index and panel index
    visualPanels.forEach((panel, index) => {
        panel.style.setProperty('--panel-index', index);
        panel.style.zIndex = visualPanels.length - index;
    });

    let currentActiveIndex = 0;
    let isScrolling = false;

    const updatePanels = (newIndex) => {
        if (isScrolling || newIndex === currentActiveIndex) return;
        
        isScrolling = true;
        currentActiveIndex = newIndex;

        visualPanels.forEach((panel, index) => {
            const translateValue = (index - currentActiveIndex) * 100;
            panel.style.transform = `translateY(${translateValue}%)`;
        });

        // Reset scroll lock after transition completes
        setTimeout(() => {
            isScrolling = false;
        }, 600); // Matches CSS transition duration
    };

    // Configure intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !isScrolling) {
                const headingIndex = Array.from(headings).indexOf(entry.target);
                const scrollDirection = entry.boundingClientRect.top < 0 ? 'down' : 'up';
                
                // Threshold-based activation
                const intersectionRatio = entry.intersectionRatio;
                
                if (scrollDirection === 'down' && intersectionRatio <= 0.4) {
                    updatePanels(headingIndex);
                } 
                else if (scrollDirection === 'up' && intersectionRatio >= 0.6) {
                    updatePanels(headingIndex);
                }
            }
        });
    }, {
        threshold: [0.2, 0.4, 0.6, 0.8],
        rootMargin: '0px 0px -100px 0px'
    });

    // Observe all headings
    headings.forEach(heading => observer.observe(heading));

    // Initialize positions
    updatePanels(0);

    // Handle manual scroll events as fallback
    let lastScrollTime = 0;
    window.addEventListener('scroll', () => {
        const now = Date.now();
        if (now - lastScrollTime < 100) return;
        lastScrollTime = now;
        
        if (!isScrolling) {
            const scrollPosition = window.scrollY + (window.innerHeight * 0.4);
            headings.forEach((heading, index) => {
                const rect = heading.getBoundingClientRect();
                if (rect.top + window.scrollY <= scrollPosition && 
                    rect.bottom + window.scrollY > scrollPosition) {
                    updatePanels(index);
                }
            });
        }
    }, { passive: true });
});


webTemp.addEventListener('mouseenter', () => { 
    fonts.forEach(font => {
        setTimeout(() => {
            font.style.animationPlayState = "paused";
        }, 200);
    });
});

webTemp.addEventListener('mouseleave', () => { 
    fonts.forEach(font => {
        setTimeout(() => {
            font.style.animationPlayState = "running";
        }, 100);
    });
});

jsEffect.addEventListener('mouseenter', () => { 
    effects.forEach(effects => {
        setTimeout(() => {
            effects.style.animationPlayState = "paused";
        }, 200);
    });
});

jsEffect.addEventListener('mouseleave', () => { 
    effects.forEach(effects => {
        setTimeout(() => {
            effects.style.animationPlayState = "running";
        }, 100);
    });
});

const facebook = document.getElementById('footLink2');
const instagram = document.getElementById('footLink1');
const linkedIn = document.getElementById('footLink3');

const socials = [
    { element: instagram, url: 'https://www.instagram.com/__ndala__?igsh=MWpucTl4NzZ2anl0dA%3D%3D' },
    { element: facebook, url: 'https://www.facebook.com/profile.php?id=61552218997051' },
    { element: linkedIn, url: 'https://www.linkedin.com/in/tj-motaung-359204357' }
];

socials.forEach(({ element, url }) => {
    if (element) {
        element.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior
            
            // Play sound if available
            if (audioFiles && audioFiles.click) {
                audioFiles.click.currentTime = 0;
                audioFiles.click.play().catch(e => console.log("Sound error:", e));
            }
            
            // Redirect after a small delay to allow sound to play
            setTimeout(() => {
                window.open(url, '_blank'); // Opens in new tab
                // Alternatively: window.location.href = url; (for same tab)
            }, 200);
        });
    }
});