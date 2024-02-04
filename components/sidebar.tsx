"use client"
import React from 'react'
import { Button } from './ui/button'
import { ScrollArea } from './ui/scroll-area'

const Sidebar = () => {
    return (
        <div className='h-full'>
            <div className="flex flex-col space-y-4 items-center p-4 h-full border">
                <div className='border w-full'>
                    Logo
                </div>

                <div className='border w-full'>
                    Btns
                </div>

                <div className='border w-full'>
                    Account
                </div>
            </div>
        </div>
    )
}

export default Sidebar