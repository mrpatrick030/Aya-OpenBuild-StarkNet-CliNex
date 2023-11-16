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
   <div>

    <div className=''>
   <ProjectHeader />
    </div>



   </div>
  
  </>
  );
};

