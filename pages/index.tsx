import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout title="Home">
      <section className="text-center bg-white pt-20 pb-32 md:pb-54 relative">
        <div className="font-bold text-4xl sm:text-5xl w-4/5 md:w-3/5 lg:w-2/5 leading-tight sm:leading-lg-h mx-auto z-20 relative">
          Onboard users across Africa in seconds
          <img className="w-22 h-22 object-cover absolute -top-12 right-14 -z-10" src="/img/ellipse1.png" />
        </div>
        <div className="w-full sm:w-100 leading-xlg-h mx-auto mt-4">
          <p className="text-gray-500 px-4">Seamlessly identify and verify individuals and businesses via access to simple, easy-to-understand APIs</p>
          <div className="flex justify-center items-center gap-4 mt-4 mb-6">
            <button className="bg-brand-color hover:bg-blue-600 text-white font-medium text-sm py-3.5 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Get started
            </button>
            <button className="bg-demo-btn text-brand-color font-medium text-sm py-3.5 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Schedule a demo
            </button>
          </div>
          <div>
            <a href="" className="font-medium text-sm text-gray-500">Visit our API Documentation</a>
          </div>
        </div>
        <div className="hidden xl:block absolute top-3 left-82">
          <div className="relative">
            <img className="w-22 h-22 object-cover" src="/img/ellipse3.png" />
            <img className="absolute top-0 -left-4" src="/img/rectangle.png" />
          </div>
        </div>
        <div className="hidden xl:block absolute top-40 left-75">
          <div className="relative">
          <img className="w-40 h-40 object-cover" src="/img/ellipse2.png" />
            <img className="absolute -top-1 right-3" src="/img/rectangle.png" />
          </div>
        </div>
        <div className="hidden xl:block absolute top-85 left-53">
          <div className="relative">
            <img className="w-22 h-22 object-cover" src="/img/ellipse4.png" />
            <img className="absolute -top-2 -left-2" src="/img/rectangle.png" />
          </div>
        </div>
        <div className="hidden xl:block absolute top-11 right-66">
          <div className="relative">
            <img className="w-22 h-22 object-cover " src="/img/ellipse5.png" />
            <img className="absolute -top-1 -right-3" src="/img/rectangle.png" />
          </div>
        </div>
        <div className="hidden xl:block absolute top-48 right-78">
          <div className="relative">
            <img className="w-40 h-40 object-cover " src="/img/ellipse6.png" />
            <img className="absolute top-2 right-0" src="/img/rectangle.png" />
          </div>
        </div>
        <div className="hidden xl:block absolute top-98 right-54">
          <div className="relative">
            <img className="w-22 h-22 object-cover" src="/img/ellipse7.png" />
            <img className="absolute -top-2 -left-2" src="/img/rectangle.png" />
          </div>
        </div>
      </section>
      <div className="diagonal-gd h-28 relative">
        <img className="w-4/5 md:w-244 md:h-112 object-cover absolute inset-x-0 m-auto -top-16 md:-top-48" src="/img/image2.png" />
      </div>
      <section className="flex justify-center items-center bg-dia-color">
        <div className="pt-28 sm:pt-48 md:pt-56 pb-16 w-full">
          <div className="font-bold text-3xl sm:text-4.5xl w-4/5 md:w-1/2 leading-normal m-auto text-white text-center">
            Stay focused on the business, while we handle the little things
          </div>
          <div className="flex justify-center items-center mt-6">
            <div className="mr-6">
              <img src="/img/vector.png" alt="image" className="w-4 h-4 md:w-5 md:h-5 inline-block" />
              <span className="text-base md:text-xl font-bold ml-2 text-blue-300">Great customer service</span>
            </div>
            <div>
              <img src="/img/vector2.png" alt="image" className="w-4 h-4 md:w-5 md:h-5 inline-block" />
              <span className="text-base md:text-xl font-bold ml-2 text-blue-300">24/7 Support</span>
            </div>
          </div>
          <img src="/img/favicon21.png" alt="image" className="w-12 h-12 m-auto mt-6" />
        </div>
      </section>
      <section className="grid grid-cols-3 gap-4 lg:flex lg:justify-evenly items-center py-10 lg:py-24 px-8 xl:px-53">
        <img src="/img/expensa.png" alt="image" />
        <img src="/img/mmbhomecare.png" alt="image" />
        <img src="/img/recallo.png" alt="image" />
        <img src="/img/moneymie.png" alt="image" />
        <img src="/img/whogohost.png" alt="image" />
      </section>
      <section className="block sm:flex">
        <div className="w-full h-64 px-8 sm:p-0 sm:w-1/2 sm:h-auto">
          <img src="/img/elizeu-unsplash.png" alt="image" className="w-full h-full object-cover" />
        </div>
        <div className="m-auto sm:flex-1 px-8 py-16 md:p-10 lg:px-22 lg:py-28 relative">
          <div className="h-1 w-14 bg-brand-color"></div>
          <div className="pt-4">
            <h4 className="font-extrabold text-3xl md:text-4xl">Know your customer</h4>
            <p className="text-gray-500 font-normal text-base w-full sm:w-4/5 leading-relaxed mt-5">With our various data points and biometric verification techniques, you can identify and verify customers with ease. Some of the data points include:
            </p>
            <ul className="list text-gray-500 font-normal text-base mt-4">
              <li>Validate BVN</li>
              <li>Lookup NIN</li>
              <li>Lookup VIN</li>
              <li>Lookup Phone Number</li>
              <li>Lookup NUBAN</li>
              <li>Liveness check</li>
              <li>Selfie with ID verification</li>
              <li>And so on</li>
            </ul>
            
          </div>
          <img src="/img/ellipse17.png" alt="image" className="absolute right-0 bottom-16" />
        </div>
      </section>
      <section className="flex flex-col-reverse sm:flex-row">
        <div className="sm:flex-1 relative">
          <div className="w-full lg:w-7/12 px-8 py-16 md:p-10 lg:py-28 lg:ml-40 xl:ml-48">
            <div className="h-1 w-14 bg-brand-color"></div>
            <div className="pt-4">
              <h4 className="font-extrabold text-3xl md:text-4xl">Know your business</h4>
              <p className="text-gray-500 font-normal text-base leading-relaxed mt-5">You can also verify companies??? corporate information and the personal information of those that manage the operations of the company. This can be achieved with the:
              </p>
              <ul className="list text-gray-500 font-normal text-base mt-4">
                <li>Lookup CAC</li>
                <li>Lookup TIN</li>
                <li>Lookup NUBAN of company</li>
              </ul>
            </div>
          </div>
          <img src="/img/ellipse18.png" alt="image" className="absolute left-0 top-16" />
        </div>
        <div className="w-full h-64 px-8 sm:p-0 sm:w-1/2 sm:h-auto">
          <img src="/img/unsplash2.png" alt="image" className="w-full h-full object-cover" />
        </div>
      </section>
      <section className="block sm:flex">
        <div className="w-full h-64 px-8 sm:p-0 sm:w-1/2 sm:h-auto">
          <img src="/img/unsplash3.png" alt="image" className="w-full h-full object-cover" />
        </div>
        <div className="m-auto sm:flex-1 px-8 py-16 md:p-10 lg:px-22 lg:py-28 relative">
          <div className="h-1 w-14 bg-brand-color "></div>
          <div className="pt-4">
            <h4 className="font-extrabold text-3xl md:text-4xl">Financial Identity</h4>
            <p className="text-gray-500 font-normal text-base w-full sm:w-4/5 leading-relaxed mt-5">One major source of identification and verification for both individuals and businesses is the bank identity. With our customisable widget, you can identify the customers with the following:
            </p>
            <h6 className="mt-4 font-bold text-base">Account information</h6>
            <p className="mt-1 text-gray-500 font-normal text-base leading-xlg-h">You can retrieve the account information to financially identify a customer. This includes the name, account balance, account status (active or inactive), account number, type of account (savings or current).</p>
            <h6 className="mt-4 font-bold text-base">Account transactions</h6>
            <p className="mt-1 text-gray-500 font-normal text-base leading-xlg-h">Spending and income patterns can be gotten from this to identify and understand how your customers spend and earn.</p>
            <button className="bg-brand-color text-white font-medium text-sm py-3.5 px-4 rounded inline-flex items-center mt-3">
              <span className="mr-2">Watch Demo</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
          <img src="/img/ellipse19.png" alt="image" className="absolute right-8 bottom-8 lg:right-32 lg:bottom-12 xl:right-57 xl:bottom-16" />
        </div>
      </section>
      <section className="flex flex-col lg:flex-row px-12 pt-16 lg:px-36 lg:pt-24 bg-brand-color">
        <div className="flex-1 mx-auto lg:m-0">
          <h5 className="font-bold text-xl text-white text-center lg:text-left">You want to build? We are ready to build with you, we are just an api away.</h5>
          <p className="text-base text-white mt-3 text-center lg:text-left">Dojah is faster, easier and you are still in complete control. <br />
            Sign up now and get ???500 credit.
          </p>
          <div className="flex justify-center lg:justify-start items-center gap-4 mt-4 mb-12">
            <button className="font-medium bg-demo-btn text-brand-color text-sm py-3.5 px-4 rounded inline-flex items-center">
              <span className="mr-2">Get started</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <button className="bg-brand-color text-white border-white border font-medium text-sm py-3.5 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Schedule a demo
            </button>
          </div>
        </div>
        <div className="flex-1 w-4/5 md:w-3/5 m-auto mb-0 lg:m-0 lg:w-full">
          <img src="/img/laptop2.png" alt="image" className="w-full h-full" />
        </div>
      </section>
      <section className="flex flex-col-reverse lg:flex-row px-12 pt-16 lg:px-36 lg:pt-24 bg-dia-color">
        <div className="flex-1 w-4/5 md:w-3/5 m-auto mb-0 lg:m-0 lg:w-full">
          <img src="/img/laptop3.png" alt="image" className="w-full h-full" />
        </div>
        <div className="flex-1 mx-auto lg:m-0">
          <h5 className="font-bold text-xl px-4 lg:px-8 text-blue-200 text-center lg:text-left">Go through the API Documentation to properly understand what Doja is, you can then schedule a demo call.</h5>
          <div className="px-8 mt-6 text-textbl-color text-center lg:text-left mb-12">
            <a href="" className="font-medium text-sm">Visit our API Documentation</a>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </section>
      <section className="grid gap-8 px-8 lg:px-24 xl:px-40 py-24">
        <div className="row-start-1 row-end-2 col-start-1 col-end-4 lg:col-end-2 w-full">
            <div className="h-1 w-14 bg-brand-color"></div>
            <div className="pt-4">
              <h4 className="font-extrabold text-3xl">Read our case studies</h4>
              <p className="text-gray-500 font-normal text-base mt-4">
                Find out about exciting products that have been built and that you can build with Dojah!
              </p>
            </div>
            <div className="mt-4 text-brand-color">
              <a href="" className="font-medium text-sm">Check out more</a>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
        </div>
        <div className="row-start-2 row-end-3 lg:row-end-5 col-span-4 sm:col-span-2 col-start-1 lg:col-end-2 relative">
          <img src="/img/rectangle5.png" alt="image" className="w-full h-75 lg:h-144 object-cover rounded" />
          <div className="absolute bottom-10 left-8 w-3/4 lg:w-7/12">
            <h4 className="text-lg lg:text-xl text-white">Authorizing requests and identifying your application</h4>
            <div className="h-0.1 w-4/5 mt-4 bg-white"></div>
            <div className="mt-4 text-white">
              <a href="" className="font-medium text-sm">Continue reading</a>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </div>
        <div className="row-start-3 row-end-4 sm:row-start-2 sm:row-end-3 lg:row-start-1 col-span-4 sm:col-span-2 col-start-1 lg:col-start-2 lg:col-end-4 relative">
          <img src="/img/rectangle4.png" alt="image" className="w-full h-full object-cover rounded" />
          <div className="absolute bottom-10 left-8 w-3/4 lg:w-7/12">
            <h4 className="text-lg lg:text-xl text-white">Authorizing requests and identifying your application</h4>
            <div className="h-0.1 w-4/5 mt-4 bg-white"></div>
            <div className="mt-4 text-white">
              <a href="" className="font-medium text-sm">Continue reading</a>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </div>
        <div className="col-span-4 sm:col-span-2 lg:col-start-2 lg:col-end-3 row-start-4 row-end-5 sm:row-start-3 sm:row-end-4 lg:row-end-5 relative">
          <img src="/img/rectangle3.png" alt="image" className="w-full h-75 lg:h-full object-cover rounded" />
          <div className="absolute bottom-10 left-8 w-4/5 lg:w-3/5">
            <h4 className="text-lg lg:text-xl text-white">Authorizing requests and identifying your application</h4>
            <div className="h-0.1 w-4/5 mt-4 bg-white"></div>
            <div className="mt-4 text-white">
              <a href="" className="font-medium text-sm">Continue reading</a>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </div>
        <div className="col-span-4 sm:col-span-2 lg:col-start-3 lg:col-end-4 row-start-5 row-end-6 sm:row-start-3 sm:row-end-4 lg:row-end-5 relative">
          <img src="/img/rectangle2.png" alt="image" className="w-full h-75 lg:h-full object-cover rounded" />
          <div className="absolute bottom-10 left-8 w-4/5 lg:w-3/5">
            <h4 className="text-lg lg:text-xl text-white">Authorizing requests and identifying your application</h4>
            <div className="h-0.1 w-4/5 mt-4 bg-white"></div>
            <div className="mt-4 text-white">
              <a href="" className="font-medium text-sm">Continue reading</a>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </div>
      </section>
      <section className="strt">
          <div className="w-full px-8 md:pr-0 md:w-1/2 md:pl-20 xl:pl-40 py-24 text-center md:text-left">
            <h5 className="font-bold text-xl text-white">You want to build? We are ready to build with you, we are just an api call away.</h5>
            
            <div className="flex justify-center md:justify-start items-center gap-4 mt-6 mb-6 ">
              <button className="font-medium bg-demo-btn text-brand-color text-sm py-3.5 px-4 rounded inline-flex items-center">
                <span className="mr-2">Get started</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <button className="text-white border-white border font-medium text-sm py-3.5 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Schedule a demo
              </button>
            </div>
        </div>
      </section>
    </Layout>
    // <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
  )
}
