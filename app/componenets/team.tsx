"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Filter, Users } from "lucide-react";
import localFont from "next/font/local";
import { motion, AnimatePresence } from "framer-motion";
import TiltedInfoCard from "./TiltedInfoCard";

const Hacked_KerX = localFont({
  src: "../../public/fonts/Hacked-KerX.ttf",
  variable: "--custom-font",
  fallback: ["monospace", "sans-serif"],
});

interface TeamMember {
  name: string;
  batch: string;
  imgSrc: string;
}

const teamMembers: TeamMember[] = [

  {
    name: "Tanishq Verma",
    batch: "2022",
    imgSrc:
        "https://res.cloudinary.com/dnbf0uwku/image/upload/v1726945246/IMG_20240414_053937_668_nbxfaq.jpg",
  },
  {
    name: "Krishna Narzary",
    batch: "2022",
    imgSrc:
        "https://res.cloudinary.com/dvnrlqqpq/image/upload/v1728579687/krishna_zp05q6.jpg",
  },
  {
    name: "Tanishq Chauhan",
    batch: "2022",
    imgSrc:
        "https://res.cloudinary.com/dnbf0uwku/image/upload/v1726945307/IMG_20231001_124926_evwtzl.jpg",
  },
  {
    name: "Shryansh",
    batch: "2022",
    imgSrc:
        "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738136152/csec_shry_kwh5tn.jpg",
  },
  {
    name: "Harshal",
    batch: "2022",
    imgSrc:
        "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738079965/Harshal_1_ljrjiy.jpg",
  },
  {
    name: "Kirti Sharma",
    batch: "2022",
    imgSrc:
        "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738080065/IMG-20241110-WA0018_1_anaulw.jpg",
  },
  {
    name: "Arshita",
    batch: "2022",
    imgSrc:
        "https://res.cloudinary.com/dnbf0uwku/image/upload/v1726945377/IMG_20240920_223145_tc4rbp.jpg",
  },
  {
    name: "Prince Jaiswal",
    batch: "2022",
    imgSrc:
        "https://res.cloudinary.com/dnbf0uwku/image/upload/v1726945441/IMG_20230720_192947_flr5wg.jpg",
  },
  {
    name: "Aditya Kumar",
    batch: "2022",
    imgSrc:
        "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738080338/IMG_0237_beywm0.jpg",
  },
  {
    name: "Tanmay Sharma",
    batch: "2022",
    imgSrc:
        "https://res.cloudinary.com/dnif0edly/image/upload/v1728535568/IMG-20240307-WA0033_mfojpp.jpg",
  },
  {
    name: "Ankush Thakur",
    batch: "2022",
    imgSrc:
        "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738080439/IMG_20240720_122823_ikkncj.jpg",
  },
  {
    name: "Arnav Gupta",
    batch: "2022",
    imgSrc:
        "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738080697/e6a54564-6a33-48e1-ac19-e847758fd349_hqfhh8.jpg",
  },
  {
    name: "Avinash Sharma",
    batch: "2022",
    imgSrc:
        "https://res.cloudinary.com/dnbf0uwku/image/upload/v1739191084/AVIN_exe_uu0yqx_k2wamg.webp",
  },
  {
    name: "Himanshu Gupta",
    batch: "2022",
    imgSrc:
        "https://res.cloudinary.com/dvnrlqqpq/image/upload/v1739194635/WhatsApp_Image_2025-02-10_at_18.19.54_eddb4d72_dah6jq.jpg",
  },
  {
    name: "Akash Kanwar",
    batch: "2022",
    imgSrc:
        "https://res.cloudinary.com/dvnrlqqpq/image/upload/v1739960542/akash_bqdy3d.jpg",
  },

  {
    name: "Isha",
    batch: "2023",
    imgSrc:
        "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738080640/IMG_5198_xz4pzl.jpg",
  },
  {
    name: "Chhavi Thakur",
    batch: "2023",
    imgSrc:
        "https://res.cloudinary.com/dnbf0uwku/image/upload/v1726944805/IMG-20240308-WA0077_nq107z.jpg",
  },
  {
    name: "Lakshay Lalia",
    batch: "2023",
    imgSrc:
        "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738080749/IMG_20241101_171749_392_auyw2u.jpg",
  },
  {
    name: "Saksham Chhabra",
    batch: "2023",
    imgSrc:
        "https://res.cloudinary.com/dnbf0uwku/image/upload/v1741525859/IMG-20240323-WA0015_dcsbh7_exdrze.jpg",
  },
  {
    name: "Navdeep Singh",
    batch: "2023",
    imgSrc:
        "https://res.cloudinary.com/dnbf0uwku/image/upload/v1726944985/IMG_4625-1_xkfqoy.jpg",
  },
  {
    name: "Piyush",
    batch: "2023",
    imgSrc:
        "https://res.cloudinary.com/dnbf0uwku/image/upload/v1726945016/24-09-20_14-31-12-521_nop1fo.jpg",
  },
  {
    name: "Prince Khandelwal",
    batch: "2023",
    imgSrc:
        "https://res.cloudinary.com/dnbf0uwku/image/upload/v1726945058/IMG-20240920-WA0013_l6p9tg.jpg",
  },
  {
    name: "Piyush Mishra",
    batch: "2023",
    imgSrc:
        "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738138149/IMG-20250112-WA0084_akkh6m.jpg",
  },
  {
    name: "Ayush Sharma",
    batch: "2023",
    imgSrc:
        "https://res.cloudinary.com/dnbf0uwku/image/upload/v1726945095/IMG-20240513-WA0233_jgmvog.jpg",
  },
  {
    name: "Avirat Mahajan",
    batch: "2023",
    imgSrc:
        "https://res.cloudinary.com/dnbf0uwku/image/upload/v1726945139/IMG-20240410-WA0016_eow17z.jpg",
  },
  {
    name: "Vansh Pal",
    batch: "2023",
    imgSrc:
        "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738080858/WIN_20240415_20_11_54_Pro_zw1squ.jpg",
  },
  {
    name: "Sujal Choudhary",
    batch: "2023",
    imgSrc:
        "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738091293/sujal_sosrec_ghouip.jpg",
  },
  {
    name: "Anshuman Kapoor",
    batch: "2023",
    imgSrc:
        "https://res.cloudinary.com/dvnrlqqpq/image/upload/v1728535411/anshuman_ugy7ne.jpg",
  },
  {
    name: "Abhay Chaudhary",
    batch: "2023",
    imgSrc:
        "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738081032/IMG-20240920-WA0002_kxrj0r.jpg",
  },
  {
    name: "Aanya Soni",
    batch: "2023",
    imgSrc:
        "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738082046/IMG_5200_uwq9wi.jpg",
  },
  {
    name: "Himanshu Mahajan",
    batch: "2023",
    imgSrc:
        "https://res.cloudinary.com/dnbf0uwku/image/upload/v1726945205/formal_oi5vpb.jpg",
  },
  {
    name: "Ishan Choudhary",
    batch: "2023",
    imgSrc:
        "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738082088/IMG_20240921_005315_qwh3dd.jpg",
  },
  {
    name: "Harsh Goel",
    batch: "2023",
    imgSrc:
        "https://res.cloudinary.com/dvnrlqqpq/image/upload/v1731838897/WhatsApp_Image_2024-11-17_at_15.51.00_2b583045_kqcd5x.jpg",
  },
  {
    name: "pratyush pragyey",
    batch: "2023",
    imgSrc:
        "https://res.cloudinary.com/dvnrlqqpq/image/upload/v1721114549/rptdgsgi7qzijyojnja0.jpg",
  },
  {
    name: "Rudesh Kumar",
    batch: "2023",
    imgSrc:
        "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738082144/photo_k91tqe.jpg",
  },

  {
    name: "Lavish",
    batch: "2024",
    imgSrc:
        "https://res.cloudinary.com/duezus2xn/image/upload/v1738075460/lavish_mupjh3.jpg",
  },
  {
    name: "Prashant Thakur",
    batch: "2024",
    imgSrc:
        "https://res.cloudinary.com/duezus2xn/image/upload/v1738075650/prashant_2_vsdpsb.jpg",
  },
  {
    name: "Aryan Sharma",
    batch: "2024",
    imgSrc:
        "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738087174/IMG_20241120_152145246_HDR_pavhc9.jpg",
  },
  {
    name: "Sanket Singh Sameer",
    batch: "2024",
    imgSrc:
        "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738087686/1000156654-01_ridyfs.jpg",
  },
  {
    name: "Raman Bansal",
    batch: "2024",
    imgSrc:
        "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738088074/profile_badm2f.jpg",
  },
  {
    name: "Utkarsh Shukla",
    batch: "2024",
    imgSrc:
        "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738088144/IMG-20241220-WA0110_qptedf.jpg",
  },
  {
    name: "Anshu Kumari",
    batch: "2024",
    imgSrc:
        "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738134087/IMG_20250128_201927_kwt4vg.jpg",
  },
  {
    name: "Avadhi",
    batch: "2024",
    imgSrc:
        "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738134129/20250128_204711_h36r6t.jpg",
  },
  {
    name: "Anilove",
    batch: "2024",
    imgSrc:
        "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738088682/IMG20241110215944_qx4ejt.jpg",
  },
  {
    name: "Bhola Prasad Sah",
    batch: "2024",
    imgSrc:
        "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738088411/1738076772514_ql73vg.jpg",
  },
  {
    name: "Tanmay Singh",
    batch: "2024",
    imgSrc:
        "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738088737/IMG-20240919-WA0001_s3wwhi.jpg",
  },
  {
    name: "Chetna Singh",
    batch: "2024",
    imgSrc:
        "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738134304/c823d071-af30-45a7-9182-a85015e0cb33_fn17g3.jpg",
  },
];

