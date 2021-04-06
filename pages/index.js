import Layout from "../components/layout/Layout";
import Title from "../components/layout/Title";
import Hero from "../components/home/Hero";
import About from "../components/home/About";

export default function Home() {
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
}
