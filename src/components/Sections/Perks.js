import React from 'react'
import PerkItem from '../PerkItem'


const Perks = () => {
    const perks = [
        {
            icon: "network-chart",
            lead: "RUG-PROOF AND EQUITABLE",
            sub: "Zeroloss is built with PMM reducing any risk of Impermanent Loss, Zero Taxation and Low slippage 1% step into ZeroVerse with confidence badge.",
        },
        
        {
            icon: "shield-quarter",
            lead: "LOCKED LIQUIDITY",
            sub: "ZLT Tokens will be locked in to mint ZeroVerse. 60% of the total supply of ZLT will be locked as LP with a verified trusted third party for a time period.",
        },
        
        {
            icon: "key",
            lead: "INTEROPERABLE",
            sub: "POS utility platform with PMM algorithm and POE as the core interoperability model, SmartTrade, Pools, Stake, Combiner Harvest Mining, NFT with ZLT"
        },

        {
            icon: "shield-quarter",
            lead: "ZEROLOSSPAD",
            sub: "ZLT token HOLDERS comes first and have access to IZO pools, Lands in ZeroVerse and the opportunity to get into new projects equitably without whales and bots eating up the allocation.",
        }
    ]
  return (
    <section className='px-4 py-10 bg-black text-white justify-evenly'>
        <div className='flex flex-wrap gap-10 sm:gap-2'>
        {perks.map((item, index)=> <PerkItem key={index} content={item} />)}
        </div>

    </section>
  )
}

export default Perks