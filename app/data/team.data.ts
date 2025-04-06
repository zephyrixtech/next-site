
import fasil from '../../public/logo/fasil.jpeg'
import vijay from '../../public/logo/vijay.jpg'
import henna from '../../public/logo/henna.jpg'
import pranav from '../../public/logo/pranav.jpg'
import akash from '../../public/logo/akash.jpeg'
import { StaticImageData } from 'next/image'

export type ITeamMember = {
    name: string;
    role: string;
    image: StaticImageData;
    linkedin: string;
    email: string;
    instagram: string;
}

const teamMembers: ITeamMember[] = [
    {
      name: "Fasil M",
      role: "MD - Co-Founder",
      image: fasil, // imported image
      linkedin: "https://www.linkedin.com/in/fasil-m/",
      email: "mailto:fasilm5171@gmail.com",
      instagram: "#",
    },
    {
      name: "Henna Maria",
      role: "CTO - Co-Founder",
      image: henna, // imported image
      linkedin: "#",
      email: "#",
      instagram: "#",
    },
    {
      name: "Vijay Krishna",
      role: "CMO",
      image: vijay,
      linkedin: "#",
      email: "#",
      instagram: "#",
    },
    {
      name: "Akash A",
      role: "Digital Marketing Specialist",
      image: akash,
      linkedin: "#",
      email: "mailto:akashashokan812@gmail.com",
      instagram: "#",
    },
    {
      name: "Pranav Kumar",
      role: "UI/UX Designer",
      image: pranav,
      linkedin: "https://www.linkedin.com/in/pranav-kumar",
      email: "#",
      instagram: "https://www.instagram.com/pranav.designs",
    },
  ];
  
  export default teamMembers;