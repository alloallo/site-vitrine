gsap.registerPlugin(ScrollTrigger);

/* Carousel horizontal */
let sections = gsap.utils.toArray(".slider-item");
let container = document.getElementById('slider');

ScrollTrigger.matchMedia({
    // desktop
    "(min-width: 1024px)": function() {
        gsap.to(sections, {
            xPercent: -150 * (sections.length - 1),
            ease: 'none',
            scrollTrigger: {
                trigger: ".section-4",
                pin: '.section-4',
                scrub: 1,
                start: 'top top',
                end: () => "+=" + (container.scrollWidth),
            }
        });
        gsap.to('.section-4', {
            backgroundColor: '#7ba0d2',
            ease: 'none',
            scrollTrigger: {
                trigger: ".section-4",
                scrub: true,
                start: '20 top',
                end: 'bottom bottom',
            }
        });
    }
});

/* smooth scroll */
ScrollTrigger.create({
    start: 'top -80',
    end: 'bottom+=100vh bottom',
    toggleClass: {className: 'drop-shadow', targets: '.header'}
});

/* timeline */
const tb = gsap.timeline({
    scrollTrigger: {
        trigger: "#timeline",
        start: "top center",
        end: "bottom",
        scrub: true
    }
});

tb.from("#timeline .box", {opacity: 0.4, duration: 4, stagger: 0.9, ease: 'elastic'})


gsap.utils.toArray(".button").forEach((a, i) => {
    a.clickElem = document.querySelector(a.hash);
    a.offset = a.clickElem.offsetTop
    a.height = a.clickElem.offsetHeight;
    a.addEventListener("click", e => {
        e.preventDefault();
        gsap.to(window, {scrollTo: a.offset + a.height * (i + 1)})
    });
});

