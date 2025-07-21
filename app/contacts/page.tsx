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
      <div className="row centered relative lg:mt-12">
        <h2 className="container mx-auto text-center text-3xl md:text-4xl font-bold mb-4 z-10">
          We Offer The{" "}
          <span className="text-[#709D06]">
            Highest-Quality <br />
            Network{" "}
          </span>
          Connections{" "}
        </h2>
        <div className="col-xl-12 col-xs-12 text-page mt-20">
          <ContactInfo />
          <GoogleMap />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
