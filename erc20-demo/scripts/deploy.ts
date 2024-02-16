import { ethers } from "hardhat";

async function main() {
  const token = await ethers.deployContract("GenshinToken", [
    "0x920F014fC05F835bE1e75A935d56801A69AE2e0A"
  ]);

  await token.waitForDeployment();

  console.log(
    `Token with deployed to ${token.target}`
  );
}

// We recommerm contracts/Lock.solnd this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
