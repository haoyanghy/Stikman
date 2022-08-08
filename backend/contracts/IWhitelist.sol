// SPDX-License-Identifier: MIT
    pragma solidity ^0.8.4;

// inferfacing whitelistedAddresses function from Whitelist contract
// 0x0392EeBe289002A73421f0911eB05b3f10AaCe9E
    interface IWhitelist {
        function whitelistedAddresses(address) external view returns (bool);
    }