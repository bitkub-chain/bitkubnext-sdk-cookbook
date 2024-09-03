import { Network, initializeSDK } from '@bitkub-chain/sdk.js'

export const sdk = initializeSDK(
  'your-client-id', // Client ID
  'your-project-id', // Project ID
  Network.BKC_TESTNET,
)
