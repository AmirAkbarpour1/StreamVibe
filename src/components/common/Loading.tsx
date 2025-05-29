import Logo from '@/assets/svgs/logo.svg'

export default function Loading() {
  return (
    <div className="bg-black-08 z-6 flex h-screen w-full flex-col items-center justify-center gap-8 px-6">
      <Logo className="animate-spin90 animate-pulseGlow h-30 w-30" />

      <p
        className="font-manrope animate-shakeColor text-2xl font-semibold select-none"
        style={{ letterSpacing: '0.15em' }}
      >
        Loading...
      </p>
    </div>
  )
}
