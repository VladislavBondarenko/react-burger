import { IngredientsDetails } from "../IngridientDetails/IngridientDetails";
import { OrderDetails } from "../OrderDetails/OrderDetails";
import { element } from "prop-types";

export const AppModals = () => (
  <>
    <IngredientsDetails />
    <OrderDetails />
  </>
);

AppModals.propTypes = {
  IngredientsDetails: element,
  OrderDetails: element,
};
