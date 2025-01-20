import React from 'react'

function Project() {
    return (
        <div className="bg-gray-100 min-h-screen">
       
        {/* Projects Description Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-gray-800">Our Work</h2>
            <p className="mt-4 text-lg text-gray-600">
              We take pride in our diverse and impactful projects that span across various industries. Each project represents our dedication to delivering high-quality solutions that drive success and innovation.
            </p>
          </div>
        </section>
  
        {/* Projects Grid Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-gray-800">Featured Projects</h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {/* Project 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img className="w-full h-48 object-cover rounded-md" src="https://images.pexels.com/photos/7129654/pexels-photo-7129654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Project 1" />
                <h3 className="mt-4 text-xl font-semibold text-gray-800">Project Title 1</h3>
                <p className="text-gray-600 mt-2">A brief description of the first project, showcasing its impact and results.</p>
                <a href="#" className="text-blue-600 mt-4 inline-block">Learn More</a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img className="w-full h-48 object-cover rounded-md" src="https://images.pexels.com/photos/7129654/pexels-photo-7129654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Project 1" />
                <h3 className="mt-4 text-xl font-semibold text-gray-800">Project Title 2</h3>
                <p className="text-gray-600 mt-2">A brief description of the first project, showcasing its impact and results.</p>
                <a href="#" className="text-blue-600 mt-4 inline-block">Learn More</a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img className="w-full h-48 object-cover rounded-md" src="https://images.pexels.com/photos/7129654/pexels-photo-7129654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Project 1" />
                <h3 className="mt-4 text-xl font-semibold text-gray-800">Project Title 3</h3>
                <p className="text-gray-600 mt-2">A brief description of the first project, showcasing its impact and results.</p>
                <a href="#" className="text-blue-600 mt-4 inline-block">Learn More</a>
              </div>
  
              {/* Project 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img className="w-full h-48 object-cover rounded-md" src="https://images.pexels.com/photos/7129654/pexels-photo-7129654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Project 2" />
                <h3 className="mt-4 text-xl font-semibold text-gray-800">Project Title 4</h3>
                <p className="text-gray-600 mt-2">A brief description of the second project, demonstrating its key achievements.</p>
                <a href="#" className="text-blue-600 mt-4 inline-block">Learn More</a>
              </div>
  
              {/* Project 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img className="w-full h-48 object-cover rounded-md" src="https://images.pexels.com/photos/7129654/pexels-photo-7129654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Project 3" />
                <h3 className="mt-4 text-xl font-semibold text-gray-800">Project Title 5</h3>
                <p className="text-gray-600 mt-2">A brief description of the third project, explaining its objectives and outcomes.</p>
                <a href="#" className="text-blue-600 mt-4 inline-block">Learn More</a>
              </div>
  
              {/* Project 4 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img className="w-full h-48 object-cover rounded-md" src="https://images.pexels.com/photos/7129654/pexels-photo-7129654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Project 4" />
                <h3 className="mt-4 text-xl font-semibold text-gray-800">Project Title 6</h3>
                <p className="text-gray-600 mt-2">A brief description of the fourth project, highlighting its impact and success.</p>
                <a href="#" className="text-blue-600 mt-4 inline-block">Learn More</a>
              </div>
            </div>
          </div>
        </section>
  
       
      </div>
    )
}

export default Project
