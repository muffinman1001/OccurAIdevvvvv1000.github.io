import { Plus, Play, Pause, Settings } from 'lucide-react';

export default function Agents() {
  const agents = [
    {
      id: 1,
      name: 'Customer Service Bot',
      status: 'running',
      type: 'Virtual Machine',
      lastActive: '2 minutes ago',
    },
    {
      id: 2,
      name: 'Data Analysis Agent',
      status: 'stopped',
      type: 'Virtual PC',
      lastActive: '1 hour ago',
    },
    // Add more agents as needed
  ];

  return (
    <div className="py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">AI Agents</h1>
        <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          <Plus size={20} className="mr-2" />
          New Agent
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="grid grid-cols-1 gap-4 p-6">
          {agents.map((agent) => (
            <div
              key={agent.id}
              className="border rounded-lg p-4 hover:border-indigo-600 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {agent.name}
                  </h3>
                  <div className="mt-1 flex items-center space-x-4 text-sm text-gray-500">
                    <span>{agent.type}</span>
                    <span>•</span>
                    <span>Last active: {agent.lastActive}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
                    {agent.status === 'running' ? (
                      <Pause size={20} />
                    ) : (
                      <Play size={20} />
                    )}
                  </button>
                  <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
                    <Settings size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 