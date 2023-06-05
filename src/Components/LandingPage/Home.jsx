import Categories from "./Categories";
import MainPage from "./MainPage";
import SlideCard from "./SlideCard";
import "./landing.css"

const Home = () => {
    return (
        <div>
            <section className="home">
            <div className="container d_flex">
                <Categories />
                <SlideCard />
                <MainPage />
            </div>
            </section>
        </div>
    );
}
 
export default Home;