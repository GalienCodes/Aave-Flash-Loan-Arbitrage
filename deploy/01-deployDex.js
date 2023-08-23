const { network } = require("hardhat")
const { networkConfig } = require("../helper-hardhat-config")

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()
  const chainId = network.config.chainId
  const arguments = [networkConfig[chainId]["daiAddress"],networkConfig[chainId]["usdcAddress"]]

  const dex = await deploy("Dex", {
    from: deployer,
    args: arguments,
    log: true,
  })

  log("Dex contract deployed at : ", dex.address)
}

module.exports.tags = ["all", "dex"]