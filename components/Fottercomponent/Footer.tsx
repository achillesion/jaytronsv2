"use client";
import React from "react";
import FooterLinks from "./FooterLinks";
import SocialIcons from "./SocailIcons";

const Footer = () => {
  return (
    <footer className=" border-t border-gray-300 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-black dark:text-white mb-3">Jaytrons</h2>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            Developer & Trainer – Freelancing, Programming & AI.<br />
            Top Rated Plus on Upwork with 10+ years of experience.
          </p>
          <p className="mt-4 text-gray-700 dark:text-gray-300 text-sm">
            📧 learnwithshajeel@gmail.com<br />
            Lahore, Dubai & Remote
          </p>
        </div>

        {/* Link Sections */}
        <FooterLinks
          title="Main Platforms"
          links={[
            { name: "YouTube Channel", url: "#" },
            { name: "Official Website", url: "#" },
            { name: "Newsletter", url: "#" },
            { name: "Schedule Meeting", url: "#" },
          ]}
        />

        <FooterLinks
          title="Freelance"
          links={[
            { name: "Upwork", url: "#" },
            { name: "Fiverr", url: "#" },
          ]}
        />

        <FooterLinks
          title="Community"
          links={[
            { name: "Facebook Group", url: "#" },
            { name: "WhatsApp Channel", url: "#" },
            { name: "Skool Community", url: "#" },
          ]}
        />
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 dark:border-gray-700"></div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-700 dark:text-gray-300">
        <p>
          © 2025 <span className="font-semibold text-black dark:text-white">Jaytrons</span>. All rights reserved.
        </p>
        <div className="mt-3 md:mt-0">
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
