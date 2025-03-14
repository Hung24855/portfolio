import Layout from "@/_core/app/layout";
import About from "@/components/about";
import Banner from "@/components/banner";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

const HomeView = () => {
    return (
        <Layout>
            <Banner />
            <About />
            <Experience />
            <Projects />
            <Skills />
        </Layout>
    );
};

export default HomeView;
