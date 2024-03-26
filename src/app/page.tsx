import Image from 'next/image'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "next-themes"
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
const inter = Inter({ subsets: ['latin'] })
import SubscriptionForm from '@/components/SubscriptionForm';

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 bg-white dark:bg-gray-900">

      <div className="flex flex-col items-center">
        <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 dark:text-white text-center leading-none'>
          Coming Soon<span className='ml-2 text-indigo-600'>⏳</span>
        </h1>
        <p className='mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 text-center max-w-xl'>
          We&apos;re preparing something exciting. An innovative project that blends AI with innovation. Stay tuned.
        </p>
      </div>

      <div className='mt-10 w-full max-w-md'>
        <SubscriptionForm />
      </div>


      <footer className='w-full py-8'>
        <div className='flex justify-center space-x-6 mb-4'>
          <a href="https://www.facebook.com/" target='_blank' className='text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition duration-150 ease-in-out'>
            <span className='sr-only'>Facebook</span>
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.995 4.388 10.982 10.125 11.85v-8.385H7.078v-3.465h3.047V9.907c0-3.026 1.792-4.687 4.533-4.687 1.312 0 2.686.236 2.686.236v2.953h-1.513c-1.494 0-1.953.925-1.953 1.873v2.244h3.328l-.532 3.465h-2.796v8.385C19.612 23.055 24 18.068 24 12.073z" />
            </svg>
          </a>

          <a href="https://twitter.com/calebforestal" target='_blank' className='text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition duration-150 ease-in-out'>
            <span className='sr-only'>Twitter</span>
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.719 0-4.923 2.204-4.923 4.923 0 .386.044.762.128 1.124-4.094-.205-7.722-2.166-10.148-5.146-.424.729-.666 1.574-.666 2.476 0 1.709.869 3.213 2.188 4.096-.806-.026-1.566-.247-2.229-.616v.062c0 2.386 1.697 4.374 3.946 4.828-.413.111-.848.171-1.296.171-.314 0-.621-.03-.917-.086.623 1.944 2.432 3.359 4.576 3.4-1.675 1.314-3.786 2.095-6.077 2.095-.394 0-.783-.023-1.17-.067 2.165 1.389 4.73 2.2 7.488 2.2 8.98 0 13.894-7.438 13.894-13.894 0-.211 0-.422-.015-.632.954-.689 1.78-1.55 2.437-2.532z" />
            </svg>
          </a>


          <a href="https://www.linkedin.com/in/calebforestal" target='_blank' rel="noopener noreferrer" className='text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition duration-150 ease-in-out'>
            <span className='sr-only'>LinkedIn</span>
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5 11.5h-3v-5.5c0-1.38-.56-2.5-1.5-2.5s-1.5 1.12-1.5 2.5v5.5h-3v-10h3v1.5c.46-.85 1.69-2 3.5-2 2.5 0 3.5 1.65 3.5 4.25v6.25z" />
            </svg>
          </a>

        </div>

        <p className='text-center text-sm text-gray-500 dark:text-gray-400'>
          © 2023 | Relix Co. All rights reserved.
        </p>
        <ThemeSwitcher />
      </footer>

    </main>
  )
}

