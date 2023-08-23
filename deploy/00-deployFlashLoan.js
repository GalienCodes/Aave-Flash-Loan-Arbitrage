const { network, ethers } = require("hardhat")
const { networkConfig } = require("../helper-hardhat-config")

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()
  const chainId = network.config.chainId
  const arguments = [networkConfig[chainId]["PoolAddressesProvider"]]

  const flashloan = await deploy("FlashLoan", {
    from: deployer,
    args: arguments,
    log: true,
  })

  log("FlashLoan contract deployed at : ", flashloan.address)
}

module.exports.tags = ["all", "flashloan"]
// 0x2d1bdf00BDE26c3cd371b502490A3a2A979475c3