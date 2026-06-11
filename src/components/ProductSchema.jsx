import { Helmet } from "react-helmet-async";
import { product } from "../data/product";

const ProductSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Yukkon Water Level Controller",
    image: product.image,
    description:
      "Automatic water level controller with overflow and dry run protection.",
    brand: {
      "@type": "Brand",
      name: "Yukkon",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "25",
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default ProductSchema;
