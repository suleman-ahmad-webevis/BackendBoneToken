import React from "react";
import styled from "styled-components";
import FirstSection from "../components/Pdf/FirstSection/FirstSection";
import SecondSection from "../components/Pdf/SecondSection/SecondSection";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { getDogNft } from "../redux/createDogNft/createDogNftSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Loader from "../components/Loader/Loader";

const Pdf = () => {
  const nftIdIs = sessionStorage?.getItem("nftId");
  const dispatch = useDispatch();

  useEffect(() => {
    // eslint-disable-next-line
    dispatch(getDogNft({ nftId: nftIdIs }));
    generatePDF();
  }, []);

  const { singleDogNft } = useSelector((state) => state.dogNft);
  const { dog, owner, veterinary } = singleDogNft;

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const generatePDF = () => {
    setLoading(true);
    const pdf = new jsPDF();
    const pageHeight = pdf.internal.pageSize.getHeight();
    // First Component
    const firstComponent = document.getElementById("first");
    html2canvas(firstComponent).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.addPage();
      // Second Component
      const secondComponent = document.getElementById("second");
      html2canvas(secondComponent).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("downloaded-pdf.pdf");
        navigate("/create-dog-nft/congratulations");
      });
    });
  };
  return (
    <>
      {loading && <Loader />}
      <FirstSection dog={dog} owner={owner} veterinary={veterinary} />
      <SecondSection />
    </>
  );
};

export default Pdf;

// export const PdfContainer = styled.div`
//   width: 100%;
//   padding: 20px;
//   border: 2px solid #b1933c;
//   margin-left: 2px;
//   background-color: #f0f7fc;
// `;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: url("../assets/images/Pdf/BG.png");
  background-position: 100%;
  background-repeat: no-repeat;
  width: 100%;
`;

export const RightHead = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 20px;
`;

export const LeftHead = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 20px;
`;

export const DDUserId = styled.div`
  display: flex;
  grid-gap: 5px;
  align-items: center;
  span {
    font-weight: 600;
    font-size: 9px;
    line-height: 14px;
    color: rgba(0, 0, 0, 0.7);
  }
  h5 {
    font-size: 9px;
    line-height: 14px;
    color: rgba(0, 0, 0, 0.7);
    font-weight: bold;
  }
`;

export const CerNo = styled.div`
  display: flex;
  grid-gap: 5px;
  align-items: center;
  h5:nth-child(1) {
    font-weight: 600;
    font-size: 9px;
    line-height: 95%;
    color: #455b96;
  }
  h5:nth-child(2) {
    font-weight: 800;
    font-size: 9px;
    line-height: 14px;
    color: rgba(0, 0, 0, 0.7);
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const PdfImgHolder = styled.div`
  width: 30%;
  border-radius: 30px;
  overflow: hidden;
`;
