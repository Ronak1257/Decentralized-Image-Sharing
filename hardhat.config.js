require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const ALCHEMY_API_KEY = "3HOgnvUtIjfWMW-ZK9ITZritWlTyNBvT";
const SEPOLIA_PRIVATE_KEY = "ad621beeb4e9b363e7c2eb5dba30b6a354cbb813a442c521a79e8d88094a8751";
module.exports = {
  solidity: "0.8.9",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    },
    hardhat: {
      chainId: 31337,
    },
  },
  paths: {
    artifacts: "./client/src/artifacts",
  },
};
