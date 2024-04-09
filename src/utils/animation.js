const animatewithGsapTimeline = (
  timeline,
  rotationRef,
  rotationState,
  firstTarget,
  secondTarget,
  animationProps
) => {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: "power2.inOut",
  });

  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    // this helps to insert the animation at the previous target
    "<"
  );
  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    // this helps to insert the animation at the previous target
    "<"
  );
};

export default animatewithGsapTimeline;
