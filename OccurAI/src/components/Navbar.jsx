import { Menu, Bell } from 'lucide-react';

export default function Navbar({ onMenuClick }) {
  return (
    <nav className="fixed w-full h-16 bg-white shadow-sm z-50">
      <div className="flex items-center justify-between h-full px-4">
        <div className="flex items-center">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
          >
            <Menu size={24} />
          </button>
          <img src="/logo.svg" alt="OccurAI" className="h-8 ml-3" />
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full text-gray-600 hover:bg-gray-100">
            <Bell size={20} />
          </button>
          <div className="h-8 w-8 rounded-full bg-indigo-600 text-white flex items-center justify-center">
            <span className="text-sm font-medium">JD</span>
          </div>
        </div>
      </div>
    </nav>
  );
} 