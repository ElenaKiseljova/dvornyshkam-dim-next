"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import {
  slideFromLeft,
  slideFromRight,
  slideFromBottom,
  scale,
} from "@/constants/animations";

import SocialList from "@/components/contacts/SocialList";
import ContactForm from "@/components/contactForm/ContactForm";
import VisitedUs from "@/components/visitedUs/VisitedUs";
import Map from "@/components/map/Map";

import ContactFormData from "@/data/contactFormData";
import VisitedUsDate from "@/data/visitedUsDate";
import contactPageData from "@/data/contactPageData";
import { ContactsSocial } from "@/data/contactsList";

import "./contactPage.scss";

export default function ContactPage() {
  const {
    title,
    header,
    headerContent,
    socialHeader,
    responseble,
    sterilaz,
    tomuch,
    slogan,
  } = contactPageData || {};
  const t = useTranslations();

  return (
    <section className="contact-page">
      <motion.h2 {...slideFromLeft} className="contact-page__title">
        {t(title)}
      </motion.h2>

      <motion.div {...slideFromRight} className="contact-page__adres">
        <span className="contact-page__header">{t(header)}</span>
        <p className="contact-page__content">{t(headerContent)}</p>
      </motion.div>
      <motion.div {...slideFromBottom} className="contact-page__social">
        <span className="contact-page__header">{t(socialHeader)}</span>
        <SocialList data={ContactsSocial} />
      </motion.div>

      <ContactForm data={ContactFormData} />

      <motion.div {...scale} className="contact-page__info">
        <h2 className="contact-page__info--header h2">
          {t(responseble)}
          <i>{t(sterilaz)}</i>
        </h2>
        <p className="contact-page__info--content">{t(tomuch)}</p>
        <p className="contact-page__info--content">{t(slogan)}</p>
      </motion.div>

      <div className="contact-page__contact">
        <VisitedUs data={VisitedUsDate} />

        <Map data={""} />
      </div>
    </section>
  );
}
