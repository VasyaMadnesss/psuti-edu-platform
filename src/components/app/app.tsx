import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import { Layout } from "../layout/layout";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { ProtocolsList } from "../protocols-list/protocols-list";
import { Ethernet } from "../articles/ethernet-article/ethernet.article";

const LINK_CARDS = [
  {
    id: 1,
    title: "Протокол №1",
    description: "Описание первого протокола",
    imageUrl: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=600",
    tags: ["Важно", "Срочно"],
    link: "/protocols/1",
  },
  {
    id: 2,
    title: "Протокол №2",
    description: "Краткое описание примера",
    imageUrl:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w-600",
    tags: ["Обучение"],
    link: "/protocols/2",
  },
  {
    id: 3,
    title: "Протокол №3",
    description: "Более подробное описание",
    imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600",
    tags: ["Документ", "Архив"],
    link: "/protocols/3",
  },
];

function App() {
  const [lightMode, switchLightMode] = useState(true);

  const onSwitchLightModeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    switchLightMode((prev) => !prev);
  };

  const theme = createTheme({
    palette: {
      mode: lightMode ? "light" : "dark",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          {/* <Route path='*' element={<NotFound />} */}
          <Route
            path="/"
            element={
              <Layout
                lightMode={lightMode}
                onSwitchLightModeClick={onSwitchLightModeClick}
              />
            }
          >
            <Route
              path="/protocols"
              element={<ProtocolsList linkCards={LINK_CARDS} />}
            />
            <Route path="/protocols/:id" element={<Ethernet />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
