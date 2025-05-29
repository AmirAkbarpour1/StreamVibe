import { footerLinks, socialLinks } from '@/constants/layout/footer/footerLinks'
import Link from 'next/link'

function FooterLinks() {
  return (
    <div className="laptop:grid-rows-1 laptop:grid-cols-6 tablet:grid-cols-3 tablet:grid-rows-2 grid grid-cols-2 grid-rows-3 gap-y-7.5">
      {footerLinks.map(footerLink => (
        <div key={footerLink.title}>
          <Link
            href={footerLink.href}
            className="laptop:text-lg desktop:text-xl hover:text-red-55 font-semibold transition-all duration-300 hover:scale-105"
          >
            {footerLink.title}
          </Link>
          <ul className="laptop:mt-5 laptop:gap-2.5 desktop:mt-6 desktop:gap-3.5 mt-4 flex flex-col gap-2">
            {footerLink.sections.map(section => (
              <li key={section.name}>
                <Link
                  href={`${footerLink.href}#${section.name}`}
                  className="description hover:text-red-55 font-medium transition-all duration-300 hover:scale-105"
                >
                  {section.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div>
        <h3 className="laptop:text-lg desktop:text-xl font-semibold">
          Connect With Us
        </h3>
        <div className="laptop:mt-5 desktop:mt-6 desktop:gap-3.5 flex gap-2.5">
          {socialLinks.map(socialLink => (
            <Link
              key={socialLink.name}
              href={socialLink.href}
              className="bg-black-10 border-black-15 desktop:p-4 desktop:rounded-lg mt-4 rounded-md border p-3 transition-all duration-300 hover:scale-105"
              aria-label={socialLink.name}
            >
              <socialLink.icon width={20} height={20} className="desktop:w-6" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FooterLinks
