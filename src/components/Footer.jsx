import React from 'react';
import { resourcesLinks, platformLinks } from "../constants";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className='border-t pt-12'>
      <div className='text-center grid grid-cols-1 lg:grid-cols-3 gap-4 sm:pb-5'>
        <div>
          <h3 className='text-md font-semibold mb-4'>
            Resources
          </h3>
          <ul>
            {resourcesLinks.map((link, index) => (
              <li key={index} className='text-gray-600 mb-2 hover:text-blue-800'>
                <a href={link.href} target='_blank' rel='noreferrer'>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
        <h3 className='text-md font-semibold mb-4'>
        Platform Links
          </h3>
            <ul>
                {platformLinks.map((link, index) => (
                <li key={index} className='text-gray-600 mb-2 hover:text-blue-800'>
                    <a href={link.href} target='_blank' rel='noreferrer'>{link.text}</a>
                </li>
                ))}
            </ul>
        </div>
        <div>
  <h3 className='text-md font-semibold mb-4'>
    Contact Us
  </h3>
  <p className='text-gray-600'>123 Main Street</p>
  <p className='text-gray-600'>New York, NY 10001</p>
  <p className='text-gray-600'>
    <a href='tel:555-555-5555' className='hover:text-blue-800'>555-555-5555</a>
  </p>
  
  <div className="flex justify-center mt-4">
    <img className="h-12" src={logo} alt="Logo" />
  </div>
</div>

      </div>
      <div className='flex justify-between mt-8'>
  <p className='text-gray-600 mx-12'>
    &copy; {new Date().getFullYear()} All rights reserved.
  </p>
  <p className='text-gray-600 ml-20 mb-4 hover:text-blue-800'>
    Privacy Policy | Terms of Service
  </p>
</div>


    </footer>
  );
};

export default Footer;
