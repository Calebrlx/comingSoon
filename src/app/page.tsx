import Image from 'next/image'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "next-themes"
import { NextSeo } from 'next-seo';
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const socialIcons = [
    {
      icon: "facebook",
      link: "https://www.facebook.com/",
    },
    {
      icon: "twitter",
      link: "https://twitter.com/calebforestal",
    },
    {
      icon: "linkedIn",
      link: "https://www.linkedin.com/in/calebforestal",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 bg-white dark:bg-gray-900">

      <div className="flex flex-col items-center">
        <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 dark:text-white text-center leading-none'>
          Coming Soon<span className='ml-2 text-indigo-600'>⏳</span>
        </h1>
        <p className='mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 text-center max-w-xl'>
          We're preparing something exciting. An innovative project that blends AI with innovation. Stay tuned.
        </p>
      </div>

      <div className='mt-10 w-full max-w-md'>
        <form className="space-y-4" action="#" method="POST">
          <div>
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-200 font-medium text-lg">Stay Updated</label>
            <div className="mt-1">
              <input id="email" name="email" type="email" placeholder='Enter your email' autoComplete="email" required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm text-gray-900 dark:text-white focus:ring-indigo-500 focus:border-indigo-500" />
              <button type="submit" className='mt-3 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-150 ease-in-out'>
                Subscribe
              </button>
            </div>
          </div>
        </form>
      </div>


      <footer className='w-full py-8'>
        <div className='flex justify-center space-x-6 mb-4'>
          {socialIcons.map((social, index) => (
            <a key={index} href={social.link} target='_blank' className='text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition duration-150 ease-in-out'>
              <span className='sr-only'>{social.icon}</span>
              <Image src={`/icons/${social.icon}.svg`} alt={social.icon} width={24} height={24} /> {/* Ensure you have these SVGs */}
            </a>
          ))}
        </div>
        <p className='text-center text-sm text-gray-500 dark:text-gray-400'>
          © 2023 | Relix Co. All rights reserved.
        </p>
        <ThemeSwitcher />
      </footer>

    </main>
  )
}