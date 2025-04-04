"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import useModalStore from "@/hooks/useModalStore";
import Modal from "@/components/UI/modal/Modal";
import ModalForm from "@/components/UI/modalForm/ModalForm";
import Accordion from "@/components/UI/accordion/Accordion";
import Button from "@/components/UI/button/Button";
import {
  slideFromLeft,
  slideFromBottom,
  heroAnimationX,
} from "@/constants/animations";

import adviseAccordionData from "@/data/adviseAccordionData";

import "./page.scss";

export default function AdvisePage() {
  const t = useTranslations();

  const { openModal } = useModalStore();

  const openHandler = (evt) => {
    evt.preventDefault();
    openModal("modal-form");
  };

  return (
    <section className="advise-page">
      <motion.h2 {...slideFromLeft} {...heroAnimationX} className="title h2">
        {t("advise-page.title")}
      </motion.h2>

      <Accordion data={adviseAccordionData} />

      <motion.p {...slideFromBottom} className="advise-page__content">
        {t("advise-page.content")}
      </motion.p>

      <Button text={t("buttons.call")} onClick={openHandler} variant="advice" />
    </section>
  );
}
