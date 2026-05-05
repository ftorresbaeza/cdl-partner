"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  Building2, 
  PartyPopper, 
  Truck, 
  Recycle, 
  ClipboardCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Leaf,
  Shield,
  Clock,
  Users,
  Star,
  MessageCircle,
  Send
} from "lucide-react";

const imagenesHero = [
  "/assets/images/young-smiling-woman-cleans-kitchen-her-home.jpg",
  "/assets/images/full-shot-man-cleaning-indoors.jpg",
  "/assets/images/close-up-hairstylist-cleaning-mirror.jpg",
  "/assets/images/puroclean-of-fort-worth--dc38HdQR1M-unsplash.jpg",
];

const logoPath = "/assets/images/logo.jpeg";

const servicios = [
  {
    icon: Building2,
    titulo: "Limpieza Corporativa",
    descripcion: "Aseo de oficinas, espacios de trabajo y zonas comunes. Mantenimiento Diario",
  },
  {
    icon: PartyPopper,
    titulo: "Limpieza de Eventos",
    descripcion: "Limpieza pre y post evento. Preparación y despedida profesional.",
  },
  {
    icon: Truck,
    titulo: "Mantenimiento General",
    descripcion: "Limpieza profunda, mantenimiento integral y servicios especializados.",
  },
  {
    icon: Recycle,
    titulo: "Gestion de Residuos",
    descripcion: "Suministro de insumos y gestión de reciclaje responsable.",
  },
];

