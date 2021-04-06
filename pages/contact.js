import Layout from "../components/layout/Layout";
import Title from "../components/layout/Title";
import ContactForm from "../components/contact/ContactForm";

export default function ContactPage() {
  return (
    <Layout>
      <Title title="Contact" description="Send me your messages" />
      <ContactForm />
    </Layout>
  );
}
