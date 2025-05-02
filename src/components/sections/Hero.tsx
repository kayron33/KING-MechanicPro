import React from 'react';
import { WrenchIcon, CheckCircle } from 'lucide-react';
import Button from '../common/Button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/3807133/pexels-photo-3807133.jpeg" 
            alt="Mecânico trabalhando em motor de carro" 
            className="w-full h-full object-cover transform scale-105 animate-subtle-float"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 lg:pr-12 text-center lg:text-left">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in-down border border-white/20">
              <WrenchIcon className="h-5 w-5 text-orange-400 mr-2" />
              <span className="text-white font-medium">Serviços Especializados em Mecânica</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up leading-tight">
              Mantenha seu Veículo 
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 text-transparent bg-clip-text"> em Perfeito Estado</span>
            </h1>
            
            <p className="text-lg text-slate-200 mb-8 animate-fade-in-up animation-delay-200">
              Serviços profissionais de mecânica por especialistas certificados. 
              Diagnóstico preciso e reparos rápidos para sua segurança e tranquilidade.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-8 animate-fade-in-up animation-delay-300">
              <Link to="/agendamento">
                <Button size="lg" icon={<WrenchIcon size={18} />} className="w-full sm:w-auto px-8 py-4 text-lg">
                  Agendar Serviço
                </Button>
              </Link>
              <Link to="/servicos">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-white border-white/30 hover:bg-white/10 w-full sm:w-auto px-8 py-4 text-lg"
                >
                  Nossos Serviços
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-6 animate-fade-in-up animation-delay-400">
              <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 transition-transform hover:transform hover:scale-105">
                <CheckCircle className="h-5 w-5 text-orange-400 mr-3 flex-shrink-0" />
                <span className="text-white">Mecânicos Certificados</span>
              </div>
              <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 transition-transform hover:transform hover:scale-105">
                <CheckCircle className="h-5 w-5 text-orange-400 mr-3 flex-shrink-0" />
                <span className="text-white">Peças Originais</span>
              </div>
              <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 transition-transform hover:transform hover:scale-105">
                <CheckCircle className="h-5 w-5 text-orange-400 mr-3 flex-shrink-0" />
                <span className="text-white">Preço Justo</span>
              </div>
              <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 transition-transform hover:transform hover:scale-105">
                <CheckCircle className="h-5 w-5 text-orange-400 mr-3 flex-shrink-0" />
                <span className="text-white">Garantia nos Serviços</span>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0 animate-fade-in-right">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-xl">
              <h2 className="text-2xl font-bold text-white mb-6">Agendamento Rápido</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-200 mb-1">Nome Completo</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-slate-400"
                    placeholder="Digite seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-200 mb-1">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-slate-400"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-200 mb-1">Telefone</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-slate-400"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-200 mb-1">Serviço Desejado</label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
                  >
                    <option value="" className="bg-slate-800">Selecione um serviço</option>
                    <option value="troca-oleo" className="bg-slate-800">Troca de Óleo</option>
                    <option value="revisao-freios" className="bg-slate-800">Revisão de Freios</option>
                    <option value="diagnostico" className="bg-slate-800">Diagnóstico do Motor</option>
                    <option value="suspensao" className="bg-slate-800">Suspensão</option>
                    <option value="ar-condicionado" className="bg-slate-800">Ar Condicionado</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-slate-200 mb-1">Data Preferida</label>
                  <input
                    type="date"
                    id="date"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
                  />
                </div>
                <Button type="submit" className="w-full py-4 text-lg font-semibold">
                  Agendar Agora
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;