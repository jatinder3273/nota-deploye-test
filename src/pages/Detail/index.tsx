import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import DarkMode from "../../hooks/context/DarkModeContext";
import imageOne from "./../../assets/images/detail.png";
import { MetaConnectionContext } from "../../contexts/MetaConnectionContext";
const Web3EthContract = require("web3-eth-contract");

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
const Detail: React.FunctionComponent = () => {
  const { price } = useContext(MetaConnectionContext);
  const darkMode = React.useContext(DarkMode);
  const [loader, setLoader] = useState<boolean>(false);
  const [transactionHash, setTransactionHash] = useState<string>("");
  const currentAccount = localStorage.getItem("nota/currentAccount") || "";
  const contract = new Web3EthContract(abi, contractAddress);

  const onPurchase = async () => {
    try {
      let address = localStorage.getItem("nota/currentAccount");
      if (address) {
        contract.methods
          .mint()
          .send({
            from: address,
            value: Number(price) * 1
          })
          .on("transactionHash", function(hash: string) {
            setLoader(true);
            console.log(hash);
          })
          .on("confirmation", function(confirmationNumber: any, receipt: any) {
            console.log(confirmationNumber, receipt, "confirmationNumber, receipt");
          })
          .on("receipt", function(receipt: any) {
            console.log(receipt, "receipt");
            setLoader(false);
            setTransactionHash(receipt.transactionHash);
          })
          .on("error", function(error: any, receipt: any) {
            // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
            console.log("error: ", error);
          });
      }
    } catch (error) {
      console.log("error ", error);
      toast("There was an error minting your bear. Please try again or contact a member of the team.", {
        position: "bottom-right",
        autoClose: 10000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
      });
    }
  };
  return (
    <section className={`main-content ${darkMode ? "text-white" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="row">
            <div className="col-lg-7 order-lg-1 order-2">
              <div className="info pt-0 p-4">
                <h2 className="mt-0">Music Name Here</h2>
                <p>
                  Created by : <b>Aluan Wang</b>
                </p>
                <span className="price">
                  Price : <b>0.159Ξ</b>
                </span>
                <p className="mb-0">
                  <b>Description: </b>
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                  make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                  PageMaker including versions of Lorem Ipsum.
                </p>
                <p>
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking
                  at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
                  opposed to using 'Content here, content here', making it look like readable English.
                </p>
                <p>
                  License : <b>CC</b>
                </p>
                <p>
                  Total Minted : <b>#1 of 1024 max</b>
                </p>
                {currentAccount ? (
                  !transactionHash ? (
                    <button onClick={onPurchase} disabled={loader} className="btn btn-info btn-primary-custom">
                      {loader ? <i className="fa fa-spinner fa-spin" /> : ""} Mint the Song
                    </button>
                  ) : (
                    <>
                      <h6 className="text-success">Mint Successful</h6>
                      <h6 className="text-success">Transaction Hash: {transactionHash || "null"}</h6>
                    </>
                  )
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="col-lg-5  order-lg-2 order-1 p-relative image-sec text-center">
              <img src={imageOne} alt="" className="home-about-img w-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
