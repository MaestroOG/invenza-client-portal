import React from 'react'
import Container from './dashboardComponents/Container'
import { getUser } from '@/lib/user'

const IntroText = async () => {
    const user = await getUser();
    return (
        <Container className={'bg-white p-4 rounded-lg max-sm:mt-0'}>
            <div className="max-w-2xl">
                <h1 className="font-bold text-2xl md:text-4xl text-black">Welcome to the Invenza Portal, {user?.name} - {user?.agency || user?.companyName}</h1>
                <p className="mt-3">This portal is your central hub for staying informed, aligned, and in control of your digital marketing projects. Everything here is designed to help you track progress, access resources, and get the most value from our partnership.</p>

                <ul className='list-disc marker:text-accent ml-6'>
                    <li className='mt-3 text-2xl font-medium text-black text-indent-[-0.5em]'>Track & Manage Your Projects</li>
                    <p className="mt-1">Monitor active campaigns, review updates, and stay on top of deliverables, all in one place, with full visibility.</p>
                    <li className='mt-3 text-2xl font-medium text-black text-indent-[-0.5em]'>Learn & Get Answers</li>
                    <p className="mt-1">Access step-by-step how-to videos, FAQs, and educational content to better understand your campaigns and our processes.</p>
                    <li className='mt-3 text-2xl font-medium text-black text-indent-[-0.5em]'>Request Business Audits</li>
                    <p className="mt-1">Request audits for areas such as your website, SEO, or social media to identify opportunities for improvement and growth.</p>
                    <li className='mt-3 text-2xl font-medium text-black text-indent-[-0.5em]'>Helpful Resources, Anytime</li>
                    <p className="mt-1">Explore guides, best practices, and tools created to support your ongoing growth and success.
                    </p>

                </ul>

                <p className="mt-4">If you have any questions or need assistance, you can reach us anytime via the WhatsApp chat link in the bottom corner.</p>
                <p className="mt-4">We’re excited to work with you and support your business every step of the way.</p>
            </div>
        </Container>
    )
}

export default IntroText