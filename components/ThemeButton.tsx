import { Button, Tooltip } from "@styple/design-system";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useMounted } from "@styple/hooks";

export function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) return null;

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
        ghost
        move
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? <Sun /> : <Moon />}
      </Button>
    </Tooltip>
  );
}
