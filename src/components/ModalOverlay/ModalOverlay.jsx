import { func } from "prop-types";
import style from "./ModalOverlay.module.css";

export const ModalOverlay = ({ onClick }) => (
  <div onClick={onClick} className={style.modal__overlay}></div>
);

ModalOverlay.propTypes = {
  onClick: func,
};
