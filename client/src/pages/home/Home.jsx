import { Footer } from "../../components/footer/Footer"
import { HomeProducts } from "../../components/homeProducts/HomeProducts"
import { Navbar } from "../../components/navbar/Navbar"


export const Home = () => {
    return(
        <div>
            <Navbar />
            <HomeProducts />
            <Footer />
        </div>
    )
}