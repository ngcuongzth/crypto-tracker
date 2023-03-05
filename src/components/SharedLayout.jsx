import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer"
import Sidebar from "./Sidebar.jsx/Sidebar";
import { Outlet } from "react-router-dom";
import ToastCustom from "./Toast/ToastCustom";
import Spinners from "./Loading/Spinners";
import ScrollToTop from "./ScrollToTop";
import { useAuthContext } from "./AuthWrapper/AuthWrapper";

const SharedLayout = () => {
    const { isLoading } = useAuthContext()
    return <div className="relative max-w-screen-custom my-0 mx-auto">
        {isLoading ?
            <Spinners />
            :
            <>
                <Navbar />
                <Sidebar />
                <Outlet />
                <Footer />
                <ToastCustom />
                <ScrollToTop />
            </>

        }
    </div>
}

export default SharedLayout