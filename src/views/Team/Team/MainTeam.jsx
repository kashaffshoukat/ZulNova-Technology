import React from 'react'
import { teamAll } from '../../../assets'

const MainTeam = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-12">
                <h1 className="text-3xl md:text-5xl font-semibold">
                    Our <span className="text-[#2e5090]">Team</span>
                </h1>
                <h2 className="text-lg md:text-2xl text-center">
                    This is our team, a lot of smiling happy people who work hard to
                    empower your teams.
                </h2>
                <div className="border-b-4 text-[#0A6EB7] h-2 md:h-3 w-[40%] md:w-[15%]"></div>
                <img src={teamAll} alt="Team All" className="w-full object-cover md:w-auto" />
            </div></>
    )
}

export default MainTeam