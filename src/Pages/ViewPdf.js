import React from "react";
import FirstSection from "../components/Pdf/FirstSection/FirstSection";
import SecondSection from "../components/Pdf/SecondSection/SecondSection";
import { getDogNft } from "../redux/createDogNft/createDogNftSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ViewPdf = () => {
  const nftIdIs = sessionStorage?.getItem("nftId");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDogNft({ nftId: nftIdIs }));
    // eslint-disable-next-line
  }, []);

  const { singleDogNft } = useSelector((state) => state.dogNft);
  const { dog, owner, veterinary } = singleDogNft;

  return (
    <>
      <FirstSection dog={dog} owner={owner} veterinary={veterinary} />
      <SecondSection />
    </>
  );
};

export default ViewPdf;
