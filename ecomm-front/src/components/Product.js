import { Card } from "react-bootstrap";

const Product = () => {
    return (
        <Card className='my-3 p-3 rounded'>
            <a href={`/product/${product.id}`}>
                <Card.Img></Card.Img>
            </a>
            
        </Card>
    )
}

export default Product
