import Web3 from "web3";
import Config from "../support/Config";

let web3;

// const provider = new Web3.providers.HttpProvider(Config.ENV.ProviderUrl);
// const provider = new Web3.providers.HttpProvider("");
// web3 = new Web3(provider);
web3 = new Web3("http://localhost:7545");

export default web3;
