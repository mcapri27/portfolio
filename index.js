const audioFiles = {
    click: new Audio('click.wav'),
    lightbulb: new Audio('lightbulb.mp3'),
    error: new Audio('error.mp3'),
    realAlert: new Audio('realAlert.mp3'),
    swoosh: new Audio('swoosh.mp3')
};
   
   // Get all gen elements
const genElements = [
    document.getElementById('tag1'),
    document.getElementById('tag2'),
    document.getElementById('tag3'),
    document.getElementById('tag4'),
    document.getElementById('tag5'),
    document.getElementById('tag6'),
    document.getElementById('tag7'),
    document.getElementById('tag8')
];

// Get all box elements
const boxElements = [];
for (let i = 1; i <= 32; i++) {
    boxElements.push(document.getElementById(`box${i}`));
}

// Function to reset all effects
function resetEffects() {
    // Remove 'active' class from all gen elements
    genElements.forEach(gen => gen.classList.remove('active'));

    // Reset styles for all box elements
    boxElements.forEach(box => {
        box.style.transform = "scale(1)";
        box.style.filter = "grayscale(1)";
    });
}

const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');
const box4 = document.getElementById('box4');
const box5 = document.getElementById('box5');
const box6 = document.getElementById('box6');
const box7 = document.getElementById('box7');
const box8 = document.getElementById('box8');
const box9 = document.getElementById('box9');
const box10 = document.getElementById('box10');
const box11 = document.getElementById('box11');
const box12 = document.getElementById('box12');
const box13 = document.getElementById('box13');
const box14 = document.getElementById('box14');
const box15 = document.getElementById('box15');
const box16 = document.getElementById('box16');
const box17 = document.getElementById('box17');
const box18 = document.getElementById('box18');
const box19 = document.getElementById('box19');
const box20 = document.getElementById('box20');
const box21 = document.getElementById('box21');
const box22 = document.getElementById('box22');
const box23 = document.getElementById('box23');
const box24 = document.getElementById('box24');
const box25 = document.getElementById('box25');
const box26 = document.getElementById('box26');
const box27 = document.getElementById('box27');
const box28 = document.getElementById('box28');
const box29 = document.getElementById('box29');
const box30 = document.getElementById('box30');
const box31 = document.getElementById('box31');
const box32 = document.getElementById('box32');
const boxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9,
                box10, box11, box12, box13, box14, box15, box16, box17,
                box18, box19, box20, box21, box22, box23, box24, box25,
                box26, box27, box28, box29, box30, box31, box32]

// Function to apply effects for makeUp
function makeUp() {
    resetEffects(); // Reset all effects first
    genElements[0].classList.add('active');  
    box4.style.transform = "scale(1.2)";
    box4.style.filter = "grayscale(0)"; 
    box12.style.transform = "scale(1.2)";
    box12.style.filter = "grayscale(0)"; 
    box20.style.transform = "scale(1.2)";
    box20.style.filter = "grayscale(0)"; 
    box28.style.transform = "scale(1.2)";
    box28.style.filter = "grayscale(0)";
}

// Function to apply effects for intDesign
function intDesign() {
    resetEffects(); // Reset all effects first
    genElements[1].classList.add('active');
    box3.style.transform = "scale(1.2)";
    box3.style.filter = "grayscale(0)";
    box11.style.transform = "scale(1.2)";
    box11.style.filter = "grayscale(0)";
    box19.style.transform = "scale(1.2)";
    box19.style.filter = "grayscale(0)";
    box27.style.transform = "scale(1.2)";
    box27.style.filter = "grayscale(0)";
}

// Function to apply effects for absArt
function absArt() {
    resetEffects(); // Reset all effects first
    genElements[5].classList.add('active');
    box1.style.transform = "scale(1.2)";
    box1.style.filter = "grayscale(0)";
    box9.style.transform = "scale(1.2)";
    box9.style.filter = "grayscale(0)";
    box17.style.transform = "scale(1.2)";
    box17.style.filter = "grayscale(0)";
    box25.style.transform = "scale(1.2)";
    box25.style.filter = "grayscale(0)";
}

