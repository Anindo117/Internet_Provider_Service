import ContactForm from "@/components/contacts/ContactForm";
import ContactInfo from "@/components/contacts/ContactInfo";
import GoogleMap from "@/components/contacts/GoogleMap";

export const metadata = {
  title: "Contact Us - ISP Service Provider",
  description:
    "Get in touch with our team for any questions about our internet, TV, and mobile services.",
};

export default function ContactPage() {
  return (
    <div className="inner-page text-page margin-top">
      <div className="row centered">
        <div className="col-xl-12 col-xs-12 text-page">
          <ContactInfo />
          <GoogleMap />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
