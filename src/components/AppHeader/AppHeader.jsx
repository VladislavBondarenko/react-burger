import {
  Logo,
  ProfileIcon,
  BurgerIcon,
  ListIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./AppHeader.module.css";

function AppHeader() {
  return (
    <header className={styles.header}>
      <nav className={styles.header__container}>
        <ul className={`${styles.header__list} mt-4 mb-4`}>
          <li className={styles.header__list_item}>
            <a href="#" className={styles.header__link_active}>
              <BurgerIcon type={"primary"} />
              <p
                className={`${styles.header__link_text} ml-2 text text_type_main-default`}
              >
                Конструктор
              </p>
            </a>
          </li>
          <li className={`${styles.header__list_item} ml-2`}>
            <a href="#" className={styles.header__link}>
              <ListIcon type={"secondary"} />
              <p
                className={`${styles.header__link_text} ml-2 text text_type_main-default`}
              >
                Лента заказов
              </p>
            </a>
          </li>
        </ul>
        <div className={styles.header__logo}>
          <Logo />
        </div>
        <a href="#" className={styles.header__link}>
          <ProfileIcon type={"secondary"} />
          <p
            className={`${styles.header__link_text} ml-2 text text_type_main-default`}
          >
            Личный кабинет
          </p>
        </a>
      </nav>
    </header>
  );
}

export default AppHeader;
