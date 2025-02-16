import {
  createTheme,
  Button,
  ThemeProvider,
  CssBaseline,
  Stack,

} from "@mui/material";
import { useMemo, useState } from "react";
import getDesignTokens from "styles/MyTheme";
import AppBarr from "MUI_components/AppBar";
import MyList from "MUI_components/List";
import Posts from "MUI_components/Posts";
import RightBar from "MUI_components/LeftBar";



function App() {
  const [mode, setmyMOde] = useState(
    localStorage.getItem("currentMode") === null
      ? "dark"
      : localStorage.getItem("currentMode") === "light"
      ? "light"
      : "dark"
  );
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <AppBarr />

      <Stack
        
        sx={{ flexDirection: "row" }}
      >
        <MyList setmyMOde={setmyMOde} theme={theme} />

        <Posts />

        <RightBar theme={theme} />
      </Stack>

      <br />
      <br />
      <br />

      <Button
        onClick={() => {
          localStorage.setItem(
            "currentMode",
            theme.palette.mode === "dark" ? "light" : "dark"
          );

          setmyMOde(theme.palette.mode === "light" ? "dark" : "light");
        }}
        variant="text"
        color="primary"
      >
        change theme
      </Button>
    </ThemeProvider>
  );
}

export default App;
