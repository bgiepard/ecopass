import Layout from 'components/Layout';
import Image from 'next/image';

import Painting from 'assets/stock_painting_1.png';
export default function Blog() {
  return (
    <Layout>
      <div className="bg-primary border-t-2">
        <div className="container m-auto">
          <h1 className="text-[40px] font-bold text-white pt-[80px] pb-[50px] pr-[50px] w-2/3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, quos.
          </h1>
        </div>
      </div>

      <div className="container m-auto flex">
        <div className="w-2/3 text-[16px] pt-[50px] pb-[50px] pr-[80px]">
          <h2 className="text-3xl mb-3">Lorem ipsum dolor sit?</h2>
          <p className="mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias debitis deserunt,
            dignissimos doloribus earum fuga maiores minima necessitatibus reiciendis sit. Alias
            amet commodi deserunt earum explicabo id impedit in incidunt maxime nesciunt nisi
            officia, optio repellendus rerum soluta, tempore tenetur voluptate voluptatibus!
            Architecto excepturi nisi nulla repudiandae saepe tempore vel.
          </p>
          <p className="mb-5">
            Accusamus aliquid animi architecto asperiores atque consequatur consequuntur cumque
            delectus ea eaque exercitationem fugit hic minima molestiae molestias omnis porro quo
            recusandae reiciendis rem reprehenderit rerum, sed sint ut veniam? Facilis minus
            molestiae nobis obcaecati sapiente temporibus vitae. Architecto cum dolore doloribus,
            inventore itaque omnis pariatur temporibus. Architecto, ipsam sint!
          </p>
          <h2 className="text-3xl mb-3">Lorem ipsum dolor sit?</h2>
          <p className="mb-5">
            Accusamus amet autem delectus deleniti dolore nesciunt nisi quasi reiciendis similique
            veritatis? Accusantium cumque deserunt error fuga nisi quis repudiandae rerum
            voluptatibus? Aliquam deleniti dolore dolorum earum impedit ipsum placeat quasi rerum.
            Ab amet atque aut blanditiis culpa debitis dolor dolores ea earum eligendi, maxime
            mollitia, nihil rem rerum unde.
          </p>
          <p className="mb-5">
            Aperiam cum deserunt dignissimos, distinctio dolore excepturi impedit inventore quod,
            recusandae sequi ullam ut veniam? Consectetur doloremque impedit laudantium magni saepe!
            Ab aut ea eaque eius hic mollitia necessitatibus, nesciunt officia omnis optio possimus
            praesentium quod repellendus similique suscipit totam, vero voluptate? Architecto
            aspernatur eveniet iste itaque temporibus voluptas voluptatem?
          </p>
          <p className="mb-5">
            A accusantium ad animi aspernatur, at commodi corporis doloremque ducimus eos
            exercitationem fuga illo incidunt laboriosam libero magnam minus nam nesciunt, obcaecati
            officia perferendis perspiciatis quam reiciendis rem similique sint, totam unde. A at
            commodi consequatur corporis doloremque, modi mollitia, nobis, odit officia officiis
            perspiciatis quam repudiandae veniam voluptas voluptates?
          </p>
          <figure>
            <Image src={Painting} className="h-[350px] object-cover mt-10 mb-20" />
          </figure>
          <h2 className="text-3xl mb-3">Lorem ipsum dolor sit?</h2>
          <p className="mb-5">
            Ab ad aspernatur assumenda cupiditate distinctio dolor dolore ea eligendi explicabo fuga
            id incidunt ipsa libero minima molestiae neque odio provident, reiciendis tempora totam
            ullam ut velit veniam. Accusamus amet eaque, facere id magnam necessitatibus nihil nobis
            perferendis possimus reprehenderit soluta, velit, veritatis voluptates. Cum eius neque
            nesciunt perspiciatis quod!
          </p>
          <p className="mb-5">
            Ad aliquid aperiam, autem blanditiis corporis culpa cumque cupiditate delectus dicta
            doloremque ducimus est ex facere facilis harum illo illum ipsam iure, labore libero nam
            neque nihil nobis odio, perspiciatis quae reiciendis repellat sapiente sunt tempora
            temporibus velit veniam voluptatibus. Aliquam cum eligendi ex excepturi, inventore
            praesentium quam voluptas voluptatum.
          </p>
          <p className="mb-5">
            Ad, aliquam assumenda consequatur dicta distinctio dolores dolorum enim eveniet id
            maxime, placeat praesentium quisquam, repellendus sit sunt tempore veritatis vero. Alias
            eligendi facere minima sint? At deleniti dicta eaque hic quia quod repellat vel.
            Accusantium adipisci consequuntur placeat praesentium repudiandae similique tempora.
            Aliquid ducimus, explicabo labore molestias rem tempora?
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
