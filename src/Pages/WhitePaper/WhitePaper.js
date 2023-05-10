import WhitePaper from "../../assets/pdf/Faq/Whitepaper.pdf";

const WPComp = () => {
  return (
    <object
      width="100%"
      height="850px"
      data={WhitePaper}
      type="application/pdf"
      aria-label="Pdf"
    ></object>
  );
};

export default WPComp;
