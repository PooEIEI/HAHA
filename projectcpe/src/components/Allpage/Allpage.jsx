import React from 'react';

const Allpage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gray-700 h-40 flex items-center justify-center  z-40 top-0 left-0">
        <div className="container mx-auto text-center">
          <div className="w-3/4 h-12 bg-gray-500 animate-pulse rounded mx-auto"></div>
          <div className="mt-4 w-1/3 h-8 bg-gray-500 animate-pulse rounded mx-auto"></div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="container mx-auto py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array(8)
            .fill()
            .map((_, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded shadow overflow-hidden"
              >
                <div className="w-full h-40 bg-gray-600 animate-pulse"></div>
                <div className="p-4">
                  <div className="w-3/4 h-6 bg-gray-500 animate-pulse rounded mb-2"></div>
                  <div className="w-1/2 h-4 bg-gray-500 animate-pulse rounded"></div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Allpage;