// Function to apply effects for botan
function botan() {
    resetEffects(); // Reset all effects first
    genElements[4].classList.add('active');
    box2.style.transform = "scale(1.2)";
    box2.style.filter = "grayscale(0)";
    box10.style.transform = "scale(1.2)";
    box10.style.filter = "grayscale(0)";
    box18.style.transform = "scale(1.2)";
    box18.style.filter = "grayscale(0)";
    box26.style.transform = "scale(1.2)";
    box26.style.filter = "grayscale(0)";
}

// Function to apply effects for pet
function pet() {
    resetEffects(); // Reset all effects first
    genElements[7].classList.add('active');
    box5.style.transform = "scale(1.2)";
    box5.style.filter = "grayscale(0)";
    box13.style.transform = "scale(1.2)";
    box13.style.filter = "grayscale(0)";
    box21.style.transform = "scale(1.2)";
    box21.style.filter = "grayscale(0)";
    box29.style.transform = "scale(1.2)";
    box29.style.filter = "grayscale(0)";
}

// Function to apply effects for tatt
function tatt() {
    resetEffects(); // Reset all effects first
    genElements[6].classList.add('active');
    box6.style.transform = "scale(1.2)";
    box6.style.filter = "grayscale(0)";
    box14.style.transform = "scale(1.2)";
    box14.style.filter = "grayscale(0)";
    box22.style.transform = "scale(1.2)";
    box22.style.filter = "grayscale(0)";
    box30.style.transform = "scale(1.2)";
    box30.style.filter = "grayscale(0)";
}

// Function to apply effects for nail
function nail() {
    resetEffects(); // Reset all effects first
    genElements[3].classList.add('active');
    box7.style.transform = "scale(1.2)";
    box7.style.filter = "grayscale(0)";
    box15.style.transform = "scale(1.2)";
    box15.style.filter = "grayscale(0)";
    box23.style.transform = "scale(1.2)";
    box23.style.filter = "grayscale(0)";
    box31.style.transform = "scale(1.2)";
    box31.style.filter = "grayscale(0)";
}

// Function to apply effects for wed
function wed() {
    resetEffects(); // Reset all effects first
    genElements[2].classList.add('active');
    box8.style.transform = "scale(1.2)";
    box8.style.filter = "grayscale(0)";
    box16.style.transform = "scale(1.2)";
    box16.style.filter = "grayscale(0)";
    box24.style.transform = "scale(1.2)";
    box24.style.filter = "grayscale(0)";
    box32.style.transform = "scale(1.2)";
    box32.style.filter = "grayscale(0)";
}

document.querySelectorAll('[id="whatsappForm"]').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = this.querySelector('[id="name"]').value;
        const message = this.querySelector('[id="message"]').value;
        const whatsappLink = `https://wa.me/+27783632740?text=${encodeURIComponent(`Hello, my name is ${name}. ${message}`)}`;
        window.open(whatsappLink, '_blank').focus();
    });
}); 

// Articles Javascript 
const font1 = document.querySelector('.blog--item1');
const font2 = document.querySelector('.blog--item2');
const font3 = document.querySelector('.blog--item3');
const font4 = document.querySelector('.blog--item4');
const font5 = document.querySelector('.blog--item5');
const font6 = document.querySelector('.blog--item6');
const font7 = document.querySelector('.blog--item7');
const font8 = document.querySelector('.blog--item8');
const effect1 = document.getElementById('effect1');
const effect2 = document.getElementById('effect2');
const effect3 = document.getElementById('effect3');
const effect4 = document.getElementById('effect4');
const effect5 = document.getElementById('effect5');
const effect6 = document.getElementById('effect6');
const effect7 = document.getElementById('effect7');
const effect8 = document.getElementById('effect8');
const imageBack = document.querySelector('.blog--img--back');
const imageBack2 = document.getElementById('article--back2');

