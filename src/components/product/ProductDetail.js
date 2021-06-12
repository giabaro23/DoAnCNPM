import React, { useEffect } from "react";
import CurrencyFormat from "react-currency-format";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectedProduct } from "../../action/productActions";
import productApi from "../../API/productAPI";
import * as AiIcons from "react-icons/ai";
import "./ProductDetail.css";
import { Link } from "react-router-dom";

function ProductDetail() {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const { productId } = useParams();
  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await productApi.getProductDetail(productId);

        dispatch(selectedProduct(response));
      } catch (error) {
        console.log(error);
      }
    };
    fetchProductDetail();
  }, []);

  return (
    <div className="pDetail">
      <div className="pDetail__img">
        <img
          src={product.link_image}
          alt={product.name}
          width="400"
          height="400"
        />
      </div>
      <div className="pDetail__info">
        <div className="pDetail__name">
          <p>{product.name}</p>
        </div>
        <div className="pDetail__rating">
          {Array(product.rating)
            .fill()
            .map((_, i) => (
              <p>
                <AiIcons.AiFillStar></AiIcons.AiFillStar>
              </p>
            ))}
          <span>Đã bán: {product.count_purchased}</span>
        </div>
        <div className="pDetail__bodyInfo">
          <div className="pDetail__priceBox">
            <strong>
              <CurrencyFormat
                value={product.price}
                displayType={"text"}
                thousandSeparator={true}
              />
              đ
            </strong>
          </div>
          <div className="pDetail__description">
            <strong>Người bán hàng:</strong>
            <Link to="/profile" className="pDetail__shop">
              <img
                src={product.shop_link_image}
                alt=""
                width="45"
                height="45"
              />
              <p>{product.name_shop}</p>
            </Link>
            <div className="pDetail__description-form">
              <p>Mô tả sản phẩm: </p>
              <span>{product.description}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
