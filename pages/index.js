import About from "../components/About"
import Container from "../components/Container"
import Footer from "../components/Footer"
import { HomeContainer } from "../components/HomeContainer"
import Skills from "../components/Skills"

export default function Home() {
  return (
    <div className="h-[100vh] w-[100%]">
    <Container title={'Home - julián iocco'}>
      <HomeContainer/>
      <About/>
      <Skills/>
      <Footer/>
    </Container>
    </div>
  )
}
