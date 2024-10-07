import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Button from '../common/Button';
import { RiCloseFill, RiMenu4Fill } from 'react-icons/ri';


interface pageProps{
    page: string,
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [ section, setSection ] = useState('Home');

  const navs = [
    {id:0, label:'Home', ref:'#home'},
    {id:1, label:'Services', ref:'#services'},
    {id:2, label:'Faqs', ref:'#faqs'},
    {id:2, label:'Our team', ref:'#team'},
    {id:3, label:'Contact us', ref:'#contact'},
  ];

  return (
    <header id='home' className='flex w-full py-4 bg-white bg-opacity-10 backdrop-blur fixed left-0 top-0 z-20'>
      <nav className="flex w-full max-w-6xl px-4 lg:px-0 mx-auto items-center">
        <div className="flex flex-1 items-center">
          {/* <Image src='/logoMain.png' alt='SleepStiq logo' width={80} height={80} /> */}
          <h1 className='text-xl text-blueShade font-bold md:text-2xl'>A-point</h1>
        </div>
        <div className="hidden md:flex md:flex-row md:gap-8 text-xs items-center justify-evenly bg-transparent text-black">
          <ul className="flex justify-between md:flex md:flex-row md:gap-8 text-xs">
            {navs.map((nav, id) => (
              <li key={id} className={`${section === nav.label ? 'font-bold border-b-2 border-blueShade' : 'font-normal'} hover:border-b-2 hover:border-blueShade transition duration-200 text-md text-blueShade`}>
                <Link href={nav.ref} onClick={()=>setSection(nav.label)}>{nav.label}</Link>
              </li>
            ))}
          </ul>
          <Button><Link href='signup'>Create Account</Link></Button>
          <Button variant='secondary' className='border-2 border-blue-600 bg-white text-blue-600 p-3 rounded-lg min-w-[100px]'><Link href='login'>Login</Link></Button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-blueShade hover:text-white focus:ring-white">
            {mobileMenuOpen ? <RiCloseFill className="h-6 w-6" /> : <RiMenu4Fill className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-3/4 h-screen bg-white bg-opacity-90 backdrop-blur">
          <ul className="flex flex-col gap-4 text-xs items-center justify-evenly bg-transparent text-black">
            {navs.map((nav, id) => (
              <li key={id} className={`${section === nav.label ? 'font-bold border-b-2 border-blueShade' : 'font-normal'} hover:border-b-2 hover:border-blueShade transition duration-200 text-lg text-blueShade`}>
                <Link href={nav.ref} onClick={()=>setSection(nav.label)}>{nav.label}</Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4 px-4 mt-4 w-2/3 mx-auto">
            <Button><Link href='signup'>Create Account</Link></Button>
            <Button variant='secondary' className='border-2 border-blue-600 bg-white text-blue-600 p-3 rounded-lg'><Link href='login'>Login</Link></Button>
          </div>
        </div>
      )}
    </header>
  )
}
