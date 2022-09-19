import "bootstrap/dist/css/bootstrap.min.css";
import About from "../../components/About";
import BookATable from "../../components/BookATable";
import Campaing from "../../components/Campaing";
import CarouselBanner from "../../components/CarouselBanner";
import Customers from "../../components/Customers";
import Footer from "../../components/layout/Footer";
import MenuWrapper from "../../components/product/MenuWrapper";
const Index = () => {
  return (
    <div className="w-max">
      <CarouselBanner />
      <Campaing />
      <MenuWrapper />
      <About />
      <BookATable />
      <Customers />
    </div>
  );
};

export default Index;
