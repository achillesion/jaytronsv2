import { CheckCircle } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = () => {
    const skills = [
        "Full-Stack Web Development",
        "AI Integration & Chatbot Development",
        "Freelancing & Business Development",
        "React, Next.js & TypeScript",
        "Database Design (MongoDB, PostgreSQL)",
        "RevenueCat and Stripe Integration",
        "Generative AI & Machine Learning",
        "Community Building & Management",
        "Mobile App Development (Flutter, React Native)",
        "Content Creation & YouTube (59k+ Subscribers)",
        "Educational Content & Training",
        "Node.js Development",
        "Cloud Services (AWS, GCP)",
        "API Development & Integration",
        "SaaS Development & Architecture",
        "Mentoring & Coaching Developers"
    ];
    return (
        <div className='min-h-screen container mx-auto flex items-center justify-evenly'>
            <Image src={"https://www.shajeelafzal.com/_next/image?url=%2Fprofile-image.jpg&w=640&q=75"}
                alt='profile' height={600} width={500}
                className='rounded-md shadow-sm h-full'
            />
            <div className='flex flex-col gap-6 max-w-[600px]'>
                <h1 className='text-[36px] font-semibold'>Hi, I'm Ahmad Bashir - <span className='animated-gradient-text-2'>Designer and Developer</span></h1>
                <p className='text-gray-500 text-lg font-regular'>I'm a Full-Stack Developer with 10+ years of experience in freelancing, programming, and AI. I create developer content on YouTube with 59k+ subscribers, helping developers level up their skills through practical tutorials and insights.</p>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-foreground text-lg font-semibold '>I specialized in:</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2"
                            >
                                <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                                <span className="text-foreground text-[12px]">{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <p className='text-gray-500 text-lg font-regular'>Based in Lahore, Dubai & Remote (Dubai Digital Nomad VISA Holder), I'm passionate about solving real-world problems through code and sharing knowledge with the developer community. Let's build something amazing together!</p>

                <div className='flex gap-[19px] items-center mt-10'>
                    <Link className='w-[126px] text-white h-[32px] font-semibold bg-[#378066] flex items-center justify-around rounded-md' href={"/view-services"}>
                        View Services
                    </Link>
                    <Link className='w-[126px] h-[32px] text-[#378066] font-semibold border border-[#378066] flex items-center justify-around rounded-md' href={"/view-services"}>
                        Hire Now
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default About