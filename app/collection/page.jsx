"use client";
import { NFTCollectionTokenListView } from "@covalenthq/goldrush-kit";
import "@covalenthq/goldrush-kit/styles.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useNftContext } from "../context";

export default function page() {
  const route = useRouter();
  const { updateNftData } = useNftContext();

  const handleTokenDetailView = (e) => {
    updateNftData(e);
  }

  return (
    <section>
      <section className="nft-collection-container w-9/12 mx-auto p-8">
        <NFTCollectionTokenListView
          chain_name={"eth-mainnet"}
          collection_address={"0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D"}
          on_nft_click={(e) => {
            console.log(e);
            route.push(`/collection/${e.nft_data.token_id}`);
            handleTokenDetailView(e);
          }}
          className="bg-red-400"
          style={{ background: 'purple' }}
        >
          OPenine
        </NFTCollectionTokenListView>
      </section>
    </section>
  );
}
