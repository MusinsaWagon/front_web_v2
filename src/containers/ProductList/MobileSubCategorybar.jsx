import React,  { useState } from 'react';

function MobileSubCategorybar({ categories }) {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = categoryId => {
    setActiveCategory(categoryId);
  };
  return (
    <div className="lg:hidden bg-white p-4">
      <div className="flex overflow-x-scroll scrollbar-hide space-x-4">
        {categories.map(category => (
          <button
            key={category.id}
            className={`px-4 py-2 whitespace-nowrap rounded-full transition-colors duration-300 ${
              activeCategory === category.id
                ? 'bg-red-500 text-white'
                : 'bg-gray-200 text-gray-600'
            }`}
            onClick={() => handleCategoryClick(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MobileSubCategorybar;
