const { expect } = require("chai");
const { ethers } = require("hardhat");

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), "ether");
};

describe("ArtworkEscrow", () => {
  let artworkEscrow;

  it("saves the addresses", async () => {
    const ArtworkEscrow = await ethers.getContractFactory("ArtworkEscrow");
    artworkEscrow = await ArtworkEscrow.deploy();

    console.log("Artwork address=" + artworkEscrow.address);
  });
});
