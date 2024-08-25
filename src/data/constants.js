import { COINFLIP_ABI } from "./coinFlipAbi";

export const DEFAULT_THEME = "light";
export const WAITFOR_CONFIRMATIONS = 2;

//export const COINFLIP_ADDRESS = "0x6d9AeE60C87f97BF3Cdce3d59C6c6C2e80F301ca"; // VRF v1 on Kovan
// export const COINFLIP_ADDRESS = "0x5611547ae21E7d4d0235f4fFA5b4175e63343aA4"; // VRF v2 on Rinkeby
// export const COINFLIP_ADDRESS = "0x2a492922358E2E272bdC6B9bE29e4AAfe1f1f210"; // VRF v2 on Goerli
export const COINFLIP_ADDRESS = "0x50E43ef4A1D85c84C5d1F7E0Bc370d1078f8C56b"; // VRF v2.5 on Sepolia

export const COINFLIP = {
  address: COINFLIP_ADDRESS,
  abi: COINFLIP_ABI,
};

export const CHAINS = {
  1: {
    name: "MainNet",
    etherScanPrefix: "",
  },
  11155111: {
    name: "Sepolia",
    etherScanPrefix: "sepolia.",
  },
};
export const SUPPORTED_CHAINS = [11155111];
