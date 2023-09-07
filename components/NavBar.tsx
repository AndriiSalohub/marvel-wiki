'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'
import '@/styles/NavBar.scss'

interface INavLinks {
  label: string
  href: string
}

interface INavItems {
  navItems: INavLinks[]
}

const NavBar: FC<INavItems> = ({ navItems }) => {
  const pathname = usePathname()
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {navItems.map(({ label, href }) => (
          <li className="navigation__list__item" key={href}>
            <Link
              href={href}
              className={
                pathname === href
                  ? 'navigation__list__item__link navigation__list__item__link-active'
                  : 'navigation__list__item__link'
              }
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
