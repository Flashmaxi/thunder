import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Books from '@/components/sections/Books'
import Contact from '@/components/sections/Contact'

const Page = () => {
  return (
    <main className="mb-auto">
      <Hero />
      <About />
      <Books />
      <Contact />
    </main>
  )
}

export default Page
