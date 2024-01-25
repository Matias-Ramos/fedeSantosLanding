// BTS
import { Col, Row } from "react-bootstrap";
// Data
import productsList from "./productList";
import CtaBtn from "../../../components/CtaBtn";
// Style
const rowStyle = "productRow my-5 justify-content-center gap-5";
const imgColStyle = "d-flex justify-content-center productCol";
const txtColStyle = "d-flex flex-column justify-content-center productCol";
const productNameStyle = "text-center text-lg-start";


const ProductsMapper = () => {
    return (
        <>
            {
                productsList.map(product => {
                    return (
                        <Row key={product.name} className={rowStyle}>

                            <Col xs={12} lg={4} className={imgColStyle}>
                                <img
                                    src={product.image}
                                    className="w-100"
                                    alt={`Imagen de ${product.name}`}
                                />
                            </Col>

                            <Col xs={12} lg={6} className={txtColStyle}>
                                <span className={productNameStyle}>
                                    {product.name}
                                </span>

                                <span>
                                    {product.description}
                                </span>

                                <CtaBtn text="Adquirir" variant="contained" handleClick={()=>{}} />
                            </Col>
                        </Row>
                    )
                })
            }
        </>
    )
}
export default ProductsMapper