const batchThemes: Record<string, { accent: string; secondary: string; fileLabel: string }> = {
  "2022": { accent: "#ff2a85", secondary: "#00ffff", fileLabel: "SENIOR_EXEC" },
  "2023": { accent: "#00ffff", secondary: "#ff2a85", fileLabel: "CORE_LEAD" },
  "2024": { accent: "#b967ff", secondary: "#00ffff", fileLabel: "DEV_OPERATIVE" },
  "2025": { accent: "#ffd319", secondary: "#ff2a85", fileLabel: "JUNIOR_ENG" },
};

function MemberCard({ member, index }: { member: TeamMember; index: number }) {
  const theme = batchThemes[member.batch] || { accent: "#00ffff", secondary: "#ff2a85", fileLabel: "MEMBER" };

  return (
      <TiltedInfoCard rotateAmplitude={12} scaleOnHover={1.04} className="h-full">
        <div
            className="group relative flex flex-col h-full border-2 border-[#292929] bg-[#f2f2f2] overflow-hidden select-none transition-all duration-300"
            style={{
              boxShadow: `6px 6px 0px ${theme.accent}, -2px -2px 0px ${theme.secondary}`,
            }}
        >

          <div
              className="flex h-9 items-center justify-between border-b-2 border-[#292929] px-2.5 select-none"
              style={{
                background: `linear-gradient(90deg, ${theme.accent} 0%, #ffffff 100%)`,
              }}
          >
            <div className="flex items-center gap-1.5 min-w-0">
              <span className="h-2.5 w-2.5 border border-[#333] bg-[#8a2be2] inline-block shrink-0" />
              <span className="font-mono text-[10px] font-black uppercase tracking-wider text-[#1e1e2f] truncate">
              {theme.fileLabel}_{String(index + 1).padStart(2, "0")}.EXE
            </span>
            </div>

            <div className="flex items-center gap-1 shrink-0 ml-2">
              <div className="flex h-4 w-4 items-center justify-center border border-[#555] bg-[#eeeeee] text-[8px] font-bold text-black">
                _
              </div>
              <div className="flex h-4 w-4 items-center justify-center border border-[#555] bg-[#eeeeee] text-[8px] font-bold text-black">
                □
              </div>
              <div
                  className="flex h-4 w-4 items-center justify-center border border-[#555] text-[8px] font-extrabold text-white"
                  style={{ backgroundColor: theme.accent }}
              >
                ×
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#1e1e2f] p-2">
            <div className="relative w-full h-full overflow-hidden border border-[#292929]">
              <img
                  src={member.imgSrc || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-500"
                  loading="lazy"
              />
              <div
                  className="pointer-events-none absolute inset-0 opacity-15"
                  style={{
                    backgroundImage: "repeating-linear-gradient(to bottom, transparent 0px, transparent 2px, rgba(0,0,0,0.8) 3px)",
                  }}
              />
            </div>
          </div>

          <div className="p-3 bg-[#eeeeee] border-t-2 border-[#292929] flex flex-col justify-between flex-1">
            <div className="mb-2">
              <h3 className="font-mono text-sm sm:text-base font-black text-[#1e1e2f] uppercase tracking-tight truncate">
                {member.name}
              </h3>
              <p
                  className="font-mono text-[11px] font-bold uppercase tracking-widest"
                  style={{ color: theme.accent }}
              >
                BATCH OF {member.batch}
              </p>
            </div>

            <div className="pt-2 border-t border-[#d0d0d8] flex items-center justify-between text-[10px] font-mono text-[#555]">
              <span>STATUS: ACTIVE</span>
              <span className="text-[#00c2cb] font-bold">ONLINE</span>
            </div>
          </div>
        </div>
      </TiltedInfoCard>
  );
}

export default function TeamSection() {
  const [selectedYear, setSelectedYear] = useState<string>("all");

  const yearFilters = useMemo(() => {
    return [
      { label: "ALL", value: "all", count: teamMembers.length },
      { label: "2022", value: "2022", count: teamMembers.filter((m) => m.batch === "2022").length },
      { label: "2023", value: "2023", count: teamMembers.filter((m) => m.batch === "2023").length },
      { label: "2024", value: "2024", count: teamMembers.filter((m) => m.batch === "2024").length },
    ];
  }, []);

  const filteredMembers = useMemo(() => {
    if (selectedYear === "all") return teamMembers;
    return teamMembers.filter((member) => member.batch === selectedYear);
  }, [selectedYear]);

  return (
      <section id="team" className="relative z-10 min-h-screen py-24 px-4 sm:px-6">
        <div className="container relative mx-auto max-w-7xl">

          <div className="mb-14 text-center">
            <div className="mx-auto mb-6 inline-flex items-center gap-2 border-2 border-[#333] bg-white px-5 py-2 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#333] shadow-[5px_5px_0_#ff1493]">
              <span className="h-3 w-3 border border-[#333] bg-[#8a2be2]" />
              SYSTEM_DIRECTORY:
            </div>

            <h2
                className={`mb-4 text-4xl sm:text-5xl md:text-6xl text-white drop-shadow-[4px_4px_0_#8a2be2] ${Hacked_KerX.className}`}
            >
              Team <span className="text-[#ff1493]">CSEC</span>
            </h2>

            <div className="mx-auto mt-4 h-[3px] w-28 bg-gradient-to-r from-[#00ffff] via-[#8a2be2] to-[#ff1493]" />

            <p className="mx-auto mt-5 max-w-2xl font-mono text-xs sm:text-sm md:text-base text-[#ffffff] font-semibold leading-relaxed">
              Meet the passionate individuals who drive innovation, creativity, and technological excellence across HACK 6.0.
            </p>
          </div>

          <div className="mb-14">
            <div className="mx-auto max-w-4xl border-2 border-[#292929] bg-[#eeeeee] p-4 sm:p-5 shadow-[5px_5px_0_#8a2be2]">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#222]">
                  <Filter size={15} className="text-[#8a2be2]" />
                  <span>FILTER_BY_BATCH:</span>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
                  {yearFilters.map((filter) => {
                    const isActive = selectedYear === filter.value;
                    return (
                        <button
                            key={filter.label}
                            onClick={() => setSelectedYear(filter.value)}
                            className={`cursor-pointer border-2 border-[#292929] px-3.5 py-1.5 font-mono text-xs font-bold uppercase tracking-wider transition-all ${
                                isActive
                                    ? "bg-[#ff4fd8] text-white shadow-[3px_3px_0_#00ffff] -translate-y-0.5"
                                    : "bg-white text-[#222] shadow-[2px_2px_0_#d9a7f0] hover:bg-[#fff0fa] hover:border-[#8a2be2] hover:shadow-[3px_3px_0_#ff1493]"
                            }`}
                        >
                          <span>{filter.label}</span>
                          <span
                              className={`ml-1.5 px-1.5 py-0.2 text-[10px] font-bold ${
                                  isActive ? "bg-white text-[#ff1493]" : "bg-[#eeeeee] text-[#555]"
                              }`}
                          >
                        {filter.count}
                      </span>
                        </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 sm:gap-8"
          >
            <AnimatePresence>
              {filteredMembers.map((member, index) => (
                  <motion.div
                      key={member.name}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.35, delay: index * 0.02 }}
                      className="h-full"
                  >
                    <MemberCard member={member} index={index} />
                  </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
  );
}
