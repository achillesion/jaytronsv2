import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
interface SectionProps {
  id?: string;
}

const About = ({ id }: SectionProps) => {
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
    "Mentoring & Coaching Developers",
  ];

  return (
    <div id={id} className="min-h-screen container mx-auto flex flex-col md:flex-row items-center justify-center gap-10 px-4 md:px-8 mt-20 mb-10">
      {/* Profile Image */}
      <div className="flex justify-center">
        <Image
          src="https://www.shajeelafzal.com/_next/image?url=%2Fprofile-image.jpg&w=640&q=75"
          alt="profile"
          height={600}
          width={500}
          className="rounded-md shadow-md w-[250px] sm:w-[320px] md:w-[400px] h-auto object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col gap-6 max-w-[600px] text-center md:text-left">
        <h1 className="text-[28px] sm:text-[32px] md:text-[36px] font-semibold leading-tight">
          Hi, I'm Ahmad Bashir —{" "}
          <span className="animated-gradient-text-2">Designer and Developer</span>
        </h1>

        <p className="text-gray-500 text-base sm:text-lg">
          I'm a Full-Stack Developer with 10+ years of experience in freelancing,
          programming, and AI. I create developer content on YouTube with 59k+
          subscribers, helping developers level up their skills through practical
          tutorials and insights.
        </p>

        {/* Skills Grid */}
        <div className="flex flex-col gap-2">
          <h1 className="text-foreground text-lg font-semibold">I specialize in:</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle className="text-green-500 w-4 h-4 mt-[2px]" />
                <span className="text-foreground text-[13px] sm:text-[14px]">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-gray-500 text-base sm:text-lg">
          Based in Lahore, Dubai & Remote (Dubai Digital Nomad VISA Holder), I'm
          passionate about solving real-world problems through code and sharing
          knowledge with the developer community. Let's build something amazing
          together!
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start mt-6">
          <Link
            href="/view-services"
            className="w-[140px] text-white h-[38px] font-semibold bg-[#378066] flex items-center justify-center rounded-md hover:bg-[#2f6e57] transition-all"
          >
            View Services
          </Link>
          <Link
            href="/hire"
            className="w-[140px] h-[38px] text-[#378066] font-semibold border border-[#378066] flex items-center justify-center rounded-md hover:bg-[#378066] hover:text-white transition-all"
          >
            Hire Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
