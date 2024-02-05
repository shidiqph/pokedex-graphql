'use client'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

function CardPoke({ name, image, categories = [] }) {
    return (
        <Card className="px-4 py-8 bg-primary h-auto cursor-pointer min-h-[160px] hover:!opacity-85">
            <div className="flex flex-wrap relative">
                <div className="w-full font-bold text-white text-lg">{name}</div>
                <div className="flex-col opacity-60">
                    {categories.map((category, index) => (
                        <div key={index} className="bg-white mt-2 px-3 py-1 rounded-full font-semibold text-[10px] text-center">{category}</div>
                    ))}
                </div>
                {image && <Image src={image} alt={`Image ${name}`} className='absolute right-0 ' width={100} height={100} />}
                <Image src="/pokeball.svg" alt="pokeball" className='absolute -right-8 top-8 opacity-5' width={100} height={100} />
            </div>
        </Card>
    )

}
export default CardPoke