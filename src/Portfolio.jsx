
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="bg-black text-white min-h-screen font-sans relative overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-br from-purple-900 via-black to-black opacity-30 z-0 transform -translate-y-1/5" style={{ backgroundAttachment: 'fixed' }} />

      {/* Hero Section */}
      <section className="text-center py-20 relative z-10">
        <motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-4xl md:text-6xl font-bold text-purple-400 mb-4">
          Aryan Shah
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-xl md:text-2xl">
          B.Tech in ECE | Robotics & Embedded Systems Enthusiast
        </motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-2">
          Frontend + Embedded + Satellite Systems + Robotics
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="mt-6">
          <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500">
              Get My Resume
            </Button>
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="max-w-3xl mx-auto text-center py-8">
        <h2 className="text-3xl font-semibold mb-4">From Debug to Liftoff</h2>
        <div className="mb-6 max-w-xl mx-auto">
          <p className="text-purple-400 italic text-center text-lg">“My code doesn’t crash, it just enters safe mode.”</p>
          <p className="text-purple-400 italic text-right text-sm mt-1 pr-4">~ Aryan, 2025</p>
        </div>
        <p className="text-lg text-gray-300">
          I’m Aryan, a robotics and space systems nerd powered by C++, curiosity, and a little caffeine. Whether it’s designing SDR comms for UAVs or stabilizing satellites with custom reaction wheels, I believe engineering should be as bold as the problems it solves.
          <br /><br />
          I’ve designed Mars rovers (on Earth... for now), launched micro-satellites, and turned complex electronics into practical, deployable systems. I love working where software and hardware collide and where the next great idea is just a bug fix away. Let’s build something that orbits, flies, or at least blinks an LED with purpose.
        </p>
      </motion.section>

      {/* Projects Section */}
      <section className="py-12 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {["UAS Control System", "Miniature Satellite", "FPGA-Based Target ID", "Autonomous 6-Wheeled Rover", "Satellite Attitude Control"].map((title, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} whileHover={{ scale: 1.05 }} transition={{ delay: i * 0.2 }} className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-purple-500/30">
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-gray-400 mt-2">Description coming soon.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Roles & Experience */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="text-center py-12">
        <h2 className="text-3xl font-semibold mb-8">Roles & Experience</h2>
        <div className="max-w-4xl mx-auto space-y-6 text-left">
          {[
            { title: "Systems Engineer & Payload Developer", org: "Team Dyaus", period: "Aug 2023 – Apr 2024", desc: "Built satellite payloads with reaction wheels and telemetry for autonomous flight." },
            { title: "Inhouse Intern", org: "Nirma University EC Dept", period: "May 2024 – Dec 2024", desc: "Implemented YOLO on PYNQ-Z2 FPGA for real-time, low-power object detection (5.7 FPS)." },
            { title: "Systems Engineer (Embedded & RF)", org: "Protthapan Technologies", period: "Dec 2024 – Present", desc: "Developed SDR analyzers, camera integration, GPS-steered antennas, and GCS UI." },
            { title: "Chairperson of the Board", org: "Tinkerers' Lab", period: "Sep 2023 – Jan 2025", desc: "Led a student lab, guided multidisciplinary projects from idea to prototype." },
          ].map((r, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: i%2===0?-50:50 }} whileInView={{ opacity:1, x:0 }} transition={{ duration:0.6, delay: i*0.2 }} className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-purple-500/30">
              <h3 className="text-xl font-semibold text-purple-400">{r.title}</h3>
              <p className="text-sm text-gray-400">{r.org} · {r.period}</p>
              <p className="text-gray-300 mt-2">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Tech Stack */}
      <motion.section initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:1 }} className="text-center py-12">
        <h2 className="text-3xl font-semibold mb-4">Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-gray-400">
          {["C/C++","Python","Verilog","ROS2","MATLAB","OpenCV","Vivado","STM32","Arduino","Raspberry Pi","Fusion 360","Robotics","Embedded Systems","Control Systems","RF Comm"].map((t,i)=>(
            <span key={i} className="bg-gray-800 px-3 py-1 rounded-full">{t}</span>
          ))}
        </div>
      </motion.section>

      {/* Contact */}
      <section className="text-center py-12">
        <h2 className="text-3xl font-semibold mb-4">Let’s Connect</h2>
        <div className="flex justify-center gap-6 text-blue-400">
          <a href="https://github.com/MaRcOsss1" target="_blank">GitHub</a>
          <a href="https://linkedin.com/in/aryan-shah-03b5b0229" target="_blank">LinkedIn</a>
          <a href="mailto:work.aryanshah16@gmail.com">Email</a>
        </div>
      </section>
    </div>
  );
}
