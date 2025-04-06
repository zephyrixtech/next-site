import { ITeamMember } from '@/app/data/team.data'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const TeamCard = ({ member }: { member: ITeamMember }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="team-member relative z-40"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div 
        className="member-card bg-white p-6 rounded-xl relative overflow-hidden"
        animate={{
          boxShadow: isHovered 
            ? '0 15px 30px var(--shadow-color)' 
            : '0 0 10px var(--shadow-color)'
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Decorative background elements */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--primary-teal)] to-[var(--accent-green)]"
          animate={{
            opacity: isHovered ? 1 : 0.7
          }}
        />
        
        {/* Profile image with consistent dimensions */}
        <div className="relative mb-5 mx-auto w-24 h-24">
          <motion.div 
            className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--primary-teal)] to-[var(--accent-green)] p-0.5"
            animate={{
              opacity: isHovered ? 1 : 0.8
            }}
          >
            <div className="bg-white rounded-full p-0.5 h-full w-full">
              <Image 
                src={member.image} 
                alt={`${member.name} profile picture`}
                className="w-full h-full rounded-full object-cover" 
              />
            </div>
          </motion.div>
        </div>

        {/* Member details with staggered animations */}
        <motion.div className="member-details text-center relative z-10">
          <motion.h3 
            className="text-xl font-bold text-[var(--black)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {member.name}
          </motion.h3>
          
          <motion.p
            className="text-[var(--gray)] mt-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {member.role}
          </motion.p>
          
          <motion.div 
            className="social-icons flex justify-center gap-3 mt-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.a 
              href={member.linkedin}
              className="social-icon w-10 h-10 rounded-full flex items-center justify-center bg-[var(--light-gray)] text-[var(--primary-teal)]"
              whileHover={{ 
                scale: 1.1,
                backgroundColor: 'var(--primary-teal)',
                color: 'var(--white)'
              }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </motion.a>
            
            <motion.a 
              href={member.instagram}
              className="social-icon w-10 h-10 rounded-full flex items-center justify-center bg-[var(--light-gray)] text-[var(--primary-teal)]"
              whileHover={{ 
                scale: 1.1,
                backgroundColor: 'var(--primary-teal)',
                color: 'var(--white)'
              }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"/>
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default TeamCard