import styles from "./App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import { BurgerConstructor } from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngridients/BurgerIngridients";
import { useFetch } from "../../hooks/useFetch";

const ingredientsUrl = "https://norma.nomoreparties.space/api/ingredients";

function App() {
  const { data } = useFetch(ingredientsUrl);
  const ingredients = data?.data;
  return (
    <div className={styles.App}>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients ingredients={ingredients} />
        <BurgerConstructor selectedIngredients={ingredients ?? []} />
      </main>
    </div>
  );
}

export default App;
