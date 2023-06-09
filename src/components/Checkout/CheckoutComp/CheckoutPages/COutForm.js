import React from "react";
import {
  AnySpec,
  CheckoutForm,
  CheckoutSec,
  Label,
  SInfoHeader,
} from "../../CheckoutStyle";
import {
  AddressFieldIcon,
  FormField,
  FormInput,
} from "../../../Forms/UserStyles";
import { Img } from "../../../../GlobalStyles";
import PhoneInput from "react-phone-input-2";
import ShareIcon from "../../../../assets/images/ProductDetail/ShareIcon.png";
import AddressIcon from "../../../../assets/images/AddressIcon.png";
import Copy from "../../../../assets/images/Copy.png";

const COutForm = () => {
  return (
    <>
      <h2>Checkout</h2>
      <CheckoutSec Width="100%">
        <CheckoutForm style={{ backgroundColor: "#F5F2FF" }}>
          <SInfoHeader>
            <p>Shipping Information</p>
            <Img src={Copy} alt="Copy" />
          </SInfoHeader>
          <FormField>
            <Label>
              Name<span> *</span>
            </Label>
            <FormInput placeholder="" />
          </FormField>
          <FormField>
            <Label>
              Address<span> *</span>
            </Label>
            <FormInput placeholder="" style={{ paddingLeft: "35px" }} />
            <AddressFieldIcon>
              <Img src={AddressIcon} alt="icon" />
            </AddressFieldIcon>
          </FormField>
          <FormField>
            <Label>
              Email<span> *</span>
            </Label>
            <FormInput type="email" />
          </FormField>
          <FormField>
            <Label>
              <AnySpec>
                <Img src={ShareIcon} alt="share Icon" />
                <h1>Any Special Requirements</h1>
              </AnySpec>
            </Label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="..."
              style={{
                background: "#ffffff",
                padding: "10px",
                outline: "none",
                color: "#b7b7b7",
                fontWeight: 700,
                fontSize: "14px",
                lineHeight: "17px",
                position: "relative",
                border: "2px solid rgba(121, 153, 157, 0.15)",
                borderRadius: "8px",
                fontFamily: "Inter-Regular",
              }}
            />
          </FormField>
          <FormField>
            <PhoneInput
              international
              country="gb"
              countryCallingCodeEditable={true}
              limitMaxLength={true}
              placeholder="(+370) 00000000"
              onlyCountries={[
                "at",
                "be",
                "bg",
                "hr",
                "cy",
                "cz",
                "dk",
                "ee",
                "fi",
                "fr",
                "de",
                "gr",
                "hu",
                "ie",
                "it",
                "lv",
                "lt",
                "lu",
                "mt",
                "nl",
                "pl",
                "pt",
                "ro",
                "sk",
                "si",
                "es",
                "eu",
                "is",
                "li",
                "no",
                "ch",
                "efta",
                "al",
                "me",
                "mk",
                "rs",
                "tr",
                "ad",
                "by",
                "ba",
                "md",
                "mc",
                "ru",
                "sm",
                "ua",
                "gb",
                "va",
              ]}
            />
          </FormField>
          <FormField>
            <Label>VAT Number</Label>
            <FormInput placeholder="Vat Number" />
          </FormField>
        </CheckoutForm>
      </CheckoutSec>
    </>
  );
};

export default COutForm;
