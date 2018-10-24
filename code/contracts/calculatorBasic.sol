/**
 * Skeleton code for Calculator
 **/

pragma solidity 0.4.24;

import "./SafeMath.sol";

contract calculatorBasic {
  using SafeMath for *;

  uint public result;  // Result of the operation are always stored in this variable

  constructor()
  public {
    result = 1;
  }

  // returns the result
  function getResult() public view returns (uint) {
    return result;
  }

  // result = result + num
  function addToNumber(uint num) public {
    result = result.add(num);
  }

  // result = result - num
  function substractNumber(uint num) public {
    result = result.sub(num);
  }

  // result = result * num
  function multiplyWithNumber(uint num) public {
    result = result.mul(num);
  }

  // result = result / num
  function divideByNumber(uint num) public {
    result = result.div(num);
  }
}
