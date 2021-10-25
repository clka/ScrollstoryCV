gsap.to('.mediumCircle1', {
    delay: 0.5,
    duration: 1.5,
    x: -70,
    scale: 1,
})

gsap.to('.smallCircle1', {
    delay: 0.5,
    duration: 2,
    x: -130,
    scale: 1,
})

gsap.to('.mediumCircle2', {
    delay: 0.5,
    duration: 1.5,
    x: 70,
    scale: 1,
})

gsap.to('.smallCircle2', {
    delay: 0.5,
    duration: 2,
    x: 130,
    scale: 1,
})

gsap.to('.smallCircle2, .smallCircle1, .mediumCircle1, .mediumCircle2, .mainCircle', {
    height: '2vw', width: '2vw', opacity: "0.5", scrollTrigger: {
        start: 'top center',
        end: '+=400%',
        scrub: true
    }})

