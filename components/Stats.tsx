'use client';
import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';

function Counter({ value, label, text }: { value: number; label: string; text: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const spring = useSpring(0, { duration: 0.5 });

  if (isInView) spring.set(value);

  const display = useTransform(spring, (latest) => Math.round(latest));

  return (
    <div ref={ref} className="text-center p-8 bg-slate-900 rounded-3xl border border-slate-800">
      <motion.div className="text-5xl font-black text-[#df6e32] mb-2">
        <motion.span>{display}</motion.span>+
      </motion.div>
      <h3 className="text-xl font-bold text-white mb-2">{label}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{text}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-20 px-4 container mx-auto">
      <div className="grid md:grid-cols-3 gap-8">
        <Counter value={25} label="Yıllık Sektör Tecrübesi" text="2001 yılından bugüne, sürekli değişen web teknolojilerine öncülük ediyor; geçici trendlerin ötesinde kalıcı değer katıyoruz." />
        <Counter value={300} label="Başarılı Proje Teslimi" text="E-ticaret devlerinden kurumsal markalara kadar yüzlerce başarı hikayesine imza atarak, müşterilerimizin cirolarını artırdık." />
        <Counter value={98} label="Müşteri Memnuniyeti" text="Proje teslimatıyla bitmeyen iş ortaklığımız ve 7/24 teknik destek güvencemizle, işinizi kendi işimiz gibi sahipleniyoruz." />
      </div>
    </section>
  );
}