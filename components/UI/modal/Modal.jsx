"use client";

import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";

import useModalStore from "@/hooks/useModalStore";
import Button from "../button/Button";
import Input from "@/components/UI/input/Input";

import "./modal.scss";

const Modal = () => {
  const t = useTranslations();
  const { isModalOpen, closeModal } = useModalStore();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  //Отправка данных на сервер происходит тут
  const onSubmit = (data) => {
    console.log(data);
    closeHandler();
    reset();
  };

  console.log(watch("example"));

  const closeHandler = () => {
    closeModal();
  };

  if (!isModalOpen) return null;

  return (
    <div className={`modal-container ${isModalOpen ? "modal-open" : ""}`}>
      <div className="modal">
        <header className="modal__header">
          <h2 className="h2">{t("modal.callback")}</h2>
          <span className="modal__close" onClick={closeHandler}>
            X
          </span>
        </header>
        <form onSubmit={handleSubmit(onSubmit)} className="modal__body">
          <h2 className="modal__title h2">{t("modal.title")}</h2>
          <Input
            type={"text"}
            name={"user_name"}
            id={"user_name"}
            label={"inputs.first_name"}
            register={register("user_name", {
              required: "Required",
              minLength: {
                value: 2,
                message: t("validation.minLength", { length: 2 }),
              },
            })}
            error={errors.user_name?.message}
          />
          <Input
            type={"text"}
            name={"user_surname"}
            id={"user_surname"}
            label={"inputs.last_name"}
            register={register("user_surname", {
              required: t("validation.required"),
              minLength: {
                value: 2,
                message: t("validation.minLength", { length: 2 }),
              },
            })}
            error={errors.user_surname?.message}
          />
          <Input
            type={"tel"}
            name={"phone"}
            id={"phone"}
            label={"inputs.phone"}
            pattern={"^\\+?\\d{10,15}$"}
            autocomplite={"tel"}
            register={register("phone", {
              required: t("validation.required"),
              pattern: {
                value: /^\+?\d{10,15}$/,
                message: t("validation.phone"),
              },
            })}
            error={errors.phone?.message}
          />
          <Input
            type={"email"}
            id={"email"}
            name={"email"}
            label={"inputs.email"}
            autocomplite={"email"}
            register={register("email", {
              required: t("validation.required"),
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: t("validation.email"),
              },
            })}
            error={errors.email?.message}
          />

          <Input
            type={"textarea"}
            name={"user_masssge"}
            id={"user_masssge"}
            label={"inputs.message"}
            register={register("user_message")}
          />
          <Button text="Click me" variant="modal" />
        </form>
      </div>
    </div>
  );
};

export default Modal;
