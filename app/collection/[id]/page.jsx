"use client";

import React, { useRef, useState } from "react";
import { NFTDetailView } from "@covalenthq/goldrush-kit";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useNftContext } from "../../context";
import Link from "next/link";
import { shortenAddress, sizeFormatter } from "../../utils/helpers";



const page = () => {
  const { id } = useParams();
  const { nftData } = useNftContext();
  const infoView = useRef(null);
  const salesView = useRef(null);
  const infoTab = useRef(null);
  const salesTab = useRef(null);
  const [currentView, setCurrentView] = useState("info");
  const [isActiveTab, setIsActiveTab] = useState("info");
  console.log(nftData);

  const handleViewToggle = () => {
    if (currentView === "info") {
      setCurrentView("sales");
      setIsActiveTab("sales")
    } else if (currentView === "sales") {
      setCurrentView("info");
      setIsActiveTab("info");
    }
  }

  return (
    <section>
      <section className={"flex flex-row flex-nowrap justify-center gap-12 p-8"}>
        {/* <div className="flex-shrink-0 bg-base-200 w-[480px]">
          <ul className="menu menu-lg bg-base-200 rounded-box">
            <li><a>Details</a></li>
            <li><a>Prices</a></li>
          </ul>
        </div> */}
        <section className="w-9/12">
          <section className="relative flex flex-row items-center">
            <div className="flex-1 text-sm breadcrumbs py-8">
              <ul>
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/collection"}>Collection</Link></li>
                <li>{nftData?.contract_name}</li>
              </ul>
            </div>
            <div role="tablist" className="tabs tabs-lg tabs-boxed *:text-sm">
              <button role="tab" className={`tab ${isActiveTab === 'info' ? 'tab-active' : ''}`} ref={infoTab} onClick={handleViewToggle}>Info</button>
              <button role="tab" className={`tab ${isActiveTab === 'sales' ? 'tab-active' : ''}`} ref={salesTab} onClick={handleViewToggle}>Sales</button>
            </div>
          </section>

          {
            currentView === "info" &&
            <section ref={infoView}>
              <section>
                <div className="relative flex flex-row gap-12">
                  <div className="avatar">
                    <div className="w-[32rem] rounded">
                      <img src={nftData?.nft_data?.external_data?.asset_url} className={"rounded-md"} />
                    </div>
                  </div>
                  <section className="self-end flex flex-col gap-y-4">
                    <div className="font-semibold text-5xl py-4">{nftData?.contract_name} #{nftData?.nft_data?.token_id}</div>
                    <div className="flex flex-row flex-wrap gap-4 text-balance">
                      {
                        nftData?.nft_data?.external_data?.attributes.map((eachAttr) => (
                          <div key={eachAttr.trait_type} className="bg-base-200 rounded-lg px-8 py-4 leading-normal">
                            <div className="text-gray-600 text-sm">{eachAttr.trait_type}</div>
                            <div className="font-">{eachAttr.value}</div>
                          </div>
                        ))
                      }
                    </div>
                  </section>
                </div>

                <div className="flex flex-row items-center gap-4 py-4">
                  <div className="font-semibold text-lg text-gray-500">{nftData?.contract_ticker_symbol}</div>
                  <div className="size-2 bg-gray-300 rounded-full mx-4"></div>
                  <div className="font-semibold text-lg text-gray-500">{shortenAddress(nftData?.contract_address)}</div>
                  <div className="size-2 bg-gray-300 rounded-full mx-4"></div>
                  <div className="font-semibold text-lg text-gray-500">{sizeFormatter(nftData?.nft_data?.external_data?.asset_size_bytes)} MB</div>
                </div>

                {/* Other Media */}
                <div className="py-8 ">
                  <header className="py-2 font-bold text-sm text-gray-600 leading-loose">Other Media</header>
                  <div className="flex flex-row items-center">
                    {
                      nftData?.nft_data?.external_data?.animation_url
                        ?
                        <video
                          src={nftData?.nft_data?.external_data?.animation_url}
                          className="w-80 bg-base-200 rounded-lg"
                        ></video>
                        : <div
                          className="flex flex-row justify-center items-center w-80 h-40 bg-base-200 rounded-lg text-pretty text-center text-gray-500 cursor-not-allowed"
                        >No Animation</div>
                    }
                  </div>
                </div>

                {/* Details */}
                <div className="py-8 ">
                  <header className="py-2 font-bold text-sm text-gray-600 leading-loose">Details</header>
                  <div className="flex flex-row gap-8 py-2">
                    <div className="flex flex-row items-center gap-4">
                      <span>Owner:</span>
                      <span className="bg-base-200 rounded-lg p-4 border-[1px] border-b-4 border-solid border-gray-300">{nftData?.nft_data?.external_data?.original_owner ?? "-"}</span>
                    </div>
                    <div className="flex flex-row items-center gap-4">
                      <span>Size:</span>
                      <span className="bg-base-200 rounded-lg p-4 border-[1px] border-b-4 border-solid border-gray-300">{sizeFormatter(nftData?.nft_data?.external_data?.asset_size_bytes)} MB</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className={"py-8 leading-loose text-pretty"}>
                  <header className="py-2 font-bold text-sm text-gray-600 leading-loose">Description</header>
                  {
                    nftData?.nft_data?.external_data?.description ||
                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit voluptates, reiciendis aliquam accusamus voluptatibus harum tempore blanditiis, ex iste recusandae quae inventore quas odio dolorem voluptatem labore eligendi distinctio officia."
                  }
                </div>

                {/* Suggestions */}
                <div className="">
                  <header className="py-2 font-bold text-sm text-gray-600 leading-loose">Suggestions</header>
                </div>
              </section>
            </section>
          }

          {/* Sales View */}
          {
            currentView === "sales" &&
            <section ref={salesView}>
              <NFTDetailView
                chain_name={"eth-mainnet"} //sample chain name
                collection_address={"0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D"} //sample collection address
                token_id={`${id}`} //sample token id
              />
            </section>
          }
        </section>
      </section>
    </section>
  );
};

export default page;
