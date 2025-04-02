import { motion } from "framer-motion";
import { services } from "../page.constant";
import { Button } from "@/components/ui/button";

export default function Services() {
  return (
    <section id="services" className="py-16 z-10">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <div className="inline-block rounded-full bg-[#0A1A18] border border-[#1A5F4C] px-4 py-1 text-sm text-[#4ECCA3] mb-4">
          Our Services
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Save time and effort with{" "}
          <span className="text-[#4ECCA3]">AI-driven</span>, user-friendly
          features
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Our platform connects businesses with top talent and streamlines
          project workflows with powerful AI tools.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: service.delay }}
            whileHover={{
              y: -10,
              boxShadow: "0 10px 30px rgba(78, 204, 163, 0.2)",
              transition: { duration: 0.2 },
            }}
            className="bg-[#0A1A18] border border-[#1A5F4C] rounded-lg p-6 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-[#1A5F4C] bg-opacity-30 rounded-full flex items-center justify-center mb-4">
              <span className="text-[#4ECCA3] text-xl font-bold">
                {index + 1}
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              {service.title}
            </h3>
            <p className="text-gray-400">{service.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-12 text-center"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <Button className="bg-[#4ECCA3] hover:bg-[#3DB893] text-black text-lg px-8 py-6 h-auto transition-colors duration-300">
            Join the Waitlist
          </Button>
        </motion.div>
      </motion.div>
    </div>
  </section>
  )
}
