import "./productList.css";
import Product from "../product/Product";
import products from "../../data";

const ProductList = () => {
  return (
    
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">My Projects</h1>
        <p className="pl-desc">
         
         Click on the projects for their github repos
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} ptitle={item.ptitle} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
