import React from "react";
import FooterColumn from "./FooterColumns";

interface Link {
  name: string;
  url: string;
}

interface FooterLinksProps {
  title: string;
  links: Link[];
}

const FooterLinks: React.FC<FooterLinksProps> = ({ title, links }) => {
  return <FooterColumn title={title} links={links} />;
};

export default FooterLinks;
