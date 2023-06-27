import React, { useEffect, useState } from 'react';
import photovol from '../../../assets/Light-bulb.svg';
import Image from 'next/image';
import Layout from 'components/Layout';
import Head from 'next/head';
import calc from '../../../assets/Financial-Management.svg';

export default function PhotovoltaicsCalculator() {
  const [usage, setUsage] = useState('');
  const [unit, setUnit] = useState('zł');
  const [result, setResult] = useState(0);
  const [estimatedPower, setEstimatedPower] = useState(0);
  const [estimatedIncome, setEstimatedIncome] = useState(0);
  const [estimatedSavings, setEstimatedSavings] = useState(0);

  useEffect(() => {
    if (unit === 'zł') {
      setEstimatedPower(((usage * 12 * 2) / 1000).toFixed(1));
      setResult(Math.ceil((usage * 12 * 2) / 450));
      setEstimatedIncome(usage * 12 * 2);
      setEstimatedSavings((usage * 12 * 2 * 0.79).toFixed(2));
    } else {
      setEstimatedPower(((usage * 12) / 1000).toFixed(1));
      setResult(Math.ceil((usage * 12) / 450));
      setEstimatedIncome((usage * 12).toFixed(2));
      setEstimatedSavings((usage * 12 * 0.79).toFixed(2));
    }
  }, [usage, unit]);

  return (
    <Layout>
      <Head>
        <title>Kalkulator doboru mocy fotowoltaiki - EcoPass.pl</title>
      </Head>
      <div className="container p-[50px] flex gap-[50px] sm:flex-row flex-col justify-center items-center">
        <Image
          src={photovol}
          alt="kalkulator doboru mocy fotowoltaiki"
          width={300}
          height={'auto'}
        />
        <div className="sm:w-1/2 w-[90vw]">
          <p>
            Nasz kalkulator doboru mocy fotowoltaiki pomoże Ci określić odpowiednią moc instalacji
            fotowoltaicznej dla Twojego domu lub przedsiębiorstwa. Wprowadź informacje dotyczące
            swojego miejsca zamieszkania, roczne zużycie energii elektrycznej oraz dostępną
            powierzchnię na instalację paneli słonecznych. Kalkulator pokaże Ci minimalną ilość
            paneli oraz sugerowaną moc instalacji, która pomoże Ci wyprodukować wystarczającą ilość
            energii elektrycznej i oszczędzić na rachunkach za prąd.
          </p>
        </div>
      </div>
      <div className="sm:max-w-[70vw] max-w-[90vw] sm:p-10 p-5 mb-[50px] m-auto shadow-md rounded-2xl flex flex-col">
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <label htmlFor="usage">Podaj miesięczne zużycie prądu:</label>
          <div>
            <input
              value={usage}
              type="number"
              id="usage"
              onChange={(e) => setUsage(e.target.value)}
              style={{ borderRadius: '12px 0 0 12px' }}
              className="border-2 p-1 md:w-[150px] w-[50vw] shadow-sm focus:outline-secondary"
            />
            <select
              onChange={(e) => setUnit(e.target.value)}
              style={{ borderRadius: '0 12px 12px 0' }}
              className="border-2 p-1 border-secondary bg-secondary text-white font-bold shadow-sm">
              <option value="zł">zł</option>
              <option value="kWh">kWh</option>
            </select>
          </div>
        </div>
        {usage && (
          <div className="mt-20 flex sm:flex-row flex-col sm:justify-between items-center gap-10">
            <div className="flex flex-col gap-5 font-bold">
              <span>Minimalna ilość paneli: {result}</span>
              <span>Sugerowana moc instalacji fotowoltaicznej: {estimatedPower}kW</span>
              <span>Szacunkowa ilość wyprodukowanego prądu rocznie: {estimatedIncome}kWh</span>
              <span>Szacunkowy dochód roczny z instalacji: {estimatedSavings}zł</span>
            </div>
            <Image src={calc} alt="kalkulator" width={200} height={'auto'} />
          </div>
        )}
      </div>
    </Layout>
  );
}
