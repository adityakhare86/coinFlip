import { useCallback } from "react";
import { parseEther } from "@ethersproject/units";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { useCoinFlipContract } from "./useContract";
import { useAppContext } from "../AppContext";

export const useFunction = (functionName, rawValue, args = []) => {
  const contract = useCoinFlipContract();
  const { addTransaction, addNotification } = useAppContext();

  const doCall = useCallback(async () => {
    if (!contract) return;

    const parsedValue = rawValue ? parseEther(`${rawValue}`).toString() : undefined;

    try {
      // Set a fixed gas limit
      const gasLimit = 100000; // Adjust this value as needed

      // Call contract function
      const txResponse = await contract[functionName](...args, {
        value: parsedValue,
        gasLimit: gasLimit,
      });

      const { hash } = txResponse;
      const receipt = await txResponse.wait(); // Wait for transaction confirmation

      addTransaction({
        hash,
        from: receipt.from,
        value: parsedValue,
        wait: receipt.wait,
      });
    } catch (error) {
      addNotification({
        title: error.reason ?? error.message ?? "Oops something went wrong",
        isError: true,
        wrapText: true,
        icon: faExclamationTriangle,
        hideIn: 2500,
      });
    }
  }, [functionName, rawValue, args, contract, addTransaction, addNotification]);

  return doCall;
};
