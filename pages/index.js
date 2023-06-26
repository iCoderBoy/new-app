import AboutUs from "@/components/UI/AboutUs";
import Contact from "@/components/UI/Contact/Contact";
import Hero from "@/components/UI/Hero";
import Projects from "@/components/UI/Projects/Projects";



export default function Home() {
  return (
    <>
      <div id="hero">
      <Hero/>
      </div>
      <div id="my_work">
      <Projects />
      </div>
      <div id="aboutUs">
        <AboutUs/>
      </div>
      <div id="contact">
        <Contact/>
      </div>
    </>  
    )
}
