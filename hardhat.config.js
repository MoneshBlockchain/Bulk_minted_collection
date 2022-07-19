require("@nomiclabs/hardhat-etherscan");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 require("dotenv").config();
 require("@nomiclabs/hardhat-ethers");
 const { API_URL, PRIVATE_KEY } = process.env;
 module.exports = {
   solidity: {
    version: "0.8.4",
    settings: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }},
   
   defaultNetwork: "goerli",
   networks: {
     goerli: {
       url: "https://eth-goerli.g.alchemy.com/v2/UUA4eXZTOjCSEdv8xDbsbXd88zi9yYWo",
       accounts: [PRIVATE_KEY],
     },
   },
   etherscan:{
     apiKey:"H26QWHDW4H2QWHHSVDI2ZDG6H58EKZHXJ7"
   }
   
 };//contract address 0xaf9D5F38677FA278Cb4733a8fb96A3E8462bE7f0