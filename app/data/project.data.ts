import { StaticImageData } from "next/image";
import movieTickerBookingApp from '../../public/logo/Cream Brown Promotion Flyer Buy 1 Get 1 Sale Instagram Post_20250306_124114_0000.png'
import Ecommerce from '../../public/logo/Black Yellow Bold Minimalist Technology Expo Event Poster_20250314_225624_0000.png'

export type IProject = {
    title: string,
    image: StaticImageData | string,
    description: string,
    features: string[],
    badge?: string,
    badgeColor?: string
}
const projectsData: IProject[] = [
    {
      title: 'ERP System',
      image: '/assets/mern-development.jpg',
      description: 'Comprehensive Enterprise Resource Planning solution for streamlined business operations.',
      features: [
        'Resource Management',
        'Inventory Control',
        'Business Analytics'
      ],
      badge: 'Featured',
      badgeColor: 'bg-[var(--primary-teal)]'
    },
    {
      title: 'Movie Ticket Booking',
      image: movieTickerBookingApp,
      description: 'Advanced movie ticket booking platform with real-time seat selection.',
      features: [
        'Seat Selection',
        'Multiple Theaters',
        'Secure Payments'
      ],
      badge: 'New',
      badgeColor: 'bg-[var(--accent-green)]'
    },
    {
      title: 'Ecommerce Application',
      image: Ecommerce,
      description: 'Feature-rich ecommerce platform with secure checkout capabilities.',
      features: [
        'Product Management',
        'Secure Checkout',
        'Order Tracking'
      ]
    }
  ];

  export default projectsData