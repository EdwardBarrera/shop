import Product from '../components/product'
import products from '../products'

const Home=()=>{
    return <>
    <h1 className='text-3xl'>LATEST PRODUCTS</h1>
    <div className="flex flex-wrap -m-2 "> 
        {products.map((product)=><>
            <div className='w-[25%] p-2' key={product._id}>
                <Product product={product}/>
            </div>
        </>)}
    </div>
    </>
}

export default Home