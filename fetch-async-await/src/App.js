
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  let [products,setProducts] = useState([]);
  useEffect(()=>{
    getProductsFromServer();
  },[]);

  let getProductsFromServer = async ()=>{
    let reqOptions={
      method:"GET"
    }

     let JSONData= await fetch("https://fakestoreapi.com/products",reqOptions)
     let JSOData= await JSONData.json();

     setProducts(JSOData);
     console.log(JSOData);
  }
  return (
    <div className="App">
      <button onClick={()=>{getProductsFromServer();

      }}>GET PRODUCTS</button>
      <div className='productsContainer'>
      {products.map((ele,i)=>{
        return(
          <div key={i} className='productDiv'>
          
          <img className='productPic' src={ele.image} title={ele.description}></img>
          <h3>{ele.id}. {ele.title}</h3>
          <h3>${ele.price}</h3>
          
          </div>
        );
      })}
    </div>
    </div>
  );
}

export default App;
