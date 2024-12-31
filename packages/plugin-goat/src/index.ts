import type { Plugin } from "@elizaos/core";
import { getOnChainActions } from "./actions";
import { erc20, USDC } from "@goat-sdk/plugin-erc20";
import { sendETH } from "@goat-sdk/wallet-evm";
import { coingecko } from "@goat-sdk/plugin-coingecko";
import { zilliqa } from "@goat-sdk/plugin-zilliqa";
import { getWalletClient, getWalletProvider } from "./wallet";

async function createGoatPlugin(
    getSetting: (key: string) => string | undefined
): Promise<Plugin> {
  const coinGecko = coingecko({
    apiKey: getSetting("COINGECKO_API_KEY")
  });
  const zqParams = { };
  const walletClient = getWalletClient(getSetting);
  const zilliqaPlugin = zilliqa(zqParams);
  const actions = await getOnChainActions({
    wallet: walletClient,
    // Add plugins here based on what actions you want to use
    // See all available plugins at https://ohmygoat.dev/chains-wallets-plugins#plugins
    plugins: [coinGecko, zilliqaPlugin, sendETH(), erc20({ tokens: [USDC] })],
  });

    return {
        name: "[GOAT] Onchain Actions",
        description: "GOAT on chain actions",
        providers: [getWalletProvider(walletClient)],
        evaluators: [],
        services: [],
        actions: actions,
    };
}

export default createGoatPlugin;

