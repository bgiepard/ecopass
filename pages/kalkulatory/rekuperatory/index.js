import Layout from 'components/Layout';
import React, { useState } from 'react';
import reku from '../../../assets/recuperation.png';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const seoData = {
  title: 'Kalkulator doboru rekuperatora - EcoPass.pl',
  description:
    'Nasz kalkulator doboru rekuperatora ściennego to narzędzie, które pomaga użytkownikom dokładnie określić odpowiednie parametry rekuperatora wentylacyjnego do ich pomieszczeń.',
  url: 'https://ecopass.pl/kalkulatory/rekuperatory',
  image: 'public/banner.png',
  tags: ['kalkulator', 'jak dobrać moc rekuperatora', 'jaki rekuperator wybrać', 'rekuperator']
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPageElement',
  url: seoData.url,
  name: seoData.title,
  description: seoData.description,
  image: seoData.image
};

const dataString = JSON.stringify(structuredData);

export default function Recuperators() {
  const [people, setPeople] = useState(0);
  const [roomType, setRoomType] = useState('');
  const [financing, setFinancing] = useState('');
  const [ventilation, setVentilation] = useState('');
  const [fireplace, setFireplace] = useState('');
  const [thickness, setThickness] = useState('');
  const [howHigh, setHowHigh] = useState('');
  const [wind, setWind] = useState('');
  const [finish, setFinish] = useState('');
  const [recu, setRecu] = useState('');
  const [recuName, setRecuName] = useState('');
  const [adjust, setAdjust] = useState('');
  const [overlay, setOverlay] = useState('');
  const [colorOut, setColorOut] = useState('');
  const [steel, setSteel] = useState('');
  const [colorIn, setColorIn] = useState('');
  const [prohibited, setProhibited] = useState('');
  const [info, setInfo] = useState('');
  const [recuLink, setRecuLink] = useState('');
  const [adjustLink, setAdjustLink] = useState('');
  const [membrane, setMembrane] = useState('');
  const [membraneLink, setMembraneLink] = useState('');
  const [overlayLink, setOverlayLink] = useState('');
  const [colorOutLink, setColorOutLink] = useState('');
  const [steelLink, setSteelLink] = useState('');
  const [colorInLink, setColorInLink] = useState('');
  const [adjustPhoto, setAdjustPhoto] = useState('');

  const handleClick = () => {
    if (
      people >= 1 &&
      (roomType === 'bathroom' || roomType === 'dressingroom' || roomType === 'garage') &&
      fireplace !== 'open'
    ) {
      financing === 'true'
        ? (setRecu('/prana/origami-prem-150/main.png'),
          setRecuLink(
            'https://sklep.ecopass.pl/produkt/rekuperator-prana-origami-150-premium-plus/'
          ),
          setRecuName('PRANA Origami 150 Premium +'))
        : setRecu('/prana/origami-stand-150/main.png'),
        setRecuLink('https://sklep.ecopass.pl/produkt/rekuperator-prana-origami-150-standard/'),
        setRecuName('PRANA Origami 150 Standard');
    } else if ((people == 1 || people == 2) && roomType === 'bedroom' && fireplace !== 'open') {
      financing === 'true'
        ? (setRecu('/prana/origami-prem-200g/main.png'),
          setRecuLink(
            'https://sklep.ecopass.pl/produkt/rekuperator-prana-origami-200g-premium-plus/'
          ),
          setRecuName('PRANA Origami 200G Premium +'))
        : setRecu('/prana/origami-smog-200g/main.png'),
        setRecuLink('https://sklep.ecopass.pl/produkt/rekuperator-prana-origami-200g-stop-smog/'),
        setRecuName('PRANA Origami 200G Standard');
    } else if (people == 3 && roomType === 'bedroom' && fireplace !== 'open') {
      financing === 'true'
        ? (setRecu('/prana/origami-prem-200c/main.png'),
          setRecuLink(
            'https://sklep.ecopass.pl/produkt/rekuperator-prana-origami-200c-premium-plus/'
          ),
          setRecuName('PRANA Origami 200C Premium +'))
        : setRecu('/prana/origami-smog-200c/main.png'),
        setRecuLink('https://sklep.ecopass.pl/produkt/rekuperator-prana-origami-200c-stop-smog/'),
        setRecuName('PRANA Origami 200C Standard');
    } else if (
      people == 1 &&
      (roomType === 'livingroom' || roomType === 'diningroom') &&
      fireplace !== 'open'
    ) {
      financing === 'true'
        ? (setRecu('/prana/origami-prem-200g/main.png'),
          setRecuLink(
            'https://sklep.ecopass.pl/produkt/rekuperator-prana-origami-200g-premium-plus/'
          ),
          setRecuName('PRANA Origami 200G Premium +'))
        : setRecu('/prana/origami-smog-200g/main.png'),
        setRecuLink('https://sklep.ecopass.pl/produkt/rekuperator-prana-origami-200g-stop-smog/'),
        setRecuName('PRANA Origami 200G Standard');
    } else if (
      people >= 2 &&
      (roomType === 'livingroom' || roomType === 'diningroom') &&
      fireplace !== 'open'
    ) {
      financing === 'true'
        ? (setRecu('/prana/origami-prem-200c/main.png'),
          setRecuLink(
            'https://sklep.ecopass.pl/produkt/rekuperator-prana-origami-200c-premium-plus/'
          ),
          setRecuName('PRANA Origami 200C Premium +'))
        : setRecu('/prana/origami-smog-200c/main.png');
      setRecuLink('https://sklep.ecopass.pl/produkt/rekuperator-prana-origami-200c-stop-smog/'),
        setRecuName('PRANA Origami 200C Standard');
    } else if (people >= 1 && roomType === 'open' && fireplace !== 'open') {
      financing === 'true'
        ? (setRecu('/prana/origami-prem-200c/main.png'),
          setRecuLink(
            'https://sklep.ecopass.pl/produkt/rekuperator-prana-origami-200c-premium-plus/'
          ),
          setRecuName('PRANA Origami 200C Premium +'))
        : setRecu('/prana/origami-smog-200c/main.png');
      setRecuLink('https://sklep.ecopass.pl/produkt/rekuperator-prana-origami-200c-stop-smog/'),
        setRecuName('PRANA Origami 200C Standard');
    }

    if (roomType === 'kitchen' || fireplace === 'open') {
      setProhibited('Nie należy montować rekuperatora');
      setRecu('');
    } else if (roomType !== 'kitchen' || fireplace !== 'open') {
      setProhibited('');
    }

    if (ventilation === 'air-supply' && roomType !== 'kitchen' && fireplace !== 'open') {
      setInfo(
        'Działanie rekuperatora może być zakłócane przez wentylację nawiewną, do pomieszczenia będzie wpadało zimne powietrze - wentylację należy zakryć bądź przerobić otwór wentylacyjny i w tym miejscu zamontować rekuperator'
      );
    } else if (ventilation !== 'air-supply' || roomType === 'kitchen' || fireplace === 'open') {
      setInfo('');
    }

    if (thickness >= 1000 && roomType !== 'kitchen' && fireplace !== 'open') {
      setAdjust(
        'Dostosowanie rekuperatora do podanej grubości ściany (powyżej 100cm) P150/P200G/P200C - Cena ustalana indywidualnie, prosimy o kontakt.'
      );
      setAdjustLink('');
      setAdjustPhoto('');
    } else if (
      thickness > 700 &&
      thickness <= 1000 &&
      roomType !== 'kitchen' &&
      fireplace !== 'open'
    ) {
      setAdjustLink(
        'https://sklep.ecopass.pl/produkt/dostosowanie-rekuperatora-do-sciany-o-grubosci-powyzej-700mm/'
      );
      setAdjust('');
      setAdjustPhoto('/prana/dodatki/elem.png');
    } else if (
      thickness <= 700 &&
      thickness >= 655 &&
      thickness <= 680 &&
      thickness > 100 &&
      roomType !== 'kitchen' &&
      fireplace !== 'open'
    ) {
      setAdjust(
        'Dostosowanie rekuperatora przez nakładkę. Przy zakupie zostaw nam wiadomość o grubości ściany.'
      );
      setAdjustLink('');
      setAdjustPhoto('');
    } else if (
      (((roomType === 'bathroom' || roomType === 'dressingroom' || roomType === 'garage') &&
        thickness <= 435 &&
        thickness >= 410) ||
        (((people == 1 &&
          (roomType === 'livingroom' || roomType === 'bedroom' || roomType === 'diningroom')) ||
          (people == 2 && roomType === 'bedroom')) &&
          thickness <= 420 &&
          thickness >= 395) ||
        (!(
          (people == 1 &&
            (roomType === 'livingroom' || roomType === 'bedroom' || roomType === 'diningroom')) ||
          (people == 2 && roomType === 'bedroom')
        ) &&
          roomType !== 'bathroom' &&
          roomType !== 'dressingroom' &&
          roomType !== 'garage' &&
          thickness <= 480 &&
          thickness >= 455)) &&
      roomType !== 'kitchen' &&
      fireplace !== 'open'
    ) {
      setAdjust(
        'Dostosowanie rekuperatora przez nakładkę. Przy zakupie zostaw nam wiadomość o grubości ściany.'
      );
      setAdjustPhoto('');
      setAdjustLink('');
    } else if (
      ((thickness <= 700 && !(thickness >= 655 && thickness <= 680)) ||
        ((roomType === 'bathroom' || roomType === 'dressingroom' || roomType === 'garage') &&
          !(thickness <= 435 && thickness >= 410)) ||
        (((people == 1 &&
          (roomType === 'livingroom' || roomType === 'bedroom' || roomType === 'diningroom')) ||
          (people == 2 && roomType === 'bedroom')) &&
          !(thickness <= 420 && thickness >= 395)) ||
        (!(
          (people == 1 &&
            (roomType === 'livingroom' || roomType === 'bedroom' || roomType === 'diningroom')) ||
          (people == 2 && roomType === 'bedroom')
        ) &&
          roomType !== 'bathroom' &&
          roomType !== 'dressingroom' &&
          roomType !== 'garage' &&
          !(thickness <= 480 && thickness >= 455))) &&
      thickness > 100 &&
      roomType !== 'kitchen' &&
      fireplace !== 'open'
    ) {
      setAdjustLink(
        'https://sklep.ecopass.pl/produkt/dostosowanie-rekuperatora-do-sciany-o-grubosci-ponizej-700mm/'
      );
      setAdjustPhoto('/prana/dodatki/elem.png');
      setAdjust('');
    } else if (thickness < 100) {
      setAdjust('Podaj poprawną grubość ściany.');
      setAdjustLink('');
      setAdjustPhoto('');
    } else if (roomType === 'kitchen' || fireplace === 'open') {
      setAdjust('');
      setAdjustLink('');
      setAdjustPhoto('');
    }

    if (
      howHigh !== 'false' &&
      wind !== 'false' &&
      howHigh !== '' &&
      wind !== '' &&
      roomType !== 'kitchen' &&
      fireplace !== 'open'
    ) {
      setOverlay('/prana/dodatki/pokr-main.png');
      setMembrane('/prana/dodatki/membrana.png');
      setOverlayLink(
        roomType === 'bathroom' || roomType === 'dressingroom' || roomType === 'garage'
          ? 'https://sklep.ecopass.pl/produkt/kolnierz-zewnetrzny-stalowy-do-rekuperatorow-prana-150/'
          : 'https://sklep.ecopass.pl/produkt/kolnierz-zewnetrzny-stalowy-do-rekuperatorow-prana-200/'
      );
      setMembraneLink(
        roomType === 'bathroom' || roomType === 'dressingroom' || roomType === 'garage'
          ? 'https://sklep.ecopass.pl/produkt/membrana-wiatrowa-do-rekuperatorow-prana-150/'
          : 'https://sklep.ecopass.pl/produkt/membrana-wiatrowa-do-rekuperatorow-prana-200/'
      );
    } else if (
      (howHigh === 'false' && wind === 'false') ||
      roomType === 'kitchen' ||
      fireplace === 'open'
    ) {
      setOverlay('');
      setOverlayLink('');
      setMembrane('');
      setMembraneLink('');
    }

    if (
      finish === 'outside' &&
      (roomType === 'bathroom' || roomType === 'dressingroom' || roomType === 'garage') &&
      roomType !== 'kitchen' &&
      fireplace !== 'open'
    ) {
      setColorOut('/prana/dodatki/zewn.png');
      setColorOutLink('https://sklep.ecopass.pl/produkt/malowanie-panelu-zewnetrznego-prana-150/');
      setSteel('/prana/dodatki/kołn.png');
      setSteelLink(
        'https://sklep.ecopass.pl/produkt/kolnierz-zewnetrzny-stalowy-do-rekuperatorow-prana-150/'
      );
      setColorIn('');
    } else if (
      finish === 'outside' &&
      roomType !== 'bathroom' &&
      roomType !== 'dressingroom' &&
      roomType !== 'garage' &&
      roomType !== 'kitchen' &&
      fireplace !== 'open'
    ) {
      setColorOut('/prana/dodatki/zewn.png');
      setColorOutLink('https://sklep.ecopass.pl/produkt/malowanie-panelu-zewnetrznego-prana-200/');
      setSteel('/prana/dodatki/kołn.png');
      setSteelLink(
        'https://sklep.ecopass.pl/produkt/kolnierz-zewnetrzny-stalowy-do-rekuperatorow-prana-200/'
      );
      setColorIn('');
    } else if (
      finish === 'inside' &&
      (roomType === 'bathroom' || roomType === 'dressingroom' || roomType === 'garage') &&
      roomType !== 'kitchen' &&
      fireplace !== 'open'
    ) {
      setColorIn('/prana/dodatki/wewn.png');
      setColorInLink('https://sklep.ecopass.pl/produkt/malowanie-panelu-prana-150/');
      setColorOut('');
      setSteel('');
    } else if (
      finish === 'inside' &&
      roomType !== 'bathroom' &&
      roomType !== 'dressingroom' &&
      roomType !== 'garage' &&
      roomType !== 'kitchen' &&
      fireplace !== 'open'
    ) {
      setColorIn('/prana/dodatki/wewn-200.png');
      setColorInLink('https://sklep.ecopass.pl/produkt/malowanie-panelu-wewnetrznego-prana-200/');
      setColorOut('');
      setSteel('');
    } else if (
      finish === 'true' &&
      (roomType === 'bathroom' || roomType === 'dressingroom' || roomType === 'garage') &&
      roomType !== 'kitchen' &&
      fireplace !== 'open'
    ) {
      setColorOut('/prana/dodatki/zewn.png');
      setColorOutLink('https://sklep.ecopass.pl/produkt/malowanie-panelu-zewnetrznego-prana-150/');
      setSteel('/prana/dodatki/kołn.png');
      setSteelLink(
        'https://sklep.ecopass.pl/produkt/kolnierz-zewnetrzny-stalowy-do-rekuperatorow-prana-150/'
      );
      setColorIn('/prana/dodatki/wewn.png');
      setColorInLink('https://sklep.ecopass.pl/produkt/malowanie-panelu-prana-150/');
    } else if (
      finish === 'true' &&
      roomType !== 'bathroom' &&
      roomType !== 'dressingroom' &&
      roomType !== 'garage' &&
      roomType !== 'kitchen' &&
      fireplace !== 'open'
    ) {
      setColorOut('/prana/dodatki/zewn.png');
      setColorOutLink('https://sklep.ecopass.pl/produkt/malowanie-panelu-zewnetrznego-prana-200/');
      setSteel('/prana/dodatki/kołn.png');
      setSteelLink(
        'https://sklep.ecopass.pl/produkt/kolnierz-zewnetrzny-stalowy-do-rekuperatorow-prana-200/'
      );
      setColorIn('/prana/dodatki/wewn-200.png');
      setColorInLink('https://sklep.ecopass.pl/produkt/malowanie-panelu-wewnetrznego-prana-200/');
    } else if (finish === 'false' || roomType === 'kitchen' || fireplace === 'open') {
      setColorOut('');
      setSteel('');
      setColorIn('');
      setColorInLink('');
      setColorOutLink('');
      setSteelLink('');
    }
  };

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta itemProp="name" content={seoData.title} />
        <meta itemProp="description" content={seoData.description} />
        <meta itemProp="image" content={seoData.image} />
        <meta property="og:url" content={seoData.url} />
        <meta property="og:type" content="WebPage" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.image} />
        <meta property="og:image:alt" content={seoData.title} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: dataString }}></script>
        <link rel="icon" href="/icon.png" />
      </Head>
      <Layout>
        <div className="bg-primary border-t-2">
          <div className="container m-auto">
            <h1 className="sm:text-[30px] sm:leading-[45px] text-2xl font-bold text-white py-[30px] sm:pr-[50px] sm:w-2/3">
              Kalkulator doboru rekuperatora
            </h1>
          </div>
        </div>
        <div className="container p-[50px] flex gap-[50px] mt-[50px] sm:flex-row flex-col justify-center items-center">
          <Image src={reku} alt="kalkulator doboru rekuperatora" width={300} height={'auto'} />

          <div className="sm:w-1/2 w-[90vw]">
            <p>
              Nasz kalkulator doboru rekuperatora ściennego to narzędzie, które pomaga użytkownikom
              dokładnie określić odpowiednie parametry rekuperatora ściennego do ich pomieszczeń.
              Działa on na zasadzie wprowadzania danych dotyczących przeznaczenia pomieszczenia oraz
              ilości domowników, a następnie dostarcza rekomendacje dotyczące najlepszego rodzaju
              rekuperatora.
            </p>
          </div>
        </div>
        <div className="sm:max-w-[50vw] mt-[50px] border-2 border-white bg-white max-w-[90vw] sm:p-10 p-5 mb-[50px] m-auto shadow-md rounded-2xl flex flex-col gap-2">
          <label htmlFor="people">
            Ile osób przeważnie przebywa w pomieszczeniu, gdzie będzie montowany rekuperator?
          </label>
          <input
            type="number"
            id="people"
            value={people}
            onChange={(e) => {
              setPeople(e.target.value);
            }}
            aria-label="Ile osób przeważnie przebywa w pomieszczeniu, gdzie będzie montowany rekuperator?"
            className={`border-2 p-1 sm:w-[150px] w-[50vw] shadow-sm rounded-xl mb-3 focus:outline-secondary ${
              people && people <= 0 ? 'border-red-500' : ''
            }`}
          />
          <label htmlFor="type">
            Jaką funkcję pełni pomieszczenie, gdzie będzie montowany rekuperator?
          </label>
          <select
            id="type"
            onChange={(e) => {
              setRoomType(e.target.value);
            }}
            aria-label="Jaką funkcję pełni pomieszczenie, gdzie będzie montowany rekuperator?"
            className={`border-2 p-1 sm:w-[150px] w-[50vw] shadow-sm rounded-xl mb-3 focus:outline-secondary ${
              recu && roomType === '' ? 'border-red-500' : ''
            }`}>
            <option value="">Wybierz...</option>
            <option value="livingroom">Salon</option>
            <option value="bedroom">Sypialnia</option>
            <option value="kitchen">Kuchnia</option>
            <option value="bathroom">Łazienka</option>
            <option value="diningroom">Jadalnia</option>
            <option value="open">Kuchnia otwarta z salonem lub salonem i jadalnią</option>
            <option value="dressingroom">Garderoba</option>
            <option value="garage">Garaż</option>
          </select>
          <label htmlFor="financing">
            Czy będziesz korzystał z dotacji z programu Czyste Powietrze?
          </label>
          <select
            id="financing"
            onChange={(e) => setFinancing(e.target.value)}
            aria-label="Czy będziesz korzystał z dotacji z programu Czyste Powietrze?"
            className={`border-2 p-1 sm:w-[150px] w-[50vw] shadow-sm rounded-xl mb-3 focus:outline-secondary ${
              recu && financing === '' ? 'border-red-500' : ''
            }`}>
            <option value="">Wybierz...</option>
            <option value="true">Tak</option>
            <option value="false">Nie</option>
          </select>
          <label htmlFor="ventilation">Czy jest i jaki jest obecnie rodzaj wentylacji?</label>
          <select
            id="ventilation"
            onChange={(e) => setVentilation(e.target.value)}
            aria-label="Czy jest i jaki jest obecnie rodzaj wentylacji?"
            className={`border-2 p-1 sm:w-[150px] w-[50vw] shadow-sm rounded-xl mb-3 focus:outline-secondary ${
              recu && ventilation === '' ? 'border-red-500' : ''
            }`}>
            <option value="">Wybierz...</option>
            <option value="false">Brak</option>
            <option value="gravity">Grawitacyjna</option>
            <option value="air-supply">Nawiewna</option>
          </select>
          <label htmlFor="fireplace">
            Czy jest kominek i czy jest z otwartą, czy zamkniętą komorą spalania?
          </label>
          <select
            id="fireplace"
            onChange={(e) => {
              setFireplace(e.target.value);
            }}
            aria-label="Czy jest kominek i czy jest z otwartą, czy zamkniętą komorą spalania?"
            className={`border-2 p-1 sm:w-[150px] w-[50vw] shadow-sm rounded-xl mb-3 focus:outline-secondary ${
              recu && fireplace === '' ? 'border-red-500' : ''
            }`}>
            <option value="">Wybierz...</option>
            <option value="false">Nie ma kominka</option>
            <option value="open">Otwarta komora spalania</option>
            <option value="closed">Zamknięta komora spalania</option>
          </select>
          <label htmlFor="thickness">Podaj grubość ściany (w mm):</label>
          <input
            type="number"
            id="thickness"
            onChange={(e) => {
              setThickness(e.target.value);
            }}
            value={thickness}
            placeholder="mm"
            aria-label="Podaj grubość ściany (w milimetrach)"
            className={`border-2 p-1 sm:w-[150px] w-[50vw] shadow-sm rounded-xl mb-3 focus:outline-secondary ${
              recu && thickness === '' ? 'border-red-500' : ''
            }`}
          />
          <label htmlFor="how-high">
            Czy rekuperator będzie montowany w pomieszczeniu, które znajduje się na 4 piętrze lub
            wyżej?
          </label>
          <select
            id="how-high"
            onChange={(e) => setHowHigh(e.target.value)}
            aria-label="Czy rekuperator będzie montowany w pomieszczeniu, które znajduje się na 4 piętrze lub wyżej?"
            className={`border-2 p-1 sm:w-[150px] w-[50vw] shadow-sm rounded-xl mb-3 focus:outline-secondary ${
              recu && howHigh === '' ? 'border-red-500' : ''
            }`}>
            <option value="">Wybierz...</option>
            <option value="true">Tak</option>
            <option value="false">Nie</option>
          </select>
          <label htmlFor="wind">
            Czy rekuperator będzie montowany w miejscu, które jest narażone na silne wiatry,
            deszcze?
          </label>
          <select
            id="wind"
            onChange={(e) => setWind(e.target.value)}
            aria-label="Czy rekuperator będzie montowany w miejscu, które jest narażone na silne wiatry, deszcze?"
            className={`border-2 p-1 sm:w-[150px] w-[50vw] shadow-sm rounded-xl mb-3 focus:outline-secondary ${
              recu && wind === '' ? 'border-red-500' : ''
            }`}>
            <option value="">Wybierz...</option>
            <option value="true">Tak</option>
            <option value="false">Nie</option>
          </select>
          <label htmlFor="finish">
            Czy zależy Ci na estetycznym wykończeniu montażu od strony elewacji oraz w
            pomieszczeniu?
          </label>
          <select
            id="finish"
            onChange={(e) => setFinish(e.target.value)}
            aria-label="Czy zależy Ci na estetycznym wykończeniu montażu od strony elewacji oraz w pomieszczeniu?"
            className={`border-2 p-1 sm:w-[150px] w-[50vw] shadow-sm rounded-xl mb-3 focus:outline-secondary ${
              recu && finish === '' ? 'border-red-500' : ''
            }`}>
            <option value="">Wybierz...</option>
            <option value="outside">Elewacja</option>
            <option value="inside">W pomieszczeniu</option>
            <option value="true">Z zewnątrz i wewnątrz</option>
            <option value="false">Nie</option>
          </select>
          <button
            onClick={handleClick}
            className="bg-secondary px-5 py-[5px] rounded-2xl shadow-sm hover:shadow-md text-white font-bold w-[200px] self-center my-12">
            Pokaż
          </button>
          {recu ? (
            <>
              <p className="font-semibold mt-10 mb-5">Najlepsze dopasowanie dla Ciebie:</p>
              <div className="flex w-full lg:flex-row flex-col shadow-md shadow-gray-400 rounded-md lg:items-center gap-5 p-3 lg:p-0">
                <Image
                  src={recu}
                  width={300}
                  height={300}
                  alt="rekuperator"
                  className="rounded-md"
                />
                <div className="flex flex-col w-full">
                  <span className=" lg:text-xl text-lg font-semibold mb-5">
                    Rekuperator {recuName}
                  </span>
                  <Link href={recuLink} target="_blank">
                    <button className="bg-secondary px-5 py-[5px] rounded-2xl shadow-sm hover:shadow-md text-white font-bold float-right lg:mr-10">
                      Zobacz w sklepie
                    </button>
                  </Link>
                </div>
              </div>
            </>
          ) : null}
          {prohibited || info || adjust || roomType === 'bathroom' ? (
            <div className="flex flex-col lg:flex-row p-3 items-center w-full gap-5 mt-5 shadow-md shadow-gray-400 rounded-md">
              <Image src="/prana/dodatki/excl.png" width={150} height={150} alt="ostrzeżenie" />
              <div className="flex flex-col gap-3 w-full">
                {prohibited ? <p className="font-semibold text-lg">{prohibited}</p> : null}
                {info ? <p>{info}</p> : null}
                {adjust ? <p>{adjust}</p> : null}
                {roomType === 'bathroom' && fireplace !== 'open' ? (
                  <p>
                    Rekuperatory przeznaczone do montowania w łazienkach muszą zostać
                    przeprogramowane. Przy zakupie zostaw nam wiadomość o przeznaczeniu
                    rekuperatora.
                  </p>
                ) : null}
              </div>
            </div>
          ) : null}
          {adjustLink ? (
            <>
              <p className="font-semibold mt-10 mb-5">
                Należy dostosować rekuperator do grubości ściany. Przy zakupie zostaw nam informację
                jaka jest grubość ściany.
              </p>
              <div className="flex w-full lg:flex-row flex-col shadow-md shadow-gray-400 rounded-md items-center gap-5 p-3 lg:p-0">
                <Image
                  src={adjustPhoto}
                  width={300}
                  height={300}
                  alt="dostosowanie"
                  className="rounded-md"
                />
                <div className="flex flex-col">
                  <span className=" lg:text-xl text-lg font-semibold mb-5">
                    Dostosowanie rekuperatora do grubości ściany
                  </span>
                  <Link href={adjustLink} target="_blank">
                    <button className="bg-secondary px-5 py-[5px] rounded-2xl shadow-sm hover:shadow-md text-white font-bold float-right lg:mr-10">
                      Zobacz w sklepie
                    </button>
                  </Link>
                </div>
              </div>
            </>
          ) : null}
          {overlay ? (
            <>
              <p className="font-semibold mt-10 mb-5">
                Dla rekuperatorów montowanych na piętrze 4 lub wyżej, oraz narażonych na silne
                wiatry i deszcze, zalecamy zamontowanie wraz z pokrywą przeciwwiatrową.
              </p>
              <div className="flex w-full lg:flex-row flex-col shadow-md shadow-gray-400 rounded-md items-center gap-5 p-3 lg:p-0">
                <Image
                  src={overlay}
                  width={200}
                  height={200}
                  alt="pokrywa"
                  className="rounded-md"
                />
                <div className="flex flex-col w-full">
                  <span className=" lg:text-xl text-lg font-semibold mb-5">
                    Pokrywa przeciwwiatrowa
                  </span>
                  <Link href={overlayLink} target="_blank">
                    <button className="bg-secondary px-5 py-[5px] rounded-2xl shadow-sm hover:shadow-md text-white font-bold float-right lg:mr-10">
                      Zobacz w sklepie
                    </button>
                  </Link>
                </div>
              </div>
            </>
          ) : null}
          {membrane ? (
            <>
              <p className="font-semibold mt-10 mb-5">
                W celu zabezpieczenia przed wdmuchiwaniem do wnętrza zimnego powietrza, zalecamy
                montaż pokrywy przeciwwiatrowej wraz z membraną.
              </p>
              <div className="flex w-full lg:flex-row flex-col shadow-md shadow-gray-400 rounded-md items-center gap-5 p-3 lg:p-0">
                <Image
                  src={membrane}
                  width={200}
                  height={200}
                  alt="membrana"
                  className="rounded-md"
                />
                <div className="flex flex-col w-full">
                  <span className=" lg:text-xl text-lg font-semibold mb-5">
                    Membrana przeciwwiatrowa
                  </span>
                  <Link href={membraneLink} target="_blank">
                    <button className="bg-secondary px-5 py-[5px] rounded-2xl shadow-sm hover:shadow-md text-white font-bold float-right lg:mr-10">
                      Zobacz w sklepie
                    </button>
                  </Link>
                </div>
              </div>
            </>
          ) : null}
          {colorOut ? (
            <>
              <p className="font-semibold mt-10 mb-5">
                Malowanie standardowego panelu zewnętrznego rekuperatora na wybrany kolor, aby
                lepiej dopasować się do elewacji. Do wyboru kolory z palety RAL.
              </p>
              <div className="flex w-full lg:flex-row flex-col shadow-md shadow-gray-400 rounded-md items-center gap-5 p-3 lg:p-0">
                <Image
                  src={colorOut}
                  width={200}
                  height={200}
                  alt="zewnętrzny"
                  className="rounded-md"
                />
                <div className="flex flex-col w-full">
                  <span className=" lg:text-xl text-lg font-semibold mb-5">
                    Malowanie panelu zewnętrznego
                  </span>
                  <Link href={colorOutLink} target="_blank">
                    <button className="bg-secondary px-5 py-[5px] rounded-2xl shadow-sm hover:shadow-md text-white font-bold float-right lg:mr-10">
                      Zobacz w sklepie
                    </button>
                  </Link>
                </div>
              </div>
            </>
          ) : null}
          {colorIn ? (
            <>
              <p className="font-semibold mt-10 mb-5">
                Malowanie standardowego panelu wewnętrznego rekuperatora na wybrany kolor, aby
                lepiej dopasować się do pomieszczenia. Do wyboru kolory z palety RAL.
              </p>
              <div className="flex w-full lg:flex-row flex-col shadow-md shadow-gray-400 rounded-md items-center gap-5 p-3 lg:p-0">
                <Image
                  src={colorIn}
                  width={200}
                  height={200}
                  alt="wewnętrzny"
                  className="rounded-md"
                />
                <div className="flex flex-col w-full">
                  <span className=" lg:text-xl text-lg font-semibold mb-5">
                    Malowanie panelu wewnętrznego
                  </span>
                  <Link href={colorInLink} target="_blank">
                    <button className="bg-secondary px-5 py-[5px] rounded-2xl shadow-sm hover:shadow-md text-white font-bold float-right lg:mr-10">
                      Zobacz w sklepie
                    </button>
                  </Link>
                </div>
              </div>
            </>
          ) : null}
          {steel ? (
            <>
              <p className="font-semibold mt-10 mb-5">
                Pierścień wykonany ze stali nierdzewnej przeznaczony do ukrywania wiórów i defektów
                powstałych podczas wiercenia, jest montowany na zewnątrz rekuperatora.
              </p>
              <div className="flex w-full lg:flex-row flex-col shadow-md shadow-gray-400 rounded-md items-center gap-5 p-3 lg:p-0">
                <Image
                  src={steel}
                  width={200}
                  height={200}
                  alt="wewnętrzny"
                  className="rounded-md"
                />
                <div className="flex flex-col w-full">
                  <span className=" lg:text-xl text-lg font-semibold mb-5">
                    Malowanie panelu wewnętrznego
                  </span>
                  <Link href={steelLink} target="_blank">
                    <button className="bg-secondary px-5 py-[5px] rounded-2xl shadow-sm hover:shadow-md text-white font-bold float-right lg:mr-10">
                      Zobacz w sklepie
                    </button>
                  </Link>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </Layout>
    </>
  );
}
