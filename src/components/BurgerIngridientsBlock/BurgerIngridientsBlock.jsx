import style from "./BurgerIngridientsBlock.module.css";
import { BurgerIngredient } from "../BurgerIngridient/BurgerIngredient";
import { array, string } from "prop-types";

export const BurgerIngredientsBlock = ({ ingredientsList, title }) => (
  <>
    <h2 className="text text_type_main-medium mb-6 mt-10">{title}</h2>
    <ul className={style.ingridient_block}>
      {ingredientsList.map(({ _id: id, ...ingredientData }) => (
        <li key={id}>
          <BurgerIngredient ingredientData={ingredientData} />
        </li>
      ))}
    </ul>
  </>
);

BurgerIngredientsBlock.propTypes = {
  title: string,
  ingredientsList: array,
};
