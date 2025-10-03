import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 sm:pt-24 px-4 bg-background "
    >
      <div className="container mx-auto px-4 sm:px-6 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl font-normal text-foreground mb-6 sm:mb-8 leading-tight px-4"
          >
            Your Partner in <br />
            <span className="text-primary font-medium">
              Powerful Filtration.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-12 max-w-xl mx-auto leading-relaxed px-4"
          >
            Get top-quality filtration solutions created to your needs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-light text-primary-foreground px-8 py-3 text-sm font-medium tracking-wide"
            >
              ABOUT US
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
