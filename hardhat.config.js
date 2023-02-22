// hardhat.config.js
require("@nomicfoundation/hardhat-toolbox");
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/WCG8eobymJ-6k-YbfGtTpAE_swDM7U23",
      accounts: ["b1c07d74838125147abff2dea5516da965d4d18cb05c40432fb16a9b28c2a37d"],
    },
  },
};