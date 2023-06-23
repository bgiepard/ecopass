import React from 'react';
import photovol from '../../../assets/Light-bulb.svg';
import Image from 'next/image';
import Layout from 'components/Layout';

export default function PhotovoltaicsCalculator() {
  return (
    <Layout>
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
            swojego miejsca zamieszkania, miesięczne zużycie energii elektrycznej oraz dostępną
            powierzchnię na instalację paneli słonecznych. Kalkulator pokaże Ci przybliżoną moc
            instalacji, która pomoże Ci wyprodukować wystarczającą ilość energii elektrycznej i
            oszczędzić na rachunkach za prąd.
          </p>
        </div>
      </div>
    </Layout>
  );
}
