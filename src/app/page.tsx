"use client"
import { Navigation } from '@/components/Navigation'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='h-screen'>
      <header>
        <Navigation />
      </header>
      <main className="text-4xl font-bold text-center mt-8">
        <h1>Velkommen!</h1>
      </main>
    </div>
    
  )
}
