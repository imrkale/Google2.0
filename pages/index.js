import Head from 'next/head'
import Avatar from '../components/Avatar'
import Image from 'next/image'
import {MicrophoneIcon,ViewGridIcon} from '@heroicons/react/solid'
import {SearchIcon} from '@heroicons/react/outline'
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Google Raj</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     {/* Header */}
     <header className="flex justify-between p-4 w-full text-sm text-gray-700">
       {/* left */}
       <div className="flex space-x-4 align-center place-items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
       </div>
       {/* right */}
       <div className="flex space-x-4 align-center place-items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          <ViewGridIcon className="p-2 rounded-full hover:bg-gray-100 cursor-pointer h-10"/>
          <Avatar/>
          {/* https://www.thestatesman.com/wp-content/uploads/2020/09/EicwoqZUYAAxDUE.jpeg */}
       </div>
     </header>

     {/* Body */}
     <form className="flex flex-col items-center mt-40">
        <Image src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" width={300} height={100}/>
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg sm:max-w-xl lg:max-w-2xl max-w-md place-items-center rounded-full items-center border border-gray-200">
          <SearchIcon className="h-5 mr-3 text-gray-500 m-2"/>
          <input type="text" className="outline-none flex-grow p-2"/>
          <MicrophoneIcon className="h-5 m-3 text-gray-500"/>
        </div>
        <div className="">
            <button className="btn">Google Search</button>
            <button className="btn">I'm Feeling Lucky</button>
        </div>
     </form>
     

    {/* Footer */}
    </div>
  )
}
