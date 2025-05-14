import FooterLinks from '@/components/layout/footer/FooterLinks'
import FooterLegal from '@/components/layout/footer/FooterLegal'

function Footer() {
  return (
    <div className="bg-black-06 laptop:px-20 laptop:pt-20 laptop:pb-10 laptop:gap-20 desktop:px-40.5 desktop:pt-25 desktop:pb-12.5 desktop:gap-25 flex flex-col gap-12.5 px-4 pt-12.5 pb-5">
      <FooterLinks />
      <FooterLegal />
    </div>
  )
}

export default Footer
