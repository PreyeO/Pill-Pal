import Features from "../components/Layouts/LandingSections/Features"
import Hero from "../components/Layouts/LandingSections/Hero"
import NavBar from "../components/Layouts/NavBar/NavBar"


const LandingPage = () => {




    return(
        <main className=" font-OpenSans">
           <NavBar />
           <Hero />
           <Features />
        </main>
    )
}

export default LandingPage