const fonts = [font1, font2, font3, font4, font5, font6, font7, font8];
const effects = [effect1, effect2, effect3, effect4, effect5, effect6, effect7, effect8];
//

// Tool-tip Start 
function setupTooltip(triggerId, popupClass) {
    const trigger = document.getElementById(triggerId);
    const popup = document.querySelector(popupClass);
    
    if (!trigger || !popup) return;
    
    // Position the tooltip relative to the cursor with boundary checking
    const positionTooltip = (e) => {
        // Offset from cursor (in pixels)
        const offsetX = 15;
        const offsetY = 15;
        
        // Get viewport dimensions
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        // Get tooltip dimensions
        const tooltipWidth = popup.offsetWidth;
        const tooltipHeight = popup.offsetHeight;
        
        // Calculate position with boundary checking
        let left = e.clientX + offsetX;
        let top = e.clientY + offsetY;
        
        // Adjust if tooltip would go off right edge
        if (left + tooltipWidth > viewportWidth) {
            left = e.clientX - tooltipWidth - offsetX;
        }
        
        // Adjust if tooltip would go off bottom edge
        if (top + tooltipHeight > viewportHeight) {
            top = e.clientY - tooltipHeight - offsetY;
        }
        
        popup.style.left = `${left}px`;
        popup.style.top = `${top}px`;
    };
    
    trigger.addEventListener('mouseenter', () => {
        setTimeout(() => {
            popup.style.display = 'flex';
            popup.style.opacity = '1';
        }, 300);
    });
    
    trigger.addEventListener('mouseleave', () => {
        setTimeout(() => {
            popup.style.opacity = '0';
            popup.style.display = 'none';
        }, 1100);
    });
    
    // Track mouse movement within the trigger
    trigger.addEventListener('mousemove', positionTooltip);
}

// Initialize all tooltips:
setupTooltip('pad1', '.callPop');
setupTooltip('pad2', '.sslPop');
setupTooltip('pad3', '.webPop');
setupTooltip('pad4', '.layPop');
setupTooltip('pad5', '.colPop');
setupTooltip('pad6', '.animPop');
setupTooltip('pad7', '.seoPop');
setupTooltip('pad8', '.typoPop');
setupTooltip('pad9', '.aiPop');
setupTooltip('pad10', '.homePop');
setupTooltip('pad11', '.aboutPop');
setupTooltip('pad12', '.legalPop'); 
// Tool-tip End

//

// Wait for user interaction (required in some browsers)
document.addEventListener('click', () => {
    const hapticButtons = document.querySelectorAll('.haptic1, .haptic2'); 
  
    hapticButtons.forEach(button => {
      button.addEventListener('click', () => {
        audioFiles.click.currentTime = 0;
        audioFiles.click.play().catch(e => console.log("Sound error:", e));
      });
    });
  }, { once: true }
); // Only initialize once

document.addEventListener('DOMContentLoaded', () => {
    const buzz = document.querySelector('.bulb--button'); 
    const error = document.querySelector('.error--button'); 

    if (buzz) { // Check if button exists
        buzz.addEventListener('click', () => {
            // Play sound
            audioFiles.lightbulb.currentTime = 0;
            audioFiles.lightbulb.play().catch(e => console.log("Sound error:", e));
            
            // Add active class
            buzz.classList.add('active');
            
            // Remove active class after 0.75s
            setTimeout(() => {
                buzz.classList.remove('active');
            }, 1150);
        });
    }

    if (error) { // Check if button exists
        error.addEventListener('click', () => {
            // Play sound
            audioFiles.error.currentTime = 0;
            audioFiles.error.play().catch(e => console.log("Sound error:", e));
            
            // Add active class
            error.classList.add('active');
            
            // Remove active class after 0.75s
            setTimeout(() => {
                error.classList.remove('active');
            }, 1150);
        });
    }
});  

