import { Box, Typography } from '@mui/material'
import React from 'react'
import verified from "../assets/verified-account.png"
import account from "../assets/accountant.png"
interface ServiceCardProps {
  keyword: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ keyword, description }) => {
  return (
    <div className="w-80 mx-5 bg-white shadow-lg rounded-lg overflow-hidden mt-5 flex flex-col justify-between">
      <div className="px-4 py-2 text-primary flex justify-center">
        <Typography variant='h5'>{keyword}</Typography>
      </div>
      <div className="py-4 px-4">
        <p className="text-primary text-center">{description}</p>
      </div>
      <div className="px-4 py-2 text-secondary-light text-center">
        <a href="/services">See All</a>
      </div>
    </div>
  );
};



const Home = () => {
  const cards = [
    {
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'React Component',
      description: 'A React component for displaying cards with Tailwind CSS.',
    },
    {
      title: 'Web Development',
      description: 'Learn web development with this informative card.',
    },
  ];
  return (
    <>
    <Box className='w-full flex justify-center shadow-lg'>
      <section className="w-full bg-primary flex items-start justify-center pb-5">
      <Box className="max-w-xl text-center p-4">
        <Typography variant='h4' className="text-3xl font-bold text-white p-6">Welcome to Our Company</Typography>
        <Typography variant='subtitle1' className="text-lg text-gray-100 mt-2">
          We are a leading company in our industry, specializing in providing high-quality products and services to our customers. With years of experience and a commitment to excellence, we strive to exceed your expectations.
        </Typography>
        <button className="mt-4 px-6 py-2 bg-secondary-light text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
          See More
        </button>
      </Box>
    </section>
    </Box>
    <div className="flex justify-center">
      <ServiceCard
        keyword="Fast"
        description="hello this is a service from the University of Washington"
      />
      <ServiceCard
        keyword="Secure"
        description="I will be working with computer programming software and software"
      />
      <ServiceCard
        keyword="Reliable"
        description="In case you want to get started with something different"
      />
      <ServiceCard
        keyword="Available"
        description="Everything works here and everything is pretty simple and we will be working with software"
      />
    </div>
    <div className='flex justify-center m-9 text-primary flex-col items-center'>
      <Typography variant='h6' className='opacity-70 p-4'>Why choose us</Typography>
      <Typography variant='h5' className='font-bold'>The best on the market so far</Typography>
    </div>
    <div className="flex justify-center items-center m-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className="w-80 bg-secondary-dark rounded-lg p-4 mx-2 shadow-md"
        >
          <h2 className="text-xl font-semibold text-white">{card.title}</h2>
          <p className="mt-2 text-gray-100">{card.description}</p>
        </div>
      ))}
    </div>
    <div className="flex justify-center m-20">
      {/* Left side with an image */}
      <div className="flex-1 bg-gray-200 p-4">
        <img
          src="https://images.unsplash.com/photo-1682695797873-aa4cb6edd613"
          alt="Sample"
          className="h-full w-full object-cover rounded-lg"
        />
      </div>

      {/* Right side with title and features */}
      <div className="flex-1 p-4 text-primary">
        <div >
          <h2 className="text-2xl font-semibold mb-4">Product Name</h2>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Features:</h3>
          <p className="mb-2">
            Random Feature 1: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Nulla at placerat odio.
          </p>
          <p className="mb-2">
            Random Feature 2: Vestibulum ullamcorper diam nec erat suscipit
            tempus.
          </p>
          <p className="mb-2">
            Random Feature 3: Curabitur vel lorem vitae tortor gravida
            malesuada.
          </p>
          <p className="mb-2">
            Random Feature 4: Nunc ac nibh vel mi fringilla accumsan.
          </p>
          <p className="mb-2">
            Random Feature 5: Etiam sit amet augue tristique, commodo justo eu,
            egestas urna.
          </p>
        </div>
      </div>
    </div>
    <div className='w-full bg-white shadow-lg flex justify-between items-stretch mb-48'>
        <div className='w-2/4 flex justify-between items-center flex-col p-5'>
          <Typography variant='h5' className='font-bold text-primary text-center'>
            The objective
          </Typography>
          <p className="text-primary text-center">
            The Journey begins here with the magnificent AI and the following bordered list 
            of features that can be used to interact with the game system and interact with 
            the game system in different ways.
          </p>
          <img src={account} alt="acc" className=' object-cover w-20 h-20 rounded-xl m-4'/>
        </div>
        <div className='w-2/4 flex justify-between items-center flex-col p-5'>
          <p className='text-primary'>
            Explore or interact with the game system
          </p>
          <p className='text-primary'>
            There is no home like 127.0.0.1
          </p>
          <button className='bg-secondary-light text-white rounded-lg shadow-xl p-2 m-4'>
            See more
          </button>
          <img src={verified} alt="verif" className=' object-cover w-20 h-20 rounded-xl m-4'/>
        </div>
    </div>
    <footer className="bg-primary text-white">
      <div className="container mx-auto flex flex-wrap justify-between p-8">
        {/* First Section */}
        <div className="w-full md:w-1/4">
          <h2 className="text-xl font-bold">Name</h2>
          <p className="mt-4">&copy; {new Date().getFullYear()} All rights reserved</p>
        </div>

        {/* Second Section */}
        <div className="w-full md:w-1/4 mt-4 md:mt-0">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2">
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Products</a></li>
          </ul>
        </div>

        {/* Third Section */}
        <div className="w-full md:w-1/4 mt-4 md:mt-0">
          <h3 className="text-lg font-semibold">About Us</h3>
          <ul className="mt-2">
            <li><a href="#">About</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Fourth Section */}
        <div className="w-full md:w-1/4 mt-4 md:mt-0">
          <h3 className="text-lg font-semibold">Subscribe to Newsletter</h3>
          <div className="mt-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-full rounded-lg bg-gray-700 text-white"
            />
            <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Home