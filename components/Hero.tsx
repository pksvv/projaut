import Link from '@/components/Link'
import Image from 'next/image'
import siteMetadata from '@/data/siteMetadata'

export default function Hero() {
  return (
    <div
      className="relative flex flex-col items-center justify-center w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px]
                 bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-20 text-center dark:from-gray-800 dark:to-gray-900"
    >
      {/* Profile Image */}
      <Image
        src="/static/favicons/vg_hexagon.svg"
        alt={siteMetadata.author}
        width={150}
        height={150}
        className="w-40 h-40 text-blue-500 dark:text-yellow-400"
      />

      {/* Name / Title */}
      <h1 className="mt-4 text-5xl font-extrabold text-white dark:text-gray-200 sm:text-6xl md:text-7xl">
        {siteMetadata.author}
      </h1>

      {/* Subtitle / Short Bio */}
      <p className="mt-2 max-w-3xl text-lg text-gray-200 dark:text-gray-400 sm:text-xl">
        {siteMetadata.description}
      </p>

      {/* Call-to-Action Buttons */}
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <Link
          href="/resume.pdf"
          className="rounded-lg bg-white px-6 py-3 text-lg font-semibold text-blue-600 shadow-md 
                     transition hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
        >
          Download Resume
        </Link>
        <Link
          href="/contact"
          className="rounded-lg bg-gray-900 px-6 py-3 text-lg font-semibold text-white shadow-md 
                     transition hover:bg-gray-700 dark:bg-gray-600 dark:hover:bg-gray-500"
        >
          Contact Me
        </Link>
      </div>
    </div>
  )
}
