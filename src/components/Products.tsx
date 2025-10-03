import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import fbdBags from "@/assets/fdb_bags.png";
import centrifugeBags from "@/assets/centrifuge_bags.png";
import sparklerPads from "@/assets/sparkler_filter_pads.png";
import dustCollectionBags from "@/assets/dirt_collector.png";
import filterPressSheets from "@/assets/press_sheets.png";

const products = [
  {
    id: 1,
    name: "FBD Bags",
    description:
      "High-quality fluid bed dryer bags designed for optimal airflow and superior filtration performance. Perfect for pharmaceutical and chemical applications requiring precise particle separation.",
    image: fbdBags,
    features: [
      "High-temperature resistance",
      "Superior airflow design",
      "FDA compliant materials",
    ],
  },
  {
    id: 2,
    name: "Centrifuge Bags",
    description:
      "Precision-engineered centrifuge filter bags that deliver exceptional separation efficiency. Built to withstand high rotational forces while maintaining consistent filtration quality.",
    image: centrifugeBags,
    features: [
      "High centrifugal force resistance",
      "Precise mesh patterns",
      "Long-lasting durability",
    ],
  },
  {
    id: 3,
    name: "Sparkler Filter Pads",
    description:
      "Advanced sparkler filter pads offering exceptional clarity and purity for liquid filtration. Engineered for consistent performance in demanding industrial environments.",
    image: sparklerPads,
    features: [
      "Superior clarity results",
      "Chemical compatibility",
      "Easy installation",
    ],
  },
  {
    id: 4,
    name: "Dust Collection Bags",
    description:
      "Industrial-grade dust collection bags designed for efficient particulate capture and air purification. Essential for maintaining clean working environments in heavy industries.",
    image: dustCollectionBags,
    features: [
      "High capture efficiency",
      "Anti-static properties",
      "Weather resistant",
    ],
  },
  {
    id: 5,
    name: "Filter Press Sheets",
    description:
      "Premium filter press sheets engineered for maximum dewatering efficiency and solids retention. Ideal for waste treatment and process filtration applications.",
    image: filterPressSheets,
    features: [
      "Maximum dewatering",
      "High solids retention",
      "Chemical resistant",
    ],
  },
];

const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="py-16 sm:py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-normal text-foreground mb-4 sm:mb-6">
            Products
          </h2>
          <div className="w-12 h-0.5 bg-primary mx-auto mb-6 sm:mb-8"></div>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            Discover our comprehensive range of industrial filtration solutions,
            each designed to deliver exceptional performance and reliability for
            your specific applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mt-12 sm:mt-20">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-muted rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:shadow-card transition-all duration-300"
            >
              <div className="mb-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-xl overflow-hidden"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full  object-cover"
                  />
                </motion.div>
              </div>

              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                >
                  <h3 className="text-lg sm:text-xl font-medium text-primary mb-2 sm:mb-3">
                    {product.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                    {product.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-foreground">
                      Key Features:
                    </h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-xs text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12 sm:mt-20 bg-muted rounded-xl sm:rounded-2xl p-6 sm:p-12"
        >
          <p className="text-xs sm:text-sm text-muted-foreground italic max-w-3xl mx-auto leading-relaxed">
            "EACH PRODUCT IS MANUFACTURED WITH A COMMITMENT TO QUALITY, ENSURING
            PREMIUM FILTRATION SOLUTIONS THAT MEET THE EXCLUSIVE NEEDS OF MODERN
            INDUSTRIES."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
