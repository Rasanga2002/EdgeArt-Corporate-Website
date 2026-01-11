import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Zap, Settings, PenTool, Layers } from 'lucide-react';
import { Layout } from '../components/Layout';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
export function Home() {
  return <Layout>
      {/* Hero Section */}
      <div className="relative bg-gray-900 h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1565043666747-69f6646db940?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Industrial CNC Machine" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-900/30 border border-red-800 text-red-400 text-sm font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-red-500 mr-2"></span>
              Precision Engineering Excellence
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Advanced Manufacturing &{' '}
              <span className="text-red-500">CNC Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              EdgeArt delivers high-precision laser cutting, CNC machining, and
              industrial fabrication services. We turn complex designs into
              reality with unmatched accuracy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Get a Quote
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="border-gray-600 text-white hover:border-white hover:text-white hover:bg-white/5">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Preview */}
      <Section background="white">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Core Capabilities
          </h2>
          <p className="text-gray-600 text-lg">
            Leveraging state-of-the-art technology to provide comprehensive
            manufacturing solutions for industrial partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[{
          icon: <Zap className="w-8 h-8 text-red-600" />,
          title: 'Laser Cutting',
          desc: 'High-speed precision cutting for various metals with clean edges and minimal waste.'
        }, {
          icon: <Settings className="w-8 h-8 text-red-600" />,
          title: 'CNC Cutting',
          desc: 'Computer-controlled machining for complex 3D shapes and intricate parts.'
        }, {
          icon: <PenTool className="w-8 h-8 text-red-600" />,
          title: 'Fibre Marking',
          desc: 'Permanent, high-contrast marking for traceability and branding on metal surfaces.'
        }, {
          icon: <Layers className="w-8 h-8 text-red-600" />,
          title: 'Fibre Laser Works',
          desc: 'Advanced fibre laser solutions for specialized industrial applications.'
        }].map((service, idx) => <Card key={idx} hover className="p-6 text-center group">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600 transition-colors duration-300">
                <div className="group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.desc}</p>
              <Link to="/services" className="text-red-600 font-medium hover:text-red-700 inline-flex items-center">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Card>)}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section background="gray">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Industry Leaders Choose EdgeArt
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              We combine technical expertise with modern machinery to deliver
              results that meet the highest industrial standards.
            </p>

            <div className="space-y-4">
              {['High Precision Engineering', 'Modern CNC Machinery', 'Skilled Professional Team', 'On-time Project Delivery', 'Competitive Industrial Pricing', 'Quality Assurance Guarantee'].map((item, idx) => <div key={idx} className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{item}</span>
                </div>)}
            </div>

            <div className="mt-8">
              <Link to="/about">
                <Button variant="secondary">About Our Company</Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-red-600/10 rounded-xl transform rotate-3"></div>
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Engineers working" className="relative rounded-lg shadow-xl w-full" />
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="black" className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Start Your Project?
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
          Contact us today for a consultation or quote. Our team is ready to
          assist with your manufacturing needs.
        </p>
        <Link to="/contact">
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white border-none">
            Contact Us Now
          </Button>
        </Link>
      </Section>
    </Layout>;
}