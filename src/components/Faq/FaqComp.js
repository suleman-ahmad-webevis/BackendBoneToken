import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FaqComp = () => {
  const faqOne = [
    {
      title: <h5>About us</h5>,
      desc: (
        <p>
          The core project team has extensive industry contacts, lobbying
          experience, Dog Handling , Judging and Grooming. Established over the
          last 20 years already supplying directly approximately 3500 different
          consumable and niche breeding products to tens of thousands of
          professional dog breeders throughout Europe.
        </p>
      ),
    },
    {
      title: <h5> What is an NFT for a Pet Dog</h5>,
      desc: (
        <p>
          A Non fungible transferable editable (erc 1155) token (NFT) provides
          the perfect long awaited solution for managing Pet dog ownership, no
          longer will pet dog breeders need to use the fragmented antiquated
          server based technology
        </p>
      ),
    },
    {
      title: <h5>What is Special about Blockchain</h5>,
      desc: (
        <p>
          Though the NFT Web3 and Ai decentralised concept is new for site users
          it will work to both save breeders and pet dog owners money and
          introduce them to the simplicity of creating a token for their
          physical assets and decentralised recording of data on the a layer 2
          blockchain
        </p>
      ),
    },
    {
      title: <h5>What is Smart Search</h5>,
      desc: (
        <p>
          Every Web3 shop product has been tagged, tirelessly for machine
          learning, initially by professionals and experts from within the team
          making a faster and cheaper user experience than currently exists or
          is offered by traditional server based web2 webshops Smart search Tags
          ;Breed Make / Female Season Etc
        </p>
      ),
    },
  ];

  const faqTwo = [
    {
      title: <h5>Payment</h5>,
      desc: (
        <p>
          Make Payment following the Checkout Process which gives option of
          Credit Card or CryptoCurrency or by a Bank Transfer with Invoice
          reference number
        </p>
      ),
    },
    {
      title: <h5> How long takes delivery and do I receive tracking info</h5>,
      desc: (
        <p>
          Usually 2 to 5 days and yes we share the tracking number and site to
          track via email
        </p>
      ),
    },
    {
      title: <h5>Discounts</h5>,
      desc: (
        <p>
          In Q1 2023 the website Kennel.Ai will be launched as a web3 platform
          which has a 5% product purchase discount for professional Dog breeders
          using the projects KC token in checkout. A 5% shop discount does also
          apply to professional dog breeders who register their pedigree puppies
          identity on blockchain which created for the first time an editable
          erc1155 NFT for a canine physical asset. A new dog NFT is minted only
          after the platform has been able to collect the initial minimum
          necessary data about a dog and owner. ( Dog Breeders name and the Dog
          breed )
        </p>
      ),
    },
    {
      title: <h5>How do you manage late deliveries or damage in Transit</h5>,
      desc: (
        <p>
          Website service page will link you to a customer service support
          person and also offers a tracking link
          https://Kennel.Ai/customerService
        </p>
      ),
    },
  ];

  const faqThree = [
    {
      title: <h5>Why do people use Web3</h5>,
      desc: (
        <p>
          Web3 has the potential to change the nature of the internet from
          corporate-owned networks to controlled by users while maintaining the
          Web2 functionalities people love today. It can also be described as
          read/write/own. Users can govern these blockchain-based networks
          through cryptocurrency tokens.
        </p>
      ),
    },
    {
      title: <h5> What are Web3 wallets</h5>,
      desc: (
        <p>
          Web3 wallets have become essential for anyone dealing with
          cryptocurrencies or blockchain-based applications. They allow users to
          store, manage, and transfer digital assets securely. With the rise of
          decentralized applications (dApps), the need for Web3 wallets has
          increased
        </p>
      ),
    },
    {
      title: <h5>Whats good example of web3 crypto wallets</h5>,
      desc: (
        <p>
          There are many Web3 wallets available today, each with its own
          features and functionalities. The most popular Web3 wallets are
          MetaMask and Trust wallet
        </p>
      ),
    },
    {
      title: <h5>What is the link to the Whitepaper</h5>,
      desc: <Link to="/white-paper"> https://Kennel.Ai/whitepaper</Link>,
    },
  ];

  return (
    <FaqBoxesWrapper>
      {/* FirstCol */}
      <FaqCol>
        {faqOne.map((value) => (
          <FaqBox>
            <h5>{value.title}</h5>
            <p>{value.desc}</p>
          </FaqBox>
        ))}
      </FaqCol>
      {/* SecondCol */}
      <FaqCol>
        {faqTwo.map((value) => (
          <FaqBox>
            <h5>{value.title}</h5>
            <p>{value.desc}</p>
          </FaqBox>
        ))}
      </FaqCol>
      {/* ThirdCol */}
      <FaqCol>
        {faqThree.map((value) => (
          <FaqBox>
            {value.title}
            {value.desc}
          </FaqBox>
        ))}
      </FaqCol>
    </FaqBoxesWrapper>
  );
};

export const FaqBoxesWrapper = styled.div`
  display: flex;
  justify-content: center;
  grid-gap: 20px;
  width: 95%;
  @media screen and (max-width: 1110px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const FaqCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 20px;
  width: 33%;
  @media screen and (max-width: 1110px) {
    width: 100%;
  }
`;

export const FaqBox = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
  background: #f4f4f4;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  h5 {
    font-weight: 700;
    font-size: 20px;
    line-height: 19px;
    color: #281f17;
  }
  p,
  a {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #281f17;
    text-decoration: none;
  }
`;

export default FaqComp;
