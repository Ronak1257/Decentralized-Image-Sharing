const {ethers} = require("ethers");
const { JsonRpcProvider } = require('ethers');

const provider = new ethers.providers.JsonRpcProvider('https://sepolia.infura.io/v3/87330cb0d1304f8ebcfe156fedf0d0e3');

const main = async () => {
    const balance = await provider.getBalance('0xaa2b8a2becdcc595823fd8e84aab5ed5bc50992a09cbec547bedfbd6dd3c5457');
    console.log(balance);
}

main();