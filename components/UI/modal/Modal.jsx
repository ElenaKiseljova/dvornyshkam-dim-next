"use client";
import React from "react";
import ReactDOM from "react-dom";

import { useTranslations } from "next-intl";

import useModalStore from "@/hooks/useModalStore";

import "./modal.scss";

const Modal = ({ children }) => {
  const t = useTranslations();
  const { isModalOpen, closeModal } = useModalStore();

  const closeHandler = (e) => {
    e.preventDefault();
    closeModal();
  };

  if (!isModalOpen) return null;

  return ReactDOM.createPortal(
    <div
      className={`modal-container ${isModalOpen ? "modal-open" : ""}`}
      onClick={closeHandler}
    >
      <div className="modal">
        <header className="modal__header">
          <h2 className="h2">{t("modal.callback")}</h2>
          <span className="modal__close" onClick={closeHandler}>
            X
          </span>
        </header>
        {children}
      </div>
    </div>,
    document.getElementById("root-modal")
  );
};

export default Modal;
