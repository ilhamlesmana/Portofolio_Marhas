import Hero from './component/Hero'
import Navbar from './component/Navbar'
import About from './component/About'
import Skills from './component/Skills'
import Projects from './component/Projects'
import Contact from './component/Contact'
import { profile , skills, projects, socials} from './data/portofolio'



function App() {

  return (
    <>
      <Navbar initials={profile.initials} />
      <Hero profile={profile}/> 
      <About profile={profile} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Contact socials={socials} />
    </>
  )
}

export default App;