// First, define the functions you want to return
function BentoEffects() {
    const bioBentoJS = () => {
        const article = document.querySelector('.bio--section');
        const block1 = document.querySelector('.bio--bento--id');
        const block2 = document.querySelector('.bio--bento--profile'); 
        const block3 = document.querySelector('.bio--bento--time');
        const block4 = document.querySelector('.bio--bento--exp'); 
        const windowHeight = window.innerHeight;
    
        const sectionTop = article.getBoundingClientRect().top; // Distance from the top of the viewport
        const sectionBottom = article.getBoundingClientRect().bottom; // Distance from the bottom of the viewport
    
        // Check if the section is in the viewport
        if (sectionTop < windowHeight * 0.75 && sectionBottom > windowHeight * 0.25) {
            block1.style.transform = 'translateY(0)';
            block1.style.opacity = '1';
            block2.style.transform = 'translateX(0)';
            block2.style.opacity = '1'; 
            block3.style.transform = 'translateY(0)';
            block3.style.opacity = '1'; 
            block4.style.transform = 'translateX(0)';
            block4.style.opacity = '1'; 
            
        } else {
            block1.style.transform = 'translateY(-50vw)';
            block1.style.opacity = '0';
            block2.style.transform = 'translateX(-50vw)';
            block2.style.opacity = '0'; 
            block3.style.transform = 'translateY(50vw)';
            block3.style.opacity = '0'; 
            block4.style.transform = 'translateX(50vw)';
            block4.style.opacity = '0'; 
        }
    };

    const detailsEffects = () => {
        const sectionTwo = document.querySelector('.webContent');
        const touch = document.querySelector('.webDetailsArt div');
        const pads = document.querySelectorAll('.pad');
        const windowHeight = window.innerHeight;
    
        const sectionTop = sectionTwo.getBoundingClientRect().top;
        const sectionBottom = sectionTwo.getBoundingClientRect().bottom;
    
        if (sectionTop < windowHeight * 0.75 && sectionBottom > windowHeight * 0.25) {
            // Animate pads in sequentially
            pads.forEach((pad, index) => {
                // Calculate delay based on index (0.1s increment per element)
                const delay = index * 100; // 100ms between each animation
                
                setTimeout(() => {
                    pad.style.transform = 'translateX(0)';
                    pad.style.opacity = '1';
                }, delay);
            });
    
            // Animate touch element after all pads
            touch.style.transform = 'translateX(0)';
            touch.style.opacity = '1';
    
        } else {
            // Animate out simultaneously (original behavior)
            pads.forEach((pad, index) => {
                // Calculate delay based on index (0.1s increment per element)
                const delay = index * 100; // 100ms between each animation
                
                setTimeout(() => {
                    pad.style.transform = 'translateX(50vw)';
                    pad.style.opacity = '0';
                }, delay);
            });
            touch.style.transform = 'translateX(-50vw)';
            touch.style.opacity = '0';
        }
    }

    const sliderEffects = () => {
        const sectionTwo = document.querySelector('.websites');
        const slide1 = document.querySelectorAll('.wrapper');
        const slide2 = document.querySelectorAll('.wrapper2');
        const webby = document.querySelector('.webby');
        const windowHeight = window.innerHeight;

        const sectionTop = sectionTwo.getBoundingClientRect().top; // Distance from the top of the viewport
        const sectionBottom = sectionTwo.getBoundingClientRect().bottom; // Distance from the bottom of the viewport

        if (sectionTop < windowHeight * 0.75 && sectionBottom > windowHeight * 0.25) {
            boxes.forEach(box => {
                box.style.animationPlayState = "running";
            });
            
            slide1.forEach(slide => {
                slide.style.transform = 'translateX(0)'; 
            });
            slide2.forEach(slide => {
                slide.style.transform = 'translateX(0)'; 
            });
            webby.style.opacity = '1'; 
        
        } else {
            boxes.forEach(box => {
                box.style.animationPlayState = "paused";
            });

            slide1.forEach(slide => {
                slide.style.transform = 'translateX(-50vw)'; 
            });
            slide2.forEach(slide => {
                slide.style.transform = 'translateX(50vw)'; 
            });
            webby.style.opacity = '0'; 
        }
    };

    const langSliders = () => {
        const bio = document.querySelector('.bio--bento');
        const progNumbers = document.querySelectorAll('.bio--lang--prog--cent span');
        const progBars = document.querySelectorAll('.bio--lang--prog--bar');  
        const windowHeight = window.innerHeight;

        const sectionTop = bio.getBoundingClientRect().top; // Distance from the top of the viewport
        const sectionBottom = bio.getBoundingClientRect().bottom; // Distance from the bottom of the viewport
 
        if (sectionTop < windowHeight * 0.75 && sectionBottom > windowHeight * 0.25) {
            progBars.forEach(progs => {
                progs.style.transform = "scaleX(100%)";
            });
            setTimeout(() => {
                progNumbers.forEach(prog => {
                    prog.style.opacity = "1";
                });
            }, 2000);
        } else { 
            progBars.forEach(progs => {
                progs.style.transform = "scaleX(0%)";
            });
            progNumbers.forEach(prog => {
                prog.style.opacity = "0";
            });
        }
    };

    const articleJS = () => {
        const article = document.querySelector('.blog--section');
        const blog1 = document.getElementById('blog1');
        const blog2 = document.getElementById('blog2'); 
        const windowHeight = window.innerHeight;

        const sectionTop = article.getBoundingClientRect().top; // Distance from the top of the viewport
        const sectionBottom = article.getBoundingClientRect().bottom; // Distance from the bottom of the viewport
 
        if (sectionTop < windowHeight * 0.75 && sectionBottom > windowHeight * 0.25) {
            blog1.style.transform = 'translateX(0)';
            blog1.style.opacity = '1';
            blog2.style.transform = 'translateX(0)';
            blog2.style.opacity = '1'; 
        
        } else {
            blog1.style.transform = 'translateX(-50vw)';
            blog1.style.opacity = '0';
            blog2.style.transform = 'translateX(50vw)';
            blog2.style.opacity = '0'; 
        }
    };
    
    const bioHeroJS = () => {
        const article = document.querySelector('.bento--section');
        const block1 = document.querySelector('.ben--box--web');
        const block2 = document.querySelector('.ben--box--sell'); 
        const block3 = document.querySelector('.ben--box--id');
        const block4 = document.querySelector('.ben--box--ad'); 
        const windowHeight = window.innerHeight;
    
        const sectionTop = article.getBoundingClientRect().top;
        const sectionBottom = article.getBoundingClientRect().bottom;
    
        if (window.innerWidth <= 670) {
            // Mobile-specific animations
            if (sectionTop < windowHeight * 0.75 && sectionBottom > windowHeight * 0.25) {
                block1.style.transform = 'translateX(0)';
                block1.style.opacity = '1';
                block2.style.transform = 'translateX(0)';
                block2.style.opacity = '1'; 
                block3.style.transform = 'translateY(0)';
                block3.style.opacity = '1'; 
                block4.style.transform = 'translateY(0)';
                block4.style.opacity = '1'; 
            } else {
                // Smaller translate values for mobile
                block1.style.transform = 'translateX(-50vw)';
                block1.style.opacity = '0';
                block2.style.transform = 'translateX(50vw)';
                block2.style.opacity = '0'; 
                block3.style.transform = 'translateY(-50vw)';
                block3.style.opacity = '0'; 
                block4.style.transform = 'translateY(50vw)';
                block4.style.opacity = '0'; 
            }
        } else {
            // Original desktop animations
            if (sectionTop < windowHeight * 0.75 && sectionBottom > windowHeight * 0.25) {
                block1.style.transform = 'translateX(0)';
                block1.style.opacity = '1';
                block2.style.transform = 'translateY(0)';
                block2.style.opacity = '1'; 
                block3.style.transform = 'translateX(0)';
                block3.style.opacity = '1'; 
                block4.style.transform = 'translateY(0)';
                block4.style.opacity = '1'; 
            } else {
                block1.style.transform = 'translateX(-50vw)';
                block1.style.opacity = '0';
                block2.style.transform = 'translateY(-50vw)';
                block2.style.opacity = '0'; 
                block3.style.transform = 'translateX(50vw)';
                block3.style.opacity = '0'; 
                block4.style.transform = 'translateY(50vw)';
                block4.style.opacity = '0'; 
            }
        }
    };

    const sectionScroll = () => {
        const sections = document.querySelectorAll('section'); // Select all sections
        const windowHeight = window.innerHeight;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top; // Distance from the top of the viewport
            const sectionBottom = section.getBoundingClientRect().bottom; // Distance from the bottom of the viewport
 
            if (sectionTop < windowHeight * 0.75 && sectionBottom > windowHeight * 0.25) {
                section.style.opacity = '1'; // Fade in
                section.style.transform = 'scale(1)'; // Scale to normal size
            } else {
                section.style.opacity = '0'; // Fade out
                section.style.transform = 'scale(0.9)'; // Slightly scale down
            }
        });
    };
    
    return { bioBentoJS, bioHeroJS, articleJS, sectionScroll, sliderEffects, detailsEffects, langSliders };
}

