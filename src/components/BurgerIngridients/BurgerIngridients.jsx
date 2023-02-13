import style from "./BurgerIngridients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import { BurgerIngredientsBlock } from "../BurgerIngridientsBlock/BurgerIngridientsBlock";
import { useGroupIngredients } from "../../hooks/useFilteredIngredient";

export default function BurgerIngredients({ ingredients }) {
  const { buns, mains, sauces } = useGroupIngredients(ingredients);
  const [current, setCurrent] = React.useState("bun");

  return (
    <section className={style.ingridients}>
      <h1
        className={`${style.ingridients__title}text text_type_main-large mt-10 mb-5`}
      >
        Соберите бургер
      </h1>
      <div className={style.ingridients__tab}>
        <Tab value="bun" active={current === "bun"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="sauce" active={current === "sauce"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="main" active={current === "main"} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <div className={style.ingridients__blocks}>
        <BurgerIngredientsBlock ingredientsList={buns} title="Булки" />
        <BurgerIngredientsBlock ingredientsList={sauces} title="Соусы" />
        <BurgerIngredientsBlock ingredientsList={mains} title="Начинки" />
      </div>
    </section>
  );
}
