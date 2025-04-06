export type IApproach = {
    title: string,
    icon: string,
    description: string,
    step: string
}
const approachData: IApproach[] = [
    {
      title: "Discovery & Planning",
      icon: "fa-lightbulb",
      description: "We start by understanding your vision, requirements, and business goals to create a comprehensive development strategy.",
      step: "01"
    },
    {
      title: "Design & Prototyping",
      icon: "fa-pencil-ruler",
      description: "Our designers create intuitive interfaces and engaging user experiences, with interactive prototypes for your feedback.",
      step: "02"
    },
    {
      title: "Development & Testing",
      icon: "fa-code",
      description: "We follow agile methodology, with regular testing and quality assurance throughout the development process.",
      step: "03"
    },
    {
      title: "Deployment & Support",
      icon: "fa-rocket",
      description: "After thorough testing, we deploy your solution and provide ongoing support and maintenance services.",
      step: "04"
    }
  ];

  export default approachData