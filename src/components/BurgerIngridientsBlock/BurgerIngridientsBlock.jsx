import style from "./BurgerIngridientsBlock.module.css";
import { BurgerIngredient } from "../BurgerIngridient/BurgerIngredient";
import { any, string } from "prop-types";
import { forwardRef } from "react";
import { useIngredientByType } from "../../hooks/useIngridients";

const INGREDIENT_TYPE_TO_TITLE = {
  bun: "Булки",
  sauce: "Соусы",
  main: "Начинки",
};

export const BurgerIngredientsBlock = forwardRef(({ ingredientType }, ref) => (
  <div ref={ref}>
    <h2 className="text text_type_main-medium mb-6 mt-10">
      {INGREDIENT_TYPE_TO_TITLE[ingredientType]}
    </h2>
    <ul className={style.ingredients__list}>
      {useIngredientByType(ingredientType).map((ingredientData) => (
        <li key={ingredientData._id}>
          <BurgerIngredient ingredientData={ingredientData} />
        </li>
      ))}
    </ul>
  </div>
));

BurgerIngredientsBlock.displayName = "BurgerIngredientsBlock";

BurgerIngredientsBlock.propTypes = {
  ingredientType: string.isRequired,
  className: string,
  ingredientData: any,
};
