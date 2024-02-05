"use client";
import { NFTCollectionTokenListView } from "@covalenthq/goldrush-kit";
import "@covalenthq/goldrush-kit/styles.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function page() {
  const route = useRouter();
  return (
    <NFTCollectionTokenListView
      chain_name={"eth-mainnet"}
      collection_address={"0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D"}
      on_nft_click={(e) => {
        console.log(e);
        route.push(`/collection/${e.nft_data.token_id}`);
      }}
      className="bg-red-400"
    ></NFTCollectionTokenListView>
  );
}
