import { Link } from 'react-router-dom'
import Rating from './rating'

const Product=({product})=>{
    return <>
    <Link to={`/product/${product._id}`} className="w-full text-left border border-gray-300 rounded-lg p-4 space-y-3 flex flex-col h-full">
        <img src={product.image} alt={product.name} />
        <div className="!mb-auto">
            <strong>{product.name}</strong>
        </div>
        <div>
            <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
        </div>
        <div>
            <span className="text-xl">${product.price}</span>
        </div>
    </Link>
    </>
}

export default Product