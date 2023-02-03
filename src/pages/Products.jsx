// 1
// import { useSearchParams } from "react-router-dom";

// export const Products = () => {
//   const [searchParams] = useSearchParams();
//   const name = searchParams.get("name");
//   const color = searchParams.get("color");
//   const maxPrice = searchParams.get("maxPrice");

//   return (
//     <div>
//       <p>Name: {name}</p>
//       <p>Color: {color}</p>
//       <p>Maximum price: {maxPrice}</p>
//     </div>
//   );
// };

// 2
// import { useSearchParams } from "react-router-dom";
// export const Products = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const name = searchParams.get("name");

//   return (
//     <div>
//       <h1>Products</h1>
//       <input
//         type="text"
//         value={name}
//         onChange={e => setSearchParams({ name: e.target.value })}
//       />
//     </div>
//   );
// };
// 3
import { useSearchParams } from "react-router-dom";
import { ProductList } from "../components/ProductList";
import { SearchBox } from "../components/SearchBox";
import { getProducts } from "../fakeAPI";
import {Link} from '../components/App.styled'

 const Products = () => {
  const products = getProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get("name") ?? "";

  const visibleProducts = products.filter((product) =>
    product.name.toLowerCase().includes(productName.toLowerCase())
  );

  const updateQueryString = (name) => {
    const nextParams = name !== "" ? { name } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      <Link to="/products/h-1" state={{ from: "/dashboard?name=hoodie" }}>
      Navigate to product h-1
    </Link>
      <SearchBox value={productName} onChange={updateQueryString} />
      <ProductList products={visibleProducts} />
    </main>
  );
};

export default Products;

// const [searchParams] = useSearchParams();

// const name = searchParams.get("name");
// console.log(name, typeof name); // "hoodie", string

// const maxPrice = searchParams.get("maxPrice");
// console.log(maxPrice, typeof maxPrice); // "500", string

// const inStock = searchParams.get("inStock");
// console.log(inStock, typeof inStock); // "true", string

// const [searchParams] = useSearchParams();
// const params = useMemo(
//   () => Object.fromEntries([...searchParams]),
//   [searchParams]
// );
// const { name, maxPrice, inStock } = params;