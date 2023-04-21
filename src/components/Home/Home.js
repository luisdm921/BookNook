import NavBar from "../NavBar/NavBar";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import "../Products/Products.css";

export default function Home() {
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <div className="mainM">
        <div className="books">
          <h1>-Books-</h1>
          <br />
        </div>
        <div className="product-card-container">
          <Products></Products>
        </div>
      </div>
    </>
  );
}
