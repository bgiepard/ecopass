import React, { useEffect, useState } from 'react';
import mailbox from 'assets/mailbox.svg';
import Image from 'next/image';
import supabase from 'services/supabaseClient';

export default function ContactForm({ category }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [number, setNumber] = useState('');
  const [text, setText] = useState('');
  const [displayedText, setDisplayedText] = useState(null);
  const [checked, setChecked] = useState(false);

  const saveLead = async () => {
    const { error } = await supabase
      .from(`${category}`)
      .insert({ name: name, phone: number, email: email, message: message });
    if (error) {
      console.log(error);
    }
  };

  function validateField(value, pattern) {
    return pattern.test(value);
  }

  const isValidEmail = validateField(email, /\S+@\S+\.\S+/);
  const isValidPhoneNumber = validateField(number, /^\d{9}$/);
  const isValidName = validateField(
    name,
    /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]{2,}\s[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]{2,}$/
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidEmail || !isValidName || !isValidPhoneNumber || message.length < 5 || !checked) {
      setText('Popraw błędy i spróbuj jeszcze raz!');
    } else {
      saveLead();
      setName('');
      setEmail('');
      setNumber('');
      setMessage('');
      setChecked(false);
      setText('Wiadomość wysłana!');
    }
  };

  const categoryTextMap = {
    fotowoltaika: 'Chcesz zapytać o fotowoltaikę?',
    'pompy-ciepla': 'Masz pytania odnośnie pomp ciepła?',
    termoizolacja: 'Masz pytania na temat termoizolacji?',
    rekuperatory: 'Chcesz się dowiedzieć więcej o rekuperatorach?',
    default: 'Masz pytania? Potrzebujesz pomocy?'
  };

  useEffect(() => {
    const text = categoryTextMap[category] || categoryTextMap['default'];
    setDisplayedText(
      <h2 className="font-bold text-lg">
        {text}
        <br />
        Napisz do nas, skontaktujemy się z Tobą!
      </h2>
    );
  }, [category]);

  return (
    <div className=" md:w-[900px] m-auto border-2 md:p-10 p-5 w-[90vw] mb-10 rounded-xl shadow-md flex flex-col md:flex-row gap-10 justify-evenly">
      <div className=" flex flex-col gap-10 items-center">
        {displayedText ? displayedText : null}
        <Image src={mailbox} height={'auto'} width={300} alt="message" />
      </div>

      <form className="flex flex-col gap-3 ">
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Imię i nazwisko:</label>
          <input
            aria-label="imię i nazwisko"
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="np. Jan Kowalski"
            className={`border-2 p-1 md:w-[300px] w-[80vw] rounded-md shadow-sm focus:outline-secondary ${
              name && !isValidName ? 'border-red-500' : ''
            }`}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Numer telefonu:</label>
          <input
            aria-label="numer telefonu"
            id="number"
            type="text"
            value={number}
            placeholder="np. 123456789"
            onChange={(e) => setNumber(e.target.value)}
            className={`border-2 p-1 md:w-[300px] w-[80vw] rounded-md shadow-sm focus:outline-secondary ${
              number && !isValidPhoneNumber ? 'border-red-500' : ''
            }`}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email:</label>
          <input
            aria-label="email"
            id="email"
            type="email"
            value={email}
            placeholder="np. twoj@email.com"
            onChange={(e) => setEmail(e.target.value)}
            className={`border-2 p-1 md:w-[300px] w-[80vw] rounded-md shadow-sm focus:outline-secondary ${
              email && !isValidEmail ? 'border-red-500' : ''
            }`}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="message">Wiadomość:</label>
          <textarea
            aria-label="treść wiadomości"
            id="message"
            value={message}
            placeholder="Napisz wiadomość..."
            onChange={(e) => setMessage(e.target.value)}
            className={`border-2 p-1 md:w-[300px] w-[80vw] rounded-md shadow-sm focus:outline-secondary ${
              message && message.length <= 5 ? 'border-red-500' : ''
            }`}
          />
        </div>
        <div className="flex gap-5 cursor-pointer">
          <input
            aria-label="zgoda na przetwarzanie danych"
            type="checkbox"
            value={checked}
            id="checkbox"
            onChange={() => setChecked(!checked)}
            checked={checked}
          />
          <label htmlFor="checkbox" className="text-xs max-w-[270px] cursor-pointer">
            Akceptuję regulamin i wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z
            przepisami Rozporządzenia Parlamentu Europejskiego i Rady UE (RODO).
          </label>
        </div>
        <button
          onClick={handleSubmit}
          aria-label="wyślij"
          className="bg-secondary px-5 py-[5px] rounded-2xl w-[100px] shadow-sm hover:shadow-md text-white font-bold self-end">
          Wyślij
        </button>
        <p>{text ? text : null}</p>
      </form>
    </div>
  );
}
