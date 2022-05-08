import {
  Container,
  Navbar,
  Tooltip,
  Flex,
  Button,
  darkTheme,
} from "@styple/design-system";
import { ThemeButton } from "./ThemeButton";
import { NavLinkItem } from "./NavLinkItem";
import { openFullNav, slideRight, enterDown } from "../lib/animations";
import { Home, Disc, Lightbulb, X, Github, Camera } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useScrollListener } from "../lib/useScrollListener";

export function Header() {
  const router = useRouter();
  const isHomePage = router.pathname === "/";

  const [isOpen, setIsOpen] = useState(false);
  const [hasDisplayedIntro, setHasDisplayedIntro] = useState(false);

  const [removeEnterAnim, setRemoveEnterAnim] = useState(false);

  const [hasScrolled, setHasScrolled] = useState(false);
  useScrollListener(() => {
    const scrolled = window.scrollY;

    if (scrolled >= 32) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  });

  useEffect(() => {
    const introInSession = sessionStorage.getItem("intro") === "true";

    // 29 * 120 ms = complete stagger (on homepage) + 500 ms for animation duration
    const timeoutDuration =
      isHomePage && !introInSession ? 29 * 120 + 500 : 500;

    if (introInSession) {
      setHasDisplayedIntro(true);
    }

    setTimeout(() => {
      setRemoveEnterAnim(true);
    }, timeoutDuration);
  }, []);

  useEffect(() => {
    document.body.style.overflowY = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <Container
      className={removeEnterAnim ? undefined : enterDown()}
      css={{
        position: "fixed",
        top: 0,
        pt: "$lg",
        width: "100%",
        zIndex: "$1",
        $$delay: `${
          isHomePage && !hasDisplayedIntro ? "calc(29 * 120ms)" : "0"
        }`,
      }}
    >
      <Navbar
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          pr: "$xl",
          "@bp2": {
            justifyContent: "center",
            pr: 0,
          },
        }}
        content={
          <Flex
            css={{
              alignItems: "center",
              gap: "$md",
              bg: `${hasScrolled ? "$bg300A" : "$bg100A"}`,
              transition: "$bgColor",
              backdropFilter: "blur(16px)",
              boxShadow: `${hasScrolled ? "$sm" : "none"}`,
              [`.${darkTheme} &`]: {
                boxShadow: "$lg",
              },
              borderRadius: "$pill",
              p: "$xs",
            }}
          >
            <Tooltip
              content={
                <>
                  <b>Home</b>
                </>
              }
            >
              <NavLinkItem size="circle" ghost move href="/">
                <Home strokeWidth={isHomePage ? 3 : 2} />
              </NavLinkItem>
            </Tooltip>
            <Tooltip
              content={
                <>
                  <b>The Arcade</b>
                </>
              }
            >
              <NavLinkItem size="circle" ghost move href="/arcade">
                <Disc strokeWidth={router.pathname === "/arcade" ? 3 : 2} />
              </NavLinkItem>
            </Tooltip>
            <Tooltip
              content={
                <>
                  <b>Projects</b>
                </>
              }
            >
              <NavLinkItem size="circle" ghost move href="/projects">
                <Lightbulb
                  strokeWidth={router.pathname === "/projects" ? 3 : 2}
                />
              </NavLinkItem>
            </Tooltip>
            <Tooltip
              content={
                <>
                  <b>Photos</b>
                </>
              }
            >
              <NavLinkItem size="circle" ghost move href="/photos">
                <Camera strokeWidth={router.pathname === "/photos" ? 3 : 2} />
              </NavLinkItem>
            </Tooltip>
            <ThemeButton />
            <Tooltip
              content={
                <>
                  <b>Github</b>
                </>
              }
            >
              <NavLinkItem
                size="circle"
                ghost
                move
                href="https://github.com/hrbengtsen"
              >
                <Github />
              </NavLinkItem>
            </Tooltip>
          </Flex>
        }
        open={isOpen}
        onOpenChange={(open) => {
          setIsOpen(open);
        }}
        mobileContent={
          <Flex
            css={{
              "@bp2": {
                display: "none",
              },
              flexDirection: "column",
              gap: "$lg",
              position: "fixed",
              bg: "$bg300A",
              backdropFilter: "blur(16px)",
              animation: `${openFullNav} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
              zIndex: "$max",
              top: "0",
              left: "0",
              width: "100vw",
              height: "100vh",
              pt: "$4xl",
            }}
          >
            <Button
              ghost
              onClick={() => setIsOpen(false)}
              css={{
                position: "absolute",
                top: "$xs",
                right: "$sm",
                zIndex: "$1",
              }}
            >
              <X size={32} />
            </Button>

            <NavLinkItem
              ghost
              href="/"
              size="lg"
              css={{
                animation: `${slideRight} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
                animationFillMode: "forwards",
                willChange: "transform",
                transform: "translateX(-100%)",
                display: "flex",
                alignItems: "center",
                gap: "$md",
                fontSize: "$md",
              }}
              onClick={() => setIsOpen(false)}
            >
              <Home strokeWidth={router.pathname === "/" ? 3 : 2} /> Home
            </NavLinkItem>
            <NavLinkItem
              ghost
              href="/arcade"
              size="lg"
              css={{
                animation: `${slideRight} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
                animationDelay: "100ms",
                animationFillMode: "forwards",
                willChange: "transform",
                transform: "translateX(-100%)",
                display: "flex",
                alignItems: "center",
                gap: "$md",
                fontSize: "$md",
              }}
              onClick={() => setIsOpen(false)}
            >
              <Disc strokeWidth={router.pathname === "/arcade" ? 3 : 2} /> The
              Arcade
            </NavLinkItem>
            <NavLinkItem
              ghost
              href="/projects"
              size="lg"
              css={{
                animation: `${slideRight} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
                animationDelay: "200ms",
                animationFillMode: "forwards",
                willChange: "transform",
                transform: "translateX(-100%)",
                display: "flex",
                alignItems: "center",
                gap: "$md",
                fontSize: "$md",
              }}
              onClick={() => setIsOpen(false)}
            >
              <Lightbulb
                strokeWidth={router.pathname === "/projects" ? 3 : 2}
              />{" "}
              Projects
            </NavLinkItem>
            <NavLinkItem
              ghost
              href="/photos"
              size="lg"
              css={{
                animation: `${slideRight} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
                animationDelay: "300ms",
                animationFillMode: "forwards",
                willChange: "transform",
                transform: "translateX(-100%)",
                display: "flex",
                alignItems: "center",
                gap: "$md",
                fontSize: "$md",
              }}
              onClick={() => setIsOpen(false)}
            >
              <Camera strokeWidth={router.pathname === "/photos" ? 3 : 2} />{" "}
              Photos
            </NavLinkItem>
            <Flex
              css={{
                position: "absolute",
                bottom: "$max",
                left: "$md",
                zIndex: "$1",
                gap: "$sm",
              }}
            >
              <ThemeButton />
              <NavLinkItem
                size="circle"
                ghost
                move
                href="https://github.com/hrbengtsen"
              >
                <Github />
              </NavLinkItem>
            </Flex>
          </Flex>
        }
      />
    </Container>
  );
}
