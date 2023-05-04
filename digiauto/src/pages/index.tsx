import Header from './header'

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 flex flex-col justify-center items-center md:items-start">
          <h1 className="text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-gray-400">Drive your dream, without Hassle</h1>
          <div className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 flex flex-col items-center md:items-start">
            <p>Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
            <button className="flex flex-col items-center justify-center  bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mt-4">
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




