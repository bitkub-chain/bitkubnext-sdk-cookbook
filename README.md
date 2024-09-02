# BitkubNextSDK Cookbook

Welcome to the BitkubNextSDK Cookbook! This repository contains a collection of practical recipes for using the BitkubNextSDK to interact with the Bitkub Chain Network. Whether you're new to blockchain development or looking to integrate specific functionalities, this cookbook provides step-by-step guides to help you achieve common tasks using the BitkubNextSDK.

## Overview

**BitkubNextSDK** is a JavaScript library designed for developers to interact with the Bitkub Chain blockchain network. It offers various methods for managing user authentication, retrieving user information, and executing transactions on the blockchain.

## Getting Started

To follow along with the recipes in this cookbook, you'll first need to run:

```bash
npm install
```

or

```bash
pnpm install
```

or

```bash
yarn install
```

The `@bitkub-chain/sdk.js` dependency will be included in your `package.json` file. This is the core library used throughout the cookbook. For more information about @bitkub-chain/sdk.js, including detailed documentation and usage, [Click here.](https://www.npmjs.com/package/@bitkub-chain/sdk.js)

---

## 📝 Initialization

To set up and initialize the cookbook, follow these steps:

1. **Generate Your Credentials**:

   - Go to the [Bitkub Chain Playground](https://playground.bitkubchain.com/) and generate your `clientID` and `projectID`.

2. **Configure Your SDK Cookbook**:
   - Insert your `clientID` and `projectID` into the `src/lib/bitkubchain-sdk.js` file.

Here’s an example:

```javascript
import { Network, initializeSDK } from '@bitkub-chain/sdk.js'

// Replace with your actual Client ID and Project ID
export const sdk = initializeSDK(
  'your-client-id', // Client ID from Bitkub Chain Playground
  'your-project-id', // Project ID from Bitkub Chain Playground
  Network.BKC_TESTNET,
)
```

3. Now you should be able to start the project! 🚀
