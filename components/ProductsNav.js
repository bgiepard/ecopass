import React, { useState } from 'react';

export default function ProductsNav({
  setCategory,
  setSub,
  categoryCounts,
  subCategoryCounts,
  totalProductCount
}) {
  const categories = [
    {
      id: 1,
      name: 'Wszystkie'
    },
    {
      id: 2,
      name: 'Farby',
      sub: [
        {
          id: 2.1,
          name: 'Farby do wnętrz'
        },
        {
          id: 2.2,
          name: 'Farby zewnętrzne'
        },
        {
          id: 2.3,
          name: 'Farby dachowe'
        },
        {
          id: 2.4,
          name: 'Preparaty gruntujące'
        }
      ]
    },
    {
      id: 3,
      name: 'Rekuperatory',
      sub: [
        {
          id: 3.1,
          name: 'Rekuperatory modułowe'
        },
        {
          id: 3.2,
          name: 'Rekuperatory ścienne'
        },
        {
          id: 3.3,
          name: 'Skrzynki filtracyjne'
        },
        {
          id: 3.4,
          name: 'Filtry'
        },
        {
          id: 3.5,
          name: 'Akcesoria'
        }
      ]
    },
    {
      id: 4,
      name: 'Promienniki podczerwieni',
      sub: [
        {
          id: 4.1,
          name: 'Promienniki podłogowe'
        },
        {
          id: 4.2,
          name: 'Promienniki ścienne'
        },
        {
          id: 4.3,
          name: 'Promienniki sufitowe'
        },
        {
          id: 4.4,
          name: 'Akcesoria'
        }
      ]
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  const handleCategoryClick = (categoryId) => {
    if (categoryId === selectedCategory) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoryId);
    }
    setSelectedSubCategory(null);
  };

  const handleSubCategoryClick = (subCategoryId) => {
    setSelectedSubCategory(subCategoryId);
  };

  return (
    <div className="my-[50px]">
      {categories.map((cat) => (
        <div
          key={`category-${cat.id + cat.name}`}
          className="sm:w-[300px] p-3 flex flex-col bg-white shadow-md">
          <div className="flex justify-between items-center">
            <button
              onClick={() => {
                handleCategoryClick(cat.id);
                setCategory(cat.name);
                setSub('');
              }}
              className={`cursor-pointer ${
                cat.id === selectedCategory ? 'font-bold' : 'font-normal'
              }`}>
              {cat.name}{' '}
              {cat.name === 'Wszystkie'
                ? `(${totalProductCount})`
                : `(${categoryCounts[cat.name] || 0})`}
            </button>
            {cat.sub && cat.sub.length > 0 && (
              <button onClick={() => handleCategoryClick(cat.id)} className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={16}
                  width={16}
                  alt="arrow-down"
                  viewBox="0 0 512 512"
                  style={{
                    transform: selectedCategory === cat.id ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s ease-in-out'
                  }}>
                  <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                </svg>
              </button>
            )}
          </div>
          {cat.sub && cat.sub.length > 0 && cat.id === selectedCategory && (
            <div className="flex flex-col items-start">
              {cat.sub.map((subCat) => (
                <button
                  key={`subcategory-${subCat.id + subCat.name}`}
                  onClick={() => {
                    handleSubCategoryClick(subCat.id);
                    setSub(subCat.name);
                    setCategory('');
                  }}
                  tabIndex={0}
                  style={{
                    cursor: 'pointer',
                    fontWeight: subCat.id === selectedSubCategory ? 'bold' : 'normal'
                  }}
                  className="px-2 pt-3">
                  {subCat.name} ({subCategoryCounts[subCat.name] || 0})
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
