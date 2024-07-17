import { createBrowserRouter } from 'react-router-dom'
import { Root } from "./pages/root/root";
import { Home } from "./pages/home/home";
import { AuthProvider } from "./components/auth-provider/auth-provider";
import {AuthenticationGuard } from "./components/authentication-guard/authentication-guard";
import { ApolloClientProvider } from "./components/apollo-provider/apollo-provider";
import { ForYou } from "./pages/foryou/foryou";
import { Login } from "./pages/login/login";

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <AuthProvider><ApolloClientProvider><Login></Login></ApolloClientProvider></AuthProvider>
  },
  {
    path: '/',
    element: <AuthProvider><AuthenticationGuard component={() => <ApolloClientProvider><Root></Root></ApolloClientProvider>}></AuthenticationGuard></AuthProvider>,
    children: [
      {
        path: 'home',
        element: <Home></Home>,
        children: [
          {
            path: 'foryou',
            element: <ForYou></ForYou>
          }
        ]
      }
    ]
  }
]);