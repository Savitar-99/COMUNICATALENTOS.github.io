import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';

const Contacto = () => {
  return (
    <div className="pt-24 px-4 max-w-7xl mx-auto min-h-screen">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center text-gray-800 mb-16"
      >
        Contacto
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-2xl mx-auto text-center"
      >
        <p className="text-xl text-gray-600 mb-12">
          Pueden contactar con Teresa Cifuentes Junquera por los siguientes medios:
        </p>

        <div className="space-y-8">
          <motion.a
            href="tel:618345230"
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center gap-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            <Phone className="w-6 h-6 text-indigo-600" />
            <span className="text-xl font-semibold text-gray-800">618 345 230</span>
          </motion.a>

          <motion.a
            href="mailto:info@teresacifuentes.es"
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center gap-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            <Mail className="w-6 h-6 text-indigo-600" />
            <span className="text-xl font-semibold text-gray-800">info@teresacifuentes.es</span>
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default Contacto;