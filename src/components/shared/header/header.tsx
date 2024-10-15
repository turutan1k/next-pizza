import { Logo } from "@/components/ui"
import React from "react"

type Props = {}

export const Header = (props: Props) => {
    return (
        <div className='global-container fixed w-full'>
            <div className='container w-full bg-white rounded-t-[3rem] pt-[4.5rem] pb-[4.2rem] border-b-[0.1rem] border-[#EDEDED]'>
                <Logo />
            </div>
        </div>
    )
}

export default Header
