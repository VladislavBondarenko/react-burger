import {
  Button,
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useMemo, useState } from "react";
import { useGroupIngredients } from "../../hooks/useFilteredIngredient";
import { sum } from "../../utils/sum";
import { OrderDetails } from "../OrderDetails/OrderDetails";
import style from "./BurgerConstructor.module.css";
import { number, string } from "prop-types";

const ingredientToConstructorElementProps = (ingredient) => ({
  price: ingredient?.price ?? 0,
  thumbnail: ingredient?.image ?? void 0,
  text: ingredient?.name ?? "",
});

export function BurgerConstructor({ selectedIngredients }) {
  const [isOpened, setIsOpened] = useState(false);
  const totalPrice = useMemo(
    () => sum(...selectedIngredients.map((ingredient) => ingredient.price)),
    [selectedIngredients]
  );
  const {
    buns: [burgerBun],
    mains,
    sauces,
  } = useGroupIngredients(selectedIngredients);
  const middleIngredients = [...mains, ...sauces];
  const topAndBottomProps = {
    ...ingredientToConstructorElementProps(burgerBun),
    isLocked: true,
  };

  return (
    <section className={`${style.card} mt-25 `}>
      <ul className={style.card__list}>
        <li className={`${style.card__list_item}`}>
          <ConstructorElement type="top" {...topAndBottomProps} />
        </li>
        <div className={`${style.card__list_ingredients}`}>
          <ul className={style.card__list}>
            {middleIngredients.map((ingredient) => (
              <li key={ingredient._id} className={style.card__list_item}>
                <DragIcon type="primary" />
                <ConstructorElement
                  {...ingredientToConstructorElementProps(ingredient)}
                />
              </li>
            ))}
          </ul>
        </div>
        <li className={`${style.card__list_item}`}>
          <ConstructorElement type="bottom" {...topAndBottomProps} />
        </li>
      </ul>
      <div className={`${style.card__container} mt-10`}>
        <div className={`${style.card__total_container} mr-10`}>
          <p className="text text_type_digits-medium mr-3">{totalPrice}</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button
          htmlType="button"
          onClick={() => setIsOpened(true)}
          type="primary"
          size="large"
          style={{ marginRight: "16px" }}
        >
          Оформить заказ
        </Button>
        {isOpened && <OrderDetails onClose={() => setIsOpened(false)} />}
      </div>
    </section>
  );
}

BurgerConstructor.propTypes = {
  price: number,
  thumbnail: string,
  text: string,
  totalPrice: number,
};
