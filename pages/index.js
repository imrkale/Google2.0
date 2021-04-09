import Head from 'next/head'
import Avatar from '../components/Avatar'
import {MicrophoneIcon,ViewGridIcon} from '@heroicons/react/solid'
export default function Home() {
  return (
    <div>
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
    {/* Footer */}
    </div>
  )
}
