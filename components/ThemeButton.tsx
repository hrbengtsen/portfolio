import React from "react";
import { Button, Tooltip } from "@styple/design-system";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeButton() {
  const { theme, setTheme } = useTheme();

  return (
    <Tooltip
      content={
        <>
          Change <b>theme</b>
        </>
      }
    >
      <Button
        size="circle"
        highlight
        move
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? <Sun /> : <Moon />}
      </Button>
    </Tooltip>
  );
}
