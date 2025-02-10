import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import { PiTelegramLogo } from "react-icons/pi";

import { slideFromBottom } from "@/app/_constants/animations";
import Button from "@/app/_components/button/Button";

import "./contactForm.scss";

const ContactForm = ({ data, isOpen }) => {
  const t = useTranslations();

  // TO DO: isOpen is may be openHandler like in other components?
  return (
    <motion.ul {...slideFromBottom} className="contactForm">
      {data.map((item, key) => (
        <li key={key} className="contactForm__item">
          <p>{item.name}</p>
          {(item.key === "phone" || item.key === "telegram") && (
            <div>
              {item.key === "phone" && (
                <a href={`tel:${item.value}`}>{item.value}</a>
              )}

              {item.key === "telegram" && (
                <a
                  href={`https://t.me/${item.value}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PiTelegramLogo />
                </a>
              )}
            </div>
          )}
          {item.key === "email" && (
            <a href={`mailto:${item.value}`}>{item.value}</a>
          )}
        </li>
      ))}
      <Button text={t("buttons.contact")} onClick={(evt) => console.log(evt)} />
    </motion.ul>
  );
};

export default ContactForm;
