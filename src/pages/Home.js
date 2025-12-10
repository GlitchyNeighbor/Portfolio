import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home = () => {
    return(
    <>
        <div className="flex flex-col mx-auto">
            <Header />
            <About />
            <Projects />
            <Contact />
        </div>
    </>
    )

}

export default Home;