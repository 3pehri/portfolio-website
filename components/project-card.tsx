"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import type React from "react"

interface ProjectProps {
  project: {
    title: string
    description: string
    tags: string[]
    year: string
    icon?: React.ReactNode
  }
  index: number
}

export default function ProjectCard({ project, index }: ProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      className="group relative"
      whileHover={{ y: -5 }}
    >
      {/* Enhanced hover glow effect */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-cyan-500/0 rounded-lg opacity-0 group-hover:opacity-20 blur-md transition-all duration-500"></div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-start relative bg-[#1e1e1e] p-6 rounded-lg border border-[#333333] group-hover:border-[#444444] transition-all duration-300 overflow-hidden">
        {/* Background gradient that appears on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="md:col-span-1 relative z-10">
          <div className="flex flex-col items-start">
            <div className="mb-3 transform group-hover:scale-110 transition-transform duration-300">{project.icon}</div>
            <p className="text-[#a0a0a0]">{project.year}</p>
          </div>
        </div>
        <div className="md:col-span-4 relative z-10">
          <h3 className="text-xl font-medium mb-3 group-hover:text-blue-400 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-lg mb-4 text-[#e0e0e0]">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-6 transition-all duration-300">
            {project.tags.map((tag, tagIndex) => (
              <motion.span
                key={tagIndex}
                className="text-xs bg-[#2a2a2a] text-[#e0e0e0] px-3 py-1 rounded-full group-hover:bg-[#333333] transition-colors duration-300 hover:bg-blue-500/20 hover:text-white"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 * tagIndex }}
                viewport={{ once: true }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
          <a
            href="#"
            className="group/link flex items-center text-white hover:text-blue-400 transition-all duration-300 relative"
          >
            <span className="relative overflow-hidden inline-block">
              <span className="relative z-10">View project</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-blue-400 group-hover/link:w-full transition-all duration-300"></span>
            </span>
            <ArrowRight size={16} className="ml-2 transition-all duration-300 group-hover/link:ml-3" />
          </a>
        </div>
      </div>
    </motion.div>
  )
}
