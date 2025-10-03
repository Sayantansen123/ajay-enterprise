import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import ContactDialog from "./ContactDialog";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Decorative illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center mb-16"
          >
            <div className="relative">
              <svg width="100" height="100" viewBox="0 0 100 100" className="text-primary">
                <circle 
                  cx="50" 
                  cy="50" 
                  r="30" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  fill="none"
                />
                <circle 
                  cx="50" 
                  cy="50" 
                  r="15" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  fill="none"
                />
                <circle cx="50" cy="50" r="5" fill="currentColor" />
              </svg>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl sm:text-3xl font-normal text-foreground mb-6 sm:mb-8"
          >
            Let's work together
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm sm:text-base text-muted-foreground mb-8 sm:mb-12 max-w-xl mx-auto leading-relaxed px-4"
          >
            Ready to enhance your filtration processes? Contact us today to discuss your specific requirements and discover how our solutions can optimize your operations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <ContactDialog>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-light text-primary-foreground px-8 py-3 text-sm font-medium tracking-wide"
              >
                CONTACT US
              </Button>
            </ContactDialog>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;