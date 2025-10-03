import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ContactDialog from "./ContactDialog";

const Header = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
    >
      <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div className="flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg sm:text-xl font-normal text-foreground"
          >
            Ajay enterprises
          </motion.div>
          
          <motion.nav 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex space-x-6 lg:space-x-8"
          >
            <a href="#home" className="text-sm text-muted-foreground hover:text-foreground transition-colors">HOME</a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">ABOUT</a>
            <a href="#products" className="text-sm text-muted-foreground hover:text-foreground transition-colors">PRODUCTS</a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">CONTACT</a>
          </motion.nav>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden sm:block"
          >
            <ContactDialog>
              <Button 
                variant="default" 
                size="sm"
                className="bg-primary hover:bg-primary-light text-primary-foreground text-xs sm:text-sm px-4 sm:px-6 py-2"
              >
                CONTACT US
              </Button>
            </ContactDialog>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;