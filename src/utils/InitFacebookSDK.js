// // const FACEBOOK_APP_ID = "559817135992734";
// // const FACEBOOK_APP_ID = "708044773941299";
// const BONETOKEN_APP_ID = "713972523631649";

// export default function initFacebookSDK() {
//   return new Promise((resolve) => {
//     // Wait for the Facebook SDK to initialize before starting the React app.
//     window.fbAsyncInit = function () {
//       window.FB.init({
//         appId: BONETOKEN_APP_ID,
//         cookie: true,
//         xfbml: true,
//         version: "v15.0",
//       });

//       resolve();
//     };

//     // Load the Facebook SDK script.
//     (function (d, s, id) {
//       var js,
//         fjs = d.getElementsByTagName(s)[0];
//       if (d.getElementById(id)) {
//         return;
//       }
//       js = d.createElement(s);
//       js.id = id;
//       js.src = "https://connect.facebook.net/en_US/sdk.js";
//       fjs.parentNode.insertBefore(js, fjs);
//     })(document, "script", "facebook-jssdk");
//   });
// }