const { bioBentoJS, bioHeroJS, articleJS, sectionScroll, sliderEffects, detailsEffects, langSliders } = BentoEffects();

function runAllAnimations() {
    bioBentoJS();
    bioHeroJS();
    articleJS();
    sectionScroll();
    sliderEffects();
    detailsEffects();
    langSliders();
} 

// Run on initial load
document.addEventListener('DOMContentLoaded', runAllAnimations);

// Also run when the page is fully loaded (including images)
window.addEventListener('load', runAllAnimations);

// Run on scroll
window.addEventListener('scroll', runAllAnimations);

// Optional: Run when the page is potentially restored from back/forward cache
window.addEventListener('pageshow', (event) => {
    if (event.persisted) { // If page was restored from cache
        runAllAnimations();
    }
});

const tip = document.getElementById('tooltip');
const grow = document.getElementById('photo-grow');
const blurImg = document.querySelector('.blur--block--img'); 
const tooltip = document.querySelector('.jsPop');

tip.addEventListener('mouseenter', () => { 
    setTimeout(() => {
        tooltip.style.opacity = '1';
    }, 100);
});

tip.addEventListener('mouseleave', () => {
    setTimeout(() => {
        tooltip.style.opacity = '0';
    }, 100); 
});

grow.addEventListener('mouseenter', () => {
    setTimeout(() => {
        blurImg.style.transform = 'scale(1.1) translate(-50%, -50%)';
    }, 100); 
});

