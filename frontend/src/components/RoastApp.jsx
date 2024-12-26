import React, { useState } from 'react';
import { RefreshCw, Sparkles } from 'lucide-react';

const RoastApp = () => {
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [roast, setRoast] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const response = await fetch('http://localhost:3000/api/roast', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: linkedinUrl })
      });

      const data = await response.json();
      if (data.roast) {
        setRoast(data.roast);
      } else {
        setError('No roast generated');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to generate roast');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 p-4 flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-5xl font-bold text-coral-600">
            LinkedIn Roastmaster
          </h1>
          <p className="text-gray-600 text-lg">
            Turn corporate buzzwords into comedy gold! 🎭
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-semibold text-gray-800">
              Ready to roast? 🔥
            </h2>
            <p className="text-gray-600">
              Drop that LinkedIn URL and watch the magic happen
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                type="url"
                placeholder="https://linkedin.com/in/..."
                className="w-full p-4 pr-16 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-coral-400 text-gray-800 placeholder-gray-400"
                value={linkedinUrl}
                onChange={(e) => setLinkedinUrl(e.target.value)}
                required
              />
              <button
                type="submit"
                disabled={isLoading}
                className="absolute right-2 top-2 bg-gradient-to-r from-coral-500 to-coral-600 text-white p-3 rounded-xl transition-all hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
              >
                {isLoading ? (
                  <RefreshCw className="animate-spin" size={20} />
                ) : (
                  <Sparkles size={20} />
                )}
              </button>
            </div>
          </form>

          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-xl">
              {error}
            </div>
          )}
        </div>

        {roast && (
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8 space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Your Roast is Ready! 🔥
            </h3>
            <p className="text-gray-700 text-lg">
              {roast}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoastApp;