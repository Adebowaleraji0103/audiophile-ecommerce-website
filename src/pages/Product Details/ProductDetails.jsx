import { useParams } from "react-router-dom";
import products from "../../Data/product";
import { useState } from "react";

const Product = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <p className="text-center mt-10 text-red-500 text-lg font-semibold">
        Product not found 😢
      </p>
    );
  }

  const increaseQty = () => setQuantity((q) => q + 1);
  const decreaseQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <div className="px-6 py-10 max-w-[1200px] mx-auto">
      {/* Go Back */}
      <button
        onClick={() => window.history.back()}
        className="text-gray-500 underline mb-8"
      >
        Go Back
      </button>

      {/* Product Info Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
        <img
          src={product.imageDesktop}
          alt={product.name}
          className="rounded-lg w-full md:w-[400px] lg:w-[500px]"
        />

        <div className="flex flex-col gap-4 text-center md:text-left lg:w-[450px]">
          {product.label && (
            <p className="text-[#D87D4A] uppercase tracking-[6px] text-sm">
              {product.label}
            </p>
          )}
          <h1 className="text-3xl font-bold leading-tight">{product.name}</h1>
          <p className="text-gray-600 text-[15px] leading-relaxed">
            {product.description}
          </p>
          <p className="text-xl font-semibold mt-2">₦{product.price}</p>

          {/* Quantity + Add to Cart */}
          <div className="flex items-center justify-center md:justify-start gap-4 mt-3">
            <div className="bg-gray-100 flex items-center justify-between w-[110px] px-3 py-2 rounded-md">
              <button
                onClick={decreaseQty}
                className="text-lg font-bold text-gray-700"
              >
                -
              </button>
              <span className="font-semibold">{quantity}</span>
              <button
                onClick={increaseQty}
                className="text-lg font-bold text-gray-700"
              >
                +
              </button>
            </div>
            <button className="bg-[#D87D4A] text-white px-6 py-3 uppercase tracking-wider rounded-md hover:bg-[#FBAF85] transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Features & In The Box */}
      <div className="flex flex-col lg:flex-row justify-between gap-10 mt-16">
        <div className="lg:w-2/3">
          <h2 className="text-2xl font-bold mb-4">Features</h2>
          <div className="flex flex-col gap-[1rem] md:gap-[1.5rem]">
            <p className="text-gray-600 whitespace-pre-line leading-relaxed">
              {product.features}
            </p>
            <p className="text-gray-600 whitespace-pre-line leading-relaxed">
              {product.features2}
            </p>
          </div>
        </div>

        <div className="lg:w-1/3">
          <h2 className="text-2xl font-bold mb-4">In The Box</h2>
          <ul className="flex flex-col gap-2">
            {product.includes.map((item, i) => (
              <li key={i}>
                <span className="text-[#D87D4A] font-semibold">
                  {item.quantity}x
                </span>{" "}
                <span className="text-gray-600">{item.item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Product;
