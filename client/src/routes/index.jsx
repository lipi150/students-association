import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Loginpage from "../pages/Loginpage";
import Homepage from "../pages/Homepage";

const index = () => {

    const routes = [
        {
            path: "/",
            element: <Homepage />,
        },
        {
            path: "/loginpage",
            element: <Loginpage />
        },
        {
            path: "*",
            element: <h1>Not Found</h1>
        },
      

    ]



    return (
        <Router>
          
                <Navbar />
                <Routes>
                    {routes.map((route, idx) =>
                        <Route
                            key={idx}
                            path={route.path}
                            element={route.element}
                        />
                    )}
                </Routes>
                <Footer />
           
        </Router>
    )
}

export default index