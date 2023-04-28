import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const InstagramHandler = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [postCaption, setPostCaption] = useState("");
  const [isSharingPost, setIsSharingPost] = useState(false);
  const [fbUserAccessToken, setFbUserAccessToken] = useState("");
  const [instagramId, setInstagramId] = useState("");
  const [connectedFBPage, setConnectedFBPage] = useState("");

  useEffect(() => {
    console.log("The first useEffect");
    window.FB.getLoginStatus((res) => {
      console.log("the res in getLoginStatus", res);
      try {
        if (res.status === "connected") {
          toast.success("Connected Successfully");
          setFbUserAccessToken(res.authResponse?.accessToken);
        }
      } catch (err) {
        // toast.error("Error while getting login status");
        console.log("The error in getLoginStatus", err);
      }
    });
  }, []);

  useEffect(() => {
    console.log("The second useEffect");
    const getFacebook = async () => {
      try {
        await window.FB.api(
          "me/accounts",
          { access_token: fbUserAccessToken },
          (res) => {
            if (res.data.length) {
              toast.success("Successfully connected to Facebook");
            }
            console.log("The res in getFacebook", res);
            setConnectedFBPage(res.data[0]);
          }
        );
      } catch (err) {
        // toast.error("Error getting the facebook account");
        console.log("Error in get Facebook", err);
      }
    };
    getFacebook();
    // eslint-disable-next-line
  }, [fbUserAccessToken]);

  useEffect(() => {
    console.log("The third useEffect");
    const getInstaAccount = async () => {
      try {
        await window.FB.api(
          connectedFBPage?.id,
          {
            access_token: fbUserAccessToken,
            fields: "instagram_business_account",
          },
          (res) => {
            console.log("The res in getInstaAccount", res);
            setInstagramId(res.instagram_business_account.id);
          }
        );
      } catch (err) {
        // toast.error("Error with getting the instagram account");
        console.log("The error while getting instagram account", err);
      }
    };
    getInstaAccount();
  }, [connectedFBPage]);

  const logInToFB = () => {
    try {
      window.FB.login(
        (res) => {
          setFbUserAccessToken(res.authResponse?.accessToken);
        },
        {
          // Scopes that allow us to publish content to Instagram
          scope: "instagram_basic, pages_show_list, instagram_content_publish",
        }
      );
    } catch (err) {
      console.log("The error while logging to Facebook", err);
    }
  };

  const logOutOfFB = () => {
    try {
      window.FB.logout(() => {
        setFbUserAccessToken(undefined);
        toast.success("Logout Successful");
      });
    } catch (err) {
      console.log("The err when logout of facebook", err);
    }
  };

  const getFacebookPages = () => {
    return new Promise((resolve) => {
      window.FB.api(
        "me/accounts",
        { access_token: fbUserAccessToken },
        (res) => {
          console.log("The res in getting the facebook pages", res);
          setConnectedFBPage(res.data[0]);
          resolve(res.data);
        }
      );
    });
  };

  const getInstagramAccountId = (facebookPageId) => {
    return new Promise((resolve) => {
      window.FB.api(
        facebookPageId,
        {
          access_token: fbUserAccessToken,
          fields: "instagram_business_account",
        },
        (res) => {
          console.log("The res in getting instagram account id", res);
          setInstagramId(res.instagram_business_account.id);
          resolve(res.instagram_business_account.id);
        }
      );
    });
  };

  const createMediaObjectContainer = (instagramAccountId) => {
    return new Promise((resolve) => {
      window.FB.api(
        `${instagramAccountId}/media`,
        "POST",
        {
          access_token: fbUserAccessToken,
          image_url: imageUrl,
          caption: postCaption,
        },
        (res) => {
          resolve(res.id);
        }
      );
    });
  };

  const publishMediaObjectContainer = (
    instagramAccountId,
    mediaObjectContainerId
  ) => {
    return new Promise((resolve) => {
      window.FB.api(
        `${instagramAccountId}/media_publish`,
        "POST",
        {
          access_token: fbUserAccessToken,
          creation_id: mediaObjectContainerId,
        },
        (res) => {
          resolve(res.id);
        }
      );
    });
  };

  const shareInstagramPost = async () => {
    try {
      setIsSharingPost(true);
      const facebookPages = await getFacebookPages();
      const instagramAccountId = await getInstagramAccountId(
        facebookPages[0].id
      );
      const mediaObjectContainerId = await createMediaObjectContainer(
        instagramAccountId
      );

      await publishMediaObjectContainer(
        instagramAccountId,
        mediaObjectContainerId
      );
      toast.success("Media published successfully");
      setIsSharingPost(false);
      // Reset the form state
      setImageUrl("");
      setPostCaption("");
    } catch (err) {
      toast.error("Error sharing post on instagram");
    }
  };

  return (
    <main id="app-main">
      <section className="app-section">
        <h3>1. Log in with Facebook</h3>
        {fbUserAccessToken ? (
          <button onClick={logOutOfFB} className="btn action-btn">
            Log out of Facebook
          </button>
        ) : (
          <button onClick={logInToFB} className="btn action-btn">
            Login with Facebook
          </button>
        )}
      </section>
      {fbUserAccessToken ? (
        <section className="app-section">
          <h3>Facebook connected page name: {connectedFBPage?.name}</h3>
          <h3>2. Send a post to Instagram</h3>
          <h3>Instagram Account Id to publish to: {instagramId}</h3>
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Enter a JPEG image url..."
          />
          <textarea
            value={postCaption}
            onChange={(e) => setPostCaption(e.target.value)}
            placeholder="Write a caption..."
            rows="10"
          />
          <button
            onClick={shareInstagramPost}
            className="btn action-btn"
            disabled={isSharingPost || !imageUrl}
          >
            {isSharingPost ? "Sharing..." : "Share"}
          </button>
        </section>
      ) : null}
    </main>
  );
};

export default InstagramHandler;
