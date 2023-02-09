import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import { IngredientsDetails } from "../IngridientDetails/IngridientDetails";
import style from "./BurgerIngredient.module.css";
import { bool, func, number, string } from "prop-types";

export const BurgerIngredient = ({ ingredientData }) => {
  const [isModalOpened, setModalOpened] = useState(false);

  return (
    <>
      <div
        className={style.ingredients__list}
        onClick={() => setModalOpened(true)}
      >
        <Counter size="default" />
        <img src={ingredientData.image} alt="ingredient" />

        <div className={`${style.ingredients__price_container} mb-2`}>
          <p className="text text_type_digits-default">
            {ingredientData.price}
          </p>
          <CurrencyIcon type="primary" />
        </div>

        <p className="text text_type_main-small">{ingredientData.name}</p>
      </div>

      {isModalOpened && (
        <IngredientsDetails
          {...ingredientData}
          onClose={() => setModalOpened(false)}
        />
      )}
    </>
  );
};

BurgerIngredient.propTypes = {
  isModalOpened: bool,
  onClick: func,
  image: string,
  price: number,
  name: string,
  onClose: func,
};
