// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./interfaces/AggregatorV3Interface.sol";

contract MockOracle {

    int256 private price;

    constructor(){
        price = 1310880000000000000;
    }

    function getRoundData()
    external
    view
    returns (int256){
        return(price);
    }

  function latestRoundData()
    external
    view
    returns (
      uint80 roundId,
      int256 ,
      uint256 startedAt,
      uint256 updatedAt,
      uint80 answeredInRound
    ){
        return(90,price,3456,345678,234);
    }

}