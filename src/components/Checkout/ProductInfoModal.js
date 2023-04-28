import React from "react";
import styled from "styled-components";

const ProductInfoModal = ({ selectedProDetail }) => {
  return (
    <>
      <ProductInfoTable>
        <thead>
          <tr key={selectedProDetail?._id}>
            <th>Price</th>
            <th>Quantity</th>
            <th>Weight</th>
            <th>Size</th>
          </tr>
        </thead>
        <tbody>
          <tr key={selectedProDetail?._id}>
            <td>{selectedProDetail?.minRetailPrice}</td>
            <td>{selectedProDetail?.quantity}</td>
            <td>{selectedProDetail?.weight ? selectedProDetail?.weight : 0}</td>
            <td>{selectedProDetail?.size}</td>
          </tr>
        </tbody>
      </ProductInfoTable>
    </>
  );
};

const ProductInfoTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 1em;
  thead tr {
    text-align: center;
    color: #737373;
    font-weight: 900;
    font-size: 18px;
  }
  tbody tr {
    text-align: center;
  }
`;
export default ProductInfoModal;
