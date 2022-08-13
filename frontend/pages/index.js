import { Contract, providers, utils } from "ethers";
import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import Web3Modal from "web3modal";
import { abi, NFT_CONTRACT_ADDRESS } from "../constants";

import About from "../components/About";
import Roadmap from "../components/Roadmap";
import Team from "../components/Team";
import Slideshow from "../components/Slideshow";
import ProgressBar from "../components/ProgressBar";
import styles from "../styles/Home.module.css";

import { motion } from "framer-motion";

export default function Home() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [presaleStarted, setPresaleStarted] = useState(false);
  const [presaleEnded, setPresaleEnded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isOwner, setIsOwner] = useState(false);
  const [tokenIdsMinted, setTokenIdsMinted] = useState("0");
  const web3ModalRef = useRef();

  const presaleMint = async () => {
    try {
      // Get signer (write)
      const signer = await getProviderOrSigner(true);
      const whitelistContract = new Contract(NFT_CONTRACT_ADDRESS, abi, signer);
      // Call the presaleMint function from the contract, only whitelisted addresses would be able to mint
      const tx = await whitelistContract.presaleMint({
        // Value signifies the cost of one Stikman which is "0.01" eth.
        // Parsing `0.01` string to ether using utils from ethers.js library
        value: utils.parseEther("0.01"),
      });
      setLoading(true);
      await tx.wait();
      setLoading(false);
      window.alert("You have successfully minted a Stikman!");
    } catch (err) {
      console.error(err);
    }
  };

  // Mint after presale
  const publicMint = async () => {
    try {
      // Get signer (write)
      const signer = await getProviderOrSigner(true);
      const whitelistContract = new Contract(NFT_CONTRACT_ADDRESS, abi, signer);
      // Call mint function from the contract to mint Stikman
      const tx = await whitelistContract.mint({
        value: utils.parseEther("0.01"),
      });
      setLoading(true);
      await tx.wait();
      setLoading(false);
      window.alert("You have successfully minted a Stikman!");
    } catch (err) {
      console.error(err);
    }
  };

  const startPresale = async () => {
    try {
      // Get signer (write)
      const signer = await getProviderOrSigner(true);
      const whitelistContract = new Contract(NFT_CONTRACT_ADDRESS, abi, signer);
      // Call startPresale function from the contract
      const tx = await whitelistContract.startPresale();
      setLoading(true);
      await tx.wait();
      setLoading(false);
      // Set presale started to true
      await checkIfPresaleStarted();
    } catch (err) {
      console.error(err);
    }
  };

  const checkIfPresaleStarted = async () => {
    try {
      // Get provider (read-only)
      const provider = await getProviderOrSigner();
      const nftContract = new Contract(NFT_CONTRACT_ADDRESS, abi, provider);
      // Call presaleStarted from the contract
      const _presaleStarted = await nftContract.presaleStarted();
      if (!_presaleStarted) {
        await getOwner(); //
      }
      setPresaleStarted(_presaleStarted);
      return _presaleStarted;
    } catch (err) {
      console.error(err);
      return false;
    }
  };

  const checkIfPresaleEnded = async () => {
    try {
      // Get provider (read-only)
      const provider = await getProviderOrSigner();
      const nftContract = new Contract(NFT_CONTRACT_ADDRESS, abi, provider);
      // Call presaleEnded from the contract
      const _presaleEnded = await nftContract.presaleEnded();
      // _presaleEnded is a Big Number, so we are using the lt(less than function) instead of `<`
      // Date.now()/1000 returns the current time in seconds
      // Compare if the _presaleEnded timestamp is less than the current time which means presale has ended
      const hasEnded = _presaleEnded.lt(Math.floor(Date.now() / 1000));
      if (hasEnded) {
        setPresaleEnded(true);
      } else {
        setPresaleEnded(false);
      }
      return hasEnded;
    } catch (err) {
      console.error(err);
      return false;
    }
  };

  const getOwner = async () => {
    try {
      // Get provider (read-only)
      const provider = await getProviderOrSigner();
      const nftContract = new Contract(NFT_CONTRACT_ADDRESS, abi, provider);
      // Call owner function from the contract
      const _owner = await nftContract.owner();
      // Get the signer now to extract the address of the currently connected MetaMask account
      const signer = await getProviderOrSigner(true);
      const address = await signer.getAddress();
      if (address.toLowerCase() === _owner.toLowerCase()) {
        setIsOwner(true);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  const getTokenIdsMinted = async () => {
    try {
      // Get provider (read-only)
      const provider = await getProviderOrSigner();
      const nftContract = new Contract(NFT_CONTRACT_ADDRESS, abi, provider);
      // Call tokenIds from the contract
      const _tokenIds = await nftContract.tokenIds();
      // Converting _tokenIds to string because is a `Big Number`.
      setTokenIdsMinted(_tokenIds.toString());
    } catch (err) {
      console.error(err);
    }
  };

  const connectWallet = async () => {
    try {
      // Get provider from web3Modal (Metamask)
      // When used for the first time, it prompts the user to connect their wallet
      await getProviderOrSigner();
      setWalletConnected(true);
    } catch (err) {
      console.error(err);
    }
  };

  /**
   * Returns a Provider or Signer object representing the Ethereum RPC with or without the
   * signing capabilities of metamask attached
   *
   * A `Provider` is needed to interact with the blockchain - reading transactions, balances, state, etc.
   *
   * A `Signer` is a special type of Provider used in case a `write` transaction needs to be made to the blockchain, which involves the connected account
   * needing to make a digital signature to authorize the transaction being sent. Metamask exposes a Signer API to allow your website to
   * request signatures from the user using Signer functions.
   *
   * @param {*} needSigner - True if you need the signer, default false otherwise
   */
  const getProviderOrSigner = async (needSigner = false) => {
    // Connect to Metamask
    // Since we store `web3Modal` as a reference, we need to access the `current` value to get access to the underlying object
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);

    // If user is not connected to the Rinkeby network, let them know and throw an error
    const { chainId } = await web3Provider.getNetwork();
    if (chainId !== 4) {
      window.alert("Change the network to Rinkeby");
      throw new Error("Change network to Rinkeby");
    }
    if (needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }
    return web3Provider;
  };

  useEffect(() => {
    // if wallet is not connected, create a new instance of Web3Modal and connect the MetaMask wallet
    if (!walletConnected) {
      // Assign the Web3Modal class to the reference object by setting its `current` value
      // The `current` value is persisted throughout the page as long as the page is open
      web3ModalRef.current = new Web3Modal({
        network: "rinkeby",
        providerOptions: {},
        disableInjectedProvider: false,
      });
      connectWallet();

      // Check if presale has started and ended
      const _presaleStarted = checkIfPresaleStarted();
      if (_presaleStarted) {
        checkIfPresaleEnded();
      }

      getTokenIdsMinted();

      // Set an interval which gets called every 5 seconds to check presale has ended or not
      const presaleEndedInterval = setInterval(async function () {
        const _presaleStarted = await checkIfPresaleStarted();
        if (_presaleStarted) {
          const _presaleEnded = await checkIfPresaleEnded();
          if (_presaleEnded) {
            clearInterval(presaleEndedInterval);
          }
        }
      }, 5 * 1000);

      // Set an interval to get the number of token Ids minted every 5 seconds
      setInterval(async function () {
        await getTokenIdsMinted();
      }, 5 * 1000);
    }
  }, [walletConnected]);

  const renderButton = () => {
    // Shows button to connect wallet if wallet is not connected
    if (!walletConnected) {
      return (
        <motion.button
          onClick={connectWallet}
          className={styles.button}
          whileHover={{ scale: 1.05 }}
        >
          Connect your wallet
        </motion.button>
      );
    }

    // Shows loading button when waiting for tx to be done
    if (loading) {
      return (
        <motion.button className={styles.button} whileHover={{ scale: 1.05 }}>
          Loading...
        </motion.button>
      );
    }

    // Presale button (only owner)
    if (isOwner && !presaleStarted) {
      return (
        <motion.button
          className={styles.button}
          onClick={startPresale}
          whileHover={{ scale: 1.05 }}
        >
          Start Presale!
        </motion.button>
      );
    }

    // When presale hasnt started (not owner)
    if (!presaleStarted) {
      return (
        <div>
          {/* Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`. react/no-unescaped-entities */}
          <div className={styles.description}>{"Presale hasn't started!"}</div>
          {/* OR */}
          {/* <div className={styles.description}>Presale hasn&apos;t started!</div> */}
        </div>
      );
    }

    // Presale mint button
    if (presaleStarted && !presaleEnded) {
      return (
        <div>
          <div className={styles.description}>
            Presale has started!!! If your address is whitelisted, Mint a
            Stikman 🥳
          </div>
          <motion.button
            className={styles.button}
            onClick={presaleMint}
            whileHover={{ scale: 1.05 }}
          >
            Presale Mint 🚀
          </motion.button>
        </div>
      );
    }

    // Public mint button
    if (presaleStarted && presaleEnded) {
      return (
        <motion.button
          className={styles.button}
          onClick={publicMint}
          whileHover={{ scale: 1.05 }}
        >
          Public Mint 🚀
        </motion.button>
      );
    }
  };

  return (
    <>
      <Head>
        <title>Stikman</title>
        <meta name="description" content="Stikman" />
        <link rel="icon" href="./stikman/1.png" />
      </Head>
      <div className={styles.main}>
        <ProgressBar />
        <div>
          <h1 className={styles.title}>Welcome to Stikman!</h1>
          <div className={styles.description}>
            {"It's an NFT collection for developers in Crypto."}
            <br />
            <br />
            {tokenIdsMinted}/20 have been minted.
          </div>
          {renderButton()}
        </div>
        <Slideshow />
      </div>
      <About />
      <br />
      <Roadmap />
      <br />
      <Team />
      <br />
    </>
  );
}
