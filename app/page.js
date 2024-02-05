"use client";
import {
  GoldRushProvider,
  NFTWalletTokenListView,
} from "@covalenthq/goldrush-kit";
import { TokenBalancesListView } from "@covalenthq/goldrush-kit";
import "@covalenthq/goldrush-kit/styles.css";
import Image from "next/image";

export default function Home() {
  return (
    <GoldRushProvider apikey={process.env.NEXT_PUBLIC_API_KEY}>
      <NFTWalletTokenListView
        chain_names={[
          "eth-mainnet",
          "matic-mainnet",
          "bsc-mainnet",
          "avalanche-mainnet",
          "optimism-mainnet",
        ]}
        address="0xB5119738BB5Fe8BE39aB592539EaA66F03A77174"
      ></NFTWalletTokenListView>
      <TokenBalancesListView
        chain_names={[
          "eth-mainnet",
          "matic-mainnet",
          "bsc-mainnet",
          "avalanche-mainnet",
          "optimism-mainnet",
        ]}
        address="0xB5119738BB5Fe8BE39aB592539EaA66F03A77174"
      />
    </GoldRushProvider>
  );
}
