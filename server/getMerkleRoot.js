const MerkleTree = require("../utils/MerkleTree");
const niceList = require("../utils/niceList.json");

const merkleTree = new MerkleTree(niceList);
console.log(merkleTree.getRoot());
