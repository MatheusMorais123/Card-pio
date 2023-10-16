import React, { useContext } from "react";
import classes from "./MealItem.module.scss";
import { MealItemForm } from "@components";
import { CartContext } from "@context";
import Espetos from '../../../../assests/images/espetinhos.jpg'
export default function MealItem({ id, name, description, price }) {
  const ctx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    ctx.onAddItem({ name, id, amount, price });
  };
  return (
    <li key={id} className={classes.meal}>
      <div className={classes.flex}>
        <img src={Espetos} width={110} height={110} />
        <div className={classes.text}>
          <h1>Titulo</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <p>Preço</p>
          <MealItemForm onAddToCart={addToCartHandler}></MealItemForm>
        </div>
        
      </div>
      {/* <MealItemForm onAddToCart={addToCartHandler}></MealItemForm> */}
    </li>
  );
}
