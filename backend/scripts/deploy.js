const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require("../constants");

async function main() {
  const whitelistContract = WHITELIST_CONTRACT_ADDRESS;
  // URL from where we can extract the metadata of a Stikman NFT
  const metadataURL = METADATA_URL;

  // A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  // so stikmanContract here is a factory for instances of our Stikman contract.
  const stikmanContract = await ethers.getContractFactory("Stikman");

  const deployedStikmanContract = await stikmanContract.deploy(
    metadataURL,
    whitelistContract
  );

  console.log("Stikman Contract Address:", deployedStikmanContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
