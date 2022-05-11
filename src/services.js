import logo from './logo.svg';
import './App.css';
import {Link, Route, Routes} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee, faPen, faRectangleAd, faRocket } from '@fortawesome/free-solid-svg-icons'

library.add( faCheckSquare, faCoffee, faPen, faRectangleAd, faRocket)


export default function Services() {
  return (
    <div className="App">
     <div className="items-center mb-8 text-center pt-24 pb-1" >
        <p className="text-base text-indigo-600  rounded-full font-semibold tracking-wide uppercase sm:text-2xl">
            Servicios
        </p>
        <p className="mt-4 text-4xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
           Para todo tipo de empresas
        </p>
     </div>
      
<div className="sm:flex flex-wrap justify-center items-center text-center gap-8">
    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6  shadow-lg rounded-lg dark:bg-gray-800">
        <div className="flex-shrink-0">
            <div className="flex items-center mx-auto hover:bg-indigo-500 hover:text-white justify-center h-14 w-14 rounded-md bg-white-500 text-gray-800 shadow-lg">
            <FontAwesomeIcon icon="pen" /> 
            </div>
        </div>
        <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
            Website Design
        </h3>
        <p className="text-md  text-gray-500 dark:text-gray-300 py-4">
            Encompassing today’s website design technology to integrated and build solutions relevant to your business.
        </p>
        
    </div>
    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 mt-6 sm:mt-16 md:mt-20 lg:mt-24 bg-white shadow-lg rounded-lg dark:bg-gray-800">
        <div className="flex-shrink-0">
            <div className="flex items-center mx-auto justify-center h-14 w-14 hover:bg-indigo-500 hover:text-white rounded-md bg-white-500 text-gray-800 shadow-lg">
            <FontAwesomeIcon icon="rectangle-ad" />
            </div>
        </div>
        <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
            Branding
        </h3>
        <p className="text-md text-gray-500 dark:text-gray-300 py-4">
            Share relevant, engaging, and inspirational brand messages to create a connection with your audience.
        </p>
    </div>
    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mt-6  px-4 py-4 bg-white shadow-lg rounded-lg dark:bg-gray-800">
        <div className="flex-shrink-0">
        <div className="flex items-center mx-auto justify-center h-14 w-14 rounded-md bg-white-500 hover:bg-indigo-500 text-gray-800 hover:text-white shadow-lg">
          <FontAwesomeIcon icon="rocket" />
            </div>
        </div>
        <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
            SEO Marketing
        </h3>
        <p className="text-md  text-gray-500 dark:text-gray-300 py-4">
            Let us help you level up your search engine game, explore our solutions for digital marketing for your business.
        </p>
    </div>
</div>
<div className='flex justify-center mt-20'> 
<button type="button" className="py-2 px-4 flex justify-center items-center  bg-indigo-800 hover:bg-indigo-900 focus:ring-red-500 focus:ring-offset-red-200 text-white w-max transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-md ">
    <svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
        <path d="M1344 1472q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm256 0q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128-224v320q0 40-28 68t-68 28h-1472q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h427q21 56 70.5 92t110.5 36h256q61 0 110.5-36t70.5-92h427q40 0 68 28t28 68zm-325-648q-17 40-59 40h-256v448q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-448h-256q-42 0-59-40-17-39 14-69l448-448q18-19 45-19t45 19l448 448q31 30 14 69z">
        </path>
    </svg>
    Contactanos
</button>
</div>
<section className='mt-20' >
    <div className="container max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white dark:bg-gray-800">
        <div className="flex flex-wrap -mx-8">
            <div className="w-full lg:w-1/2 px-8">
                <div className="mb-12 lg:mb-0 pb-12 lg:pb-0 border-b lg:border-b-0">
                    <h2 className="mb-4 text-3xl lg:text-4xl font-bold font-heading dark:text-white">
                        Sed ac magna sit amet risus tristique interdum, at vel velit in hac habitasse platea dictumst.
                    </h2>
                    <p className="mb-12 mt-8 leading-loose text-gray-500 dark:text-gray-300">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla, sed porttitor est nibh at nulla. Praesent placerat enim ut ex tincidunt vehicula. Fusce sit amet dui tellus.
                    </p>
                    <div className="w-full md:w-1/3">
                        <button type="button" className="py-2 px-4 flex justify-center items-center  bg-indigo-800 hover:bg-indigo-900 focus:ring-red-500 focus:ring-offset-red-200 text-white w-max transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-md ">
                            See more
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/2 px-8">
                <ul clasName="space-y-12">
                    <li className="flex -mx-4 mb-12">
                        <div className="px-4">
                            <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-white shadow-lg text-blue-600">
                                1
                            </span>
                        </div>
                        <div className="px-4">
                            <h3 className="my-4 text-xl font-semibold dark:text-white">
                                Responsive Elements
                            </h3>
                            <p className="text-gray-500 dark:text-gray-300 leading-loose">
                                All elements are responsive and provide the best display in all screen size. It&#x27;s magic !
                            </p>
                        </div>
                    </li>
                    <li className="flex -mx-4 mb-12">
                        <div className="px-4">
                            <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-white shadow-lg text-blue-600">
                                2
                            </span>
                        </div>
                        <div className="px-4">
                            <h3 className="my-4 text-xl font-semibold dark:text-white">
                                Flexible Team
                            </h3>
                            <p className="text-gray-500 dark:text-gray-300 leading-loose">
                                Flexibility is the key. All team is available 24/24 and joinable every day on our hotline.
                            </p>
                        </div>
                    </li>
                    <li className="flex -mx-4 mb-12">
                        <div className="px-4">
                            <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-white shadow-lg text-blue-600">
                                3
                            </span>
                        </div>
                        <div className="px-4">
                            <h3 className="my-4 text-xl font-semibold dark:text-white">
                                Ecologic Software
                            </h3>
                            <p className="text-gray-500 dark:text-gray-300 leading-loose">
                                Our Software are ecologic and responsable. Green is not just a color, it&#x27;s a way of life.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>


  </div>

  )
}