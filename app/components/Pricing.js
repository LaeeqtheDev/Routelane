import React from 'react';function PricingSection(){return(<section className="text-gray-600 body-font overflow-hidden"><div className="container px-5 py-24 mx-auto"><div className="flex flex-col text-center w-full mb-20"><h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Dispatch Services Pricing</h1><p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Check out our commission fees for various trucking options.</p></div><div className="flex flex-wrap -m-4"><PricingCard
title="Reefer (Refrigerated Truck)"
price="$400 - $500"
features={["High demand for temperature-controlled transportation services.","Our dispatch system ensures efficient scheduling and reduced downtime.","Regular maintenance and monitoring to ensure cargo integrity.","Access to a wide network of clients, ensuring consistent business opportunities."]}
buttonText="Learn More"/><PricingCard
title="Van (Dry Van)"
price="$350 - $450"
features={["Widespread demand for dry van transportation across various industries.","Our dispatch platform provides real-time tracking and support for efficient deliveries.","Competitive pricing to attract more clients and ensure steady business flow.","Access to a diverse range of loads, minimizing empty return trips."]}
buttonText="Learn More"/><PricingCard
title="Flatbed"
price="$400 - $500"
features={["Specialized transport for oversized or irregularly shaped loads.","Our dispatch service offers specialized handling and secure loading procedures.","Higher commission reflects the additional expertise and equipment required.","Access to high-paying contracts for specialized transportation needs."]}
buttonText="Learn More"/><PricingCard
title="Box Truck"
price="$350 - $450"
features={["Steady demand for enclosed transportation for various cargo types.","Our dispatch system ensures timely and reliable deliveries, enhancing client satisfaction.","Competitive commission rates to attract box truck owners and expand our network.","Access to long-term contracts and recurring business opportunities."]}
buttonText="Learn More"/></div></div></section>)}
function PricingCard({title,price,features,buttonText}){return(<div className="p-4 xl:w-1/4 md:w-1/2 w-full"><div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden"><h2 className="text-sm tracking-widest title-font mb-1 font-medium">{title}</h2><h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">{price}</h1>{features.map((feature,index)=>(<p key={index}className="flex items-center text-gray-600 mb-2"><span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"></path></svg></span>{feature}</p>))}<button className="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">{buttonText}<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg></button></div></div>)}
export default PricingSection
