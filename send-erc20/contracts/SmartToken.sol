// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract SmartToken is ERC20, Ownable {
    constructor(address initialOwner)
        ERC20("SmartToken", "SMRT")
        Ownable(initialOwner)
    {}

    function mint(address to, uint256 amount) public onlyOwner {
        uint256 user_amount = amount * 1e18;
        _mint(to, user_amount);
    }
}