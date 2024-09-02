import { Network, initializeSDK } from '@bitkub-chain/sdk.js'

export const sdk = initializeSDK(
  '66c43bc3ef252f001ce5f8cd', // Client ID
  'sdk-e0868af0-a434-4dd6-b1d8-be0e2e961778', // Project ID
  Network.BKC_TESTNET,
)
