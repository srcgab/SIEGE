import { SearchIcon} from '@heroicons/react/outline'
import {Feed} from "./Feed";

export default function Sidebar() {
  return (
    /*Barra lateral esquerda*/
    <div className="xl:w-[600px] hidden lg:inline ml-8 space-y-5">
      <div className="w-[90%] xl:w-[75%] sticky top-0 bg-white py-1.5 z-50">

      {/*Barra de pesquisa*/}
        <div className="flex items-center p-3 rounded-full relative">
          <SearchIcon className="h-5 z-50 text-pink-900 focus:text-pink-900" />
          <input
            className="absolute inset-0 rounded-full pl-11 text-pink-900 focus:shadow-lg bg-gray-100 "
            type="text"
            placeholder='Pesquise por um evento'
          />
          </div>
        </div>

        {/*Notícias do Cefet - implementação futura*/}
        <div className=" mt-0 flex py-1 px-3 sticky top-0 z-50 bg-white border-b border-gray-200 w-[90%] xl:w-[75%]">
          <h2 className="text-lg sm:text-x1 text-pink-900 font-bold cursor-pointer">Clima e tempo </h2>
        </div>
        <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[75%] h-[200px]">
          <img src=''></img>
        </div>
        <div className="mt-1 flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200 w-[90%] xl:w-[75%]">
          <h2 className="text-lg sm:text-x1 text-pink-900 font-bold cursor-pointer">Notícias atuais</h2>
        </div>
        <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[75%] h-[500px]">
        </div>
  
    </div>
  );
}