grow.addEventListener('mouseleave', () => {
    setTimeout(() => {
        blurImg.style.transform = 'scale(1.0) translate(-50%, -50%)';
    }, 100); 
});

const alert = document.querySelector('.alert');
const alertButt = document.getElementById('alert-button');

alertButt.addEventListener('click', () => { 
    audioFiles.click.currentTime = 0;
    audioFiles.click.play().catch(e => console.log("Sound error:", e));
    
    setTimeout(() => {
        alert.style.transform = "translateX(0px)";
    }, 100);

    setTimeout(() => {
        audioFiles.realAlert.currentTime = 0;
        audioFiles.realAlert.play().catch(e => console.log("Sound error:", e));
    }, 500); 

    setTimeout(() => {
        alert.style.transform = "translateX(150%)";
    }, 5100);

    setTimeout(() => {
        audioFiles.swoosh.currentTime = 0;
        audioFiles.swoosh.play().catch(e => console.log("Sound error:", e));
    }, 5300);
});  

// Select ALL elements with class 'jsButt' (recommended approach)
document.getElementById('jsButt').addEventListener('click', () => { 
    window.scrollTo({
        top: 1500,
        behavior: 'smooth'
    });
}); 

document.querySelectorAll('[id="temButt"]').forEach(button => {
    button.addEventListener('click', () => { 
        window.scrollTo({
            top: 1500,
            behavior: 'smooth'
        });
    });
});