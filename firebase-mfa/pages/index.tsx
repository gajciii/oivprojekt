import Link from "next/link";

export default function Home() {
  return (
    <div className='flex flex-col gap-y-6 h-screen md:w-screen px-5 sm:px-20 lg:px-80 py-24 bg-white'>
        <header className='flex justify-between mb-40'>
            <p className='text-xl font-bold'>2FA</p>
            <nav className='flex gap-x-8'>
                <Link className='hover:underline hover:text-sm' href='/login'>Prijava</Link>
                <Link className='hover:underline hover:text-sm' href='/sign-up'>Registracija</Link>
            </nav>
        </header>
        <h1 className='text-3xl'>Aplikacija za dvo-fazno overjanje</h1>
        <p>Ekipa: Gaja Gujt, Tevz Starovasnik, Adam Kac</p>
 

    </div>
  )
}
