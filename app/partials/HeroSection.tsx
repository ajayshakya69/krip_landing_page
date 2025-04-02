import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface HeroSectionProp {
  saveWaitListUser: (email: string) => void;
  email: string;
  setemail: React.Dispatch<React.SetStateAction<string>>;
}

export default function HeroSection({
  saveWaitListUser,
  email,
  setemail,
}: HeroSectionProp) {
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-4 z-10">
      <div className="w-full mx-auto text-center mt-14">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          AI-Powered Professionals for the Future Of Work
          <div className="relative inline-block w-full my-3">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                duration: 1.5,
              }}
              className="absolute left-0 right-0 text-center "
            >
              Coming Soon
            </motion.span>
            <span className="opacity-0">Coming Soon</span>
          </div>
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          Experience Krip's AI-powered platform that connects businesses with
          top-tier talent, transforming project ideas into high-quality
          deliverables.
        </motion.p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          {[
            { value: "3x", label: "Faster Project Complettion" },
            { value: "30%", label: "Less Cost Per Project" },
            { value: "24/7", label: "AI assistance" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(78, 204, 163, 0.3)",
                transition: { duration: 0.2 },
              }}
              className="relative rounded-lg border border-[#1A5F4C] bg-[#0A1A18] p-6 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                className="text-5xl font-bold text-[#4ECCA3] mb-2"
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-md mx-auto"
        >
          <p className="text-gray-300 mb-4">
            Be the first to know when we launch
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <Input
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className="bg-[#0A1A18] border-[#1A5F4C] text-white focus:border-[#4ECCA3] transition-colors duration-300"
            />
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={(e) => saveWaitListUser(email)}
                className="bg-[#4ECCA3] hover:bg-[#3DB893] text-black transition-colors duration-300 w-full sm:w-auto"
              >
                <Mail className="mr-2 h-4 w-4" /> Notify Me
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
