import Head from 'next/head';
import { useState, useEffect } from "react";
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import ProjectHeader from '@/components/header';

export default function Home(){

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
    <Head>
   <title>CliNex - Offering solutions to the planet's ecosystem</title>
   <link rel="shortcut icon" href="/favicon.ico" />
   </Head>
   <div className='maindiv'>
    <ProjectHeader />
    <div className='lg:px-[15%] md:px-[10%] px-[5%]'>


      <div className='p-[5%] lg:pt-[3%] pb-[10%] bg-[rgba(200,210,200,0.98)] lg:mt-[0] md:mt-[1cm] mt-[1cm] mb-[2cm] rounded-2xl'>
      <div className='text-center text-[#090] lg:text-[150%] px-[10%] mx-[auto] secondmenu'>
        <Link href="/"><img src="images/thelogo.png" width="160" className='cursor-pointer' style={{display:"inline-block"}} /></Link> &nbsp; &nbsp; &nbsp; &nbsp;
        <Link href="/"><span className='secondmenuspan pb-[0.1cm]'>Become a Member</span></Link> &nbsp; &nbsp;
        <Link href="/"><span className='secondmenuspan pb-[0.1cm]'>Governance</span></Link> &nbsp; &nbsp;
        <Link href="/"><span className='secondmenuspan pb-[0.1cm]'>Climate Data</span></Link> &nbsp; &nbsp;
        <Link href="/"><span className='secondmenuspan pb-[0.1cm]'>Blog</span></Link> &nbsp; &nbsp;
        <Link href="/"><span className='secondmenuspan pb-[0.1cm]'>Admin Area</span></Link>
      </div>
      <div className='grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 lg:mt-[1cm] gap-8'>
      <div className='grid-cols-1'>
        <div className='lg:text-[250%] md:text-[200%] text-[150%] font-[600] text-[#090]'>Built on StarkNet to Confront Climate Change Problems</div>
        <div className='lg:text-[130%] md:text-[120%] text-[110%] text-[#060] mt-[1cm]'>Providing the most impactful solutions to climate related problems around the world. 
        CliNex DAO is open to NGOs, Governments, and companies. To become a member, you will have to buy CliNex tokens which give you access to the DAO.</div>
        <div className='mt-[1cm]'><span className='px-[0.5cm] py-[0.3cm] bg-[#090] rounded-full font-[600] cursor-pointer'>Join CliNex DAO</span></div>
        <div className='mt-[1cm]'><span className='px-[0.5cm] py-[0.3cm] bg-[#090] rounded-full font-[600] cursor-pointer'>View Latest Community Updates</span></div>
        <div className='mt-[1cm]'><span className='px-[0.5cm] py-[0.3cm] bg-[#090] rounded-full font-[600] cursor-pointer'>View Latest Climate Changes</span></div>
      </div>
      <div className='grid-cols-1'>
        <img src="images/bg2.jpg" className='rounded-2xl' />
        <div className='font-[600] mt-[0.5cm] text-center lg:text-[130%] md:text-[130%] text-[120%] text-[#090]'>CliNex: The Planet's Ultimate Climate Change Solution</div>
      </div>
      </div>
      </div>

   
   <div>Blog</div>
   
   
    </div>
    </div>
  
  </>
  );
};

