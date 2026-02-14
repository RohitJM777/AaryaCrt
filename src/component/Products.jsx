import React from "react";
import { useEffect, useState } from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../customHooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import { productsFetcher } from "../slices/productsSlice";
function Products() {
  // const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const {products,productError:error,productsLoading:loading}=useSelector((state)=>state.product)
  // const {data:products,loading,error} =useFetch("https://fakestoreapi.com/products")

  useEffect(()=>{
       dispatch(productsFetcher())
  },[])

  const {count}=useSelector((state)=>state.count)

  if(loading) return <div>Loading ...</div>
  if(error) return <div>Something went wrong....</div>

  // async function dataFetcher() {
  //   const res = await fetch("https://fakestoreapi.com/products");
  //   const data = await res.json();
  //   setProducts(data);
  //   return data;
  // }

  // useEffect(() => {
  //   dataFetcher();
  // }, []);

  // function handleSearch() {
  //   console.log(searchQuery);
  //   if (!searchQuery) {
  //     dataFetcher();
  //   } else {
  //     const newdata = products.filter((product) => {
  //       console.log(product.category.includes(searchQuery));
  //       return product.title.includes(searchQuery);
  //     });
  //     setProducts(newdata);
  //   }
  // }

  function viewCart() {
    navigate("/cart");
  }

  return (
    <>
      <button onClick={viewCart}>View Cart</button>
      {count}
      {/* <button onClick={handleSearch}>Search</button> */}
      {products.length > 0 &&
        products.map((product) => {
          return (
            <Card
              key={product?.id}
              id={product?.id}
              title={product?.title}
              price={product?.price}
              description={product?.description}
              category={product?.category}
              rating={product?.rating}
              image={product?.image}
            />
          );
        })}
    </>
  );
}

export default Products;
