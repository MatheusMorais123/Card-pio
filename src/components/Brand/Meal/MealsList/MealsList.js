import { Card, MealItem } from "@components";
import classes from "./MealsList.module.scss";
import { useMealsApi } from "@hooks";

export default function MealsList(props) {
  const { meals, isLoading } = useMealsApi();

  return (
    <Card className={classes.meals}>
      <ul>
        {isLoading && <li>Carregando cardápio</li>}
        {!isLoading &&
          Object.entries(meals).map(([key, value]) => (
            <MealItem key={key} id={key} {...value}></MealItem>
          ))}
      </ul>
    </Card>
  );
}
