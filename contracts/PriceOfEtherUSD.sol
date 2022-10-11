//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./interfaces/AggregatorV3Interface.sol";

contract PriceOfEtherUSD {
    AggregatorV3Interface internal priceFeed;


    constructor(address AggreAddress){
        priceFeed = AggregatorV3Interface(AggreAddress);
    }

    function getLatestPrice() public view returns(int256){
        (,int256 price,,,)= priceFeed.latestRoundData();
        return price;
    }

    function getPriceFeed() public view returns (AggregatorV3Interface) {
        return priceFeed;
    }
}
