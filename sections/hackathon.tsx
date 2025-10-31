"use client";
import React from "react";
import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resumee";
import { Icons } from "@/components/icons";
import JobCarousel from "@/components/JobCarousel";
interface SectionProps {
  id?: string;
}
const Hackathon = ({ id }: SectionProps) => {
  return (
    <div  id={id} className="container mx-auto min-h-screen px-4">
      {/* Section Header */}
      <BlurFade delay={13 * 0.1}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center mt-10">
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

      {/* Work Experience List */}
      <div className="w-full flex justify-center mt-12">
        <div className="w-full max-w-5xl">
          <BlurFade delay={14 * 0.1}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.work.map((project, id) => (
                <BlurFade
                  key={project.company + project.start}
                  delay={0.1 * 15 + id * 0.05}
                >
                  {/* ✅ Center JobCarousel on all devices */}
                  {id === 0 ? (
                    <div className="flex justify-center items-center w-full overflow-hidden py-6">
                      <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl">
                        <JobCarousel job={project as any} />
                      </div>
                    </div>
                  ) : (
                    <HackathonCard
                      title={project.company}
                      jobTitle={project.title}
                      description={project.description}
                      location={project.location}
                      dates={`${project.start} - ${project.end}`}
                      image={project.logoUrl}
                      badges={project.badges || []}
                      links={
                        project.href
                          ? [
                              {
                                icon: <Icons.globe className="size-3" />,
                                title: "Company Website",
                                href: project.href,
                              },
                            ]
                          : undefined
                      }
                    />
                  )}
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </div>
    </div>
  );
};

export default Hackathon;
