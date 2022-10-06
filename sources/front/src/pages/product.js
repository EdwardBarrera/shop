import { useNavigate, useParams } from "react-router-dom";
import Rating from "../components/rating";
import products from '../products'

const Product = () => {
    let { id } = useParams();
    const navigate = useNavigate()
    const product = products.find(p => p._id === id)
    return <>
        <button onClick={() => navigate(-1)}>GO BACK</button>
        <div className="flex flex-wrap -m-4">
            <div className="p-3 w-[50%]">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="p-3 w-[25%]">
                <h2 className="text-xl uppercase mb-2">{product.name}</h2>
                <hr className="my-3" />
                <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                <hr className="my-3" />
                <span>Price: ${product.price}</span>
                <hr className="my-3" />
                <p>Description: {product.description}</p>
            </div>
            <div className="p-3 w-[25%]">
                <div className="border border-gray-300 py-4">
                    <div className="px-4 flex justify-between">
                        <span>Price:</span>
                        <span>{product.price}</span>
                    </div>
                    <hr className="my-3 border-gray-300" />
                    <div className="px-4 flex justify-between">
                        <span>Status:</span>
                        <span>{product.countInStock > 0 ? "In Stock" : "Out Of Stock"}</span>
                    </div>
                    <hr className="my-3 border-gray-300" />
                    <div className="px-4">
                        <button disabled={product.countInStock === 0} className="bg-black px-3 py-2 text-white block w-full disabled:bg-gray-500 disabled:cursor-not-allowed">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Product