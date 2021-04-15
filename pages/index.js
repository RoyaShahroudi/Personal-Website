import Layout from "../components/layout/Layout";
import Title from "../components/layout/Title";
import Hero from "../components/home/Hero";
import About from "../components/home/About";

import Link from "next/link";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Homepage = () => {
  const { t } = useTranslation("common");

  return (
    <Layout>
      <Title
        title="Home"
        description="computer engineering and web development"
      />
      <Hero />
      <About />
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "mainNavbar"])),
  },
});

export default Homepage;
