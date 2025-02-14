"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import { slideFromBottom } from "@/constants/animations";

import DonateList from "@/data/donateList";

import "./donateSection.scss";

const DonateSection = () => {
  const t = useTranslations();

  return (
    <motion.section
      {...slideFromBottom}
      viewport={{ once: false }}
      className="donate"
    >
      <h2 className="donate__title h2">{t("donate.title")}</h2>

      <ul className="donate__option">
        {DonateList.map((item, key) => (
          <li key={key}>
            <a href={item.src} target="_blank" rel="noopener noreferrer">
              <div className="img__container">
                <img src={item.logo} alt={`${item.name}logo`} />
              </div>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </motion.section>
  );
};

export default DonateSection;
