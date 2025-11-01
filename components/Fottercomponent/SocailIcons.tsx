import React from "react";
import { FaFacebook, FaWhatsapp, FaEnvelope, FaLinkedin, FaYoutube } from "react-icons/fa";

const SocialIcons = () => {
  const socials = [
    { icon: <FaWhatsapp />, url: "#", color: "hover:text-green-400" },
    { icon: <FaFacebook />, url: "#", color: "hover:text-blue-500" },
    { icon: <FaLinkedin />, url: "#", color: "hover:text-blue-400" },
    { icon: <FaYoutube />, url: "#", color: "hover:text-red-500" },
    { icon: <FaEnvelope />, url: "mailto:learnwithshajeel@gmail.com", color: "hover:text-yellow-400" },
  ];

  return (
    <div className="flex items-center gap-4 text-xl">
      {socials.map((social, i) => (
        <a
          key={i}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`transition-colors ${social.color}`}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
