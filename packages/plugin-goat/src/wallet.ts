import { elizaLogger } from "@elizaos/core";
import { WalletClient } from "@goat-sdk/core";
import { viem } from "@goat-sdk/wallet-viem";
import { createWalletClient, http } from "viem";
import { Account } from "@zilliqa-js/account";
import { privateKeyToAccount } from "viem/accounts";
import { zilliqaWallet, zilliqaChainId } from "@goat-sdk/wallet-zilliqa";

import { base } from "viem/chains";

// Add the chain you want to use, remember to update also
// the EVM_PROVIDER_URL to the correct one for the chain
export const chain = base;


export async function getZilliqaWalletClient(
  getSetting: (key: string) => string | undefined
) {
  const privateKey = getSetting("EVM_PRIVATE_KEY");
  if (!privateKey) return null;

  const provider = getSetting("EVM_PROVIDER_URL");
  if (!provider) throw new Error("EVM_PROVIDER_URL not configured");

  const chainId = await zilliqaChainId(provider);
  const account = new Account(privateKey);
  const viemWallet = createWalletClient({
        account: privateKeyToAccount(privateKey as `0x${string}`),
        chain: chain,
        transport: http(provider),
  });
  return zilliqaWallet(viemWallet, provider, account, chainId)
}

export function getWalletClient(
    getSetting: (key: string) => string | undefined
) {
    const privateKey = getSetting("EVM_PRIVATE_KEY");
    if (!privateKey) return null;

    const provider = getSetting("EVM_PROVIDER_URL");
    if (!provider) throw new Error("EVM_PROVIDER_URL not configured");

    const wallet = createWalletClient({
        account: privateKeyToAccount(privateKey as `0x${string}`),
        chain: chain,
        transport: http(provider),
    });

    return viem(wallet);
}

export function getWalletProviders(walletClient: WalletClient, zilliqa: Zilliqa) {
  return [
    {
        async get(): Promise<string | null> {
            try {
                const address = walletClient.getAddress();
                const balance = await walletClient.balanceOf(address);
                return `EVM Wallet Address: ${address}\nBalance: ${balance} ZIL`;
            } catch (error) {
                console.error("Error in EVM wallet provider:", error);
                return null;
            }
        },
    },
    {
      async get(): Promise<string | null> {
        try {
          const address = zilliqa.getZilliqa().wallet.defaultAccount?.address;
          return `Zilliqa wallet address: ${address}\n`;
        } catch (error) {
          console.error("Error in zilliqa wallet provider:", error);
          return null;
        }
      }
    }
    ]
}
