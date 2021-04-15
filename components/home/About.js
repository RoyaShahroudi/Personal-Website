import { useTranslation } from "next-i18next";

const About = () => {
  const { t } = useTranslation("common");

  return (
    <section className="bg-white py-16 grid place-items-center">
      <div className="container">
        <div>
          <h2 className="py-4 text-2xl font-bold text-primary text-center">
            {t("aboat-me")}
          </h2>
        </div>
        <div className="text-footer text-center text-lg">
          <p>
            {t("aboat-l1")}
            <br />
            {t("aboat-l2")}
            <br />
            {t("aboat-l3")}
            <br />
            {t("aboat-l4")}
          </p>
          <p>{t("aboat-l5")}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
