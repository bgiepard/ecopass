import Slider from 'react-slick';
import Image from 'next/image';
import Temperature from '../assets/temperature.svg';
import Statistics from '../assets/Statistics.svg';
import Finance from '../assets/Finance.svg';
export default function HomePageSlider() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
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
        <ul className="flex flex-col items-center justify-center h-full">{dots}</ul>
      </div>
    )
  };

  return (
    <Slider {...settings}>
      <div>
        <div className="pt-10 pb-10 flex items-center pr-10">
          <div className="w-1/2 pt-10 pb-10">
            <h1 className="text-7xl font-[700] text-white">
              Dowiedz się jak zmniejszyć zużycie energii
            </h1>
            <p className="mt-5 mb-5 text-gray-200 text-xl">
              Chcesz zmniejszyć swoje rachunki za prąd i jednocześnie wpłynąć na środowisko?
              Zoptymalizowanie zużycia energii jest łatwiejsze niż myślisz. Od wyłączania
              niepotrzebnych urządzeń po stosowanie energooszczędnych produktów. <br /> <br />
              <span className="text-white">Pokażemy Ci proste kroki</span>, które możesz podjąć, aby
              obniżyć swoje zużycie energii.
            </p>
            <div className="flex">
              <button className="text-white text-xl font-bold mr-5 bg-secondary rounded-3xl pt-2 pb-2 pl-6 pr-6">
                Zobacz produkty
              </button>
              <button className="text-white text-xl font-bold border-2 rounded-3xl pt-2 pb-2 pl-6 pr-6">
                Dowiedz się więcej
              </button>
            </div>
          </div>
          <div className="w-1/2 flex justify-end">
            <Image src={Temperature} width={700} />
          </div>
        </div>
      </div>
      <div>
        <div className="pt-10 pb-10 flex items-center pr-10">
          <div className="w-1/2 pt-10 pb-10">
            <h1 className="text-7xl font-[700] text-white">
              Oblicz zysk z&nbsp;Twoich zaplanowanych inwestycji
            </h1>
            <p className="mt-5 mb-5 text-gray-200 text-xl">
              Nie musisz już tracić czasu na skomplikowane obliczenia - na naszej stronie masz
              dostęp do wielu przydatnych kalkulatorów. Oblicz swoje zapotrzebowanie na farbę,
              policz zwrot z inwestycji w fotowoltaikę i wiele więcej. U nas zaoszczędzisz czas i
              pieniądze!
            </p>
            <div className="flex">
              <button className="text-white text-xl font-bold mr-5 bg-secondary rounded-3xl pt-2 pb-2 pl-6 pr-6">
                Zobacz produkty
              </button>
              <button className="text-white text-xl font-bold border-2 rounded-3xl pt-2 pb-2 pl-6 pr-6">
                Dowiedz się więcej
              </button>
            </div>
          </div>
          <div className="w-1/2 flex justify-end">
            <Image src={Statistics} width={700} />
          </div>
        </div>
      </div>
      <div>
        <div className="pt-10 pb-10 flex items-center pr-10">
          <div className="w-1/2 pt-10 pb-10">
            <h1 className="text-7xl font-[700] text-white">
              Zacznij biernie oszczędzać na swoich rachunkach!
            </h1>
            <p className="mt-5 mb-5 text-gray-200 text-xl">
              Zaoszczędź bez wysiłku na swoich rachunkach dzięki naszym energooszczędnym farbom i
              produktom. Bierne oszczędzanie jest łatwiejsze niż myślisz, wystarczy tylko zmienić
              swoje codzienne wybory na bardziej przyjazne dla środowiska.
              <br />
              <br />
              <span className="text-white">Dołącz do nas i zacznij oszczędzać!</span>
            </p>
            <div className="flex">
              <button className="text-white text-xl font-bold mr-5 bg-secondary rounded-3xl pt-2 pb-2 pl-6 pr-6">
                Zobacz produkty
              </button>
              <button className="text-white text-xl font-bold border-2 rounded-3xl pt-2 pb-2 pl-6 pr-6">
                Dowiedz się więcej
              </button>
            </div>
          </div>
          <div className="w-1/2 flex justify-end">
            <Image src={Finance} width={700} />
          </div>
        </div>
      </div>
    </Slider>
  );
}