const valores = [
  { icon: Shield, titulo: "Confianza", descripcion: "Profesionalismo garantizado en cada servicio" },
  { icon: Clock, titulo: "Puntualidad", descripcion: "Cumplimiento de horarios y plazos acordados" },
  { icon: Leaf, titulo: "Sostenibilidad", descripcion: "Practicas responsables con el medio ambiente" },
  { icon: Users, titulo: "Atencion Personalizada", descripcion: "Soluciones adaptadas a cada cliente" },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-slate-900">
        <div className="flex items-center justify-center min-h-screen">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <a href="#" className="block">
              <img 
                src={logoPath}
                alt="CDL Partner"
                className="h-14 w-auto"
              />
            </a>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600"
          >
            <a href="#servicios" className="hover:text-cyan-600 transition-colors">Servicios</a>
            <a href="#nosotros" className="hover:text-cyan-600 transition-colors">Nosotros</a>
            <a href="#contacto" className="hover:text-cyan-600 transition-colors">Contacto</a>
          </motion.div>
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            href="#contacto"
            className="bg-gradient-to-r from-cyan-500 to-teal-600 text-white px-5 py-2.5 rounded-full font-medium text-sm hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
          >
            Cotizar
          </motion.a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Main background image with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[position:center 30%]"
          style={{ 
            backgroundImage: "url('/assets/images/young-smiling-woman-cleans-kitchen-her-home.jpg')",
            minHeight: '100%',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40" />
        </div>

        {/* Floating shapes - only visible on non-image areas */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-1/4 left-10 w-20 h-20 bg-cyan-100 rounded-2xl opacity-30"
          />
          <motion.div 
            animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-1/3 right-20 w-16 h-16 bg-teal-100 rounded-full opacity-20"
          />
          <motion.div 
            animate={{ y: [0, -30, 0], x: [0, 10, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-20 right-1/4 w-12 h-12 bg-cyan-200 rounded-lg opacity-20 rotate-12"
          />
          <motion.div 
            animate={{ y: [0, 20, 0], rotate: [0, 15, 0] }}
            transition={{ duration: 7, repeat: Infinity }}
            className="absolute bottom-1/3 left-1/4 w-8 h-8 bg-teal-200 rounded-full opacity-25"
          />
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-1/2 left-10 w-6 h-6 bg-cyan-400 rounded-full"
          />
          <motion.div 
            animate={{ scale: [1, 1.1, 1], rotate: [0, 45, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute bottom-20 right-10 w-10 h-10 border-2 border-cyan-300/30 rounded-lg rotate-45"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-cyan-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-cyan-300 mb-6 border border-cyan-500/30">
              <Sparkles className="w-4 h-4" />
              <span>Limpieza Profesional Premium</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Transformamos tus espacios con 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400"> excelencia</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl">
              En <strong className="text-white">CDL Partner</strong> nos especializamos en servicios de limpieza industrial, 
              corporativa y de eventos, deliverando soluciones confiables y adaptadas a cada necesidad.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#contacto"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-cyan-500/30 transition-all"
              >
                Solicitar Cotización
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <a 
                href="#servicios"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-full font-semibold border-2 border-white/30 hover:bg-white/20 backdrop-blur-sm transition-all"
              >
                Ver Servicios
              </a>
            </div>
            
            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-12 flex flex-wrap gap-8"
            >
              <div>
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-sm text-slate-400">Clientes satisfechos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="text-sm text-slate-400">Anos de experiencia</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-sm text-slate-400">Garantizado</div>
              </div>
            </motion.div>

            {/* Trust badges */}
            <div className="mt-6 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-teal-500 border-2 border-slate-900 flex items-center justify-center">
                    <Star className="w-4 h-4 text-white fill-white" />
                  </div>
                ))}
              </div>
              <span className="text-slate-300 text-sm">5.0 Rating en servicios</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            {/* Modern staggered gallery */}
            <div className="relative h-[400px] w-full">
              {/* Main large image - rotated slightly */}
              <motion.div 
                initial={{ rotate: -3 }}
                whileHover={{ scale: 1.03, rotate: 0 }}
                className="absolute left-0 top-0 w-[55%] h-[280px] rounded-3xl overflow-hidden shadow-2xl z-20"
                style={{ 
                  backgroundImage: `url('${imagenesHero[0]}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-white">Limpieza Integral</span>
                </div>
              </motion.div>

              {/* Second image - overlapping, rotated opposite */}
              <motion.div 
                initial={{ rotate: 5 }}
                whileHover={{ scale: 1.03, rotate: 0 }}
                className="absolute right-0 top-8 w-[50%] h-[200px] rounded-3xl overflow-hidden shadow-2xl z-10"
                style={{ 
                  backgroundImage: `url('${imagenesHero[1]}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-white">Espacios Corporativos</span>
                </div>
              </motion.div>

              {/* Third image - bottom left, smaller */}
              <motion.div 
                initial={{ rotate: -2 }}
                whileHover={{ scale: 1.05, rotate: 0 }}
                className="absolute left-4 bottom-0 w-[40%] h-[160px] rounded-2xl overflow-hidden shadow-xl z-30"
                style={{ 
                  backgroundImage: `url('${imagenesHero[2]}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2">
                  <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-white">Detalles Perfectos</span>
                </div>
              </motion.div>

              {/* Fourth image - bottom right, smallest accent */}
              <motion.div 
                initial={{ rotate: 3 }}
                whileHover={{ scale: 1.05, rotate: 0 }}
                className="absolute right-8 bottom-0 w-[35%] h-[140px] rounded-2xl overflow-hidden shadow-xl z-40 border-4 border-white/30"
                style={{ 
                  backgroundImage: `url('${imagenesHero[3]}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/30 to-transparent" />
                <div className="absolute bottom-2 left-2">
                  <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-white">Equipo Profesional</span>
                </div>
              </motion.div>
            </div>
            {/* Decorative elements */}
            <motion.div 
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-3xl opacity-20"
            />
            <motion.div 
              animate={{ rotate: [0, -10, 0] }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full opacity-15"
            />
          </motion.div>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="py-24 bg-white relative overflow-hidden">
        {/* Decorative floating elements */}
        <motion.div 
          animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-full opacity-50"
        />
        <motion.div 
          animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/3 -right-20 w-40 h-40 border border-cyan-200/30 rounded-full"
        />
        <motion.div 
          animate={{ rotate: [0, -15, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-10 left-20 w-16 h-16 border-2 border-teal-100 rounded-2xl rotate-12"
        />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-cyan-50 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Nuestra Oferta</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Servicios Especializados</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Ofrecemos una gestión completa que incluye aseo de oficinas, limpieza pre y post evento, 
              mantenimiento general, suministro de insumos y gestión de reciclaje.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicios.map((servicio, index) => (
              <motion.div
                key={servicio.titulo}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 border border-transparent hover:border-cyan-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <servicio.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{servicio.titulo}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{servicio.descripcion}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Por que elegirnos */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-50" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Shield className="w-4 h-4" />
              <span>Nuestra Diferencia</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Por Que Elegirnos</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Equipos profesionales, planificación operativa y control de calidad, 
              garantizando espacios impeccables.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((valor, index) => (
              <motion.div
                key={valor.titulo}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg shadow-slate-200/50"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <valor.icon className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{valor.titulo}</h3>
                <p className="text-slate-600 text-sm">{valor.descripcion}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre nosotros */}
      <section id="nosotros" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-cyan-50 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Users className="w-4 h-4" />
                <span>Sobre CDL Partner</span>
              </div>
              <h2 className="text-4xl font-bold text-slate-800 mb-6">
                Creemos que la limpieza es mas que una tarea
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Es una forma de transmitir profesionalismo, bienestar y cuidado. 
                Por eso, impulsamos practicas sostenibles y colaboramos con empresas 
                comprometidas con el medio ambiente.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Contamos con equipos profesionales, planificación operativa y control 
                de calidad, garantizando espacios impeccables y una experiencia integral 
                en cada servicio.
              </p>
              
              <div className="space-y-4">
                {[
                  "Gestion integral de limpieza",
                  "Equipos profesionales especializados",
                  "Enfoque de eficiencia y sostenibilidad",
                  "Atencion personalizada a cada cliente"
                ].map((item) => (
                  <motion.div 
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-cyan-500 to-teal-600 rounded-2xl p-6 text-white"
                >
                  <div className="text-3xl font-bold mb-1">100%</div>
                  <div className="text-cyan-100 text-sm">Garantizado</div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-slate-100 rounded-2xl p-6"
                >
                  <div className="text-3xl font-bold text-slate-800 mb-1">24/7</div>
                  <div className="text-slate-600 text-sm">Disponible</div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-slate-100 rounded-2xl p-6"
                >
                  <div className="text-3xl font-bold text-slate-800 mb-1">100+</div>
                  <div className="text-slate-600 text-sm">Empresas</div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl p-6 text-white"
                >
                  <div className="text-3xl font-bold mb-1">15+</div>
                  <div className="text-teal-100 text-sm">Anos</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 bg-gradient-to-br from-cyan-600 via-teal-600 to-cyan-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </div>
        {/* Additional floating elements */}
        <motion.div 
          animate={{ y: [0, -25, 0], rotate: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-20 w-16 h-16 border-2 border-white/20 rounded-lg rotate-12"
        />
        <motion.div 
          animate={{ y: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute top-1/3 right-40 w-8 h-8 bg-white/10 rounded-full"
        />
        <motion.div 
          animate={{ x: [0, 15, 0], y: [0, -15, 0] }}
          transition={{ duration: 9, repeat: Infinity }}
          className="absolute bottom-1/4 left-1/3 w-12 h-12 border border-white/20 rounded-full"
        />
        <motion.div 
          animate={{ rotate: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 11, repeat: Infinity }}
          className="absolute bottom-10 right-1/4 w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-teal-400/20 rounded-2xl"
        />
        
        <div className="max-w-6xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Solicita tu Cotización
            </h2>
            <p className="text-cyan-100 text-lg max-w-2xl mx-auto">
              Completa el formulario y te contactaremos a la brevedad con una propuesta personalizada.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-2xl"
            >
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Nombre</label>
                    <input 
                      type="text" 
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Telefono</label>
                    <input 
                      type="tel" 
                      placeholder="+56 9 XXXX XXXX"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    placeholder="tu@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Tipo de Servicio</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all">
                    <option>Selecciona un servicio</option>
                    <option>Limpieza Corporativa</option>
                    <option>Limpieza de Eventos</option>
                    <option>Mantenimiento General</option>
                    <option>Gestion de Residuos</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Mensaje</label>
                  <textarea 
                    rows={4}
                    placeholder="Cuentanos sobre tu proyecto o necesidades..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all resize-none"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-teal-600 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-xl transition-all"
                >
                  <Send className="w-5 h-5" />
                  Enviar Solicitud
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Contacto Directo</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-cyan-200 text-sm">Telefono</div>
                      <div className="text-white font-semibold">+56 9 0000 0000</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-cyan-200 text-sm">Email</div>
                      <div className="text-white font-semibold">contacto@cdlpartner.cl</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-cyan-200 text-sm">Ubicacion</div>
                      <div className="text-white font-semibold">Santiago, Chile</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">Horarios de Atencion</h3>
                <div className="text-cyan-100 space-y-2">
                  <p>Lunes a Viernes: 8:00 - 20:00</p>
                  <p>Sabados: 9:00 - 18:00</p>
                  <p>Domingos: Emergencia</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/56900000000"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className="fixed bottom-6 right-6 z-50 bg-green-500 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </motion.a>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 relative overflow-hidden">
        {/* Subtle floating decorations */}
        <motion.div 
          animate={{ y: [0, 10, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-0 right-20 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-full"
        />
        <motion.div 
          animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-0 left-1/4 w-20 h-20 border border-teal-500/10 rounded-full"
        />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src={logoPath}
                  alt="CDL Partner"
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-slate-400 max-w-md">
                Especialistas en servicios de limpieza industrial, corporativa y de eventos. 
                Limpieza profesional con enfoque de sostenibilidad.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Limpieza Corporativa</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Limpieza de Eventos</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Mantenimiento General</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Gestion de Residuos</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+56 9 0000 0000</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>contacto@cdlpartner.cl</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Santiago, Chile</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
            <p>2024 CDL Partner. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}