import React, { useState } from 'react';
import envelopes from 'assets/envelopes.png';
import Image from 'next/image';
import supabase from 'services/supabaseClient';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [number, setNumber] = useState('');
  const [text, setText] = useState('');
  const [surname, setSurname] = useState('');

  const saveLead = async () => {
    const { error } = await supabase
      .from('leads')
      .insert({ name: name, surname: surname, phone: number, email: email, message: message });
    if (!error) {
      console.log('sent');
    }
  };

  function verifyEmail(email) {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  }
  const isValidEmail = verifyEmail(email);

  function validatePhoneNumber(number) {
    const phoneNumberRegex = /^\d{9}$/;
    return phoneNumberRegex.test(number);
  }
  const isValidPhoneNumber = validatePhoneNumber(number);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !isValidEmail ||
      name.length <= 2 ||
      surname.length <= 2 ||
      !isValidPhoneNumber ||
      message.length < 5
    ) {
      setText('Popraw błędy i spróbuj jeszcze raz!');
    } else {
      saveLead();
      setName('');
      setSurname('');
      setEmail('');
      setNumber('');
      setMessage('');
      setText('Wiadomość wysłana!');
    }
  };

  return (
    <div className=" md:w-[900px] m-auto border-2 md:p-10 p-5 w-[90vw] mb-10 rounded-xl shadow-md flex flex-col md:flex-row gap-10 justify-evenly">
      <div className=" flex flex-col gap-10 items-center">
        <h2 className="font-bold text-lg">
          Masz pytania? Potrzebujesz pomocy?
          <br />
          Napisz do nas, skontaktujemy się z Tobą!
        </h2>
        <Image src={envelopes} height={180} width={340} alt="message" />
      </div>

      <form className="flex flex-col gap-3 ">
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Imię:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`border-2 p-1 md:w-[300px] w-[80vw] rounded-md shadow-sm focus:outline-secondary ${
              name && name.length <= 2 ? 'border-red-500' : ''
            }`}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Nazwisko:</label>
          <input
            id="surname"
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            className={`border-2 p-1 md:w-[300px] w-[80vw] rounded-md shadow-sm focus:outline-secondary ${
              surname && surname.length <= 2 ? 'border-red-500' : ''
            }`}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Numer telefonu:</label>
          <input
            id="number"
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className={`border-2 p-1 md:w-[300px] w-[80vw] rounded-md shadow-sm focus:outline-secondary ${
              number && !isValidPhoneNumber ? 'border-red-500' : ''
            }`}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`border-2 p-1 md:w-[300px] w-[80vw] rounded-md shadow-sm focus:outline-secondary ${
              email && !isValidEmail ? 'border-red-500' : ''
            }`}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="message">Wiadomość:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`border-2 p-1 md:w-[300px] w-[80vw] rounded-md shadow-sm focus:outline-secondary ${
              message && message.length <= 5 ? 'border-red-500' : ''
            }`}
          />
        </div>
        <button
          onClick={handleSubmit}
          className="bg-secondary px-5 py-[5px] rounded-2xl w-[100px] shadow-sm hover:shadow-md text-white font-bold self-end">
          Wyślij
        </button>
        <p>{text ? text : null}</p>
      </form>
    </div>
  );
}
