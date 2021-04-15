import Layout from "../components/layout/Layout";
import Title from "../components/layout/Title";
import ContactForm from "../components/contact/ContactForm";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";


const ContactPage = () => {
  return (
    <Layout>
      <Title title="Contact" description="Send me your messages" />
      <ContactForm />
    </Layout>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["contactPage", "mainNavbar"])),
  },
});

export default ContactPage;