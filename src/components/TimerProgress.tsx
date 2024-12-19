import React from 'react';

interface TimerProgressProps {
  progress: number;
}

export const TimerProgress: React.FC<TimerProgressProps> = ({ progress }) => (
  <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
    <div
      className={`h-full rounded-full transition-all duration-1000 ${
        progress > 0 ? 'bg-blue-600' : 'bg-gray-200'
      }`}
      style={{
        width: `${progress}%`,
      }}
    />
  </div>
);
