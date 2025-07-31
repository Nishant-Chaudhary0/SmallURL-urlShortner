import Image from "next/image";
import Navbar from "./components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-green-200 min-w-screen ">
      <div className="container mx-auto min-w-screen bg-gradient-to-b from-green-200 via-green-300 to-green-400 h-[40rem] rounded-t-3xl rounded-b-[14rem] ">
        <div className="flex flex-col">
           <div className=" mt-18">
              <p className="text-black text-center text-[3rem] font-bold">The URL shortner you all need</p>
            <p className="text-green-800 text-center text-[3rem] font-bold">No hassle, Just preety dang good, Can't belive try it</p>
            </div>
            <Link href="/generate" className="flex justify-center">
              <button className=' bg-black text-white border rounded-[10px] border-black mt-5 font-bold  px-3 py-1 flex justify-end'>Try Now</button>
            </Link>
            
           
        </div>
           
<div className="overflow-hidden bg-transparent whitespace-nowrap py-6 mt-10">
  <div className="inline-flex animate-scroll gap-6 px-6">
    {[
      {
        stars: "⭐⭐⭐⭐⭐",
        title: "Super easy and lightning fast!",
        user: "– Anjali R.",
      },
      {
        stars: "⭐⭐⭐⭐",
        title: "Does the job well",
        user: "– Devansh P.",
      },
      {
        stars: "⭐⭐⭐⭐⭐",
        title: "Perfect for small businesses",
        user: "– Ritika K.",
      },
      {
        stars: "⭐⭐⭐",
        title: "Decent but could be better",
        user: "– Kunal M.",
      },
      {
        stars: "⭐⭐⭐⭐⭐",
        title: "No signup, no hassle!",
        user: "– Neha G.",
      },
      {
        stars: "⭐⭐⭐⭐",
        title: "Works well on mobile too",
        user: "– Rajdeep S.",
      },
      {
        stars: "⭐⭐⭐⭐⭐",
        title: "My go-to for link shortening",
        user: "– Tanya V.",
      },
    ].map((review, i) => (
      <div
        key={i}
        className="bg-white/10 backdrop-blur-md border border-white/20 text-black w-80 rounded-2xl p-6 shadow-xl shrink-0"
      >
        <div className="text-yellow-300 text-lg">{review.stars}</div>
        <h3 className="font-semibold text-base truncate">{review.title}</h3>
        <p className="text-sm mt-3 text-right italic">{review.user}</p>
      </div>
    ))}
  </div>
</div>


<footer className="mt-16 bg-white/10 backdrop-blur-md border-t border-white/20 text-black py-6 px-4 rounded-t-2xl">
  <div className="max-w-6xl mx-auto text-center">
    <p className="text-sm sm:text-base">
      2025 <span className="font-semibold">SmallURL</span>. All rights reserved.
    </p>
    <div className="mt-2 space-x-4 text-xs sm:text-sm">
      <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
      <Link href="/terms" className="hover:underline">Terms of Service</Link>
      <Link href="/contact" className="hover:underline">Contact</Link>
    </div>
  </div>
</footer>

      </div>
      
    </div>
  );
}
