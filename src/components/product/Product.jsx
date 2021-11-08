import "./product.css";

const Product = ({img,link,ptitle}) => {
  return (
    
    

<div className="p">
      
      <div className="p-browser">
        <div className="p-circle r"></div>
        <div className="p-circle y"></div>
        <div className="p-circle g"></div>
      </div>
    
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
      </a>
      
    </div>
    
        
      

    
  );
};

export default Product;
