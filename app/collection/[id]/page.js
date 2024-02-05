"use client";
import { NFTDetailView } from "@covalenthq/goldrush-kit";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const page = () => {
  const { id } = useParams();
  return (
    <NFTDetailView
      chain_name={"eth-mainnet"} //sample chain name
      collection_address={"0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D"} //sample collection address
      token_id={`${id}`} //sample token id
    />
  );
};

export default page;
