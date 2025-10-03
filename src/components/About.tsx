import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-background rounded-2xl sm:rounded-3xl p-6 sm:p-12 md:p-16 shadow-card">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-8 sm:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-normal text-foreground mb-4 sm:mb-6">About Us</h2>
              <div className="w-12 h-0.5 bg-primary mx-auto"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4 sm:space-y-6 text-muted-foreground leading-relaxed"
            >
              <p className="text-sm sm:text-base">
                At <strong className="text-foreground">Ajay Enterprises</strong>, we are committed to providing exceptional filtration solutions that meet the highest standards of quality and performance. With years of expertise in industrial filtration, we understand the critical role that reliable filtration plays in your operations.
              </p>
              
              <p className="text-sm sm:text-base">
                Our comprehensive range of filtration products is designed to address diverse industrial needs, from pharmaceutical and chemical processing to food and beverage production. We pride ourselves on delivering solutions that not only meet but exceed industry expectations.
              </p>
              
              <p className="text-sm sm:text-base">
                Every product is manufactured with a commitment to quality, utilizing premium materials and innovative technologies that ensure optimal performance and durability. Our team of experts works closely with clients to provide customized solutions that meet the exclusive needs of modern industries.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;