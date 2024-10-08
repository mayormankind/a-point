import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Button from '../common/Button';
import Input from '../common/Input';


export default function Footer() {

    const Company =[
        {label:'About Us', ref:'#about'},
        {label:'Services', ref:'#services'},
        {label:'Contact', ref:'#contact'},
        {label:'Privacy policy', ref:'#policy'},
    ]

    const Contacts = [
        { img: "/facebookIcon.png", alt: "facebook icon", ref: 'https://www.facebook.com' },
        { img: "/twitterIcon.png", alt: "twitter icon", ref: 'https://www.twitter.com' },
        { img: "/googleIcon.png", alt: "google icon", ref: 'mailto:mayowamakinde23@gmail.com' },
        { img: "/linkedin.png", alt: "linkedIn icon", ref: 'https://www.linkedin.com' },
    ];

  return (
    <div className='w-full h-full flex py-10 bg-blueShade text-[#ABABAB]'>
        <div className="flex flex-col gap-10 max-w-6xl mx-auto p-4 md:p-8">
            {/* <Image alt='SleepStiq logo' src={'/logo.png'} width={100} height={100} className='mx-auto'/> */}
            <h2 className='text-center text-xl'>A-point</h2>
            <div className="flex flex-col gap-4 md:flex-row md:gap-6">
                <div className="mb-8 md:mb-0 w-full">
                    <h2 className="font-semibold text-white mb-4">Links</h2>
                    <ul className='space-y-2 text-[#ABABAB]'>
                        {Company.map((nav,id)=>(
                            <li key={id} className='hover:border-b-2 border-white w-fit'><Link href={nav.ref}>{nav.label}</Link></li>
                        ))}
                    </ul>
                </div>
                <div className="mb-8 md:mb-0 w-full">
                    <h2 className="font-semibold text-white mb-4">CONTACT</h2>
                    <ul className='space-y-2 text-[#ABABAB]'>
                        <li>Phone</li>
                        <li className='text-white hover:border-b-2 border-white w-fit'><a href='tel:+2347040829383'>+234 704 082 9383</a></li>
                        <li>Address</li>
                        <li className='text-white hover:border-b-2 border-white'>SOC building, FUTA Akure</li>
                    </ul>
                </div>
                <div className="mb-8 md:mb-0">
                    <h2 className="font-semibold text-white mb-4">CONSUMER ADVISORY</h2>
                    <p className="text-sm">
                        These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. This product should be used only as directed on the label. All trademarks and copyrights are property of their respective owners and not affiliated with nor do they endorse this product. Results may vary.
                    </p>
                    <p className="text-sm mt-2">
                        By using our website or product, you agree to follow our <span className='text-blue-500'>terms of service.</span>
                    </p>
                </div>
                <div className="flex flex-col gap-2 text-[#ABABAB] w-full">
                    <h2 className="font-semibold text-white">Stay Updated</h2>
                    <p className="text-gray-400">Subscribe to our newsletter to get the latest updates.</p>
                    <ul className='flex flex-col gap-4 mt-4'>
                        <div className="w-full flex flex-col gap-1">
                            <Input placeholder='Enter your email'/>
                            <Button>Subscribe</Button>
                        </div>
                        <div className="flex gap-4 items-center">
                            {Contacts.map((contact,id)=>(
                                <a key={id} href={contact.ref} target='_blank' rel='noopener noreferrer'>
                                    <Image src={contact.img} width={24} height={24} alt={contact.alt} className='w-6 h-6'/>
                                </a>
                            ))}
                        </div>
                    </ul>
                    <p className='text-sm mt-4'>© {new Date().getFullYear()} @Theraphy Co. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
