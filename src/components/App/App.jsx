import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { getIngredients } from "../../services/reducers/ingredients";
import AppHeader from "../AppHeader/AppHeader";
import { BurgerConstructor } from "../BurgerConstructor/BurgerConstructor";
import { BurgerIngredients } from "../BurgerIngridients/BurgerIngridients";
import style from "./App.module.css";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <div className={style.App}>
      <AppHeader />
      <main className={style.main}>
        <BurgerIngredients />
        <BurgerConstructor />
      </main>
    </div>
  );
}

export default App;
