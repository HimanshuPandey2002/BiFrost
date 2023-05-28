// Copyright (c) 2018 Nguyen Vu Nhat Minh
// Distributed under the MIT software license, see the accompanying file LICENSE

// import Web3 from "web3";

import web3 from "../ethereum/web3";

module.exports.NETWORK_LIST = [
  {
    id: 1,
    name: "Main Network",
    contractAddress: "0x163485b3cddc7b3202e56ad31fb1921a00759f21",
    explorerUrl: "https://etherscan.io/",
    providerUrl: "https://mainnet.infura.io/Q2aBIgYNhIB60VsqyrN1",
  },
  {
    id: 4,
    name: "Goerli Test Net",
    contractAddress: "0xa8d27Eda6518Ac6CcF3eb7Ec100B1fc8ef850e80",
    explorerUrl: "https://goerli.etherscan.io/",
    providerUrl: "https://goerli.infura.io/v3/bd51744eddff4483a5479c16170c4249",
  },
  {
    id: 3,
    name: "Ganache",
    contractAddress: "0x7A5A9DC6051a97409AbBe4299DDc38AC208A40f0",
    explorerUrl: "", // You can remove this line or provide a custom Ganache explorer URL if available
    providerUrl: "http://localhost:7545", // Update with the appropriate Ganache provider URL
  },

  {
    id: 5,
    name: "LocalHost",
    contractAddress: "0x263A87DC3D4865f0916265f7eff466EBba40b3fb",
    explorerUrl: "http://127.0.0.1:7545",
    providerUrl: "http://127.0.0.1:7545",
  },
];

const getContractAddress = async () => {
  await web3.eth
    .getTransactionCount("0x263A87DC3D4865f0916265f7eff466EBba40b3fb")
    .then((count) => {
      return web3.eth.getBlockNumber().then((blockNumber) => {
        return web3.eth.getBlock(blockNumber - 1).then((block) => {
          const transactions = block.transactions;
          for (let i = 0; i < transactions.length; i++) {
            const transaction = transactions[i];
            web3.eth.getTransactionReceipt(transaction).then((receipt) => {
              if (!receipt.to) {
                console.log("Contract Address:", receipt.contractAddress);
              }
            });
          }
        });
      });
    });
};

module.exports.ENV = {
  get ContractAddress() {
    return getContractAddress();
    // if (
    //   typeof Storage !== "undefined" &&
    //   window.localStorage.ethNetwork != undefined
    // ) {
    //   var network = parseInt(window.localStorage.ethNetwork);
    //   for (var i = 0; i < module.exports.NETWORK_LIST.length; i++) {
    //     if (network == module.exports.NETWORK_LIST[i].id) {
    //       console.log(
    //         "Contract Address found",
    //         module.exports.NETWORK_LIST[i].contractAddress
    //       );
    //       return module.exports.NETWORK_LIST[i].contractAddress;
    //     }
    //   }
    // } else {
    //   return "";
    // }
  },

  get NetworkName() {
    if (
      typeof Storage !== "undefined" &&
      window.localStorage.ethNetwork != undefined
    ) {
      var network = parseInt(window.localStorage.ethNetwork);
      for (var i = 0; i < module.exports.NETWORK_LIST.length; i++) {
        if (network == module.exports.NETWORK_LIST[i].id) {
          return module.exports.NETWORK_LIST[i].name;
        }
      }
    } else {
      return "";
    }
  },

  get ProviderUrl() {
    if (
      typeof Storage !== "undefined" &&
      window.localStorage.ethNetwork != undefined
    ) {
      var network = parseInt(window.localStorage.ethNetwork);
      for (var i = 0; i < module.exports.NETWORK_LIST.length; i++) {
        if (network == module.exports.NETWORK_LIST[i].id) {
          return module.exports.NETWORK_LIST[i].providerUrl;
        }
      }
    } else {
      return module.exports.NETWORK_LIST[0].providerUrl;
    }
  },

  get ExplorerUrl() {
    if (
      typeof Storage !== "undefined" &&
      window.localStorage.ethNetwork != undefined
    ) {
      var network = parseInt(window.localStorage.ethNetwork);
      for (var i = 0; i < module.exports.NETWORK_LIST.length; i++) {
        if (network == module.exports.NETWORK_LIST[i].id) {
          return module.exports.NETWORK_LIST[i].explorerUrl;
        }
      }
    } else {
      return module.exports.NETWORK_LIST[0].explorerUrl;
    }
  },

  set EthNetworkId(networkId) {
    if (typeof Storage != "undefined") {
      window.localStorage.setItem("ethNetwork", networkId);
    }
  },

  get EthNetworkId() {
    if (
      typeof Storage !== "undefined" ||
      window.localStorage.ethNetwork == undefined
    ) {
      return parseInt(window.localStorage.ethNetwork);
    } else {
      return 0;
    }
  },
};
