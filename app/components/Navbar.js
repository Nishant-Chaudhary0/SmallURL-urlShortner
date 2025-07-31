
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-black text-white flex justify-between px-5 py-2 m border rounded-[10px] border-black m-2 mt-2'>
        <Link href="/" ><div  className='text-white text-xl font-bold'>SmallURL</div></Link>
        
        <div className='flex justify-around gap-20 text-[16px] list-none mt-1'>
           
            

            <Link href="/" className='text-white hover:text-green-400'>Home</Link>
            <Link href="/about" className='text-white hover:text-green-400'>About</Link>
            
            <Link href="/" className='text-white hover:text-green-400'>Contact us</Link>
        </div>
        <Link href="/generate" className='text-white '>
            <button className=' bg-green-400 border rounded-[10px] border-green-400 font-bold text-black px-3 py-1 hover:bg-green-300'>Try Now</button>
        </Link>
        
    </nav>
  )
}

export default Navbar
