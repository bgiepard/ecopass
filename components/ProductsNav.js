import React, { useState } from 'react';

export default function ProductsNav({ setCategory, setSub }) {
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

  const handleCategoryKeyPress = (categoryId, event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleCategoryClick(categoryId);
      const selectedCategoryObj = categories.find((cat) => cat.id === categoryId);
      setCategory(selectedCategoryObj ? selectedCategoryObj.name : '');
      setSub('');
    }
  };

  const handleSubCategoryKeyPress = (subCategoryId, event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleSubCategoryClick(subCategoryId);
      const selectedCategoryObj = categories.find((cat) => cat.id === selectedCategory);
      if (selectedCategoryObj && selectedCategoryObj.sub) {
        const subCatObj = selectedCategoryObj.sub.find((sub) => sub.id === subCategoryId);
        setSub(subCatObj ? subCatObj.name : '');
        setCategory('');
      }
    }
  };

  return (
    <div className="my-[50px]">
      {categories.map((cat) => (
        <div
          key={`category-${cat.id + cat.name}`}
          className="sm:w-[250px] p-3 flex flex-col bg-white shadow-md">
          <button
            onClick={() => {
              handleCategoryClick(cat.id);
              setCategory(cat.name);
              setSub('');
            }}
            className="flex justify-between cursor-pointer"
            onKeyDown={(e) => handleCategoryKeyPress(cat.id, e)}
            tabIndex={0}
            style={{
              fontWeight: cat.id === selectedCategory ? 'bold' : 'normal'
            }}>
            {cat.name}
            {cat.name !== 'Wszystkie' && (
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
            )}
          </button>
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
                  onKeyDown={(e) => handleSubCategoryKeyPress(subCat.id, e)}
                  tabIndex={0}
                  style={{
                    cursor: 'pointer',
                    fontWeight: subCat.id === selectedSubCategory ? 'bold' : 'normal'
                  }}
                  className="px-2 pt-3">
                  {subCat.name}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
