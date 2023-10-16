import React from "react";
import classes from "./Header.module.scss";
import { HeaderCartButton } from "@components";
import  Nav  from "../../UI/Nav"
export default function Header(props) {
  console.log("Header is rendering");
  return (
    <React.Fragment>
      <div className={classes.header}>
        <h1>O Gringo Alemão</h1>
        <HeaderCartButton></HeaderCartButton>
       
      </div>
      
      <div className={classes["main-image"]}>
        <img src="/images/espetinhos.jpg" alt="meals"></img>
      </div>
      <Nav />
    </React.Fragment>
  );
}
