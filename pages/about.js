// Copyright (c) 2018 Nguyen Vu Nhat Minh
// Distributed under the MIT software license, see the accompanying file LICENSE

import Head from "next/head";
import { Component } from "react";
import { Container, Segment } from "semantic-ui-react";
import Constant from "../support/Constant";
import Footer from "../views/Footer";
import HeaderMenu from "../views/HeaderMenu";
import GuideModal from "../views/modals/GuideModal";

class About extends Component {
  render() {
    return (
      <Container>
        <Head>
          <title>About {Constant.APP_NAME}</title>
        </Head>

        <HeaderMenu />
        <GuideModal />
        <Container style={{ marginTop: 100, fontSize: "1.2em" }}>
          <h1>About {Constant.APP_NAME}</h1>
          <p>
            {Constant.APP_NAME} is an Ethereum app that allows you to send
            encrypted messages via a smart contract that only you and the
            recipient of a message can decrypt it.
          </p>
          <p>
            BiFrost is a revolutionary solution for secure online communication
            and data storage. It addresses security concerns such as
            eavesdropping, man-in-the-middle attacks, and censorship by offering
            decentralization, immutability, and data security through the use of
            blockchain technology. User-submitted data is added directly to the
            blockchain, creating a global copy in each node, and only authorized
            users can access the data using private keys. The system is fully
            decentralized, meaning there is no central authority, making it
            immune to censorship and government oppression. The technology used
            in BiFrost includes IPFS, smart contracts, Ethereum, INFURA,
            Solidity, and SPF. BiFrost provides a secure and decentralized
            solution for online communication and data storage, eliminating the
            need for a trusted intermediary and ensuring the privacy and
            security of data.
          </p>
        </Container>
        <Footer />
      </Container>
    );
  }
}

export default About;
