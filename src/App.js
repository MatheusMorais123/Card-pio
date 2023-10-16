import React from "react";
import './index.css';
/* import { Header, MealsSummary, MealsList, Cart,} from "@components";
import { CartProvider } from "@context";
import Options from "./components/UI/Options";
import NavBar from "./components/UI/Nav";
import {Route} from 'react-router-dom' */
import { CartProvider } from "@context";
import Routes  from "./routes"

function App() {
  return (
    <CartProvider>
      <Routes />
    </CartProvider>

  );
}

export default App;
