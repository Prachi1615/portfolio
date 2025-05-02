import React, { useEffect, useState } from "react";
import { interests } from "../interests-icons";
import { skills } from "../skills-icons";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";


const TAG_ORDER = [
  "Education",
  "Experience",
  "Projects",
  "Community Building",
  "Volunteer Work",
  "Certification",
  "Hackathon",
  "Events"
];

function groupByTag(pages) {
  const groups = {};
  pages.forEach((page) => {
    const tags = page.properties.Tags.multi_select.map((t) => t.name);
    const tag = TAG_ORDER.find((orderTag) => tags.includes(orderTag)) || "Other";
    if (!groups[tag]) groups[tag] = [];
    groups[tag].push(page);
  });
  return groups;
}

export default function Home() {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    async function fetchPages() {
      const res = await fetch("/api/portfolio");
      const data = await res.json();
      setPages(data);
    }
    fetchPages();
  }, []);

  const groups = groupByTag(pages);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
        body {
          background: #f6f8fa;
          font-family: 'Inter', sans-serif;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: none; }
        }
        @keyframes bounce {
          0% { transform: translateY(0); }
          30% { transform: translateY(-10px); }
          50% { transform: translateY(0); }
        }
      `}</style>
      <div style={{
        maxWidth: 900,
        margin: "40px auto",
        background: "rgba(255,255,255,0.7)",
        borderRadius: 28,
        boxShadow: "0 8px 48px 0 rgba(56,189,248,0.13), 0 1.5px 12px 0 rgba(139,92,246,0.09)",
        padding: 36,
        position: 'relative',
        overflow: 'hidden',
        backdropFilter: 'blur(7px)',
      }}>
        {/* Floating Animated Accent */}
        <div style={{
          position: 'absolute',
          right: -120,
          top: -80,
          width: 320,
          height: 320,
          background: 'radial-gradient(circle, #818cf8 0%, #f0abfc 70%, transparent 100%)',
          opacity: 0.22,
          zIndex: 0,
          filter: 'blur(2px)',
          animation: 'floatBlob 7s ease-in-out infinite alternate',
        }} />
        {/* World-Class Hero Section */}
        {/* Minimal Hero Section for Isolation */}
        <div style={{
          margin: "-36px -36px 40px -36px",
          padding: "62px 24px 48px 24px",
          borderRadius: "32px 32px 44px 44px",
          background: "#fff",
          boxShadow: "0 12px 48px rgba(139,92,246,0.18)",
          textAlign: "center",
          position: "relative",
          zIndex: 2,
          border: '1.5px solid #e0e7ff',
          marginBottom: 40,
          overflow: 'hidden'
        }}>
          {/* Animated Accent Blob */}
          <div style={{
            position: "absolute",
            top: 60, left: "50%", transform: "translateX(-50%)",
            width: 280, height: 180,
            background: "radial-gradient(circle, #fef9c3 0%, #a5b4fc 70%, transparent 100%)",
            opacity: 0.42,
            zIndex: 0,
            filter: "blur(6px)",
            animation: "heroGlow 3s ease-in-out infinite alternate"
          }} />
          <img 
            src="/image.png"
            alt="Profile photo of Prachi Sethi"
            style={{
              width: 124,
              height: 124,
              objectFit: 'cover',
              borderRadius: '50%',
              margin: '24px auto 0 auto',
              boxShadow: '0 8px 36px 0 #818cf855, 0 2px 12px #bae6fd88',
              border: '5px solid rgba(255,255,255,0.55)',
              background: 'rgba(255,255,255,0.35)',
              backdropFilter: 'blur(4px)',
              position: 'relative',
              zIndex: 3
            }}
          />
          <h1 style={{ fontSize: 42, fontWeight: 700, color: '#222', margin: '18px 0 8px 0', position: 'relative', zIndex: 2 }}>Prachi Sethi</h1>
          <div style={{ fontSize: 32, fontWeight: 900, letterSpacing: 0.5, margin: '24px 0 0 0', textAlign: 'center' }}>
            <span style={{
              background: 'linear-gradient(90deg, #00e0d3 0%, #2563eb 35%, #a21caf 70%, #fb37a3 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              fontWeight: 900,
              padding: '0 4px',
              filter: 'brightness(1.1)'
            }}>
              AI Engineer | Community Builder | Creator
            </span>
          </div>
          <div style={{ color: "#312e81", fontSize: 19, margin: "24px auto 26px auto", maxWidth: 540, lineHeight: 1.75, fontWeight: 600, letterSpacing: 0.05, textAlign: 'center' }}>
            Transforming ideas into impact at the intersection of AI, cloud, and people. IEEE Chair, hackathon winner, and passionate about sharing knowledge and building communities.
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 32, margin: '32px 0' }}>
            <a href="https://github.com/Prachi1615" target="_blank" rel="noopener noreferrer" title="GitHub" style={{ color: '#222', fontSize: 38 }}>
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/prachi-sethi-71a189112/" target="_blank" rel="noopener noreferrer" title="LinkedIn" style={{ color: '#2563eb', fontSize: 38 }}>
              <FaLinkedin />
            </a>
            <a href="https://medium.com/@prachi1615" target="_blank" rel="noopener noreferrer" title="Medium" style={{ color: '#02b875', fontSize: 38 }}>
              <FaMedium />
            </a>
          </div>

          {/* Wavy SVG Divider */}
          <svg viewBox="0 0 1440 120" width="100%" height="56" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', margin: '-1px 0 0 0', zIndex: 2, position: 'relative' }}>
            <path fill="url(#paint0_linear)" fillOpacity="1" d="M0,60 C360,160 1080,-40 1440,60 L1440,120 L0,120 Z" />
            <defs>
              <linearGradient id="paint0_linear" x1="0" y1="0" x2="1440" y2="120" gradientUnits="userSpaceOnUse">
                <stop stopColor="#bae6fd" />
                <stop offset="0.5" stopColor="#818cf8" />
                <stop offset="1" stopColor="#f0abfc" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        {/* About Me Section */}
        <section
          style={{
            margin: "0 auto 36px auto",
            background: "linear-gradient(120deg, #f0abfc 0%, #bae6fd 50%, #bbf7d0 100%)",
            borderRadius: 18,
            boxShadow: "0 6px 32px rgba(79,70,229,0.13)",
            padding: 38,
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            animation: "fadeIn 0.9s cubic-bezier(.45,1.1,.45,1)"
          }}
        >
          <div style={{
            position: "absolute",
            top: 0, left: 0, width: "100%", height: "100%",
            background: "radial-gradient(circle at 70% 30%, #fef9c3 0%, transparent 60%)",
            opacity: 0.4,
            zIndex: 0
          }} />
          <div>
  <h2 style={{ fontSize: 28, fontWeight: 800, color: "#4f46e5", marginBottom: 10, letterSpacing: 0.5, zIndex: 1, position: "relative" }}>
    👋 Hi, I'm Prachi!
  </h2>
  <div style={{ fontSize: 18, color: "#0284c7", marginBottom: 16, fontWeight: 600, zIndex: 1, position: "relative", letterSpacing: 0.2 }}>
  Problem Solver · Community Builder · Content Creator
  </div>
  <div style={{ color: "#444", fontSize: 17, margin: "0 auto 18px auto", maxWidth: 620, zIndex: 1, position: "relative", lineHeight: 1.7 }}>
    I’m not just a software engineer—I’m a builder,and relentless optimist driven by the belief that technology can change lives. My journey spans <b>AI, cloud, and distributed systems</b>, but what truly excites me is making a real-world impact and empowering those around me.<br /><br />
    Whether I’m leading as <b>IEEE Chair (Student Branch San Francisco Bay University)</b>, President st Toastmasters Club (Soaring Eagles),organizing events, or writing about <b>GenAI</b>, I thrive on collaboration and creativity. I turn cutting-edge tech into practical solutions—fast—and love making complex topics accessible (catch me blogging or speaking at meetups!).<br /><br />
    <span style={{ color: "#4f46e5", fontWeight: 700 }}>🏆 Hackathon Winner</span> @ Berkeley | ETHGlobal | Women in RAG<br />
    <span style={{ color: "#0284c7", fontWeight: 700 }}>🌐 Community Builder</span> | Toastmasters | GDG | IEEE<br />
    <span style={{ color: "#f59e42", fontWeight: 700 }}>✍️ Content Creator</span> | AI, DevOps, Open Source<br /><br />
    Outside of tech, I love <b>singing</b>, <b>badminton</b>, <b>pickleball</b>, <b>baking</b>, <b>sketching</b>, <b>photography</b>, <b>travelling</b>, and <b>hosting events</b>.<br />
    <span style={{ color: "#10b981", fontWeight: 600 }}>Let’s connect if you want to build something meaningful—or just swap stories about tech, travel, or life!</span>
  </div>

</div>
        </section>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <a
            href="https://calendly.com/prachi1615/new-meeting"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              margin: "20px auto 28px auto",
              padding: "13px 32px",
              fontSize: 18,
              fontWeight: 700,
              color: "#fff",
              background: "linear-gradient(90deg,#4f46e5 0%,#06b6d4 100%)",
              border: "none",
              borderRadius: 30,
              boxShadow: "0 2px 12px rgba(79,70,229,0.11)",
              textDecoration: "none",
              transition: "background 0.18s, transform 0.15s, box-shadow 0.18s",
              cursor: "pointer",
              zIndex: 1
            }}
            onMouseOver={e => {
              e.currentTarget.style.background = "linear-gradient(90deg,#06b6d4 0%,#4f46e5 100%)";
              e.currentTarget.style.transform = "scale(1.06)";
              e.currentTarget.style.boxShadow = "0 6px 28px rgba(6,182,212,0.17)";
            }}
            onMouseOut={e => {
              e.currentTarget.style.background = "linear-gradient(90deg,#4f46e5 0%,#06b6d4 100%)";
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "0 2px 12px rgba(79,70,229,0.11)";
            }}
          >
            📅 Schedule a Call
          </a>
        </div>

        {/* Technical Skills Section */}
        <section
          style={{
            margin: "0 auto 36px auto",
            background: "linear-gradient(120deg, #e0e7ff 0%, #bae6fd 50%, #bbf7d0 100%)",
            borderRadius: 18,
            boxShadow: "0 6px 32px rgba(79,70,229,0.09)",
            padding: 32,
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            animation: "fadeIn 0.9s cubic-bezier(.45,1.1,.45,1)"
          }}
        >
          <h2 style={{ fontSize: 26, fontWeight: 800, color: "#0284c7", marginBottom: 10, letterSpacing: 0.5, zIndex: 1, position: "relative" }}>
            💻 Technical Skills
          </h2>
          <div style={{ color: "#555", fontSize: 16, marginBottom: 18, maxWidth: 600, marginLeft: "auto", marginRight: "auto" }}>
            A blend of modern technologies, frameworks, and tools I use to build, deploy, and scale software.
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: 28,
              justifyItems: "center",
              alignItems: "center",
              margin: "0 auto",
              maxWidth: 700
            }}
          >
            {skills.map(({ name, icon }) => (
              <div
                key={name}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  background: "rgba(255,255,255,0.97)",
                  borderRadius: 14,
                  padding: "18px 8px 12px 8px",
                  boxShadow: "0 2px 12px rgba(6,182,212,0.09)",
                  transition: "transform 0.18s, box-shadow 0.18s, background 0.18s",
                  outline: "none",
                  willChange: "transform",
                  minWidth: 110,
                  marginBottom: 2
                }}
                tabIndex={0}
                onMouseOver={e => {
                  e.currentTarget.style.transform = "translateY(-7px) scale(1.07)";
                  e.currentTarget.style.boxShadow = "0 10px 28px rgba(6,182,212,0.13)";
                  e.currentTarget.style.background = "#f0faff";
                }}
                onMouseOut={e => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "0 2px 12px rgba(6,182,212,0.09)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.97)";
                }}
                onFocus={e => {
                  e.currentTarget.style.transform = "translateY(-7px) scale(1.07)";
                  e.currentTarget.style.boxShadow = "0 10px 28px rgba(6,182,212,0.13)";
                  e.currentTarget.style.background = "#f0faff";
                }}
                onBlur={e => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "0 2px 12px rgba(6,182,212,0.09)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.97)";
                }}
              >
                <span style={{ display: "inline-block", marginBottom: 7 }}>{icon}</span>
                <span style={{ marginTop: 0, fontSize: 15, fontWeight: 700, color: "#0284c7", letterSpacing: 0.2 }}>{name}</span>
              </div>
            ))}
          </div>
        </section>
        {/* Technical Skills Section
        <section
          style={{
            margin: "0 auto 36px auto",
            background: "linear-gradient(120deg, #e0e7ff 0%, #bae6fd 50%, #bbf7d0 100%)",
            borderRadius: 18,
            boxShadow: "0 6px 32px rgba(79,70,229,0.09)",
            padding: 32,
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            animation: "fadeIn 0.9s cubic-bezier(.45,1.1,.45,1)"
          }}
        >
          
        </section> */}

        {TAG_ORDER.filter(tag => tag !== 'Skill').map((tag) => (
          groups[tag] && (
            <div key={tag} style={{ marginBottom: 36 }}>
              <h2 style={{ fontSize: 24, fontWeight: 700, color: "#4f46e5", marginBottom: 16, borderBottom: "1px solid #e5e7eb", paddingBottom: 4 }}>{tag}</h2>
              <div style={{ display: "grid", gap: 18 }}>
                {groups[tag].map((page) => {
                  const title = page.properties.Name.title[0]?.text.content;
                  const url = page.properties.Link.url;
                  const desc = page.properties.Description.rich_text[0]?.text.content || "";
                  const date = page.properties.Date?.date?.start;
                  return (
                    <a
                      key={page.id}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "block",
                        background: "#f3f4f6",
                        borderRadius: 10,
                        padding: "18px 22px",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                        textDecoration: "none",
                        color: "#222",
                        transition: "box-shadow 0.2s, background 0.2s",
                        border: "1px solid #e5e7eb"
                      }}
                      onMouseOver={e => e.currentTarget.style.background="#e0e7ff"}
                      onMouseOut={e => e.currentTarget.style.background="#f3f4f6"}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: desc ? 4 : 0 }}>
  <span style={{ fontSize: 20, fontWeight: 600 }}>{title}</span>
  {(page.properties.Date?.date?.start || page.properties.Date?.date?.end) && (
    <span style={{ fontSize: 13, color: '#666', fontWeight: 500, marginLeft: 8, background: '#e0e7ff', borderRadius: 6, padding: '2px 8px' }}>
      {page.properties.Date?.date?.start &&
        new Date(page.properties.Date.date.start).toLocaleDateString(undefined, { year: 'numeric', month: 'short' })}
      {page.properties.Date?.date?.end && (
        <>
          {page.properties.Date?.date?.start ? ' – ' : ''}
          {new Date(page.properties.Date.date.end).toLocaleDateString(undefined, { year: 'numeric', month: 'short' })}
        </>
      )}
    </span>
  )}
  <span style={{ marginLeft: 'auto', fontSize: 18, color: '#818cf8' }} title="Open Notion page">↗</span>
</div>
                      {desc && <div style={{ color: "#444", fontSize: 15 }}>{desc}</div>}
                    </a>
                  );
                })}
              </div>
            </div>
          )
        ))}
        {/* --- Interests & Hobbies section now at the bottom ---
        <section style={{ margin: "56px auto 0 auto", background: "linear-gradient(120deg, #e0e7ff 0%, #bae6fd 50%, #bbf7d0 100%)", borderRadius: 18, boxShadow: "0 6px 32px rgba(79,70,229,0.10)", padding: 38, textAlign: "center", position: "relative", overflow: "hidden", animation: "fadeIn 0.9s cubic-bezier(.45,1.1,.45,1)" }}>
          <h2 style={{ fontSize: 26, fontWeight: 800, color: "#2563eb", marginBottom: 18, letterSpacing: 0.5, zIndex: 1, position: "relative" }}>
            🌈 Interests & Hobbies
          </h2>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 28,
            marginTop: 8,
            zIndex: 1,
            position: "relative"
          }}>
            {interests.map(({ name, icon }) => (
              <div
                key={name}
                tabIndex={0}
                style={{
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  background: "rgba(255,255,255,0.95)",
                  borderRadius: 14,
                  padding: "18px 22px 12px 22px",
                  boxShadow: "0 2px 12px rgba(99,102,241,0.13)",
                  transition: "transform 0.18s, box-shadow 0.18s, background 0.18s",
                  outline: "none",
                  willChange: "transform"
                }}
                onMouseOver={e => {
                  e.currentTarget.style.transform = "translateY(-8px) scale(1.09)";
                  e.currentTarget.style.boxShadow = "0 12px 36px rgba(99,102,241,0.18)";
                  e.currentTarget.style.background = "#f0f4ff";
                  e.currentTarget.firstChild.style.animation = "bounce 0.5s";
                }}
                onMouseOut={e => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "0 2px 12px rgba(99,102,241,0.13)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.95)";
                  e.currentTarget.firstChild.style.animation = "none";
                }}
                onFocus={e => {
                  e.currentTarget.style.transform = "translateY(-8px) scale(1.09)";
                  e.currentTarget.style.boxShadow = "0 12px 36px rgba(99,102,241,0.18)";
                  e.currentTarget.style.background = "#f0f4ff";
                  e.currentTarget.firstChild.style.animation = "bounce 0.5s";
                }}
                onBlur={e => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "0 2px 12px rgba(99,102,241,0.13)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.95)";
                }}
              >
                <span style={{ fontSize: 38, marginBottom: 10 }}>{icon}</span>
                <span style={{ fontWeight: 700, color: "#3730a3", fontSize: 20 }}>{name}</span>
              </div>
            ))}
          </div>
        </section> */}
      </div>
    </>
  );
}
