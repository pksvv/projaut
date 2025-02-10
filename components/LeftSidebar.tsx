import Link from 'next/link'
import { useRouter } from 'next/router'

const sidebarLinks = {
  about: [
    { title: 'Our Mission', href: '/about/our-mission' },
    { title: 'Our Vision', href: '/about/our-vision' },
    { title: 'Our Promises', href: '/about/our-promises' },
  ],
  'problems-we-help': [
    { title: 'Delayed Milestones', href: '/problems-we-help/delayed-milestones' },
    { title: 'Poor Handwriting', href: '/problems-we-help/poor-handwriting' },
    { title: 'Difficulty Concentrating', href: '/problems-we-help/difficulty-concentrating' },
    { title: 'Fine Motor Difficulties', href: '/problems-we-help/fine-motor-difficulties' },
  ],
  conditions: [
    { title: 'Autistic Spectrum Disorder (ASD)', href: '/conditions/asd' },
    { title: 'Cerebral Palsy', href: '/conditions/cerebral-palsy' },
    { title: 'Down’s Syndrome', href: '/conditions/down-syndrome' },
  ],
}

const LeftSidebar = () => {
  const router = useRouter()
  const currentSection = Object.keys(sidebarLinks).find((section) =>
    router.pathname.includes(section)
  )

  return (
    <nav className="text-white">
      {currentSection ? (
        <div>
          <h2 className="text-lg font-bold mb-2 capitalize">{currentSection.replace('-', ' ')}</h2>
          <ul className="space-y-2">
            {sidebarLinks[currentSection].map((link) => (
              <li key={link.title}>
                <Link href={link.href} className="block hover:text-yellow-300">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-sm italic">Select a category</p>
      )}
    </nav>
  )
}

export default LeftSidebar
