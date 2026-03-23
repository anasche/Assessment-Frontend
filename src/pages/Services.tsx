import React from "react";
import Card from "@/components/Card/Card";
import Button from "@/components/Button/Button";
import {
  Briefcase,
  Globe,
  Settings,
  Users,
  Code,
  Smartphone,
} from "lucide-react";

const Services: React.FC = () => {
  const services = [
    {
      title: "Business Strategy",
      description:
        "Comprehensive analysis and planning to help your business navigate complex markets and achieve sustainable growth.",
      icon: <Briefcase size={32} />,
    },
    {
      title: "Digital Marketing",
      description:
        "Expand your reach with targeted campaigns, SEO optimization, and data-driven performance marketing strategies.",
      icon: <Globe size={32} />,
    },
    {
      title: "Operational Excellence",
      description:
        "Streamline your internal processes and improve efficiency with our cutting-edge optimization frameworks.",
      icon: <Settings size={32} />,
    },
    {
      title: "Custom Development",
      description:
        "Bespoke software solutions tailored precisely to your unique business requirements and technical specs.",
      icon: <Code size={32} />,
    },
    {
      title: "Team Training",
      description:
        "Upskill your workforce with specialized training programs in technology, leadership, and agile methodologies.",
      icon: <Users size={32} />,
    },
    {
      title: "Mobile Solutions",
      description:
        "Engage your customers anywhere with high-performance mobile applications for iOS and Android platforms.",
      icon: <Smartphone size={32} />,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
            Expert Solutions for Your Business
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a wide range of services designed to help companies of all
            sizes succeed in the modern digital age.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                className="hover:border-blue-200"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="pb-24 pt-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-3xl p-8 md:p-16 text-center text-white shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full -mr-32 -mt-32 mix-blend-multiply opacity-50"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to elevate your business?
              </h2>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                Join hundreds of successful companies and start your growth
                journey with us today. Our experts are ready to help.
              </p>
              <Button size="lg" variant="secondary" className="px-10">
                Get a Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
