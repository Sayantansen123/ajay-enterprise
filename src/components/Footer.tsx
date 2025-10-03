import { motion } from "framer-motion";
import { toast } from "sonner";
import { Toaster as Sonner } from "@/components/ui/sonner";

const Footer = () => {
  const handleCopy: any = (textToCopy) => {
    navigator.clipboard.writeText(textToCopy);
    toast.success("Copied to clipboard!");
  };
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-foreground text-background py-12 sm:py-16"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg sm:text-xl font-normal mb-3 sm:mb-4 text-background">
              Ajay enterprises
            </h3>
            <p className="text-muted-foreground text-xs sm:text-sm mb-4 opacity-70">
              Your trusted partner in industrial filtration solutions. Quality,
              reliability, and excellence in every product.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-sm font-medium mb-4 text-background">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="#home"
                  className="text-muted-foreground opacity-70 hover:text-background transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-muted-foreground opacity-70 hover:text-background transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-muted-foreground opacity-70 hover:text-background transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-muted-foreground opacity-70 hover:text-background transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-sm font-medium mb-4 text-background">
              Contact Info
            </h4>
            <div className="space-y-2 text-xs text-muted-foreground opacity-70">
              <p>
                Email:{" "}
                <span
                  onClick={() => handleCopy("ajay.y.enterprises@gmail.com")}
                  className="hover:text-blue-400 cursor-pointer"
                >
                  ajay.y.enterprises@gmail.com
                </span>
              </p>
              <p>
                Phone:{" "}
                <span
                  onClick={() => handleCopy("+91 9892431469")}
                  className="hover:text-blue-400 cursor-pointer"
                >
                  +91 9892431469
                </span>{" "}
                /{" "}
                <span
                  onClick={() => handleCopy("+91 9869633698")}
                  className="hover:text-blue-400 cursor-pointer"
                >
                  +91 9869633698
                </span>
              </p>
              <p>Address : Bldg. No. 17, Flat No. 112,</p>
              <p>Nr. Ganpati Mandir, Sion (e)</p>
              <p>Mumbai - 400 022</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-muted-foreground/20 mt-12 pt-8 text-center"
        >
          <p className="text-xs text-muted-foreground opacity-70">
            © 2025 Ajay Enterprises. All rights reserved. | Quality Filtration
            Solutions
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
