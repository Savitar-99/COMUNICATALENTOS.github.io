import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Users, Target, Sparkles } from 'lucide-react';

const TeresaCifuentes = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="relative z-10 text-center text-white px-4"
        >
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Teresa Cifuentes
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Potenciando el talento y las relaciones humanas en equipos empresariales
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Purpose Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-20 px-4 max-w-7xl mx-auto"
      >
        <motion.div 
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Mi Propósito</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Acompaño a las empresas a alcanzar nuevos niveles de éxito, aportando soluciones estratégicas que potencian el talento y las relaciones humanas en los equipos a través del coaching, la formación y los Recursos Humanos.
          </p>
          <p className="mt-6 text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            La pasión por mi trabajo, el compromiso con mis clientes y el trabajo en equipo, ya que sin ti no puedo hacerlo posible, son ingredientes clave para comenzar a trabajar juntos.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className="bg-indigo-600 text-white p-8 rounded-lg shadow-xl text-center transform transition-all duration-300"
        >
          <h3 className="text-2xl font-bold mb-4">
            ¿Estás preparado para transformar tu empresa, potenciar el talento de tu equipo y alcanzar nuevos niveles de éxito?
          </h3>
        </motion.div>
      </motion.section>

      {/* Methodology Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-20 bg-gray-50 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-gray-800 text-center mb-16"
          >
            MI METODOLOGÍA
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-12 h-12 text-indigo-600 mb-4" />,
                title: "Humanización Empresarial",
                description: "Trabajamos humanizando las empresas a través de la comunicación, los Recursos Humanos, la formación y el coaching."
              },
              {
                icon: <Target className="w-12 h-12 text-indigo-600 mb-4" />,
                title: "Enfoque Personalizado",
                description: "Mi metodología está basada en herramientas que se adaptan de forma única e individual a la empresa que solicita nuestra colaboración."
              },
              {
                icon: <Sparkles className="w-12 h-12 text-indigo-600 mb-4" />,
                title: "Equipo Multidisciplinar",
                description: "Contamos con un equipo de grandes profesionales multidisciplinares orientado a las necesidades específicas de cada organización."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  transition: {
                    type: "spring",
                    stiffness: 300
                  }
                }}
                className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300"
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.01 }}
            className="mt-16 bg-white p-8 rounded-lg shadow-lg"
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              Nacida en el seno de una familia de emprendedores, he vivido desde muy pequeña la vida y trayectoria en una empresa familiar. Durante mi carrera profesional he visto que las organizaciones tienen características que las definen como únicas: Las personas que la forman, sus orígenes, su evolución, su cultura organizativa...
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default TeresaCifuentes;