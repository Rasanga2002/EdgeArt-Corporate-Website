import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { Zap, Settings, PenTool, Layers, Check } from 'lucide-react';
export function Services() {
  const services = [{
    id: 'laser-cutting',
    title: 'Laser Cutting',
    icon: <Zap className="w-10 h-10 text-white" />,
    description: 'Our high-power laser cutting services offer precision and speed for a wide range of materials including steel, aluminum, and alloys.',
    features: ['Thickness up to 25mm', 'Complex geometries', 'Clean edges', 'Minimal thermal distortion'],
    image: 'https://images.unsplash.com/photo-1625153669622-f9466d655b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  }, {
    id: 'cnc-cutting',
    title: 'CNC Cutting',
    icon: <Settings className="w-10 h-10 text-white" />,
    description: 'Computer Numerical Control (CNC) cutting for high-precision parts. Ideal for heavy-duty industrial components and detailed architectural elements.',
    features: ['3D contouring', 'High repeatability', 'Tight tolerances', 'Wide material compatibility'],
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  }, {
    id: 'fibre-marking',
    title: 'Fibre Marking',
    icon: <PenTool className="w-10 h-10 text-white" />,
    description: 'Permanent laser marking solutions for product identification, branding, barcodes, and serial numbers on metal surfaces.',
    features: ['Permanent & durable', 'High contrast', 'Non-contact process', 'Eco-friendly'],
    image: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  }, {
    id: 'fibre-laser',
    title: 'Fibre Laser Works',
    icon: <Layers className="w-10 h-10 text-white" />,
    description: 'Specialized fibre laser applications for fine cutting and engraving, offering superior energy efficiency and beam quality.',
    features: ['Micro-machining', 'High speed', 'Low maintenance', 'Reflective metal processing'],
    image: 'https://images.unsplash.com/photo-1531297461136-82lw8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  }];
  return <Layout>
      {/* Header */}
      <div className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive manufacturing solutions tailored to your industrial
            needs.
          </p>
        </div>
      </div>

      <Section>
        <div className="space-y-24">
          {services.map((service, index) => <div key={service.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
              <div className="lg:w-1/2">
                <div className="relative rounded-lg overflow-hidden shadow-xl aspect-video">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-0 left-0 p-4 bg-red-600">
                    {service.icon}
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    Key Features:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => <div key={idx} className="flex items-center">
                        <Check className="w-4 h-4 text-red-600 mr-2" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>)}
                  </div>
                </div>

                <Link to="/contact">
                  <Button>Request Quote for {service.title}</Button>
                </Link>
              </div>
            </div>)}
        </div>
      </Section>

      <Section background="black" className="text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Need a Custom Solution?
        </h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          We understand that every project is unique. Contact our engineering
          team to discuss your specific requirements.
        </p>
        <Link to="/contact">
          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900">
            Contact Engineering Team
          </Button>
        </Link>
      </Section>
    </Layout>;
}