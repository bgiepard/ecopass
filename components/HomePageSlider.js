import Slider from 'react-slick';
import Image from 'next/image';
import Temperature from '../assets/temperature.svg';
import Statistics from '../assets/Statistics.svg';
import Finance from '../assets/Finance.svg';
import analytics from '../assets/analytics.svg';
import lightbulb from '../assets/lightbulb.svg';
import Link from 'next/link';
export default function HomePageSlider() {
  const slides = [
    {
      id: 1,
      heading: <>Dowiedz się jak zmniejszyć zużycie energii</>,
      text: (
        <>
          Chcesz zmniejszyć swoje rachunki za prąd i jednocześnie wpłynąć na środowisko?
          Zoptymalizowanie zużycia energii jest łatwiejsze niż myślisz. Od wyłączania niepotrzebnych
          urządzeń po stosowanie energooszczędnych produktów. <br /> <br />
          <span className="text-white">Pokażemy Ci proste kroki</span>, które możesz podjąć, aby
          obniżyć swoje zużycie energii.
        </>
      ),
      image: Temperature,
      article:
        'https://ecopass.pl/blog/farby-termoizolacyjne-a-oszczednosci-energetyczne-czy-warto-inwestowac'
    },
    {
      id: 2,
      heading: <>Oblicz zysk z&nbsp;Twoich zaplanowanych inwestycji</>,
      text: (
        <>
          Nie musisz już tracić czasu na skomplikowane obliczenia - na naszej stronie masz dostęp do
          wielu przydatnych kalkulatorów. Oblicz swoje zapotrzebowanie na farbę, policz zwrot z
          inwestycji w fotowoltaikę i wiele więcej. <br />
          <br />U nas zaoszczędzisz czas i pieniądze!
        </>
      ),
      image: Statistics
    },
    {
      id: 3,
      heading: <>Zacznij biernie oszczędzać na swoich rachunkach!</>,
      text: (
        <>
          Zaoszczędź bez wysiłku na swoich rachunkach dzięki naszym energooszczędnym farbom i
          produktom. Bierne oszczędzanie jest łatwiejsze niż myślisz, wystarczy tylko zmienić swoje
          codzienne wybory na bardziej przyjazne dla środowiska.
          <br />
          <br />
          <span className="text-white">Dołącz do nas i zacznij oszczędzać!</span>
        </>
      ),
      image: Finance,
      article:
        'https://ecopass.pl/blog/jak-zaoszczedzic-na-ogrzewaniu-sposoby-na-izolacje-cieplna-swojego-mieszkania'
    },
    {
      id: 4,
      heading: <>Skorzystaj z ulgi podatkowej na termomodernizację!</>,
      text: (
        <>
          Farby termoizolacyjne zapewniają ochronę przed nadmiernym przemarzaniem, redukują
          skraplanie wilgoci i poprawiają efektywność energetyczną budynku.
          <br /> Dodatkowo, dzięki uldze termomodernizacyjnej, inwestycja ta staje się jeszcze
          bardziej atrakcyjna finansowo.
          <br />
          <br />
          <span className="text-white">
            Odwiedź nasz sklep <br />i zacznij termomodernizację swojego domu już teraz!
          </span>
        </>
      ),
      image: analytics,
      article:
        'https://ecopass.pl/blog/wykorzystaj-potencjal-farb-termoizolacyjnych-i-skorzystaj-z-ulgi-podatkowej-na-termomodernizacje-swojego-domu'
    },
    {
      id: 5,
      heading: <>Korzyści malowania dachów farbami termoizolacyjnymi</>,
      text: (
        <>
          Fotowoltaika, czyli wykorzystanie energii słonecznej do wytwarzania elektryczności, jest
          coraz bardziej popularnym rozwiązaniem w dziedzinie odnawialnych źródeł energii. <br />
          Jednak istnieje sposób, aby jeszcze bardziej zwiększyć jej efektywność i osiągnąć większe
          oszczędności energetyczne.
          <br />
          <br />
          <span className="text-white">Dołącz do nas i zacznij oszczędzać!</span>
        </>
      ),
      image: lightbulb,
      article:
        'https://ecopass.pl/blog/korzysci-malowania-dachow-farbami-termoizolacyjnymi-wydajne-rozwiazanie-dla-zielonej-energii'
    }
  ];

  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 1600,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnHover: true,
    appendDots: (dots) => (
      <div style={{ position: 'absolute', top: 0, right: 0, width: '30px' }}>
        <ul className="flex flex-col items-center justify-center h-[500px]">{dots}</ul>
      </div>
    )
  };

  return (
    <Slider {...settings}>
      {slides.map((item) => {
        return (
          <div key={item.id} className="min-h-[500px] md:h-auto">
            <div className="sm:h-[90vh] flex items-center h-[83vh]">
              <div className="pt-10 pb-10 flex items-center pr-5 md:pr-10 flex-wrap">
                <div className="w-full md:w-1/2 md:pt-10 md:pb-10">
                  <h1 className="md:text-7xl text-3xl font-[700] text-white">{item.heading}</h1>
                  <p className="text-l mt-5 mb-5 text-gray-200 md:text-xl">{item.text}</p>
                  <div className="flex mt-8 flex-wrap gap-y-1">
                    <Link href="https://sklep.ecopass.pl/">
                      <button className="whitespace-nowrap hover:shadow-md text-white md:text-xl font-bold mr-1 md:mr-3 bg-secondary rounded-3xl pt-2 pb-2 pl-6 pr-6 w-60 border-2 border-secondary">
                        Zobacz produkty
                      </button>
                    </Link>
                    <Link href={`${item.article ? item.article : ''}`}>
                      <button className="whitespace-nowrap hover:shadow-md text-white md:text-xl font-bold border-2 rounded-3xl pt-2 pb-2 pl-6 pr-6 w-60">
                        Dowiedz się więcej
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="w-full hidden md:w-1/2 md:flex justify-end">
                  <Image src={item.image} width={700} alt={item.heading} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
}
