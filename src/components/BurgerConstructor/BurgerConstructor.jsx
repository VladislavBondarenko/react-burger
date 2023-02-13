import {
  Button,
  ConstructorElement,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useMemo } from "react";
import { useDrop } from "react-dnd";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { makeOrder } from "../../services/actions/orderObject";
import style from "./BurgerConstructor.module.css";
import {
  useSelectedIngredients,
  useSelectedIngredientsIds,
  useSelectedIngredientsPrice,
} from "../../hooks/useSelectedIngredients";
import { bool, func, number, string } from "prop-types";
import { CONSTRUCTOR_ADD_INGREDIENT } from "../../services/actions/burgerConstructor";
import { BurgerConstructorIngredient } from "../BurgerConstructorBlock/BurgerConstructorBlock";

export const ingredientToConstructorElementProps = (ingredient) => ({
  price: ingredient?.price ?? 0,
  thumbnail: ingredient?.image ?? void 0,
  text: ingredient?.name ?? "",
});

const EMPTY_BUN = {
  text: "Перетяните булочку сюда",
  price: 0,
  thumbnail: "/loading.svg",
};

const useBun = () => {
  const selectedBun = useSelectedIngredients().bun;
  const bunProps = useMemo(
    () =>
      selectedBun
        ? ingredientToConstructorElementProps(selectedBun)
        : EMPTY_BUN,
    [selectedBun]
  );

  return useMemo(
    () => ({
      top: {
        ...bunProps,
        text: [bunProps.text, "(верх)"].join(" "),
        type: "top",
        isLocked: true,
      },
      bottom: {
        ...bunProps,
        text: [bunProps.text, "(низ)"].join(" "),
        type: "bottom",
        isLocked: true,
      },
    }),
    [bunProps]
  );
};

export function BurgerConstructor() {
  const totalPrice = useSelectedIngredientsPrice();
  const dispatch = useAppDispatch();
  const [, dropRef] = useDrop({
    accept: "ingredient",
    drop: (data) =>
      dispatch({
        type: CONSTRUCTOR_ADD_INGREDIENT,
        payload: data,
      }),
  });

  const { mid: middleIngredients, bun: selectedBun } = useSelectedIngredients();
  const bun = useBun();
  const selectedIngredientsIds = useSelectedIngredientsIds();

  return (
    <section className={`${style.card} mt-25 `}>
      <ul ref={dropRef} className={style.card__list}>
        <li className={`${style.card__list_item}`}>
          <ConstructorElement {...bun.top} />
        </li>
        <div className={`${style.card__list_ingredients}`}>
          <ul className={style.card__list}>
            {middleIngredients.map((ingredient, index) => (
              <BurgerConstructorIngredient
                key={ingredient.key}
                index={index}
                ingredient={ingredient}
              />
            ))}
          </ul>
        </div>
        <li className={`${style.card__list_item}`}>
          <ConstructorElement {...bun.bottom} />
        </li>
      </ul>
      <div className={`${style.card__container} mt-10`}>
        <div className={`${style.card__total_container} mr-10`}>
          <p className="text text_type_digits-medium mr-3">{totalPrice}</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button
          disabled={selectedIngredientsIds.length === 0 || !selectedBun}
          htmlType="button"
          onClick={() => dispatch(makeOrder(selectedIngredientsIds))}
          type="primary"
          size="large"
          extraClass="mr-4"
        >
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

BurgerConstructor.propTypes = {
  price: number,
  thumbnail: string,
  text: string,
  totalPrice: number,
  isLocked: bool,
  disabled: bool,
  onClick: func,
  className: string,
  extraClass: string,
};
