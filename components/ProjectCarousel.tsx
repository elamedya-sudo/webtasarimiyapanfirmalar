'use client';
import { motion } from 'framer-motion';

const projeler = ["/images/projeler/tonermasters.png", "/images/projeler/veluxe.jpg", "/images/projeler/dwt.jpg", "/images/projeler/vicom-ref.png", "/images/projeler/ref-render.png"];

export default function ProjectCarousel() {
  return (
    <div className="overflow-hidden py-10 bg-white">
      <motion.div 
        className="flex gap-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
      >
        {[...projeler, ...projeler].map((src, i) => (
          <div key={i} className="w-64 h-40 flex-shrink-0 bg-gray-100 rounded-2xl overflow-hidden border border-gray-200">
            <img src={src} className="w-full h-full object-cover" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}