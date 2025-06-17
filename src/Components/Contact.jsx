import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className='bg-gradient-to-r from-indigo-900 via-blue-700 to-cyan-700 text-white py-16 px-6'>
      <div className='text-center'>
        <h1 className='text-5xl font-semibold'>Get In Touch</h1>
        <p className='text-xl py-2'>Let's work together to bring your ideas to life</p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12 max-w-7xl mx-auto'>
        {/* Left: Contact Info */}
        <div className='space-y-6'>
          <h2 className='text-3xl font-bold'>Let's Connect</h2>
          <p className='text-lg text-justify'>
            I'm always interested in new opportunities and exciting projects.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          <div className='space-y-6'>
            {/* Email */}
            <div className='flex items-center space-x-4'>
              <div className='bg-gradient-to-r from-cyan-500 to-sky-700 p-3 rounded-full hover:scale-110 transition duration-500'>
                <Mail size={20} className='text-white' />
              </div>
              <div>
                <h3 className='font-medium'>Email</h3>
                <p className='text-white/80'>farhanfareed450@gmail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className='flex items-center space-x-4'>
              <div className='bg-gradient-to-r from-cyan-500 to-sky-700 p-3 rounded-full hover:scale-110 transition duration-500'>
                <Phone size={20} className='text-white' />
              </div>
              <div>
                <h3 className='font-medium'>Phone</h3>
                <p className='text-white/80'>+92 347-6701976</p>
              </div>
            </div>

            {/* Location */}
            <div className='flex items-center space-x-4'>
              <div className='bg-gradient-to-r from-cyan-500 to-sky-700 p-3 rounded-full hover:scale-110 transition duration-500'>
                <MapPin size={20} className='text-white' />
              </div>
              <div>
                <h3 className='font-medium'>Location</h3>
                <p className='text-white/80'>Gujrat, Punjab | PAKISTAN</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className='bg-white/10 p-6 md:p-10 rounded-3xl shadow-lg w-full'>
          <form action='#' method='post' className='space-y-4'>
            <div className='flex flex-col md:flex-row gap-4'>
              {/* Name */}
              <div className='flex flex-col w-full'>
                <label className='text-white font-semibold'>Name</label>
                <input
                  type='text'
                  placeholder='Your Name'
                  required
                  className='bg-white/10 w-full focus:outline-none py-3 px-4 rounded-lg placeholder:text-white/80'
                />
              </div>

              {/* Email */}
              <div className='flex flex-col w-full'>
                <label className='text-white font-semibold'>Email</label>
                <input
                  type='email'
                  placeholder='Your Email'
                  required
                  className='bg-white/10 w-full focus:outline-none py-3 px-4 rounded-lg placeholder:text-white/80'
                />
              </div>
            </div>

            {/* Subject */}
            <div className='flex flex-col'>
              <label className='text-white font-semibold'>Subject</label>
              <input
                type='text'
                placeholder='Project Discussion'
                required
                className='bg-white/10 w-full focus:outline-none py-3 px-4 rounded-lg placeholder:text-white/80'
              />
            </div>

            {/* Message */}
            <div className='flex flex-col'>
              <label className='text-white font-semibold'>Message</label>
              <textarea
                rows='5'
                placeholder='Tell me about your Project...'
                required
                className='bg-white/10 w-full focus:outline-none py-3 px-4 rounded-lg placeholder:text-white/80 resize-none md:resize-y'
              ></textarea>
            </div>

            {/* Buttons */}
            <div className='flex flex-col md:flex-row justify-between gap-4 pt-4'>
              <input
                type='reset'
                value='RESET'
                className='text-white w-full md:w-52 py-2 rounded-lg bg-red-600 hover:scale-110 transition duration-500 cursor-pointer'
              />
              <input
                type='submit'
                value='SUBMIT'
                className='text-white w-full md:w-52 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-sky-700 hover:scale-110 transition duration-500 cursor-pointer'
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
