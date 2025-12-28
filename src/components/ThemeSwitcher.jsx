import { Switch, useColorScheme } from "@mui/material";

const label = { inputProps: { "aria-label": "Switch demo" } };

export const ThemeSwitcher = () => {
  const { mode, setMode } = useColorScheme();
  const handleClick = (e) => {
    const newMode = e.target.checked ? "dark" : "light";
    setMode(newMode);
  };
  return (
    <div>
      <Switch {...label} checked={mode === "dark"} onClick={handleClick} />
    </div>
  );
};
