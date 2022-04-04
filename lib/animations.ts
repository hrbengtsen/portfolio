import { keyframes, css } from "@styple/design-system";

// Enter (staggering) animation: override $$stagger with >0 on styled component to stagger
const enterAnim = keyframes({
  "0%": { transform: "translateY(10px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

// @ts-ignore - see https://github.com/modulz/stitches/issues/947
export const enterAndStagger = css({
  $$stagger: 0,
  $$delay: "120ms",
  opacity: 0,
  willChange: "opacity, transform",
  animation: `${enterAnim} 1s forwards`,
  animationDelay: "calc($$stagger * $$delay)",
  "@motion": {
    animation: "none",
  },
});

export const nameSlideAnim = keyframes({
  "0%": {
    transform: "translateX(-20px)",
  },
  "100%": {
    opacity: 1,
    transform: "translateX(0)",
  },
});

export const contentEnterAnim = keyframes({
  "0%": {
    transform: "translate(-50%, -50%)",
    top: "50%",
    left: "50%",
  },
  "100%": {
    transform: "translate(-50%, 0)",
    top: "0",
    left: "50%",
  },
});

// Navbar animations
export const slideRight = keyframes({
  from: { transform: "translateX(-32px)", opacity: 0 },
  to: { transform: "translateX(0)", opacity: 1, visibility: "visible" },
});
export const openFullNav = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});
export const enterDown = keyframes({
  "0%": {
    transform: "translateY(-48px)",
    opacity: 0,
  },
  "100%": {
    transform: "translateY(0)",
    opacity: 1,
  },
});
