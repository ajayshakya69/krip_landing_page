"use client";

import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Header from "./partials/Header";
import HeroSection from "./partials/HeroSection";
import Services from "./partials/Services";
import Footer from "./partials/Footer";
import { supabase } from "@/services/supabase/supabseClient";
import { toast } from "react-toastify";

export default function ComingSoonPage() {
  const [mounted, setMounted] = useState(false);
  const [email, setemail] = useState<string>("");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  async function saveWaitListUser(email: string) {
    if (email.trim() == "") return toast.warn("Please provide email");
    const { error } = await supabase
      .from("freelancers")
      .insert({ email });

    if (error) toast.error("Something went wrong, try again later");
    else toast.success("Your email added, w'll contact you soon ...");

    setemail("");
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#060E0E] relative overflow-hidden">
      {/* Gradient effects with animations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
        className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-[#0D2D25] rounded-full blur-[150px]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-[#0D2D25] rounded-full blur-[150px]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-[#1A5F4C] rounded-full blur-[150px]"
      />

      <Header />
      <HeroSection
        saveWaitListUser={saveWaitListUser}
        email={email}
        setemail={setemail}
      />
      <Services />
      <Footer />
    </div>
  );
}
