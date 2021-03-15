import Header from "../components/Header"
import ProductList from "../components/ProducList"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
function Home() {
  return (
    <div className="bg-color">
        <div className="container grid-container">
            <Header />
            <ProductList />
            <Footer />
            <Navbar />
        </div>
    </div>
  );
}

export default Home;