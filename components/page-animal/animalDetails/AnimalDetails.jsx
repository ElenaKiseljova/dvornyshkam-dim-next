"use client";

import { useState, useEffect } from "react";
import { useRouter } from "@/i18n/routing";

import { useTranslations } from "next-intl";

import { FaDog } from "react-icons/fa6";
import { TbVaccine } from "react-icons/tb";

import Button from "@/components/UI/button/Button";

import { getAnimalsCategoryLink, sleep } from "@/utils";

import "./AnimalDetails.scss";

export default function AnimalDetails({ animal }) {
  const router = useRouter();

  const t = useTranslations();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);

    return () => {
      setIsOpen(false);
    };
  }, []);

  const closeHandler = async () => {
    setIsOpen(false);

    await sleep(300);

    router.push(getAnimalsCategoryLink(animal.category));
  };

  return (
    <dialog
      className={`animal-details ${isOpen ? "open" : ""}`}
      open
      onClick={closeHandler}
    >
      {animal && (
        <div className="animal-details__content">
          <header className="animal-details__header">
            <button className="animal-details__close" onClick={closeHandler}>
              X
            </button>
          </header>
          <section className="animal-details__info">
            <ul className="animal-details__img-container">
              {animal.moreImg.map((img, indx) => (
                <li key={indx}>
                  <img
                    className="animal-details__img"
                    src={img}
                    alt={animal.name}
                  />
                </li>
              ))}
            </ul>
            <h3 className="h3">{animal.name}</h3>
            <h3 className="h3">{animal.gender}</h3>
            <h3 className="h3">{animal.age}</h3>
            <div className="animal-details__characteristic">
              <i>
                {" "}
                <FaDog
                  style={{ fill: animal.animals ? "green" : "red" }}
                />{" "}
              </i>
              <i>
                {" "}
                <TbVaccine
                  style={{
                    fill: animal.vaccine ? "green" : "red",
                    stroke: animal.vaccine ? "green" : "red",
                  }}
                />{" "}
              </i>
            </div>
            <footer className="animal-details__footer">
              <Button
                className="animal-details__action"
                text={t("buttons.house")}
                onClick={(evt) => console.log(evt)}
              />
              <Button
                className="animal-details__action"
                text={t("buttons.guard")}
                onClick={(evt) => console.log(evt)}
              />
            </footer>
          </section>
        </div>
      )}
    </dialog>
  );
}
