const MockOracle = artifacts.require("MockOracle");
const PriceOfEtherUSD = artifacts.require("PriceOfEtherUSD");

module.exports = async function(deployer) {
  await deployer.deploy(MockOracle);
  const mOracle = await MockOracle.deployed();
  await deployer.deploy(PriceOfEtherUSD, mOracle.address);
  const price = await PriceOfEtherUSD.deployed();
};
