import Link from 'next/link'

function FooterLegal() {
  return (
    <div className="description border-black-15 desktop:pt-6 tablet:flex-row tablet:justify-between flex flex-col gap-5 border-t pt-5">
      <p>@2023 streamvib, All Rights Reserved</p>
      <div className="desktop:gap-5 flex flex-row gap-4">
        <Link href="/">Terms of Use</Link>
        <span className="bg-black-15 h-auto w-0.25"></span>
        <Link href="/">Privacy Policy</Link>
        <span className="bg-black-15 h-auto w-0.25"></span>
        <Link href="/">Cookie Policy</Link>
      </div>
    </div>
  )
}

export default FooterLegal
