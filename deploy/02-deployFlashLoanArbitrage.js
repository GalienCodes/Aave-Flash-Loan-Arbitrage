const { network } = require("hardhat")
const { networkConfig } = require("../helper-hardhat-config")

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()
  const chainId = network.config.chainId
  const arguments = [networkConfig[chainId]["PoolAddressesProvider"],networkConfig[chainId]["daiAddress"],networkConfig[chainId]["usdcAddress"]]

  const dex = await deploy("FlashLoanArbitrage", {
    from: deployer,
    args: arguments,
    log: true,
  })

  log("FlashLoanArbitrage contract deployed at : ", dex.address)
}

module.exports.tags = ["all", "FlashLoanArbitrage"]