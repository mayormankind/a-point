"use client"

import Button from '@/components/common/Button'
import ClientSignup from '@/components/signup/ClientSignup'
import CompanySignup from '@/components/signup/CompanySignup'
import Input from '@/components/common/Input'
import Link from 'next/link'
import React, { useState } from 'react'
import { toast } from "react-toastify";
import { CSSTransition, SwitchTransition } from 'react-transition-group';


export default function Signup() {

  const [ isCompany, setIsCompany ] = useState(true);

  return (
    <div className='relative w-full h-screen md:px-4 flex text-blue-600 text-xs' style={{backgroundImage:'url(./bg1.jpg)'}}>
        <span className='absolute top-8 left-4 text-white text-sm'><Link href='/'>Back</Link></span>
        <div className="flex absolute bottom-0 flex-col gap-4 m-auto w-full max-w-md bg-white rounded-2xl px-6 min-h-[75vh] py-10 md:py-10 md:relative shadow-xl md:min-h-fit">
          <div className="flex mb-20 w-full absolute top-0">
            <button onClick={() => setIsCompany(true)} className={`px-6 py-2 text-sm border-b-2 ${isCompany ? 'border-blue-600 font-semibold' : 'border-transparent'} focus:outline-none`}>For Company</button>
            <button onClick={() => setIsCompany(false)} className={`px-6 py-2 text-sm border-b-2 ${!isCompany ? 'border-blue-600 font-semibold' : 'border-transparent'} focus:outline-none`}>For Client</button>
          </div>
          {/* Adding transition effect */}
        <SwitchTransition>
          <CSSTransition key={isCompany ? 'company' : 'client'} timeout={300} classNames="fade">
            {isCompany ? <CompanySignup /> : <ClientSignup />}
          </CSSTransition>
        </SwitchTransition>
        </div>
    </div>
  )
}
