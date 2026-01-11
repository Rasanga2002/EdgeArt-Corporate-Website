import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 1500);
  };
  return <Layout>
      <div className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Get in touch with our team for quotes, inquiries, or to schedule a
            visit.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h2>
            <p className="text-gray-600 mb-8">
              We are here to answer any questions you may have about our
              services. Reach out to us and we'll respond as soon as we can.
            </p>

            <div className="grid grid-cols-1 gap-6 mb-8">
              <Card className="p-6 flex items-start">
                <MapPin className="w-6 h-6 text-red-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Our Location</h3>
                  <p className="text-gray-600">
                    123 Industrial Zone, Colombo, Sri Lanka
                  </p>
                </div>
              </Card>

              <Card className="p-6 flex items-start">
                <Phone className="w-6 h-6 text-red-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Phone Number</h3>
                  <p className="text-gray-600">+94 11 234 5678</p>
                  <p className="text-gray-600">+94 77 123 4567</p>
                </div>
              </Card>

              <Card className="p-6 flex items-start">
                <Mail className="w-6 h-6 text-red-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    Email Address
                  </h3>
                  <p className="text-gray-600">info@edgeart.lk</p>
                  <p className="text-gray-600">sales@edgeart.lk</p>
                </div>
              </Card>

              <Card className="p-6 flex items-start">
                <Clock className="w-6 h-6 text-red-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    Working Hours
                  </h3>
                  <p className="text-gray-600">Mon - Fri: 8:00 AM - 5:00 PM</p>
                  <p className="text-gray-600">Sat: 8:00 AM - 1:00 PM</p>
                </div>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>

              {submitted ? <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-lg text-center">
                  <h3 className="font-bold text-lg mb-2">Thank You!</h3>
                  <p>
                    Your message has been sent successfully. We will contact you
                    shortly.
                  </p>
                  <Button variant="outline" className="mt-4" onClick={() => setSubmitted(false)}>
                    Send Another Message
                  </Button>
                </div> : <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 outline-none transition-colors" placeholder="John Doe" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 outline-none transition-colors" placeholder="+94 77 123 4567" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 outline-none transition-colors" placeholder="john@example.com" />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service Interested In
                    </label>
                    <select id="service" name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 outline-none transition-colors bg-white">
                      <option value="">Select a service...</option>
                      <option value="Laser Cutting">Laser Cutting</option>
                      <option value="CNC Cutting">CNC Cutting</option>
                      <option value="Fibre Marking">Fibre Marking</option>
                      <option value="Fibre Laser Works">
                        Fibre Laser Works
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea id="message" name="message" required rows={4} value={formData.message} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 outline-none transition-colors" placeholder="Tell us about your project requirements..."></textarea>
                  </div>

                  <Button type="submit" className="w-full" size="lg" isLoading={isSubmitting}>
                    Send Message
                  </Button>
                </form>}
            </div>
          </div>
        </div>
      </Section>

      {/* Map Placeholder */}
      <div className="h-96 bg-gray-200 w-full relative">
        <div className="absolute inset-0 flex items-center justify-center bg-gray-300">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-gray-500 mx-auto mb-2" />
            <p className="text-gray-600 font-medium">
              Interactive Map Integration
            </p>
            <p className="text-sm text-gray-500">
              (Google Maps Embed would go here)
            </p>
          </div>
        </div>
      </div>
    </Layout>;
}