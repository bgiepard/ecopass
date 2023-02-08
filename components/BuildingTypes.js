import Image from 'next/image';

import Blok from '../assets/blok.svg';
import Dom from '../assets/dom.svg';
import Fabryka from '../assets/fabryka.svg';
import Fabryka2 from '../assets/fabryka2.svg';

export const BuildingTypes = () => {
  const buildings = [
    {
      id: 1,
      name: 'Mieszkania w bloku lub kamienicy',
      image: Blok,
      height: 100
    },
    {
      id: 2,
      name: 'Domy jedno- i wielorodzinne',
      image: Dom,
      height: 100
    },
    {
      id: 3,
      name: 'Budynki przemysłowe i fabryki',
      image: Fabryka,
      height: 100
    },
    {
      id: 4,
      name: 'Budynki użyteczności publicznej',
      image: Fabryka2,
      height: 100
    }
  ];

  return (
    <div className="mt-[100px] mb-[150px]">
      <div className="container m-auto flex items-center">
        <div className="mr-10 w-[25%]">
          <h2 className="font-bold text-4xl mb-10 opacity-80">
            Wybierz interesującą Cię kategorię
          </h2>
          <p className="text-xl opacity-70">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab at corporis doloribus earum
            enim modi nemo nostrum sunt, tempore vitae?
          </p>
        </div>
        <div className="w-[75%] flex justify-around items-center">
          {buildings.map((item) => (
            <div
              className="flex flex-col items-center w-[23%] p-8 shadow-xl rounded-3xl border-t-4 border-secondary hover:shadow-2xl cursor-pointer"
              key={item.id}>
              <Image src={item.image} height={item.height} className="mb-8" />
              <h3 className="text-[19px] font-bold text-center">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
