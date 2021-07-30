import {FC, ReactNode} from "react"
import Head from "next/head"
import Image from 'next/image'

interface IProps {
  children: ReactNode,
  title: string
}

const Layout: FC<IProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <nav className="flex justify-evenly items-center sticky top-0 z-40 px-20 py-4 bg-white">
        <Image src="/img/logo.png" alt="Logo" width={86} height={29} />
        <ul className="flex">
          <li className="px-6 py-1">
            <a href="" className="font-medium text-sm text-gray-500">Services</a>
          </li>
          <li className="px-6 py-1">
            <a href="" className="font-medium text-sm text-gray-500">Pricing</a>
          </li>
          <li className="px-6 py-1">
            <a href="" className="font-medium text-sm text-gray-500">Documentation</a>
          </li>
          <li className="px-6 py-1">
            <a href="" className="font-medium text-sm text-gray-500">Blog</a>
          </li>
          <li className="px-6 py-1">
            <a href="" className="font-medium text-sm text-gray-500">FAQs</a>
          </li>
          <li className="px-6 py-1">
            <a href="" className="font-medium text-sm text-gray-500">Contact</a>
          </li>
        </ul>
        <div className="flex items-center">
          <a href="" className="font-medium text-sm text-gray-500 mr-3">Login</a>
          <button className="bg-brand-color hover:bg-blue-600 text-white font-medium text-sm py-3.5 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Get started
          </button>
        </div>
      </nav>
      {children}
      <footer className="py-24 bg-dia-color">
        <section className="grid grid-cols-4 gap-4 px-40">
          <div>
            <h3 className="font-bold text-xl text-blue-500">Company</h3>
            <ul className="mt-6">
              <li className="mb-8 font-medium text-sm text-blue-300">About</li>
              <li className="mb-8 font-medium text-sm text-blue-300">Pricing</li>
              <li className="mb-8 font-medium text-sm text-blue-300">Careers</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl text-blue-500">Legal</h3>
            <ul className="mt-6">
              <li className="mb-8 font-medium text-sm text-blue-300">Security</li>
              <li className="mb-8 font-medium text-sm text-blue-300">Terms of service</li>
              <li className="mb-8 font-medium text-sm text-blue-300">Privacy policy</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl text-blue-500">Resources</h3>
            <ul className="mt-6">
              <li className="mb-8 font-medium text-sm text-blue-300">Blog</li>
              <li className="mb-8 font-medium text-sm text-blue-300">FAQs</li>
              <li className="mb-8 font-medium text-sm text-blue-300">Case studies</li>
              <li className="mb-8 font-medium text-sm text-blue-300">Documentation</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl text-blue-500">Services</h3>
            <ul className="mt-6">
              <li className="mb-8 font-medium text-sm text-blue-300">Messaging Services</li>
              <li className="mb-8 font-medium text-sm text-blue-300">Identity/Verification Services</li>
              <li className="mb-8 font-medium text-sm text-blue-300">Wallet Services</li>
              <li className="mb-8 font-medium text-sm text-blue-300">Financial Services</li>
              <li className="mb-8 font-medium text-sm text-blue-300">Crypto-currency Services</li>
              <li className="mb-8 font-medium text-sm text-blue-300">Bill Payment Services</li>
            </ul>
          </div>
        </section>
        <section className="px-40 mt-4">
          <img src="/img/favicon21.png" alt="image" className="inline-block" />
          <div className="inline-block text-blue-300 ml-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="font-medium text-base ml-3">08139841310</span>
          </div>
          <div className="inline-block text-blue-300 ml-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="font-medium text-base ml-3">info@dojah.io</span>
          </div>
          <div className="inline-block ml-6">
            <img src="/img/twitter.png" alt="image" className="inline-block mr-6" />
            <img src="/img/slack.png" alt="image" className="inline-block mr-6" />
            <img src="/img/instagram.png" alt="image" className="inline-block mr-6" />
            <img src="/img/fbk.png" alt="image" className="inline-block mr-6" />
          </div>

          <p className="text-xs text-blue-300 mt-8">(231) 352-6536, 2237 Paul Rose Rd. Frankfort, Michigan(MI), 49635</p>
          <p className="text-xs mt-4 text-blue-300">Bibendum augue blandit urna, egestas dignissim nunc. Sit sollicitudin 
            id mollis nulla amet placerat imperdiet nunc orci. Egestas suspendisse in in amet libero adipiscing. 
            Tristique semper vel tincidunt purus consequat mauris. Tortor, sit amet amet, duis cras eget lorem feugiat. 
            Tempus ac sed consectetur pellentesque tortor porttitor aenean viverra aenean. 
            Porttitor feugiat egestas amet viverra in quam vestibulum etiam. <br /><br />©2021 Dojah. All rights reserved</p>
        </section>
      </footer>
    </>
  )
}

export default Layout
