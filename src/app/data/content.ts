export type Project = {
  title: string;
  type: string;
  image: string;
  fallbackImage: string;
  demoLink?: string;
};

export type TeamMember = {
  name: string;
  role: string;
  image: string;
};

export const projects: Project[] = [
  {
    title: "Neural Dashboard",
    type: "Data Platform",
    image: "/images/works/neural-dashboard.jpg",
    fallbackImage:
      "https://images.unsplash.com/photo-1773901211009-e7023520a839?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    title: "Quantum ERP",
    type: "Enterprise System",
    image: "/images/works/quantum-erp.jpg",
    fallbackImage:
      "https://images.unsplash.com/photo-1725859177379-a0be49d3eba7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    title: "Nexus Workflow",
    type: "Automation",
    image: "/images/works/nexus-workflow.jpg",
    fallbackImage:
      "https://images.unsplash.com/photo-1772992552302-825bb23ffb1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    title: "Apex Intelligence",
    type: "AI Integration",
    image: "/images/works/apex-intelligence.jpg",
    fallbackImage:
      "https://images.unsplash.com/photo-1625908921137-2bc2b356d8be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
];

export const mainTeam: TeamMember[] = [
  {
    name: "SREYAS",
    role: "Founder / Systems Architect",
    image: "/images/team/sreyas.png",
  },
  {
    name: "ANSHAD",
    role: "Full Stack Developer",
    image: "/images/team/anshad.png",
  },
  {
    name: "SREERAG",
    role: "Backend Engineer",
    image: "/images/team/sreerag.jpg",
  },
  {
    name: "HASHIR",
    role: "Creative Developer",
    image: "/images/team/hashir.jpg",
  },
];
