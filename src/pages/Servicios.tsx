import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users2, Building2, MessageSquare } from 'lucide-react';

const Servicios = () => {
  const services = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Formación a medida en organizaciones",
    },
    {
      icon: <Users2 className="w-8 h-8" />,
      title: "Coaching",
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Recursos Humanos",
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Comunicación",
    }
  ];

  return (
    <div className="pt-24 px-4 max-w-7xl mx-auto min-h-screen">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center text-gray-800 mb-16"
      >
        Servicios
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white p-8 rounded-lg shadow-lg flex items-center gap-6 group"
          >
            <div className="text-indigo-600 group-hover:text-indigo-500 transition-colors">
              {service.icon}
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">
              {service.title}
            </h2>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Servicios;