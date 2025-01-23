import { useState } from "react";

function ProductForm() {
  // State for form fields
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');

  // State for dynamic categories
  

  const handleSubmit = () => {
    const payload={
        name,description,category,price
    }
   
    fetch("http://localhost:8080/notes", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
        },
        body: JSON.stringify(payload)
    }).then((res)=>res.json())
    .then((data)=>{
        console.log(data)
    })
    .catch((error)=>console.log(error))
    // Add logic to send product to backend or handle it further
  };

  return (
    <>
      <h1>Welcome, please add a new product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>Description:</label>
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div>
          <label>Category:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select a category</option>
            <option value="Electronics">Electronics</option>
            <option value="Books">Books</option>
            <option value="Clothing">Clothing</option>
            <option value="Home Appliances">Home Appliances</option>
            <option value="Toys">Toys</option>
          </select>
        </div>

        
        <div>
          <label>Price:</label>
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <button type="submit" onClick={handleSubmit}>Add Product</button>
      </form>
    </>
  );
}

export default ProductForm;
