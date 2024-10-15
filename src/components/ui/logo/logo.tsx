import { LogoSvg } from "@/assets/svgs"
import React from "react"

type Props = {}

export const Logo = (props: Props) => {
    return (
        <div className='flex items-center gap-[1.5rem]'>
            <LogoSvg />
            <div className='flex flex-col'>
                <span className='nunito font-[900] text-[2.4rem] leading-[3.2rem] text-black'>
                    NEXT PIZZA
                </span>
                <span className='nunito font-[400] text-[#7B7B7B] text-[1.6rem] leading-[2.2rem]'>
                    вкусней уже некуда
                </span>
            </div>
        </div>
    )
}

export default Logo
