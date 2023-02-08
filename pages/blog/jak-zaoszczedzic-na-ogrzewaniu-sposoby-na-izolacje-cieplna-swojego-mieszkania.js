import Layout from 'components/Layout';
import Image from 'next/image';

import Painting from 'assets/stock_painting_1.png';
export default function Blog() {
  return (
    <Layout>
      <div className="bg-primary border-t-2">
        <div className="container m-auto">
          <h1 className="text-[40px] font-bold text-white pt-[80px] pb-[50px] pr-[50px] w-2/3">
            Jak zaoszczędzić na ogrzewaniu: <br />
            sposoby na izolację cieplną swojego mieszkania
          </h1>
        </div>
      </div>

      <div className="container m-auto flex">
        <div className="w-2/3 text-[16px] pt-[50px] pb-[50px] pr-[80px]">
          <p className="mb-10 text-[18px]">
            Ogrzewanie mieszkania to jeden z największych wydatków w domowym budżecie. Jednak są
            sposoby, aby zmniejszyć te koszty, i jednym z najbardziej skutecznych jest izolacja
            cieplna. W niniejszym artykule omówimy, jakie są najskuteczniejsze metody izolacji
            cieplnej mieszkania, jak ogrzewać mieszkanie oszczędnie dzięki izolacji cieplnej oraz
            jak wybrać odpowiednią izolację cieplną dla swojego mieszkania. Przeanalizujemy również,
            jak inwestycja w izolację cieplną może zapewnić niższe rachunki za ogrzewanie oraz jak
            ochronić się przed niskimi temperaturami bez wysokich kosztów ogrzewania.
          </p>

          <h2 className="text-3xl mb-3">Krok po kroku do niższych rachunków za ogrzewanie</h2>
          <p className="mb-8">
            Skuteczna izolacja cieplna może znacznie zmniejszyć rachunki za ogrzewanie. Aby uzyskać
            optymalne rezultaty, należy wykonać kilka kroków. <br /> <br />
            - po pierwsze, należy wybrać odpowiedni materiał izolacyjny; <br />
            - po drugie, należy określić, jakie obszary domu wymagają izolacji cieplnej. <br />
            - trzecim krokiem jest zainstalowanie izolacji cieplnej w wybranych obszarach, zgodnie z
            zaleceniami producenta. <br />- na koniec należy zweryfikować, czy zastosowana izolacja
            cieplna jest wystarczająco skuteczna, aby zmniejszyć rachunki za ogrzewanie.
          </p>

          <h2 className="text-3xl mb-3">Izolacja cieplna - inwestycja, która się opłaci</h2>
          <p className="mb-5">
            Izolacja cieplna może być bardzo kosztownym przedsięwzięciem. Jednak jest to jedna z
            tych inwestycji, które się opłacają. Dobrze wykonana izolacja cieplna może zapewnić
            niższe rachunki za ogrzewanie, a także zapobiec utracie ciepła w mieszkaniu. W związku z
            tym jest to inwestycja, która może zwrócić się w krótkim czasie.
          </p>

          <figure>
            <Image src={Painting} className="h-[350px] object-cover mt-10 mb-20" />
          </figure>

          <h2 className="text-3xl mb-3">Najskuteczniejsze metody izolacji cieplnej mieszkania</h2>
          <p className="mb-5">
            Izolacja cieplna to jeden z najskuteczniejszych sposobów na oszczędzanie energii w domu.
            Najskuteczniejszymi metodami izolacji cieplnej są zastosowanie odpowiednich materiałów
            izolacyjnych, takich jak pianka poliuretanowa, wełna mineralna lub styropian. <br />{' '}
            <br />
            Te materiały izolacyjne tworzą warstwę, która zatrzymuje ciepło w mieszkaniu.
            Zastosowanie izolacji cieplnej może zmniejszyć rachunki za ogrzewanie nawet o 30
            procent, a także sprawia, że mieszkanie będzie cieplejsze.
          </p>

          <h2 className="text-3xl mb-3">
            Jak wybrać odpowiednią izolację cieplną dla swojego mieszkania
          </h2>
          <p className="mb-5">
            Kiedy wybiera się izolację cieplną, trzeba wziąć pod uwagę wszystkie czynniki, które
            mogą mieć wpływ na skuteczność izolacji. Są to między innymi rodzaj budynku, jego wiek i
            konstrukcja, jakość okien i drzwi oraz rodzaj i jakość stosowanych materiałów
            izolacyjnych. <br /> <br />
            Trzeba również upewnić się, że materiały izolacyjne są odpowiednio dobrane do wielkości
            pomieszczenia oraz tego, czy mieszkanie ma ogrzewanie centralne, czy też ogrzewanie
            elektryczne. Warto również skonsultować się z fachowcem, aby uzyskać porady dotyczące
            wyboru odpowiedniego materiału izolacyjnego.
          </p>
        </div>

        <aside className="w-1/3">
          <h2 className="text-2xl font-bold pt-[50px]">Polecane produkty</h2>
          <div className="border-2 w-full h-[240px] mt-10"></div>
          <div className="border-2 w-full h-[240px] mt-10"></div>
          <div className="border-2 w-full h-[240px] mt-10"></div>
          <div className="border-2 w-full h-[240px] mt-10"></div>
        </aside>
      </div>
    </Layout>
  );
}
