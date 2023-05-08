import Header from './header'
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 flex flex-col justify-center items-center md:items-start">
          <h1 className="text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-gray-400 ml-10">Drive your dream, without Hassle</h1>
          <div className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 flex flex-col items-center md:items-start">
            <p>At Digiauto we care about your dream wheel. We help you find the best car you always wanted. So you can relax, have fun driving your dream vehicle.</p>
            <button className="flex flex-col items-center justify-center  bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mt-4 ml-20">
              Learn more
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img className="h-auto max-w-lg ml-auto" src="/background.png" alt="car"/>
        </div>
      </div>
    </div>
  );
}




