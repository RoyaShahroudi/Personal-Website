import Layout from "../components/layout/Layout";
import Title from "../components/layout/Title";
import ContactForm from "../components/contact/ContactForm";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";


const ContactPage = () => {
  
  // const { t } = useTranslation("common");

  return (
    <Layout>
      <Title title="Contact" description="Send me your messages" />
      <ContactForm />
    </Layout>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "aboutPage", "mainNavbar"])),
  },
});

export default ContactPage;