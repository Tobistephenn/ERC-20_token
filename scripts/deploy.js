// deploy.js
const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying ERC20Token with the account:", deployer.address);

  const initialSupply = 1000000; // Set the initial supply as per your requirement

  const ERC20Token = await ethers.getContractFactory("ERC20Token");
  const erc20Token = await ERC20Token.deploy(initialSupply);

  console.log("ERC20Token address:", erc20Token.address);

  // If you want to verify the contract on Etherscan
  await erc20Token.deployed();
  console.log("ERC20Token deployed to:", erc20Token.deployTransaction.to);

  // You can also verify the contract using the following command:
  // npx hardhat verify --network <network_name> <deployed_contract_address> [constructor arguments]

  // For example:
  // npx hardhat verify --network rinkeby 0x1234567890123456789012345678901234567890 1000000
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
