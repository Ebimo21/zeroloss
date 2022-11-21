import React from 'react'
import CardItem from './CardItem'

const Cards = () => {

    const item = [
        {
            icon: "worlds.png",
            lead: "Decentralized",
            sub: "DeFi protocol, focused on the purpose of value creation, with a new financial algorithm to make the store of value appreciate with time and interoperability at its core."
        },

        {
            icon: "together.png",
            lead: "POE",
            sub: "The core interoperability Algorithm model of ZEROLOSS As users stake there crypto assets the POE algorithm redistributes profits and a drip pool is constantly grown"
        },

        {
            icon: "unbankedz.png",
            lead: "Global Adoption",
            sub: "ZEROLOSS is focused on redesigning the way decentralized finance (DeFi) is structured to work. We are evolving how DeFi works completely while delivering the most robust ecosystem ever seen in Defi's future advancements DeFi 3.0."

        }
    ]
  return (
    <section className='text-center px-4 py-10 bg-white'>
        <div className='flex flex-wrap gap-10 sm:gap-[3vw] lg:gap-1 justify-evenly items-center'>
      {
        item.map((item,index)=> <CardItem key={index} content={item} />)
      }
    </div>
    </section>
  )
}

export default Cards
