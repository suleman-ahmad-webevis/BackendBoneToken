import React from "react";
import ReactDOM from "react-dom/client";
//Redux Setup
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
// import initFacebookSDK from "./utils/InitFacebookSDK";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
//MainRouteFile
import DASHBOARD from "./routes/Dashboard";
//PagesAndComponents
//ProductRoutes
import LANDINGPAGE from "./Pages/Product/LandingPage";
import PRODUCTS from "./Pages/Product/Products";
import PRODUCTDETAIL from "./Pages/Product/ProductsDetail";
import FAVOURITESLIST from "./Pages/Favourites/FavouritesList";
import CHECKOUT from "./components/Checkout/Checkout";
import ORDERHISTORY from "./components/Checkout/OrderHistory";
import RECENTLYVIEWEDPRODUCTS from "./components/ProductsComponent/RecentlyViewed";
import SUBCATEGORY from "./Pages/Product/SubCategory";
// import INSTAGRAMHANDLER from "./components/ProductDetail/InstagramHandler";
//RegisterationRoutes
import REGISTERUSER from "./Pages/Register/Register";
import USERLOGIN from "./Pages/Login/Login";
import OTP from "./Pages/Otp/Otp";
//BlogsRoutes
import BLOGS from "./Pages/Blogs/Blogs";
import BLOGDETAIL from "./Pages/Blogs/BlogsDetail";
//NFTRoutes
import CREATEDOGNFT from "./Pages/DogNFT/CreateDogNFT";
import EDITDOGNFT from "./Pages/DogNFT/EditDogNFT";
import DOGFORSALE from "./Pages/DogForSale/DogForSale";
import PDFCERTIFICATE from "./Pages/PdfCertificate";
import MYDOGS from "./Pages/MyDogs/MyDogs";
//OthersRoutes
import TOEARN from "./Pages/Earn/Earn";
import RM from "./Pages/RM/RM";
import FAQ from "./Pages/Faq/Faq";
import CUSTOMERSERVICE from "./Pages/CustomerService/CustomerService";
import DOGSHOWSPAGE from "./Pages/DogShow/DogShow";
import TOKENOMICS from "./Pages/Tokenomics/Tokenomics";
import SETTINGS from "./Pages/Settings/Settings";
import WHITEPAPER from "./Pages/WhitePaper/WhitePaper";
import PITCHDECK from "./Pages/PitchDesk/PitchDesk";
import PDF from "./Pages/Pdf";
import VIEWPDF from "./Pages/ViewPdf";

//NotFoundRoutes
import AIRDROP from "./Pages/AirDrop/AirDrop";
import NOTFOUND from "./Pages/404/NotFound";
//Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

//Authorization
// import PaymentMethod from "./components/Checkout/PaymentMethod";
import { PrivateRoutes } from "./utils/PrivateRoutes";
// import StripeModal from "./components/Checkout/StripeModal";

let persistor = persistStore(store);

const router = createBrowserRouter([
  {
    path: "/",
    element: <DASHBOARD />,
    errorElement: <NOTFOUND />,
    children: [
      {
        index: true,
        element: <LANDINGPAGE />,
        //errorElement: <We could add the error element to every one of the child routes but, since it's all the same error page, this isn't recommended/>
      },
      {
        path: "/shop",
        element: <PRODUCTS />,
      },
      {
        path: "/shop/product-detail/:id",
        element: <PRODUCTDETAIL />,
      },
      {
        path: "/shop/recently-viewed",
        element: <RECENTLYVIEWEDPRODUCTS />,
      },
      {
        path: "shop/category",
        element: <SUBCATEGORY />,
      },
      {
        path: "/checkout",
        element: <CHECKOUT />,
      },
      {
        path: "/favourites",
        element: <FAVOURITESLIST />,
      },
      {
        path: "/order-history",
        element: (
          <PrivateRoutes>
            <ORDERHISTORY />
          </PrivateRoutes>
        ),
      },
      {
        path: "/blogs",
        element: <BLOGS />,
      },
      {
        path: "/blogs/blog-detail/:id",
        element: <BLOGDETAIL />,
      },
      {
        path: "/register",
        element: <REGISTERUSER />,
      },
      {
        path: "/login",
        element: <USERLOGIN />,
      },
      {
        path: "/create-dog-nft/:pageName",
        element: <CREATEDOGNFT />,
      },
      {
        path: "/edit-dog-nft/:pageName",
        element: <EDITDOGNFT />,
      },
      {
        path: "/to-earn",
        element: <TOEARN />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/customer-service",
        element: <CUSTOMERSERVICE />,
      },
      {
        path: "/my-dogs",
        element: (
          <PrivateRoutes>
            <MYDOGS />
          </PrivateRoutes>
        ),
      },
      {
        path: "/dog-shows",
        element: <DOGSHOWSPAGE />,
      },
      {
        path: "/dog-for-sale",
        element: <DOGFORSALE />,
      },
      {
        path: "/tokenomics",
        element: <TOKENOMICS />,
      },
      {
        path: "/road-map",
        element: <RM />,
      },
      {
        path: "/settings",
        element: <SETTINGS />,
      },
      {
        path: "/whitepaper",
        element: <WHITEPAPER />,
      },
      {
        path: "/pitchdeck",
        element: <PITCHDECK />,
      },
      {
        path: "/airdrop",
        element: <AIRDROP />,
      },
      {
        path: "/certificate",
        element: <PDFCERTIFICATE />,
      },
      {
        path: "/checkout-success",
        element: <PRODUCTS />,
      },
      {
        path: "/otp",
        element: <OTP />,
      },
      {
        path: "/pdf",
        element: <PDF />,
      },
      {
        path: "/view-pdf",
        element: <VIEWPDF />,
      },
      // {
      //   path: "/instagram-handler",
      //   element: <INSTAGRAMHANDLER />,
      // },
      // {
      //   path: "*",
      //   element: <NOTFOUND />,
      // },
    ],
  },
]);

// const renderApp = () => {
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router} />
        <ToastContainer />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
// };

// initFacebookSDK().then(() => {
//   renderApp();
// });
