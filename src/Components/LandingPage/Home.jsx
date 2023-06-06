import Products from "../Product/Products";
import Carousel from "./Carousel";
// import "./landing.css"

const Home = () => {
    return (
        <div>
            <Carousel/>
            <Products />
        </div>
    );
}
 
export default Home;