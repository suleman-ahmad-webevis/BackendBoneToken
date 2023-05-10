import PirchDeck from "../../assets/pdf/Faq/Pirchdeck.pdf";

const PPComp = () => {
  return (
    <object
      width="100%"
      height="850px"
      data={PirchDeck}
      type="application/pdf"
      aria-label="Pdf"
    ></object>
  );
};

export default PPComp;
