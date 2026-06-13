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
      "https://www.linkedin.com/posts/yukkon-water-level-controller_yukkon-waterlevelcontroller-watermanagement-activity-7471487500713230337-_pg2?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAhYt08BQObfKWf86DAJsARH8iIACoTHkdo",
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
