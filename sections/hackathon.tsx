import React from 'react'
import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from '@/data/resumee';
import { Icons } from '@/components/icons';
import JobCarousel from '@/components/JobCarousel';


const Hackathon = () => {
  return (
    <div className='container mx-auto min-h-screen'>
        <BlurFade delay={13 * 0.1}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl animated-gradient-text-2">
                Work Experience
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                My professional journey and key roles in building innovative products.
              </p>
            </div>
          </div>
        </BlurFade>
        <div className='max-w-4xl m-auto'>
        <BlurFade delay={14 * 0.1}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l mt-12">
              {DATA.work.map((project, id) => (
                <BlurFade
                  key={project.company + project.start}
                  delay={0.1 * 15 + id * 0.05}
                >
                  {id === 0 ? (
                    <JobCarousel job={project as any} />
                  ) : (
                    <HackathonCard
                      title={project.company}
                      jobTitle={project.title}
                      description={project.description}
                      location={project.location}
                      dates={`${project.start} - ${project.end}`}
                      image={project.logoUrl}
                      badges={project.badges || []}
                      links={project.href ? [{
                        icon: <Icons.globe className="size-3" />,
                        title: "Company Website",
                        href: project.href
                      }] : undefined}
                    />
                  )}
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
    </div>
  )
}

export default Hackathon