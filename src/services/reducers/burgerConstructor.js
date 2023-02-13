import { CONSTRUCTOR_ADD_INGREDIENT } from "../actions/burgerConstructor";
import { CONSTRUCTOR_DELETE_INGREDIENT } from "../actions/burgerConstructor";
import { CONSTRUCTOR_MOVE_INGREDIENT } from "../actions/burgerConstructor";
import { CONSTRUCTOR_RESET_INGREDIENT } from "../actions/burgerConstructor";

const initialState = {
  bun: null,
  mid: [],
};

export const burgerConstructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTRUCTOR_ADD_INGREDIENT: {
      if (action.payload.type === "bun") {
        return {
          ...state,
          bun: action.payload.ingredientId,
        };
      }
      return {
        ...state,
        mid: [...state.mid, action.payload.ingredientId],
      };
    }
    case CONSTRUCTOR_DELETE_INGREDIENT: {
      return {
        ...state,
        mid: [
          ...state.mid.slice(0, action.payload.index),
          ...state.mid.slice(action.payload.index + 1),
        ],
      };
    }
    case CONSTRUCTOR_MOVE_INGREDIENT: {
      const [firstItemIndex, secondItemIndex] = action.payload;
      const resultMid = [...state.mid];
      const moveIngredient = resultMid[firstItemIndex];
      resultMid[firstItemIndex] = resultMid[secondItemIndex];
      resultMid[secondItemIndex] = moveIngredient;
      return {
        ...state,
        mid: resultMid,
      };
    }
    case CONSTRUCTOR_RESET_INGREDIENT: {
      return {
        ...initialState,
      };
    }
    default: {
      return state;
    }
  }
};
