import Category from "../../components/category/Category";
import HeroSection from "../../components/heroSection/HeroSection";
import HomePageProductCard from "../../components/homePageProductCard/HomePageProductCard";
import Layout from "../../components/layout/Layout";
import Testimonial from "../../components/testimonial/Testimonial";
import Track from "../../components/track/Track";

const HomePage = () => {
    return (
        <Layout>
            <HeroSection/>
            <Category/>
            <HomePageProductCard/>
            <Track/>
            <div className="flex justify-center my-3.5">
                <Link to={'/allproduc'}>
                    <button className="bg-gray-500 px-5 py-2 rounded-xl">See more</button>
                </Link>
            </div>
            <Testimonial/>
        </Layout>
    );
}

export default HomePage;
