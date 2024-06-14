import { createBrowserRouter } from 'react-router-dom'
import { Root } from "./pages/root/root";
import { Home } from "./pages/home/home";
import { AuthProvider } from "./components/auth-provider/auth-provider";
import {AuthenticationGuard } from "./components/authentication-guard/authentication-guard";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthProvider><AuthenticationGuard component={Root}></AuthenticationGuard></AuthProvider>,
    children: [
      {
        path: '/home',
        element: <Home></Home>
      }
    ]
  }
]);