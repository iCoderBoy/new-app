import Footer from "../Header/Footer";
import Navbar from "../Header/Navbar";

export default function Layout({children}) {
    return(
        <>
        <Navbar/>
        {children}
        <Footer/>
        </>
    )
}