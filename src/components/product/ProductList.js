import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setProduct } from "../../action/productActions";
import productApi from "../../API/productAPI";
import "./ProductList.css";
import "./table.css";
import CurrencyFormat from "react-currency-format";
import * as AiIcons from "react-icons/ai";

function ProductList() {
  const productsList = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const params = `page=0`;
        const response = await productApi.getProducts(params);
        dispatch(setProduct(response.products));
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);
  const products = productsList.products;

  return (
    <div className="product__list">
      {products.length === 0 ? (
        <img
          className="product__list-loading"
          src="https://i0.wp.com/thumbs.gfycat.com/CompleteZanyIlsamochadegu-small.gif"
          alt=""
        />
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Hình ảnh</th>
              <th>Tên sản phẩm</th>
              <th>Số lượng</th>
              <th>Giá (đ)</th>
              <th>Đánh giá</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                <tr key={product.id}>
                  <th>
                    <img
                      src={product.link_image}
                      alt={product.name}
                      width="100"
                      height="80"
                    />
                  </th>
                  <th>{product.name_truncate}</th>
                  <th>{product.count}</th>
                  <th>
                    <strong>
                      <CurrencyFormat
                        value={product.price}
                        displayType={"text"}
                        thousandSeparator={true}
                      />
                    </strong>
                  </th>
                  <th className="table__rating">
                    {product.rating}
                    <p>
                      <AiIcons.AiFillStar />
                    </p>
                  </th>
                  <th>
                    <Link to={`/product/${product.id}`}>
                      <button className="table__btn">Chi tiết</button>
                    </Link>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ProductList;
