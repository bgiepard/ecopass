import React, { useState } from 'react';
import envelopes from 'assets/envelopes.png';
import Image from 'next/image';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className="w-[850px] m-auto border-2 p-5 mb-10 rounded-xl shadow-md flex justify-center items-center">
      <div className="w-[400px] flex flex-col gap-3">
        <h2 className="font-bold text-lg">
          Masz pytania? Potrzebujesz pomocy?
          <br />
          Napisz do nas, skontaktujemy się z Tobą!
        </h2>
        <Image src={envelopes} height={150} width={300} alt="message" />
      </div>

      <form className="flex flex-col gap-3 w-[400px]">
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Imię:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-2 p-1 w-[300px] rounded-md shadow-sm focus:outline-green-500"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 p-1 w-[300px] rounded-md shadow-sm focus:outline-green-500"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="message">Wiadomość:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border-2 p-1 w-[400px] rounded-md shadow-sm focus:outline-green-500"
          />
        </div>
        <button className="bg-green-500 px-5 py-[5px] rounded-2xl w-[100px] shadow-sm hover:shadow-md text-white font-bold self-end">
          Wyślij
        </button>
      </form>
    </div>
  );
}
