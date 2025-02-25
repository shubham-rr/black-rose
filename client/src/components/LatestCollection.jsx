import React, { useContext} from 'react'
import { ShopContext } from '../context/ShopContext'


const LatestCollection = () => {

    const { products } = useContext(ShopContext);
    const [ latestProducts, setLatestProducts ] = useState([]);
    useEffect(() => {
        setLatestProducts(products.slice(0, 4));
    }, []);
  return (
    <div>
        

      
    </div>
  )
}

export default LatestCollection
