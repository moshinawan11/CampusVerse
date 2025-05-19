import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider, CssBaseline } from '@mui/material';

import theme from "@/theme/theme";
import Login from "@/features/login/Login";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Login /> },
    // { path: "/login", component: <Login/> },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
