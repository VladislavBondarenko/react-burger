import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { func, node, string } from "prop-types";
import { useEffect } from "react";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";
import { Portal } from "../Portal/Portal";
import style from "./Modal.module.css";

export const Modal = ({ onClose, children }) => {
  useEffect(() => {
    function closeByEscape(evt) {
      if (evt.key === "Escape") {
        onClose();
      }
    }
    document.addEventListener("keydown", closeByEscape);
    return () => {
      document.removeEventListener("keydown", closeByEscape);
    };
  }, [onClose]);

  return (
    <Portal>
      <ModalOverlay onClick={onClose} />
      <section className={style.modal}>
        <div className={style["modal__close-icon"]}>
          <CloseIcon type="primary" onClick={onClose} />
        </div>
        {children}
      </section>
    </Portal>
  );
};

Modal.propTypes = {
  children: node,
  onClose: func,
  className: string,
  type: string,
};
