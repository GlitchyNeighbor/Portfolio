import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home = () => {
    return(
    <>
        <div className="flex flex-col w-9/12 pt-3 px-6 mx-auto">
            <Header />
            <About />
            <Projects />
            <Contact />
        </div>
    </>
    )

}

export default Home;