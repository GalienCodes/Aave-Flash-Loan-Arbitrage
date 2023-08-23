const { ethers } = require('hardhat');

const networkConfig = {
  default: {
    name: 'hardhat',
  },
  11155111: {
    name: 'sepolia',
    PoolAddressesProvider: '0x0496275d34753A48320CA58103d5220d394FF77F',
    daiAddress:'0x68194a729C2450ad26072b3D33ADaCbcef39D574',
    usdcAddress:'0xda9d4f9b69ac6C22e444eD9aF0CfC043b7a7f53f',
  },
};

module.exports = {
  networkConfig
}