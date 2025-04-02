import { motion } from "framer-motion";
import { socialIcons } from "../page.constant";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container mx-auto px-4 py-8 mt-auto z-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="flex flex-col md:flex-row justify-between items-center"
      >
        <div className="text-gray-400 text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Krip.ai, All rights reserved
        </div>
        <div className="flex space-x-6">
          {socialIcons.map((social, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.2 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="#"
                className="text-gray-400 hover:text-[#4ECCA3] transition-colors duration-300"
              >
                <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
                  <path d={social.icon} />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </footer>
  );
}
