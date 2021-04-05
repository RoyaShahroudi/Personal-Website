import Layout from "../components/layout/Layout";
import Hero from "../components/home/Hero";
import About from "../components/home/About";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
    </Layout>
  );
}