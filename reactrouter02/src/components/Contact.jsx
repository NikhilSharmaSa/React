import React from 'react'
import contactimage from '../assets/5059493.webp'
function Contact() {
    return (
        <>
        <div className='flex justify-between px-32 w-full items-center '>
        <div className=" w-full max-w-2xl my-10 p-6 bg-white shadow-lg rounded-lg">
  <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Contact Us</h2>
  <form action="#" method="POST" className="space-y-6">
   
    <div>
      <label for="name" classNameName="block text-gray-700 text-sm font-semibold">Your Name</label>
      <input
        type="text"
        id="name"
        name="name"
        required
        className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        placeholder="Enter your name"
      />
    </div>

  
    <div>
      <label for="email" className="block text-gray-700 text-sm font-semibold">Your Email</label>
      <input
        type="email"
        id="email"
        name="email"
        required
        className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        placeholder="Enter your email"
      />
    </div>

   
    <div>
      <label for="message" className="block text-gray-700 text-sm font-semibold">Your Message</label>
      <textarea
        id="message"
        name="message"
        required
        rows="4"
        className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        placeholder="Write your message"
      ></textarea>
    </div>

   
    <div>
      <button
        type="submit"
        className="w-full py-3 px-6 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
      >
        Send Message
      </button>
    </div>
  </form>
</div>
<div>
    <img src={contactimage} alt="" />
</div>
        </div>
       

        </>
    )
}

export default Contact
