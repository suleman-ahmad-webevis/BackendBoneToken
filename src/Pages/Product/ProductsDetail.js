import { useState, useEffect } from "react";
import styled from "styled-components";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import { useDispatch } from "react-redux";
import { reset } from "../../redux/product/productSlice";

const ProductsDetail = ({ showSidebar, setShowSidebar }) => {
  const [toggle] = useState(false);
  const dispatch = useDispatch();
  window.addEventListener("popstate", () => {
    dispatch(reset());
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <ProductsListContainer>
      <ProductDetail
        toggle={toggle}
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />
    </ProductsListContainer>
  );
};

const ProductsListContainer = styled.div`
  width: 100%;
  margin-top: 170px;
  @media screen and (max-width: 1110px) {
    margin-top: 50px;
  }
`;
export default ProductsDetail;
