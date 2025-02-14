import { useTranslations } from "next-intl";

import "./NotFoundPage.scss";

export default function NotFoundPage() {
  // TO DO: Need some styles
  const t = useTranslations("NotFound");

  return (
    <div className="not-found-page">
      <h1 className="not-found-page__title h1">
        <b>404</b> - {t("title")}
      </h1>
    </div>
  );
}
