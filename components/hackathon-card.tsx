import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  dates: string;
  location: string;
  image?: string;
  jobTitle?: string;
  badges?: readonly string[];
  links?: readonly {
    icon: React.ReactNode;
    title: string;
    href: string;
  }[];
}

export function HackathonCard({
  title,
  description,
  dates,
  location,
  image,
  jobTitle,
  badges,
  links,
}: Props) {
  return (
    <li className="relative ml-10 py-6">
      <div className="absolute -left-16 top-6 flex items-center justify-center bg-white rounded-full">
        <Avatar className="border border-amber-300 size-14 m-auto shadow-md">
          <AvatarImage src={image} alt={title} className="object-contain bg-amber-400" />
          <AvatarFallback className=" text-primary font-semibold bg-amber-400">
            {title[0]}
          </AvatarFallback>
        </Avatar>
      </div>
      
      <div className="flex flex-1 flex-col justify-start gap-3  p-5 rounded-lg border-l border-border/50 shadow-sm hover:shadow-md transition-shadow duration-200">
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-foreground">{title}</h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{location}</span>
          </div>
        </div>
        
        {jobTitle && (
          <h4 className="text-base font-semibold text-foreground/90">{jobTitle}</h4>
        )}
        
        {dates && (
          <time className="text-sm text-muted-foreground font-medium">
            {dates}
          </time>
        )}
        
        {description && (
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        )}
        
        {badges && badges.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {badges.map((badge, idx) => (
              <Badge 
                key={idx} 
                variant="secondary" 
                className="bg-amber-100 text-amber-800 hover:bg-amber-200 dark:bg-amber-900/20 dark:text-amber-300 px-3 py-1 text-xs font-medium"
              >
                {badge}
              </Badge>
            ))}
          </div>
        )}
        
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-2 mt-3">
            {links.map((link, idx) => (
              <Link href={link.href} key={idx}>
                <Badge 
                  title={link.title} 
                  className="flex gap-2 bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/20 dark:text-blue-300 px-3 py-1"
                >
                  {link.icon}
                  {link.title}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </div>
    </li>
  );
}