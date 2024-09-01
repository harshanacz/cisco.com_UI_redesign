import React from 'react';
import { services } from '../constants';

const QuickAccessSection = () => {
  return (
    <div>
<ul className="grid grid-cols-2 md:grid-cols-3 lg:px-16 lg:grid-cols-6 gap-2 gap-y-8 md:gap-y-8">
        {services.map((item, index) => (
          <li key={index} className="flex flex-col items-center group">
            <div className="text-2xl mb-2 text-gray-600 group-hover:text-blue-500 transition-colors duration-300">
              {item.icon} {/* Display the icon with hover color change */}
            </div>
            <a href="#" className="text-base text-center group-hover:text-blue-500">
              {item.title} {/* Display the title with hover color change */}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuickAccessSection;
