import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

import "./footer.scss";

const Footer = async () => {
  const t = await getTranslations();

  return (
    <footer>
      <div className="footer__main">
        <Link href="/" className="logo__wrapper">
          <img className="logo" src="/images/logo.png" alt="logo" />
        </Link>
        <h2 className="hero__title">{t("hero_section.title")}</h2>
      </div>
    </footer>
  );
};

export default Footer;
