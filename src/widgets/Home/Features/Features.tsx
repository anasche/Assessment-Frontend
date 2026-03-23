import React from 'react';
import Card from '@/components/Card';
import { Target, Zap, Shield, BarChart } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      title: 'Precision Strategy',
      description: 'We develop tailored roadmaps that align perfectly with your business goals and market demands.',
      icon: <Target size={32} />,
    },
    {
      title: 'Fast Implementation',
      description: 'Move from idea to execution in record time with our agile and efficient development workflows.',
      icon: <Zap size={32} />,
    },
    {
      title: 'Secure Solutions',
      description: 'Security is at the heart of everything we build, ensuring your data and operations are always protected.',
      icon: <Shield size={32} />,
    },
    {
      title: 'Growth Analytics',
      description: 'Track your success with deep insights and data-driven reports that help you make better decisions.',
      icon: <BarChart size={32} />,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-4xl font-extrabold text-gray-900">Everything you need to succeed</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              title={feature.title} 
              description={feature.description} 
              icon={feature.icon}
              className="hover:-translate-y-2"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
