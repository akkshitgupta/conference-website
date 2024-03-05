/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import Head from 'next/head';
// import ReactGA from 'react-ga';
import Header from '../components/Header/header';
import cities from '../config/city-lists.json';
import Sponsors from '../components/Sponsors/sponsors';
import About from '../components/About/about';
import TicketCards from '../components/Cards/ticketCards';
import Heading from '../components/Typography/heading';
import Paragraph from '../components/Typography/paragraph';

export default function Home() {
	return (
		<div>
			<Head>
				<title>AsyncAPI Conference</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<img src='/img/illustra.png' className='color-effect' alt="background-illustration" />
			<Header />
			<div id='about' className='mt-20'>
				<About />
			</div>
			<div id="register" className='container mt-20'>
			<div className='flex items-center flex-col justify-center'>
			<div className='flex items-center'>
				<div className='w-[40px] h-[3px] bg-blue-400' />
				<div className='ml-4 text-lg sm:text-sm text-white font-semi-bold'>Tickets</div>
			</div>
			<Heading typeStyle='heading-md' className='text-gradient text-center lg:mt-10'>
				Tickets Sale [Coming Soon]
			</Heading>
			<div className='w-[718px] sm:w-full text-center'>
			<Paragraph typeStyle='body-lg' className="mt-6" textColor='text-gray-200' >
			Experience the Future of Asynchronous Communication: Tickets for Sale for the AsyncAPI Conference on Tour!
			</Paragraph>
			</div>
			<div className='w-[1000px] lg:w-full mt-10 flex justify-between lg:flex-col'>
				{cities.map((city) => <TicketCards key={city.name} city={city} className='lg:mt-10' />)}
			</div>
			</div>
			</div>
			<div id='sponsors' className='mt-20'>
				<Sponsors imgs={['/img/apidays.png']} />
			</div>
		</div>
	);
}
