import { useState } from "react";
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
  margin-top: 30px;
`;

export default ProductsDetail;
