import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../common/Footer";
import Header from "../common/Header";
import HeaderWithLogo from "../common/HeaderWithLogo";
import DarkMode from "./../../hooks/context/DarkModeContext";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { MetaConnectionContext } from "../../contexts/MetaConnectionContext";

const contractAddress = "0x1B9FAb4a7D2f6B1BA32c905984c68EFFc30a7877";
const abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool"
      }
    ],
    name: "ApprovalForAll",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256"
      }
    ],
    name: "Mint",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address"
      }
    ],
    name: "addWhitelisted",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getPricePerTokenInWei",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_wallet",
        type: "address"
      }
    ],
    name: "hasMinted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "operator",
        type: "address"
      }
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "isWhitelisted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256"
      }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address"
      }
    ],
    name: "removeWhitelisted",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes"
      }
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address"
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool"
      }
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4"
      }
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "toggleIsActive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_defaultURI",
        type: "string"
      }
    ],
    name: "updateDefaultURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_maxInvocations",
        type: "uint256"
      }
    ],
    name: "updateMaxInvocations",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pricePerTokenInWei",
        type: "uint256"
      }
    ],
    name: "updatePricePerTokenInWei",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256"
      },
      {
        internalType: "string",
        name: "_tokenURI",
        type: "string"
      }
    ],
    name: "updateTokenURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "wallets",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];
const Web3 = require("web3");
const Web3EthContract = require("web3-eth-contract");
const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: "3f30c3d9a4794b6bac600ac401675dc8"
    }
  }
};
const web3Modal = new Web3Modal({
  cacheProvider: true, // optional
  providerOptions // required
});
interface Props {
  children?: React.ReactNode;
}
let provider: any;
let web3: any;
const MainLayout: React.FunctionComponent<Props> = ({ children }: Props) => {
  const { setPrice } = useContext(MetaConnectionContext);
  const contract = new Web3EthContract(abi, contractAddress);
  const location = useLocation();
  const [account, setAccount] = useState<string>();
  const [balance, setBalance] = useState<number>(0);
  const [walletIsConnected, setWalletIsConnected] = useState<boolean>(false);
  const initalMode = localStorage.getItem("nota/darkMode");
  const [checked, setChecked] = useState(initalMode ? JSON.parse(initalMode) : false);

  const onDarkModeChange = () => {
    setChecked(!checked);
  };

  /**
   * Handle click event of `conneect wallet` button
   */
  const handleOnConnect = async () => {
    console.log("Opening a dialog", web3Modal);
    try {
      provider = await web3Modal.connect();
      Web3EthContract.setProvider(provider);
      await fetchAccountData();
    } catch (e) {
      console.log("Could not get a wallet connection", e);
      return;
    }
    // Subscribe to accounts change
    provider.on("accountsChanged", (accounts: any) => {
      console.log("accoutns changes ");
      fetchAccountData();
    });
    // Subscribe to chainId change
    provider.on("chainChanged", (chainId: any) => {
      console.log("chain changes ");
      fetchAccountData();
    });
    // Subscribe to networkId change
    provider.on("networkChanged", (networkId: any) => {
      console.log("network changes ");
      fetchAccountData();
    });
    provider.on("connect", (info: any) => {
      console.log("connected ", info);
    });
    await refreshAccountData();
  };

  const handleDisconnectWallet = async () => {
    await web3Modal.clearCachedProvider();
    localStorage.removeItem("nota/currentAccount");
    setBalance(0);
    setAccount("");
    setWalletIsConnected(false);
  };

  /**
   * Get connected account data
   */
  const fetchAccountData = async () => {
    // Get a Web3 instance for the wallet
    web3 = new Web3(provider);
    Web3EthContract.setProvider(provider);
    // Get list of accounts of the connected wallet
    const accounts = await web3.eth.getAccounts();
    // MetaMask does not give you all accounts, only the selected account
    let selectedAccount = accounts[0];
    const balanceInWei = await web3.eth.getBalance(selectedAccount);
    const balance = web3.utils.fromWei(balanceInWei, "ether");
    localStorage.setItem("nota/currentAccount", selectedAccount);
    setBalance(balance);
    setAccount(selectedAccount);
    setWalletIsConnected(true);
  };

  /**
   * Refresh account data
   */
  const refreshAccountData = async () => {
    await fetchAccountData();
  };

  useEffect(
    () => {
      const getProvider = async () => {
        provider = await web3Modal.connect();
        Web3EthContract.setProvider(provider);
        web3 = new Web3(provider);
      };
      getProvider();
      handleOnConnect();
    },
    [web3]
  );
  useEffect(
    () => {
      const getPrice = async () => {
        if(account){
          let tempMaxPurchase = await contract.methods.getPricePerTokenInWei().call();
          setPrice(Number(tempMaxPurchase))
        }
      };
      getPrice();
    },
    [web3, contract]
  );

  useEffect(
    () => {
      if (checked) {
        localStorage.setItem("nota/darkMode", checked);
      } else {
        localStorage.removeItem("nota/darkMode");
      }
    },
    [checked]
  );
  return (
    <>
      <DarkMode.Provider value={checked}>
        <div className={checked ? "bg-dark position-relative z-index-0 dark-mode" : ""}>
          {location.pathname === "/" ? (
            <Header
              handleOnConnect={handleOnConnect}
              handleDisconnectWallet={handleDisconnectWallet}
              balance={balance}
              walletIsConnected={walletIsConnected}
              onDarkModeChange={onDarkModeChange}
              checked={checked}
            />
          ) : (
            <HeaderWithLogo
              handleOnConnect={handleOnConnect}
              handleDisconnectWallet={handleDisconnectWallet}
              balance={balance}
              walletIsConnected={walletIsConnected}
              onDarkModeChange={onDarkModeChange}
              checked={checked}
            />
          )}
          {children}
          <Footer />
        </div>
      </DarkMode.Provider>
    </>
  );
};
export default MainLayout;
