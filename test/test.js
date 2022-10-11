const MockOracle = artifacts.require("MockOracle");
const PriceOfEtherUSD = artifacts.require("PriceOfEtherUSD");

contract("oracle ", accounts => {
    let _price , _mOracle;
    let price = "1310880000000000000";
    before (async () =>{
        _mOracle = await MockOracle.deployed();
        console.log("MockOracle", _mOracle.address);
        _price = await PriceOfEtherUSD.deployed();
        console.log("PriceOfEtherUSD", _price.address);   
    });

    it ("Should deploy all contracts properly", async() =>{
        assert(_mOracle.address !== "");
        assert(_price.address !== "");
    });
    
    it("sets the aggregator addresses correctly", async () => {
        const response = await _price.getPriceFeed();
        assert.equal(response, _mOracle.address);
    })

    it("should return the same value as the mock", async () => {
        const priceConsumerResult = await _price.getLatestPrice();
        const priceFeedResult = await _mOracle.latestRoundData();
        assert(priceConsumerResult ,priceFeedResult);
    })
})