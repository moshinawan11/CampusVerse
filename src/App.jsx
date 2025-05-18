import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";

import theme from "./theme/theme";
import Login from "../src/features/login/Login";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Login /> },
    // { path: "/login", component: <Login/> },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
