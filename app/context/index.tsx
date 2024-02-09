"use client";

import React, { useContext } from "react";
import { createContext, useState, type ReactNode } from "react"
import { GoldRushProvider } from "@covalenthq/goldrush-kit"
import { useTheme } from "next-themes"
import { ALCHEMY_LOCALSTORE } from "../utils/constants";

// import { KeyDialog } from "@/components/key-dialog"

interface NftContextType {
  nftAddress: string
  setnftAddress: Function
  chains: any
  setChains: Function
  tableState: { [key: string]: boolean }
  setTableState: Function
  color: string
  setColor: Function
  setBorderRadius: Function
  borderRadius: string
  nftData: any
  updateNftData: Function
}

export const NftContext = createContext<NftContextType>({} as NftContextType)

interface NftProviderProps {
  children: ReactNode
}

const getNftData = () => {
  
  // console.log(JSON.stringify(localStorage.getItem(ALCHEMY_LOCALSTORE), replacer, 2));
  // console.log(JSON.parse(localStorage.getItem(ALCHEMY_LOCALSTORE)));
  return JSON.parse(window.localStorage.getItem(ALCHEMY_LOCALSTORE));
}

export const NftProvider: React.FC<NftProviderProps> = ({ children }) => {
  const { theme } = useTheme()
  const [nftAddress, setnftAddress] = useState<string>("")
  const [chains, setChains] = useState<[]>([])
  const [tableState, setTableState] = useState({})
  const [color, setColor] = useState<any>("slate")
  const [borderRadius, setBorderRadius] = useState<any>("medium")
  const [nftData, setNftData] = useState(getNftData());

  const mode: any = theme

  const updateNftData = (_data: any) => {
    setNftData(_data);
    const replacer = (key, value) => {
      if (typeof value === 'bigint') {
        return Number(value)
      }
      return value;
    }
    // save to localstorage
    localStorage.setItem(ALCHEMY_LOCALSTORE, JSON.stringify(_data, replacer, 2));
  }

  return (
    <NftContext.Provider
        value= {{
          nftAddress,
          setnftAddress,
          chains,
          setChains,
          tableState,
          setTableState,
          setColor,
          color,
          setBorderRadius,
          borderRadius,
          nftData,
          updateNftData
        }}>
    { children }
  </NftContext.Provider>
  )
}

export const useNftContext = () => useContext(NftContext);