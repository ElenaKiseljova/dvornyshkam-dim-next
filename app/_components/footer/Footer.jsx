// import { useTranslation } from "react-i18next";

import "./footer.scss";

const Footer = () => {
  const { t } = { t: (x) => x }; // useTranslation();

  return (
    <footer>
      <div className="footer__main">
        <a href="/" className="logo__wrapper">
          <img className="logo" src="/images/logo.png" alt="logo" />
        </a>
        <h2 className="hero__title">{t("hero_section.title")}</h2>
      </div>
    </footer>
  );
};

export default Footer;
