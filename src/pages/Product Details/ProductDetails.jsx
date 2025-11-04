import { useParams } from "react-router-dom";
import products from "../../Data/product";


const Product = () => {
  const { id } = useParams();

  // Find the product that matches the URL id
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <p className="text-center mt-10 text-red-500">Product not found</p>;
  }

  return (
    <div className="px-6 py-10">
      <img
        src={product.imageDesktop}
        alt={product.name}
        className="rounded-lg mb-6"
      />
      <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <h2 className="text-2xl font-semibold mb-2">₦{product.price}</h2>
      <h3 className="text-xl font-semibold mt-6 mb-2">Features</h3>
      <p className="text-gray-700">{product.features}</p>
    </div>
  );
};

export default Product;
