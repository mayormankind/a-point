import Hero from '@/components/landing/Hero'
import Features from '@/components/landing/Features'
import Services from '@/components/landing/Services'
import HowItWorks from '@/components/landing/Procedure'
import FAQ from '@/components/landing/FaqComponent'
import FeaturedConsultants from '@/components/landing/OurTeam'
import CallToAction from '@/components/landing/CTA'
import Footer from '@/components/landing/Footer'
import React, { useState } from 'react'

export default function Homepage() {

  const [ signupRole, setRole ] = useState('client')

    
  return (
    <div className="flex flex-col relative text-blueShade w-full">
        <div>
            <Hero signupRole={signupRole} setRole={setRole}/>
        </div>
        <Features/>
        <Services/>
        <HowItWorks/>
        <FAQ/>
        <FeaturedConsultants/>
        <div className="" id='contact'>
          <CallToAction/>    
          <Footer/>
        </div>
    </div>
  )
}
