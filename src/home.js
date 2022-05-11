import logo from './logo.svg';
import './App.css';
import {Link, Route, Routes} from 'react-router-dom'
import Slider from './components/slider';
import { Card } from 'flowbite-react';
import Testimonials from './components/testimonials';
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'
import Pricing from './components/pricing';

const features = [
  {
    name: 'Gestion centralizada',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Optimizacion de recursos',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ScaleIcon,
  },
  {
    name: 'Soluciones integradas',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: LightningBoltIcon,
  },
  {
    name: 'Modalidades agiles',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: AnnotationIcon,
  },
]
const Services = () => {
return (
  <div className="py-12 bg-white mb-20 mt-5">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="lg:text-center">
      <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Servicios</h2>
      <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Una mejor manera de organizar tu empresa
      </p>
      <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto pb-5">
        Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
        accusamus quisquam.
      </p>
    </div>

    <div className="mt-10">
      <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
        {features.map((feature) => (
          <div key={feature.name} className="relative rounded-md shadow-lg p-8">
            <dt>
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
            </dt>
            <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  </div>
</div>

)

}

const Categories = () => {
  const urlBanner1 = 'https://classic.protienda.com.ar/wp-content/uploads/2022/03/home-banner-1.jpg'
  const urlBanner2 = 'https://classic.protienda.com.ar/wp-content/uploads/2022/03/home-banner-2.jpg'
  return (
  <div className="grid grid-cols-2 gap-3 p-4 ">
  <card className="shadow-lg">
  <img className='rounded-xl' src={urlBanner1} />
  </card>
  <card className="shadow-lg">
  <img className='rounded-xl' src={urlBanner2} />
  </card>
</div>

)} 

const HomeSection1 = () => {
  const imgRigth = "imgRigth.png";
  return (
    <div>
    <div class="h-[32rem] relative overflow-hidden bg-no-repeat bg-cover bg-center back-linear " 
        >
            <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" >
              <div class="flex justify-center items-center h-full">
                <div class="text-center text-white px-6 md:px-12">
                  <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">The best offer on the market <br /><span>for your business</span></h1>
                  <a class="inline-block px-7 py-3 mr-1.5 border-2 border-white text-white font-medium text-sm leading-snug uppercase rounded-md shadow-md hover:bg-blue-800 hover:bg-opacity-2 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Comenzar Ahora</a>
                  <a class="inline-block px-7 hover:underline py-3 border-2 border-transparent bg-transparent text-white font-medium text-sm leading-snug uppercase rounded-full focus:outline-none focus:ring-0 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Saber Mas</a>
                </div>
              </div>
            </div>
          </div>

          <div class="-mt-2.5 md:-mt-4 lg:-mt-6 xl:-mt-10" >
            <svg viewBox="0 0 2880 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M 0 48 L 1437.5 48 L 2880 48 L 2880 0 L 2160 0 C 1453.324 60.118 726.013 4.51 720 0 L 0 0 L 0 48 Z" fill="currentColor"></path>
            </svg>
          </div>
          </div>

)} 


export default function Home() {
  return (
    <div className="App">
      <HomeSection1 />
      <Services />
      <Pricing /> 
      <Testimonials /> 
    
      
  </div>

  )
}