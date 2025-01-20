import React from 'react'

function About() {
    return (
        <div className="bg-gray-100 min-h-screen">
       
        {/* Company Description Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-gray-800">Our Story</h2>
            <p className="mt-4 text-lg text-gray-600">
              We are a passionate group of individuals dedicated to delivering exceptional products and services. Our mission is to provide high-quality solutions to make your life easier. With a customer-first approach, we always aim to exceed expectations.
            </p>
          </div>
        </section>
  
        {/* Team Members Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-gray-800">Meet Our Team</h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {/* Team Member 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img className="w-32 h-32 rounded-full mx-auto" src="https://images.pexels.com/photos/8811455/pexels-photo-8811455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Team Member 1" />
                <h3 className="mt-4 text-xl font-semibold text-gray-800">John Doe</h3>
                <p className="text-gray-600 mt-2">CEO & Founder</p>
                <p className="text-gray-500 mt-4">
                  John is the visionary leader behind our company, always pushing the boundaries of innovation.
                </p>
              </div>
  
              {/* Team Member 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img className="w-32 h-32 rounded-full mx-auto" src="https://images.pexels.com/photos/27856326/pexels-photo-27856326/free-photo-of-handsome-boy.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Team Member 2" />
                <h3 className="mt-4 text-xl font-semibold text-gray-800">Jane Smith</h3>
                <p className="text-gray-600 mt-2">Chief Technology Officer</p>
                <p className="text-gray-500 mt-4">
                  Jane is the technical genius that makes sure our products are cutting-edge and reliable.
                </p>
              </div>
  
              {/* Team Member 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img className="w-32 h-32 rounded-full mx-auto" src="https://images.pexels.com/photos/30299386/pexels-photo-30299386/free-photo-of-pensive-young-man-sitting-by-a-tree-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Team Member 3" />
                <h3 className="mt-4 text-xl font-semibold text-gray-800">Alice Brown</h3>
                <p className="text-gray-600 mt-2">Marketing Director</p>
                <p className="text-gray-500 mt-4">
                  Alice ensures our brand message resonates with the world, building connections and partnerships.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        
      </div>
    )
}

export default About
