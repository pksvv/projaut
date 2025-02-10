import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const Header = () => {
  return (
    <header className="w-full bg-white dark:bg-gray-950 shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-4 mx-auto max-w-full">
        {/* Logo & Title */}
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center space-x-3">
            <Logo className="h-8 w-8" />
            {typeof siteMetadata.headerTitle === 'string' ? (
              <span className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                {siteMetadata.headerTitle}
              </span>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
              >
                {link.title}
              </Link>
            ))}
        </nav>

        {/* Search, Theme Toggle, and Mobile Nav */}
        <div className="flex items-center space-x-4">
          <SearchButton />
          <ThemeSwitch />
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header
