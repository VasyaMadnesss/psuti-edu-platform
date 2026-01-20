import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from "./components/layout/layout";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./main.css";

import Login from "./components/login/login";
import Register from "./components/register/register";
import Home from "./components/home/home";
import { Playground } from "./components/playground/playground";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

          <Route path="playground" element={<Playground />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
