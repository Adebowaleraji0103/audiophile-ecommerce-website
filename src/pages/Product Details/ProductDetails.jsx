import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams(); // 🟢 get the product id from the URL

  return (
    <div className="p-10 bg-amber-400 h-[20rem]">
      <h1 className="text-3xl font-bold">Product: {id}</h1>
      <p>This page will show details for the {id} product.</p>
    </div>
  );
};

export default ProductDetail;
