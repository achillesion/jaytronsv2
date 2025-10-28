import React from 'react'
import { Avatar } from './ui/avatar'
import Image from 'next/image'
import { Star } from 'lucide-react'

interface ReviewCardProps {
  name: string;
  avatar: string;
  description: string;
  platform: string;
  rating: number;
}

const ReviewCard = ({ name, avatar, description, platform, rating }: ReviewCardProps) => {
  // Platform logo selection
  const platformLogo = platform === "fiverr" 
    ? "https://imgs.search.brave.com/Stod6h4GObSCOh9y8TwFKWevgj3G9sxdXX4AXyQr2tE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/bG9nb3BuZy5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTY1NjczOTI1/N2ZpdmVyci1sb2dv/LXRyYW5zcGFyZW50/LnBuZw"
    : "https://imgs.search.brave.com/Wd_SJUq1v-lLWk0XFETV5gNrNrHFWvh8OJ_EIbmO4IM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MDIvVXB3b3JrLUxv/Z28tNzAweDM5NC5w/bmc";

  // Generate stars based on rating
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className='text-yellow-400 fill-amber-400' width={15} />);
    }
    
    if (hasHalfStar) {
      stars.push(<Star key="half" className='text-yellow-400 fill-amber-400/50' width={15} />);
    }
    
    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className='text-yellow-400' width={15} />);
    }
    
    return stars;
  };

  return (
    <div className='mt-5 border bg-gray-900 hover:bg-gray-800 transition-all border-border/40 hover:border-amber-400 duration-300 p-4 rounded-lg shadow-sm hover:shadow-md' style={{ width: '320px', minWidth: '320px', height: '220px' }}>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <Avatar className="border-2 border-amber-400/20">
            <Image src={avatar} alt={name} width={50} height={50} className='rounded-full object-cover' />
          </Avatar>
          <div>
            <h1 className='text-foreground font-bold'>{name}</h1>
            <p className='text-xs text-muted-foreground'>via {platform}</p>
          </div>
        </div>
        <div className='flex flex-col items-end'>
         
          <ul className='flex'>
            {renderStars()}
          </ul>
        </div>
      </div>
      <p className='text-sm p-4 text-muted-foreground italic'>"{description}"</p>
    </div>
  )
}

export default ReviewCard