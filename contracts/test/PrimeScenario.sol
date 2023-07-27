pragma solidity 0.8.13;

import "../Tokens/Prime/Prime.sol";

contract PrimeScenario is Prime {
    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor(address _wbnb, address _vbnb) Prime(_wbnb, _vbnb) {}

    function calculateScore(uint256 xvs, uint256 capital) external view returns (uint256) {
        return Scores.calculateScore(xvs, capital, alphaNumerator, alphaDenominator);
    }
}
