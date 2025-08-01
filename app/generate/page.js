"use client";
import Link from 'next/link';
import React, { useState } from 'react';

const Shorten = () => {
  const [url, setUrl] = useState("");
  const [shorturl, setShorturl] = useState("");
  const [generated, setGenerated] = useState("");

  const generate = () => {
    fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: url,
        shorturl: shorturl,
      }),
    })
      .then((response) => response.json())
      .then((result) => {

        console.log(result);
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
        setUrl("");
        setShorturl("");
      })
      .catch((error) => console.error("Error generating short URL:", error));
  };

  return (
    <div className='min-h-screen'>
      <div className='container mx-auto flex justify-center backdrop-blur-md bg-white/10 border border-white/30 shadow-lg rounded-xl p-6 mt-10 w-[30rem] '>
        <div className='flex  flex-col  w-[400px] gap-4 '>
          <h1 className='font-bold text-3xl'>Generate your short url</h1>
          <div className='flex flex-col gap-3'>
            <input
              className='bg-white text-black py-1 px-2 border rounded-[10px] border-white'
              onChange={(e) => setUrl(e.target.value)}
              type='text'
              placeholder="Enter your URL"
            />
            <input
              className='bg-white text-black py-1 px-2 border rounded-[10px] border-white'
              onChange={(e) => setShorturl(e.target.value)}
              type='text'
              placeholder='Enter your preferred short URL text'
            />
            <button
              onClick={generate}
              className='bg-green-400 border rounded-[10px] border-green-400 h-[2rem]'
            >
              Generate
            </button>
            {generated && <>
              <span className='font-bold'>Your Link</span>
              <code className='text-black font-semibold'>
                <Link href='generated' target='_blank'>{generated}</Link>
              </code>
            </>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shorten;
