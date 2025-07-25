import { useState } from "react";
import "./App.css";

function App() {
  const [customerName,setcustomerName] = useState("");
  const [customerPhone, setcustomerPhone] = useState("+91");

  const [productName,setproductName]=useState("");
  const [quantity,setQuantity]=useState(0);
  const [price,setPrice]=useState(0);

  const [productList,setProductList]=useState([]);
  const [showGeneratedBill,setShowGeneratedBill]=useState(false);
  
  const handleGenerateBills=()=>{
      if(!showGeneratedBill){
        setShowGeneratedBill(true);
      }
    }
  const resetBills=()=>{
    setProductList([]);
    setcustomerName("");
    setcustomerPhone("+91");
    setproductName("");
    setQuantity(0);
    setShowGeneratedBill(false);
    setPrice(0);
  }
  const handleAddButton =()=>{
    let obj1={
      productName: productName,
      qty:quantity,
      total:price* quantity
    }

    
    setProductList([...productList,obj1]);
setproductName("");
    setQuantity(0);
    setPrice(0);
  }

  return (
    <>
      <h1 className="heading1">Billing Counter</h1>
      <div className="customerDetails">
        <div className="customerName">
          <label htmlFor="customerName">Customer Name : </label>
          <input
            type="text"
            name="customerName"
            value={customerName}
            onChange={(e) => setcustomerName(e.target.value)}
          />
        </div>
        <div className="contact">
          <label htmlFor="contact">Contact : </label>
          <input
            type="phone"
            name="contact"
            value={customerPhone}
            onChange={(e) => setcustomerPhone(e.target.value)}
          />
        </div>
      </div>
     {productList.length>0 &&  <div className="allProducts">
        <table>
  <thead>
    <tr>
      <th>SL</th>
      <th>Name</th>
      <th>Qty</th>
      <th>Total</th>
    </tr>
  </thead>
  <tbody>
    {
      productList.map((element, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{element.productName}</td>
          <td>{element.qty}</td>
          <td>{element.total}</td>
        </tr>
      ))
    }
  </tbody>
</table>

        <button onClick={handleGenerateBills}>Generate Bill</button>
      </div>}
      <div className="itemInput">
        <div className="productName">
          <label htmlFor="ProductName">Product Name : </label>
          <input type="text" name="productName"
          value={productName} onChange={(e)=>setproductName(e.target.value)} />
        </div>
        <div className="qty">
          <label htmlFor="quantity">Quantity : </label>
          <input type="number" name="quantity" 
          value={quantity} onChange={(e)=>setQuantity(e.target.value)}/>
        </div>
        <div className="price">
          <label htmlFor="price">Price : </label>
          <input type="number" name="price" 
          value={price} onChange={(e)=>setPrice(e.target.value)}/>
        </div>
        <div className="total">
          <p>
            <b>Total : </b>₹ {price*quantity}
          </p>
        </div>
        <div className="addItem">
          <button onClick={handleAddButton}>Add Item</button>
        </div>
      </div>
      {showGeneratedBill && <div className="generatedBills">
        <h1 className="heading2">Generated Bills</h1>
        <div className="customerBox">
          <p><b>Customer Name:</b> {customerName}   <b>Contact: </b> {customerPhone}</p>
        </div>
        <div className="allProducts">
        <table>
  <thead>
    <tr>
      <th>SL</th>
      <th>Name</th>
      <th>Qty</th>
      <th>Total</th>
    </tr>
  </thead>
  <tbody>
    {
      productList.map((element, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{element.productName}</td>
          <td>{element.qty}</td>
          <td>{element.total}</td>
        </tr>
      ))
    }
  </tbody>
</table>

        <button onClick={resetBills}>Reset</button>
      </div>
      </div>}
    </>
  );
}

export default App;
