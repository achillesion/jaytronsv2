import React from "react";
import Link from "next/link";

interface LinkItem {
  name: string;
  url: string;
}

interface FooterColumnProps {
  title: string;
  links: LinkItem[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {
  return (
    <div>
      <h3 className="text-white font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.url}
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
