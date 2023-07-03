import Image from 'next/image';
import React, { useState } from 'react';
import mail from '../assets/Mail.svg';
import supabase from 'services/supabaseClient';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [visible, setVisible] = useState(true);

  const saveLead = async () => {
    const { error } = await supabase.from(`mailing`).insert({ email: email });
    if (error) {
      console.log(error);
    }
  };

  function validateField(value, pattern) {
    return pattern.test(value);
  }

  const isValidEmail = validateField(email, /\S+@\S+\.\S+/);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidEmail) {
      console.log('błąd');
    } else {
      saveLead();
      setEmail('');
      setVisible(false);
    }
  };

  return (
    <div className="container m-auto py-[50px] sm:py-0">
      <h3 className="md:text-4xl text-3xl font-bold">Newsletter</h3>
      <div className=" pt-[50px] pb-[50px] flex items-center justify-between lg:flex-row flex-col lg:gap-0 gap-10">
        <div className="lg:w-[60%]">
          <Image src={mail} width={600} height={400} alt="newsletter" />
        </div>
        <div className="lg:w-[40%]">
          <h4 className="md:text-3xl text-xl font-bold w-full mb-3">Bądź na bieżąco</h4>
          <h4 className="md:text-3xl text-xl font-bold w-full mb-10">
            Zapisz się do naszego newslettera
          </h4>
          <div className="flex sm:flex-row flex-col sm:gap-0 gap-3 sm:justify-start sm:items-center">
            {visible ? (
              <>
                <input
                  type="email"
                  placeholder="Adres email"
                  className={`drop-shadow-md p-3 lg:px-10 px-3 rounded-2xl focus:outline-secondary border-2 ${
                    email && !isValidEmail ? 'border-red-500' : ''
                  }`}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <button
                  className="bg-secondary whitespace-nowrap font-bold text-white p-3 px-5 rounded-2xl shadow-md hover:shadow-xl"
                  onClick={handleSubmit}>
                  Zapisz mnie!
                </button>
              </>
            ) : (
              <span className="text-secondary font-bold text-2xl">Dziękujemy za dołączenie!</span>
            )}
          </div>

          <p className="lg:text-xl mt-10 lg:w-[85%] text-lg">
            Najnowsze oferty, gorące promocje i najciekawsze artykuły - to wszystko czeka na Ciebie
            w naszym newsletterze! Zapisz się i nie przegap żadnej okazji!
          </p>
        </div>
      </div>
    </div>
  );
}
