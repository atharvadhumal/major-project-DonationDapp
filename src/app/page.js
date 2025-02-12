import Hero from './components/Hero'
import Nav from './components/Nav'
import Donation from './components/Donation'
import Mission from './components/Mission'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main >
      <Nav />
      <section className="">
        <Hero />
        <Mission />
        <Donation />
        <About />
        <Contact />
        <Footer />
      </section>
    </main>
  )
}
