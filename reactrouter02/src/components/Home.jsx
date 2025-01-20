import React from 'react'

function Home() {
    return (
        <div className="bg-gray-100 w-full ">
        {/* Hero Section */}
        <section className="relative w-full  bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center text-white px-6 py-24">
            <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl">Welcome to Our Website</h1>
            <p className="mt-4 text-lg sm:text-xl">Your solution to innovative and impactful services</p>
            <a href="#features" className="mt-8 inline-block px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-full hover:bg-blue-700 transition-all">Learn More</a>
          </div>
        </section>
  
        {/* Features Section */}
        <section id="features" className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-gray-800">Our Features</h2>
            <p className="mt-4 text-lg text-gray-600">We offer a variety of services that will help you succeed and grow in your industry.</p>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {/* Feature 1 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800">Feature 1</h3>
                <p className="text-gray-600 mt-4">A brief description of the first feature. Highlight its benefits and how it adds value.</p>
              </div>
  
              {/* Feature 2 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800">Feature 2</h3>
                <p className="text-gray-600 mt-4">A brief description of the second feature, explaining its unique value proposition.</p>
              </div>
  
              {/* Feature 3 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800">Feature 3</h3>
                <p className="text-gray-600 mt-4">A brief description of the third feature, showcasing how it helps solve customer problems.</p>
              </div>
            </div>
          </div>
        </section>
        </div>
    )
}

export default Home
