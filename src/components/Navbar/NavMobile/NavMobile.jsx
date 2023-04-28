import { useEffect, useState } from "react";
import PotatoKing from "../../../assets/images/liquidity/liquidity_2.webp";
import Dropdown from "react-bootstrap/Dropdown";
import { NavLink } from "react-router-dom";
import { MobileContainer } from "../Home/LandingStyle";
import RightSidebar from "../../RightSidebar/RightSidebar";

const NavMobile = () => {
  const [get, setGet] = useState("Mint");

  const options = [
    { value: "mint", label: "Mint", route: "/mint" },
    { value: "mintspin", label: "MintSpin", route: "/mintSpin" },
    { value: "bridge", label: "Bridge", route: "/bridge" },
    { value: "potatoLand", label: "Land", route: "/potatoLand" },
    { value: "potatoNft", label: "NFT", route: "/potatoNft" },
    { value: "potatoToken", label: "Token", route: "/potatoToken" },
    { value: "2earn", label: "2earn", route: "/2earn" },
    { value: "partners", label: "Partners", route: "/partners" },
    { value: "merchandise", label: "Merchandise", route: "/merchandise" },
    { value: "roadmap", label: "Roadmap", route: "/roadmap" },
    { value: "faq", label: "FAQ", route: "/faq" },
    { value: "whitelist", label: "Whitelist", route: "/whitelist" },
    { value: "airdrop", label: "Airdrop", route: "/airdrop" },
  ];

  useEffect(() => {
  }, [get]);

  return (
    <MobileContainer>
      <div className="backgroundImg">
        <div className="container">
          <div className="navbar-wrapper">
            <NavLink to="/">
              <img src={PotatoKing} alt="King" />
            </NavLink>
            <div className="mr">
              {" "}
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {get}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {options.map((item, index) => (
                    <Dropdown.Item
                      onClick={() => setGet(item.label)}
                      key={index}
                    >
                      <NavLink to={item.route}>{item.label}</NavLink>
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="leftSidebar">
              <RightSidebar />
            </div>
          </div>
        </div>
      </div>
    </MobileContainer>
  );
};

export default NavMobile;
