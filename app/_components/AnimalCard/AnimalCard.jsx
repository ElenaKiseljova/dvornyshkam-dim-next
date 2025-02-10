import { Link } from "@/i18n/routing";

// import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import { rotateAndScale } from "@/app/_constants/animations";
import { FaDog } from "react-icons/fa6";
import { TbVaccine } from "react-icons/tb";

import "./AnimalCard.scss";

const AnimalCard = ({ animal }) => {
  const { slug, category, img, name, gender, age, vaccine, animals } =
    animal || {};

  const { t } = { t: (x) => x }; // useTranslation();

  const openHandler = (evt) => {
    evt.preventDefault();

    // TO DO: toggle Modal store (redux, zustand, mobx, etc.) state to true
    //   setIsModalOpen(true);
    console.log(
      "TO DO: toggle Modal store (redux, zustand, mobx, etc.) state to true"
    );
  };

  return (
    <motion.div {...rotateAndScale} className="animal">
      <Link href={`/animals/${category}/${slug}`} className="animal__link">
        <div className="animal__info">
          <div className="animal__picture">
            <img src={img} alt={name} />
          </div>
          <div className="animal__description">
            <h3 className="animal__name">{name}</h3>
            <span className="animal__gender">{gender}</span>
            <span className="animal__age">{age}</span>
          </div>
        </div>
        <div className="animal__characteristics">
          <div className="animal__animals">
            {/* // TO DO: what is 'animals'? May be need add title or select another key word for 'green'/'red' values. */}{" "}
            <FaDog style={{ fill: animals ? "green" : "red" }} />{" "}
          </div>
          <div className="animal__vaccine">
            {" "}
            <TbVaccine
              style={{
                fill: vaccine ? "green" : "red",
                stroke: vaccine ? "green" : "red",
              }}
            />{" "}
          </div>
        </div>
        <div className="animal__buttons">
          <button className="animal__choice" onClick={openHandler}>
            {t("search.choice")}
          </button>
          <button className="animal__choice" onClick={openHandler}>
            {t("search.trustee")}
          </button>
        </div>
      </Link>
    </motion.div>
  );
};

export default AnimalCard;
