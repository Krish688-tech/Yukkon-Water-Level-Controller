import { Helmet } from "react-helmet-async";

const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Yukkon",
    url: "https://www.yukkon.in",
    telephone: "+91 98423 59234",
    image: "YOUR_LOGO_URL",
    address: {
      "@type": "PostalAddress",
      streetAddress: "No 41 Trichy Main Road, Nayara Energy Salamedu, Viluppuram, Tamil Nadu 605403,",
      addressLocality: "Villupuram",
      addressRegion: "Tamil Nadu",
      postalCode: "605 403",
      addressCountry: "IN",
    },

    department: [
      {
        "@type": "Organization",
        name: "Yukkon Corporate Office",
        telephone: "+91 9791462340",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Sudhagar Nagar, Saligramam",
          addressLocality: "Chennai",
          addressRegion: "Tamil Nadu",
          addressCountry: "IN",
        },
      },
    ],
    description:
      "Yukkon provides smart water level controllers, installation and water management solutions.",
    areaServed: "Tamil Nadu",
    sameAs: [
      "https://www.facebook.com/YukkonWaterSolutions",
      "https://www.instagram.com/yukkon1996/",
      "www.linkedin.com/in/yukkon-water-level-controller-22aaa7415",
      "https://www.youtube.com/@GPALANIGANESAN",
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default LocalBusinessSchema;
