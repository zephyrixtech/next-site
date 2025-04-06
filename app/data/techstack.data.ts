export type ITechStack = { title: string; iconPath: string; technologies: string[] };
const techStackData: ITechStack[] = [
    {
      title: "Frontend",
      iconPath: "M4 6h16M4 12h16m-7 6h7",
      technologies: [
        "React.js",
        "Next.js",
        "TypeScript",
        "React Native",
        "Angular"
      ]
    },
    {
      title: "Backend",
      iconPath: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2",
      technologies: [
        "Node.js",
        "Express.js",
        "Firebase",
        "Python",
        "Supabase"
      ]
    }
  ];

  export default techStackData