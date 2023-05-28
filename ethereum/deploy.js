// Copyright (c) 2018 Nguyen Vu Nhat Minh
// Distributed under the MIT software license, see the accompanying file LICENSE

const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/EtherChat.json");
const interface = compiledFactory.interface;
const bytecode = compiledFactory.bytecode;

const provider = new HDWalletProvider(
  "crystal hill lonely manual struggle cabin retire abuse cable spell orange predict",
  "https://rinkeby.infura.io/Q2aBIgYNhIB60VsqyrN1"
  // "https://goerli.infura.io/v3/bd51744eddff4483a5479c16170c4249"
);

console.log(provider);

// const web3 = new Web3(provider);
const web3 = new Web3("http://localhost:7545");

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("Attempting to deploy from account", accounts[0]);
  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ gas: "3000000", from: accounts[0] });

  console.log(interface);
  console.log("Contract deployed to", result.options.address);
};
deploy();
