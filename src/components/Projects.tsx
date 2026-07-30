import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';

type Project = {
  title: string;
  contribution: string;
  tech: string[];
  year: string;
  url: string;
};

type PersonalProject = {
  title: string;
  description: string;
  tags: string[];
  url: string;
  codeLink: string;
};

const projects: Project[] = [
  {
    title: "AFRISTAKES",
    contribution: "AfriStakes is a structured capital platform connecting African businesses with investors. I wrote the majority of the frontend codebase from the ground up, delivering a fully functional investment platform within a short contract window.",
    tech: ["React", "TypeScript", "Pusherjs", "Tanstack router", "Tanstack Table", 'Realtime updates', 'Web sockets'],
    year: "2026",
    url: "https://afristakes.com"
  },
  {
    title: "BUILDPANDA",
    contribution: "BuildPanda is an online construction project management platform designed to help small to medium-sized contractors and home builders streamline their project planning and client communication process.",
    tech: ["React", "TypeScript", "Postgres", "React Query", "Web sockets", "Redis", "Node JS", "Fastify", "Docker"],
    year: "2026",
    url: "https://buildpanda.io"
  },
  {
    title: "FOLAWEJ",
    contribution: "FolaweAj is a platform that provides world-class laundry experience with self-service facilities, coin-operated machines, and mobile app integration.",
    tech: ["React", "TypeScript", "Redux Toolkit", "Ionic", "Web sockets"],
    year: "2022",
    url: "https://folawej.com"
  },
  {
    title: "BEEVA AI",
    contribution: "AI-powered platform for skin analysis and care assessment, I designed and developed the frontend using React and TypeScript.",
    tech: ["React", "TypeScript", "Tailwind CSS", "AI Integration",],
    year: "2024",
    url: "https://beeva.ai"
  },
  {
    title: "BLUELIGHT STUDIOS",
    contribution: "Solving user problems through software and technologies, I developed and delivered multiple production web applications tailored to client specifications.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    year: "2023",
    url: "https://bluelight.studio"
  },
];
// World-class laundry experience with self-service facilities, coin-operated machines, and mobile app integration

