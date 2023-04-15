import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./Componants/Theme";
import Navbar from "./Componants/Navbar";
import HomePage from "./Componants/Homepage";
// import ProfilePage from "./Componants/Profilpage";

function App() {

  const mode = useSelector((state)=> state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);


  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/"  element={<Navbar/>} />
            <Route
              path="/home"

              // element={<Navbar/>}
              element={<HomePage/>}

              // element={isAuth ? <HomePage /> : <Navigate to="/" />}
            />
            <Route
              path="/profile/:id"
              // element={<ProfilePage/>}

              // element={isAuth ? <ProfilePage /> : <Navigate to="/" />}
            />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;