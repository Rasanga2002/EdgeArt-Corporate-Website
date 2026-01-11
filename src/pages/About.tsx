import React from 'react';
import { Layout } from '../components/Layout';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Target, Eye, Award, Users } from 'lucide-react';
export function About() {
  return <Layout>
      {/* Header */}
      <div className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">About EdgeArt</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Leading the way in precision manufacturing and CNC solutions in Sri
            Lanka.
          </p>
        </div>
      </div>

      {/* Introduction */}
      <Section>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            EdgeArt (Pvt) Ltd is a premier manufacturing company specializing in
            CNC mechanical works and laser technologies. Established with a
            vision to revolutionize the local engineering landscape, we provide
            high-quality, precision-driven solutions for industrial clients,
            construction firms, and manufacturing partners. Our commitment to
            innovation and reliability has made us a trusted name in the
            industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-8 text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To deliver superior engineering solutions through advanced
              technology and skilled craftsmanship, ensuring client satisfaction
              and industrial growth.
            </p>
          </Card>

          <Card className="p-8 text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Eye className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
            <p className="text-gray-600">
              To be the leading provider of CNC and laser manufacturing
              services, recognized for innovation, quality, and sustainable
              practices.
            </p>
          </Card>

          <Card className="p-8 text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Values</h3>
            <p className="text-gray-600">
              Integrity, Precision, Innovation, and Customer-Centricity drive
              everything we do at EdgeArt.
            </p>
          </Card>
        </div>
      </Section>

      {/* Leadership */}
      <Section background="gray">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Leadership
          </h2>

          <div className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-gray-200 min-h-[300px] relative">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Director" className="w-full h-full object-cover" />
            </div>
            <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <Users className="w-5 h-5 text-red-600 mr-2" />
                <span className="text-sm font-bold text-red-600 uppercase tracking-wider">
                  Director
                </span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                K M Ishara Chinthana Perera
              </h3>
              <p className="text-gray-500 mb-6">Director & Lead Engineer</p>
              <p className="text-gray-600 leading-relaxed mb-6">
                With extensive experience in mechanical engineering and
                industrial manufacturing, Mr. Perera leads EdgeArt with a focus
                on technological adoption and operational excellence. His vision
                drives the company's commitment to delivering world-class
                solutions to local and international clients.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </Layout>;
}