import sdk from "./1-initialize-sdk.js";

// In order to deploy the new contract we need our old friend the app module again.
const app = sdk.getAppModule("0x5626fCA6710E2A923A9C3Ed53a0BD1aE1d2a231B");

(async () => {
  try {
    // Deploy a standard ERC-20 contract.
    const tokenModule = await app.deployTokenModule({
      // What's your token's name? Ex. "Ethereum"
      name: "BlackTech DAO Governance Token",
      // What's your token's symbol? Ex. "ETH"
      symbol: "BIT",
      gasLimit: 10000000
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address,
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();