"use client";
import "@covalenthq/goldrush-kit/styles.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div
        className="flex items-center justify-center"
        style={{ height: "100vh" }}
      >
        <div className="w-fit grid">
          <button className="bg-blue-500 p-3 text-white font-bold rounded-md">
            <Link href="/collection/">NFT CollectionToken ListView</Link>
          </button>
          <button
            className="bg-red-500 p-3 text-white font-bold rounded-md"
            style={{ marginTop: "10px" }}
          >
            <Link href="/walletTokens/">NFT WalletTokens ListView</Link>
          </button>
        </div>
      </div>
    </>
  );
}
