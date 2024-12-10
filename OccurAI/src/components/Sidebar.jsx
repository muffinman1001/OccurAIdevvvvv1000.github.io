import { Home, Brain, Terminal, Users, Settings, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Sidebar({ isOpen, onClose }) {
  const navigation = [
    { name: 'Dashboard', icon: Home, href: '/' },
    { name: 'AI Agents', icon: Brain, href: '/agents' },
    { name: 'Development', icon: Terminal, href: '/development' },
    { name: 'Collaboration', icon: Users, href: '/collaboration' },
    { name: 'Settings', icon: Settings, href: '/settings' },
  ];

  return (
    <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform 
      ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
      lg:translate-x-0 transition-transform duration-300 ease-in-out`}>
      <div className="h-full flex flex-col">
        <div className="h-16 flex items-center justify-between px-4 lg:hidden">
          <img src="/logo.svg" alt="OccurAI" className="h-8" />
          <button onClick={onClose} className="p-2 rounded-md text-gray-600 hover:bg-gray-100">
            <X size={24} />
          </button>
        </div>
        
        <nav className="flex-1 px-4 space-y-1 pt-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="flex items-center px-2 py-2 text-gray-600 rounded-lg hover:bg-gray-100 group"
            >
              <item.icon className="mr-3 h-6 w-6" />
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
} 