const personalProjects: PersonalProject[] = [
  {
    title: "MediCore Healthcare API",
    description: "A comprehensive RESTful API for MediCore Healthcare, enabling seamless management of patients, doctors, appointments, and medical records with robust authentication and authorization.",
    tags: ["Express", "TypeScript", "Prisma", "Postgres", "Swagger", "JWT", "Bcrypt", "Helmet", "Jest", "K6", "Docker", "Bruno", "Zod", "Drizzle", "Node JS", "Redis Pub/Sub", "Background job processing", "Socket.IO", "Pino", "BullMQ", "Node Cron",],
    url: "",
    codeLink: "https://github.com/m0nds/medicore-api",
  },
  {
    title: "Job Application API",
    description: "Job Application API",
    tags: ["Express", "TypeScript", "Prisma", "Postgres", "JWT", "Bcrypt", "Docker", "Zod", "Prisma", "Node JS"],
    url: "",
    codeLink: "https://github.com/m0nds/job-application-api",
  },
  {
    title: "APPLE 15 PRO WEBSITE CLONE",
    description: `A clone of the Apple 15 Pro and 15 pro max website design. It was developed with Gsap and Three.Js`,
    tags: ["React JS", "UI/UX", "Three js", 'GSAP'],
    url: "https://apple-15pro-clone.netlify.app/",
    codeLink: "https://github.com/m0nds/apple-15pro-site",
  },
  {
    title: "INVOICE APP",
    description: `A modern, responsive invoice management application built with React, Firebase, and real-time WebSocket integration. This application provides a complete solution for creating, managing, and tracking invoices with a beautiful, mobile-first design.`,
    tags: ["React JS", "Tailwind CSS", "Framer Motion", "Firebase", "WebSocket", "Auth"],
    url: "https://invoice-app-three-gamma.vercel.app/",
    codeLink: "https://github.com/m0nds/invoice-app",
  },
  {
    title: "CARLAND RENTALS",
    description: 'Car rentals landing page site with animations',
    tags: ["React JS", "UI/UX", 'Tailwind CSS', 'Framer Motion', 'Next JS'],
    url: "https://carland-rentals.netlify.app/",
    codeLink: "https://github.com/m0nds/car-rentals-app",
  },
  {
    title: "BIM VIEWER WEBSITE",
    description: `A modern, responsive BIM viewer website built with React, Tailwind CSS, Framer Motion, Three JS, and GSAP. This website provides a complete solution for viewing BIM models with a beautiful, mobile-first design.`,
    tags: ["Next JS", "TypeScript", "Tailwind CSS", "Framer Motion", "Three JS", "GSAP", "Supabase"],
    url: "https://bim-viewer-wewb.onrender.com/",
    codeLink: "",
  },
  {
    title: "TEAMFLOW APP",
    description: `A modern, real-time task management and collaboration platform built with Next.js, designed to help teams organize projects, track tasks, and collaborate seamlessly.`,
    tags: ["Next JS", "Tailwind CSS", "Shadcn UI", "Framer Motion", "Web sockets", "Prisma", "Supabase"],
    url: "",
    codeLink: "https://github.com/m0nds/teamflow-pro",
  },
  {
    title: "MONDS QUIZ APP",
    description: `The Quiz App allows you to take quizzes on various topics such as sports, general knowledge, music, animals, history and celebrities`,
    tags: ["React JS", "CSS Modules", "JavaScript"],
    url: "https://mondsquiz.netlify.app/",
    codeLink: "https://github.com/m0nds/monds-quiz",
  },
  {
    title: "ROOMS CHAT APP",
    description: `This is my rooms chat app website built using React JS, Tailwind CSS, Framer Motion, WebSocket, Node JS, and Socket IO`,
    tags: ["React JS", "Tailwind CSS", "Framer Motion", "WebSocket", "Node JS", "Socket IO", "Express"],
    url: "https://mondsroomschat.netlify.app",
    codeLink: "https://github.com/m0nds/chat-app",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("projects");

  const ProjectCard = ({ project, index, isPersonal = false }: { project: Project | PersonalProject; index: number; isPersonal?: boolean }) => {
    const projectData = project as Project;
    const personalData = project as PersonalProject;

    return (
      <motion.div
        key={project.title}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="border border-border/30 hover:border-foreground/50 transition-all duration-300 group"
      >
        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
            <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            {!isPersonal && projectData.year && (
              <span className="text-xs md:text-sm text-muted-foreground tracking-wider">
                {projectData.year}
              </span>
            )}
          </div>

          <p className="text-sm md:text-base mb-6 leading-relaxed text-muted-foreground">
            {isPersonal ? personalData.description : projectData.contribution}
          </p>

          <div className="flex flex-wrap gap-3 mb-6">
            {(isPersonal ? personalData.tags : projectData.tech).map((tech: string) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs border border-border/50 hover:border-accent hover:text-accent transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-6 text-sm">
            {project.url && project.url.trim() !== "" && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-accent transition-colors group/btn"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="uppercase text-xs tracking-wider">Live</span>
              </a>
            )}
            {isPersonal && personalData.codeLink && personalData.codeLink.trim() !== "" && (
              <a
                href={personalData.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-accent transition-colors group/btn"
              >
                <Github className="w-4 h-4" />
                <span className="uppercase text-xs tracking-wider">Code</span>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="min-h-screen py-20 border-t border-border/20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase tracking-tight pixel-text">
            SELECTED PROJECTS
          </h2>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="mb-12 bg-transparent border border-border/30 p-1 h-auto">
              <TabsTrigger
                value="projects"
                className="data-[state=active]:bg-foreground data-[state=active]:text-background uppercase text-xs tracking-wider px-6 py-2"
              >
                Projects
              </TabsTrigger>
              <TabsTrigger
                value="personal"
                className="data-[state=active]:bg-foreground data-[state=active]:text-background uppercase text-xs tracking-wider px-6 py-2"
              >
                Personal Projects
              </TabsTrigger>
            </TabsList>

            <TabsContent value="projects" className="mt-0">
              <div className="space-y-12 max-w-5xl">
                {projects.map((project, index) => (
                  <ProjectCard key={project.title} project={project} index={index} isPersonal={false} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="personal" className="mt-0">
              <div className="space-y-12 max-w-5xl">
                {personalProjects.map((project, index) => (
                  <ProjectCard key={project.title} project={project} index={index} isPersonal={true} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
