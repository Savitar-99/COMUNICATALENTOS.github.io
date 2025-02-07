import React from 'react';
import { motion } from 'framer-motion';
import { Scale } from 'lucide-react';

const AvisoLegal = () => {
  return (
    <div className="pt-24 px-4 max-w-7xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex items-center justify-center gap-4 mb-12">
          <Scale className="w-8 h-8 text-indigo-600" />
          <h1 className="text-4xl font-bold text-center text-gray-800">
            Aviso Legal
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-8 rounded-lg shadow-lg prose prose-indigo max-w-none"
        >
          <p className="text-lg text-gray-600">
            En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, le informamos que el titular de esta web es Teresa Cifuentes Junquera.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AvisoLegal;