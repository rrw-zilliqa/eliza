import type { Plugin } from "@elizaos/core";
import { getOnChainActions } from "./actions";
import { erc20, USDC } from "@goat-sdk/plugin-erc20";
import { sendETH } from "@goat-sdk/wallet-evm";
import { coingecko } from "@goat-sdk/plugin-coingecko";
import { zilliqa } from "@goat-sdk/plugin-zilliqa";
import { getZilliqaWalletClient, getWalletProviders } from "./wallet";

async function createGoatPlugin(
    getSetting: (key: string) => string | undefined
): Promise<Plugin> {
  const coinGecko = coingecko({
    apiKey: getSetting("COINGECKO_API_KEY")
  });
  const zqParams = { };
  const zilliqaPlugin = zilliqa(zqParams);
  const zilliqaClient = await getZilliqaWalletClient(getSetting);
  const walletClient = zilliqaClient.getViemClient();
  const ethActions = await getOnChainActions({
    wallet: walletClient,
    // Add plugins here based on what actions you want to use
    // See all available plugins at https://ohmygoat.dev/chains-wallets-plugins#plugins
    plugins: [coinGecko, erc20({ tokens: [USDC] })],
  });
  const zilActions = await getOnChainActions({
    wallet: zilliqaClient,
    plugins: [zilliqaPlugin]
  });
  // Eliza tries to find actions by finding the first substring match, and since
  // Zilliqa actions are generally longer than eth actions ..
  const actions = zilActions.concat(ethActions);
  return {
    name: "[GOAT] Onchain Actions",
    description: "GOAT on chain actions",
    providers: getWalletProviders(walletClient, zilliqaClient),
    evaluators: [],
    services: [],
    actions: actions,
    };
}

export default createGoatPlugin;

