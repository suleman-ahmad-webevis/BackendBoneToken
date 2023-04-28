import { toast } from "react-toastify";

const walletConnect = async (accountFromExt) => {
  if (typeof window.ethereum !== "undefined") {
    let account;
    if (accountFromExt?.length) {
      account = accountFromExt[0];
      // account && toast.success("Connected to metamask", { theme: "colored" });
      return account;
    } else {
      const accounts = await window.ethereum.request({
        method: "wallet_requestPermissions",
        params: [
          {
            eth_accounts: {},
          },
        ],
      });
      if (accounts.length) {
        account = accounts?.[0]?.caveats[0]?.value[0];
        // account && toast.success("Connected to metamask", { theme: "colored" });
        return account;
      }
    }
  } else toast.info("Install MetaMask Extension", { theme: "colored" });
};

const walletDisconnect = () => {
  return null;
};

const metaMaskWallet = {
  walletConnect,
  walletDisconnect,
};

export default metaMaskWallet;
