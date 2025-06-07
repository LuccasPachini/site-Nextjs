import { About } from "./_components/about";
import { Hero } from "./_components/hero";
import { Header } from "./_components/header"
import { Services } from "./_components/services";
import { Contact } from "./_components/contacts";
import { Footer } from "./_components/footer";
 
export default function Home() {
  return(
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}