const axios = require("axios");
const niceList = require("../utils/niceList.json");
const MerkleTree = require("../utils/MerkleTree");

const serverUrl = "http://localhost:1225";

async function main() {
  const args = process.argv.slice(2);
  const name = args.length > 0 ? args[0] : "";

  // how do we prove to the server we're on the nice list?
  const merkleTree = new MerkleTree(niceList);
  const index = niceList.findIndex((n) => n === name);
  const proof = merkleTree.getProof(index);

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    // add request body parameters here!
    name: name,
    proof: proof,
  });

  console.log({ gift });
}

main();
