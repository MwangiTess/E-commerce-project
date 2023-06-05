import Categories from "./Categories";
import MainPage from "./MainPage";
import Sliders from "./Slide";
import "./landing.css"

const Home = () => {
    return (
        <div>
            <section className="home">
            <div className="container d_flex">
                <Categories />
                <Sliders />
                <MainPage />
            </div>
            </section>
        </div>
    );
}
 
export default Home;