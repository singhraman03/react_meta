import PromoHeading from "./PromoHeading";

const data = {
  Heading: "90% off on all items",
  callToAction: "Everything must go"
  
}



function Promo(){
  return (
    <div>
      <PromoHeading
      Heading={data.Heading}
      callToAction={data.callToAction}

      />
    </div>
  )};

export default Promo;
