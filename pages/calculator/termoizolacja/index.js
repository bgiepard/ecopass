import React, { useEffect, useState } from 'react';
import thermo from '../../../assets/Home-Repairing.svg';
import Image from 'next/image';
import Layout from 'components/Layout';
import Head from 'next/head';
import calc from '../../../assets/Financial-Management.svg';

export default function ThermalInsulationCalculator() {
  const [effect, setEffect] = useState('');
  const [thickness, setThickness] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);

  useEffect(() => {
    if (effect === 'insulation' || effect === 'mold') {
      setThickness(1);
    } else if (effect === 'uv') {
      setThickness(0.5);
    } else if (effect === 'steam' || effect === 'heat') {
      setThickness(3);
    }

    if (height && width && thickness) {
      setQuantity((height.replace(',', '.') * width.replace(',', '.') * thickness).toFixed(1));
    }
  }, [effect, height, width, thickness]);

  return (
    <Layout>
      <Head>
        <title>Kalkulator zużycia farb termoizolacyjnych - EcoPass.pl</title>
      </Head>
      <div className="container p-[50px] flex gap-[50px] sm:flex-row flex-col justify-center items-center">
        <Image
          src={thermo}
          alt="kalkulator zużycia farb termoizolacyjnych"
          width={300}
          height={'auto'}
        />
        <div className="sm:w-1/2 w-[90vw]">
          <p>
            Nasz kalkulator zużycia farb termoizolacyjnych pomoże Ci obliczyć ilość farby potrzebnej
            do pokrycia powierzchni Twojego budynku. Farby termoizolacyjne są doskonałym narzędziem
            do poprawy izolacji termicznej i zmniejszenia strat energii. Wprowadź wymiary malowanej
            powierzchni, a kalkulator poda Ci orientacyjną ilość farby potrzebną do jej pokrycia w
            celu uzyskania optymalnej izolacji termicznej.
          </p>
        </div>
      </div>
      <div className="sm:max-w-[70vw] max-w-[90vw] sm:p-10 p-5 mb-[50px] m-auto shadow-md rounded-2xl flex flex-col">
        <div className="flex flex-col gap-5">
          <span className="font-bold">
            Podaj wymiary powierzchni, na którą będzie nanoszony wyrób:
          </span>
          <div className="flex sm:flex-row flex-col gap-5 sm:ml-[50px] ">
            <div className="flex sm:flex-row flex-col gap-2 sm:items-center">
              <label htmlFor="height">Wysokość:</label>
              <input
                onChange={(e) => setHeight(e.target.value)}
                value={height}
                placeholder="m.b."
                className="border-2 p-1 md:w-[150px] w-[50vw] shadow-sm focus:outline-secondary rounded-xl"
                id="height"
              />
            </div>
            <div className="flex gap-2 sm:items-center sm:flex-row flex-col">
              <label htmlFor="width">Szerokość:</label>
              <input
                onChange={(e) => setWidth(e.target.value)}
                value={width}
                placeholder="m.b."
                className="border-2 p-1 md:w-[150px] w-[50vw] shadow-sm focus:outline-secondary rounded-xl"
                id="width"
              />
            </div>
          </div>
          <label className="font-bold" htmlFor="effect">
            Pożądany efekt:
          </label>
          <select
            onChange={(e) => {
              setEffect(e.target.value);
            }}
            className="sm:w-[300px] w-[80vw] focus:outline-secondary p-1 shadow-sm border-2 rounded-xl sm:ml-[50px]">
            <option value="">Wybierz...</option>
            <option value="insulation">Termoizolacja</option>
            <option value="mold">Zapobieganie pleśni</option>
            <option value="uv">Odbicie promieniowania</option>
            <option value="steam">Kondensacja pary wodnej</option>
            <option value="heat">Zabezpieczenie gorącej powierzchni</option>
          </select>
        </div>

        {quantity && (
          <div className="mt-20 flex sm:flex-row flex-col sm:justify-between items-center gap-10">
            <div className="flex flex-col gap-5 font-bold">
              <span>Sugerowana grubość warstwy: {thickness}mm</span>
              <span>Ilość potrzebnego produktu: {quantity}L farby termoizolacyjnej</span>
            </div>
            <Image src={calc} alt="kalkulator" width={200} height={'auto'} />
          </div>
        )}
      </div>
    </Layout>
  );
}
