import React, { Component } from 'react';
import { Layout } from '../components/Layout';
import { Section } from '../components/ui/Section';
export function Gallery() {
  const projects = [{
    id: 1,
    title: 'Industrial Gear Components',
    category: 'CNC Machining',
    image: 'https://images.unsplash.com/photo-1535295972055-1c762f4483e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }, {
    id: 2,
    title: 'Architectural Metal Facade',
    category: 'Laser Cutting',
    image: 'https://images.unsplash.com/photo-1565610222536-ef125c59da2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }, {
    id: 3,
    title: 'Precision Aerospace Parts',
    category: 'CNC Machining',
    image: 'https://images.unsplash.com/photo-1580982327559-c1202864eb05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }, {
    id: 4,
    title: 'Branded Metal Tags',
    category: 'Fibre Marking',
    image: 'https://images.unsplash.com/photo-1622675363311-ac97f3a9a671?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }, {
    id: 5,
    title: 'Automotive Chassis Parts',
    category: 'Laser Cutting',
    image: 'https://images.unsplash.com/photo-1597773150796-e5c14ebecbf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }, {
    id: 6,
    title: 'Custom Steel Fabrication',
    category: 'Fibre Laser',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }];
  return <Layout>
      <div className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Project Gallery
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of our precision engineering and manufacturing
            excellence.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => <div key={project.id} className="group relative overflow-hidden rounded-lg shadow-lg bg-gray-100">
              <div className="aspect-w-4 aspect-h-3">
                <img src={project.image} alt={project.title} className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-red-400 text-sm font-medium uppercase tracking-wider mb-1">
                  {project.category}
                </span>
                <h3 className="text-white text-xl font-bold">
                  {project.title}
                </h3>
              </div>
            </div>)}
        </div>
      </Section>
    </Layout>;
}