import { Monitor, Shield, Zap, Users } from 'lucide-react';
import GoogleSignIn from '../components/GoogleSignIn';

export default function Home() {
  const features = [
    {
      name: 'Virtual Environment',
      description: 'Secure AI agents hosted in isolated virtual machines',
      icon: Monitor,
    },
    {
      name: 'Real-time Monitoring',
      description: 'Live video feed of AI activities for complete transparency',
      icon: Shield,
    },
    {
      name: 'Scalable Architecture',
      description: 'Grow seamlessly alongside your projects',
      icon: Zap,
    },
    {
      name: 'Collaboration',
      description: 'Work together to design and optimize AI agents',
      icon: Users,
    },
  ];

  return (
    <div className="py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl">
          Build Advanced AI Agents
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          Create, deploy, and manage intelligent AI agents in secure virtual environments.
          Perfect for both beginners and advanced developers.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4">
          <GoogleSignIn />
          <div className="flex gap-4">
            <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
              Watch Demo
            </button>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
        {features.map((feature) => (
          <div
            key={feature.name}
            className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <feature.icon className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {feature.name}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 