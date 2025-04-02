import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="container mx-auto px-4 py-6 flex justify-between items-center z-10">
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-between w-full"
      >
        <Image src="/kripLogo.png" alt="krip logo" width={150} height={70} />
        <Button>
          <Link target="_blank" rel="noopener noreferrer" href="https://linktr.ee/krip.ai">
            Follow our Journey
          </Link>
        </Button>
      </motion.div>
    </header>
  );
}
