"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, ArrowRight, Code, Server, Shield, Database } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Cursor from "@/components/cursor"
import ProjectCard from "@/components/project-card"
import { useMobile } from "@/hooks/use-mobile"
import ParticlesBackground from "@/components/particles-background"

export default function Home() {
  const ref = useRef(null)
  const isMobile = useMobile()
  const [currentSection, setCurrentSection] = useState("hero")
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9])
  const y = useTransform(scrollYProgress, [0, 0.2], [0, 50])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "projects", "contact"]
      const scrollPosition = window.scrollY

      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const height = element.offsetHeight

          if (scrollPosition >= offsetTop - 200 && scrollPosition < offsetTop + height - 200) {
            setCurrentSection(section)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const projects = [
    {
      title: "Cloud Migration & Kubernetes Deployment",
      description:
        "Led the migration of on-premises applications to AWS cloud infrastructure using Terraform and implemented Kubernetes for container orchestration.",
      tags: ["AWS", "Terraform", "Kubernetes", "Docker", "CI/CD"],
      year: "2025",
      icon: <Server size={24} className="text-blue-400" />,
    },
    {
      title: "Automated CI/CD Pipeline",
      description:
        "Designed and implemented a fully automated CI/CD pipeline using Jenkins, GitLab CI, and ArgoCD for continuous deployment to Kubernetes clusters.",
      tags: ["Jenkins", "GitLab CI", "ArgoCD", "Kubernetes", "Automation"],
      year: "2024",
      icon: <Code size={24} className="text-green-400" />,
    },
    {
      title: "Enterprise Network Security Overhaul",
      description:
        "Redesigned network security architecture with advanced firewall configurations, VPN solutions, and implemented zero-trust security principles.",
      tags: ["Network Security", "FortiGate", "VPN", "Zero-Trust", "MikroTik"],
      year: "2023",
      icon: <Shield size={24} className="text-purple-400" />,
    },
  ]

  const skillCategories = [
    {
      title: "DevOps & Cloud",
      icon: <Server className="w-10 h-10 mb-4 text-blue-400" />,
      skills: ["Kubernetes", "Docker", "Terraform", "AWS", "CI/CD", "GitLab"],
    },
    {
      title: "Security & Networking",
      icon: <Shield className="w-10 h-10 mb-4 text-purple-400" />,
      skills: ["MikroTik", "FortiGate", "VPN", "Firewalls", "Zero Trust", "Cisco"],
    },
    {
      title: "Infrastructure & Data",
      icon: <Database className="w-10 h-10 mb-4 text-green-400" />,
      skills: ["Linux", "Ansible", "Monitoring", "Backup", "Proxmox", "Virtualization"],
    },
  ]

  const workHistory = [
    {
      title: "IT & Infrastructure Engineer",
      company: "Zarrin Pal Group",
      location: "Tehran, Tehran Province, Iran",
      period: "Aug 2025 - Present",
      type: "Full-time",
      description:
        "As an IT & Infrastructure Engineer at Zarrin Pal Group, I'm responsible for designing, implementing, and maintaining robust IT infrastructure solutions. My role involves managing cloud resources, optimizing network architecture, implementing security protocols, and ensuring high availability of critical systems. I collaborate with cross-functional teams to align infrastructure with business objectives and implement best practices for system reliability and scalability.",
    },
    {
      title: "Junior DevOps Engineer",
      company: "AMIR",
      location: "Tehran, Tehran Province, Iran",
      period: "Jul 2024 - Jul 2025",
      type: "Full-time",
      description:
        "As a Junior DevOps Engineer, I was instrumental in implementing and maintaining CI/CD pipelines, optimizing cloud infrastructure, and enhancing system reliability. My role involved collaborating with development teams to streamline deployment processes and improve overall operational efficiency.",
    },
    {
      title: "IT Specialist",
      company: "Pishgaman Shabake Arad",
      location: "Tehran, Tehran Province, Iran",
      period: "2019 - Jul 2023",
      type: "Full-time",
      description:
        "In my role as an IT Specialist, I was responsible for managing and maintaining the company's IT infrastructure. This included overseeing network security, implementing backup solutions, and providing technical support to ensure smooth operations across all departments.",
    },
    {
      title: "IT Project Manager",
      company: "Hani Motors (Thailand) Co Ltd",
      location: "Tehran, Tehran Province, Iran",
      period: "Jan 2021 - Jan 2022",
      type: "Part-time",
      description:
        "As an IT Project Manager, I led cross-functional teams in implementing new IT solutions. My responsibilities included project planning, resource allocation, and ensuring timely delivery of IT projects that aligned with business objectives.",
    },
    {
      title: "IT Specialist",
      company: "Adib Carpet",
      location: "Tehran, Tehran Province, Iran",
      period: "May 2016 - May 2019",
      type: "Full-time",
      description:
        "In this role, I was responsible for maintaining the company's IT systems, troubleshooting hardware and software issues, and implementing new technologies to improve business processes. I also played a key role in enhancing the company's network security and data management practices.",
    },
  ]

  const certificates = [
    {
      title: "Associate DevOps Engineer",
      issuer: "Arvan Academy",
      date: "Issued Mar 2025",
      id: "ID 6893",
      color: "from-cyan-500 to-blue-600",
    },
    {
      title: "Foundational Cloud Practitioner",
      issuer: "Arvan Academy",
      date: "Issued Jan 2025",
      id: "ID 1347",
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "CompTIA A+",
      issuer: "CanDo",
      date: "Issued Jul 2019 · Expired Sep 2019",
      id: "ID 98/25973",
      color: "from-purple-500 to-violet-600",
    },
    {
      title: "MikroTik Certified Network Associate",
      issuer: "CanDo",
      date: "Issued May 2019 · Expired Aug 2019",
      id: "ID 98/25371",
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "CompTIA Network+",
      issuer: "CanDo",
      date: "Issued Mar 2017 · Expired May 2017",
      id: "ID 96/15612",
      color: "from-red-500 to-pink-600",
    },
    {
      title: "DevOps Beginners",
      issuer: "CanDo",
      date: "Issued May 2024 · Expires Nov 2024",
      id: "ID 03/10636",
      color: "from-yellow-500 to-orange-600",
    },
    {
      title: "Certified Project Management Associate",
      issuer: "Karokasb",
      date: "Issued May 2024 · Expires Jul 2024",
      id: "ID 03/12345",
      color: "from-teal-500 to-cyan-600",
    },
    {
      title: "Cisco Certified Network Associate (CCNA)",
      issuer: "CanDo",
      date: "Issued Sep 2019 · Expired Sep 2022",
      id: "ID 99/28456",
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "Microsoft Certified Solutions Associate (MCSA)",
      issuer: "CanDo",
      date: "Issued Nov 2019 · Expired Nov 2022",
      id: "ID 99/30124",
      color: "from-blue-500 to-purple-600",
    },
  ]

  return (
    <>
      <Cursor />
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50">
        <div
          className="noise-bg absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <main className="bg-[#121212] text-white" ref={ref}>
        <Navbar currentSection={currentSection} />

        {/* Hero Section */}
        <section id="hero" className="h-screen flex items-center relative overflow-hidden">
          <ParticlesBackground />
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-[120px] animate-pulse"></div>
            <div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-[120px] animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>

          <div className="container mx-auto px-4 md:px-12 lg:px-24 relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              style={{ opacity, scale, y }}
              className="max-w-4xl"
            >
              <motion.h1
                className="text-5xl md:text-7xl font-light mb-6 tracking-tight font-playfair"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <span className="inline-block">Mohammad</span>{" "}
                <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 animate-gradient-text">
                  Sepehri Nia
                </span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl mb-8 font-light text-[#e0e0e0] max-w-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <span className="inline-block">DevOps Engineer</span> <span className="inline-block">|</span>{" "}
                <span className="inline-block">IT Infrastructure Specialist</span>
              </motion.p>

              <div className="flex flex-wrap gap-4 text-[#a0a0a0]">
                <motion.span
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  📍 Tehran, Iran
                </motion.span>
                <motion.span
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                >
                  📧 ads.sepehr@gmail.com
                </motion.span>
                <motion.span
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                >
                  🔗 LinkedIn
                </motion.span>
              </div>

              <motion.div
                className="flex items-center mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.8 }}
              >
                <a
                  href="#about"
                  className="group flex items-center text-lg border-b border-white pb-1 transition-all duration-300 hover:pr-4"
                >
                  <span className="relative overflow-hidden inline-block">
                    <span className="relative z-10">Discover more</span>
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-cyan-500 to-blue-600 group-hover:w-full transition-all duration-300"></span>
                  </span>
                  <ArrowRight size={18} className="ml-2 transition-all duration-300 group-hover:ml-4" />
                </a>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <a href="#about" className="text-white">
              <ArrowDown size={24} />
            </a>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 md:py-32 bg-[#1a1a1a] relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-[100px]"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500 rounded-full filter blur-[120px]"></div>
          </div>

          <div className="container mx-auto px-4 md:px-12 lg:px-24 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center"
            >
              <div className="order-2 md:order-1">
                <motion.h2
                  className="text-3xl md:text-4xl font-light mb-8 tracking-tight"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  About Me
                </motion.h2>
                <motion.p
                  className="text-lg mb-6 text-[#e0e0e0] leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Results-driven IT Infrastructure & DevOps Specialist with over 6 years of experience in network
                  administration, IT operations, and cloud infrastructure.
                </motion.p>
                <motion.p
                  className="text-lg mb-6 text-[#e0e0e0] leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Expertise in automating deployments, optimizing system performance, and ensuring enterprise-grade
                  security. Proficient in CI/CD pipelines, containerization (Docker, Kubernetes), Infrastructure as Code
                  (Terraform, Ansible), and cloud computing (AWS, GCP, Azure).
                </motion.p>
                <motion.p
                  className="text-lg mb-8 text-[#e0e0e0] leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Passionate about scalability, automation, and reliability engineering.
                </motion.p>
                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <a
                    href="#experience"
                    className="group flex items-center text-lg border-b border-white pb-1 transition-all duration-300 hover:pr-4"
                  >
                    View my experience
                    <ArrowRight size={18} className="ml-2 transition-all duration-300 group-hover:ml-4" />
                  </a>
                </motion.div>
              </div>
              <div className="order-1 md:order-2 relative">
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-30 blur-md"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.3 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                ></motion.div>
                <motion.div
                  className="aspect-[3/4] overflow-hidden relative rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7825.jpg-bpZSJnAVc6jjitjZ7vJf9XRkus4Nbj.jpeg"
                    alt="Mohammad Sepehri Nia"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Skills Section */}
            <div className="mt-24">
              <motion.h3
                className="text-2xl font-light mb-12 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Core Expertise
              </motion.h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {skillCategories.map((category, index) => (
                  <motion.div
                    key={index}
                    className="bg-[#232323] p-6 rounded-lg border border-[#333333] hover:border-[#555555] transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <div className="flex flex-col items-center text-center">
                      {category.icon}
                      <h4 className="text-xl font-medium mb-4">{category.title}</h4>
                      <div className="flex flex-wrap justify-center gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="text-sm bg-[#2a2a2a] text-[#e0e0e0] px-3 py-1 rounded-full hover:bg-[#333333] transition-colors duration-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 md:py-32 bg-[#121212]">
          <div className="container mx-auto px-4 md:px-12 lg:px-24">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h2
                className="text-3xl md:text-4xl font-light mb-16 tracking-tight"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Experience
              </motion.h2>

              <div className="space-y-16 relative">
                {/* Timeline line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/80 via-purple-500/50 to-transparent transform md:-translate-x-1/2 hidden md:block"></div>

                {workHistory.map((job, index) => (
                  <motion.div
                    key={index}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="md:text-right md:pr-12">
                      <div className="hidden md:block absolute right-0 top-0 w-3 h-3 rounded-full bg-cyan-500 transform translate-x-1.5 md:translate-x-6"></div>
                      <p className="text-[#a0a0a0] mb-2">{job.period}</p>
                      <h3 className="text-xl font-medium mb-2">{job.title}</h3>
                      <p className="text-lg mb-4 text-cyan-400">{job.company}</p>
                      <p className="text-[#a0a0a0]">{job.type}</p>
                    </div>
                    <div className="md:pl-12">
                      <p className="text-[#e0e0e0] mb-4">{job.location}</p>
                      <p className="text-[#e0e0e0]">{job.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certificates Section */}
            <motion.div
              className="mt-16 pt-16 border-t border-[#333333]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-light mb-12 text-center">Professional Certifications</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {certificates.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="bg-[#1e1e1e] rounded-lg border border-[#333333] overflow-hidden group hover:border-cyan-500 transition-all duration-500"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
                  >
                    <div className={`h-2 bg-gradient-to-r ${cert.color}`}></div>
                    <div className="p-6">
                      <div className="flex flex-col h-full">
                        <h4 className="text-xl font-medium mb-2">{cert.title}</h4>
                        <p className="text-[#a0a0a0] mb-2">{cert.issuer}</p>
                        <div className="mt-auto pt-4">
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-cyan-400">{cert.date}</span>
                            <span className="text-[#a0a0a0]">{cert.id}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 md:py-32 bg-[#1a1a1a] relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500 rounded-full filter blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500 rounded-full filter blur-[120px]"></div>
          </div>

          <div className="container mx-auto px-4 md:px-12 lg:px-24 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h2
                className="text-3xl md:text-4xl font-light mb-16 tracking-tight"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Projects
              </motion.h2>

              <div className="grid grid-cols-1 gap-16">
                {projects.map((project, index) => (
                  <ProjectCard key={index} project={project} index={index} />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 md:py-32 bg-[#121212] relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500 rounded-full filter blur-[100px]"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500 rounded-full filter blur-[120px]"></div>
          </div>

          <div className="container mx-auto px-4 md:px-12 lg:px-24 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start"
            >
              <div>
                <motion.h2
                  className="text-3xl md:text-4xl font-light mb-8 tracking-tight"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  Contact
                </motion.h2>
                <motion.p
                  className="text-lg mb-12 text-[#e0e0e0] leading-relaxed max-w-md"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Interested in working together? Feel free to reach out through any of the following channels.
                </motion.p>

                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-lg font-medium mb-2">Email</h3>
                    <a
                      href="mailto:ads.sepehr@gmail.com"
                      className="text-lg text-[#e0e0e0] hover:text-white transition-colors group flex items-center"
                    >
                      <span className="border-b border-transparent group-hover:border-white pb-px">
                        ads.sepehr@gmail.com
                      </span>
                    </a>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-lg font-medium mb-2">Phone</h3>
                    <a
                      href="tel:+989303042965"
                      className="text-lg text-[#e0e0e0] hover:text-white transition-colors group flex items-center"
                    >
                      <span className="border-b border-transparent group-hover:border-white pb-px">
                        +98 930 304 2965
                      </span>
                    </a>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-lg font-medium mb-2">LinkedIn</h3>
                    <a
                      href="https://linkedin.com/in/mohammadsepehrinia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-[#e0e0e0] hover:text-white transition-colors group flex items-center"
                    >
                      <span className="border-b border-transparent group-hover:border-white pb-px">
                        linkedin.com/in/mohammadsepehrinia
                      </span>
                    </a>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-lg font-medium mb-2">Location</h3>
                    <p className="text-lg text-[#e0e0e0]">Tehran, Iran</p>
                  </motion.div>
                </div>
              </div>

              <div className="relative">
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-lg opacity-30 blur-md"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.3 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                ></motion.div>
                <motion.div
                  className="aspect-square overflow-hidden relative rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7335.jpg-a61mykm8sqN5VBTOtIFezWmw2EUyiP.jpeg"
                    alt="Mohammad Sepehri Nia"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
