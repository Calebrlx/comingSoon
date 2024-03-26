'use client';
import React, { useState } from 'react';

function SubscriptionForm() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = async (event) => {
      event.preventDefault(); // Prevents the default form submission
  
      // API endpoint where the form will submit data
      const endpoint = '/api/submit-email';
  
      // Use fetch API to post the email data
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
  
      const result = await response.json();
  
      // Set a message based on the response
      setMessage(result.message);
  
      // Optionally, clear the input field on success
      if (response.ok) {
        setEmail('');
      }
    };
  
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-gray-700 dark:text-gray-200 font-medium text-lg">Stay Updated</label>
          <div className="mt-1">
            <input 
              id="email" 
              name="email" 
              type="email" 
              placeholder='Enter your email' 
              autoComplete="email" 
              required 
              value={email} // Use the React state as the source of truth
              onChange={(e) => setEmail(e.target.value)} // Update state on change
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm text-gray-900 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
            />
            <button type="submit" className='mt-3 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-150 ease-in-out'>
              Subscribe
            </button>
          </div>
          {message && <p className="text-center mt-4">{message}</p>} {/* Display submission message */}
        </div>
      </form>
    );
  }
  
  export default SubscriptionForm;
  