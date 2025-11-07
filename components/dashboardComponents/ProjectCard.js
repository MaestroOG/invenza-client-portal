import React from 'react'

const ProjectCard = ({ title, desc, success, yellow, number, onClick, className }) => {
    return (
        <div onClick={onClick} className={`w-full border border-gray-700 md:max-w-[367px] cursor-pointer px-5 py-4 rounded-2xl flex items-center justify-between max-sm:border max-sm:border-white max-sm:rounded-2xl max-sm:shadow-lg ${className ?? ''}`}>
            <div className='flex flex-col space-y-2.5'>
                <div className='flex items-center gap-2'>
                    <h3 className='font-semibold text-background'>{title}</h3>
                </div>
                <div className='flex items-center gap-2'>
                    <p className={`text-xl ${success ? 'text-success' : yellow ? 'text-yellow' : 'text-red'} font-semibold`}>{number}</p>
                    <span className='tex-sm text-detail whitespace-nowrap'>{desc}</span>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard