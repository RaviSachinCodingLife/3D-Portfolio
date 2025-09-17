import React, { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls, Stars } from "@react-three/drei";
import { Box, Paper, Typography } from "@mui/material";
import * as THREE from "three";
import projImg1 from "../assets/img/Projects/Flipkart Clone.webp";
import projImg2 from "../assets/img/Projects/IRCTC.png";
import projImg3 from "../assets/img/Projects/SBi clone.webp";
import projImg4 from "../assets/img/Projects/Stock market clone.jpg";
import projImg5 from "../assets/img/Projects/Travel Clone.jpg";
import projImg6 from "../assets/img/Projects/Restro Clone.jpg";

const projects = [
  {
    title: "Flipkart Clone",
    description:
      "Responsive e-commerce platform clone, built using React and modern tools.",
    imgUrl: projImg1,
    link: "https://ravisachincodinglife.github.io/FireBaseFlipkart-React/",
    color: "#00f7ff",
  },
  {
    title: "IRCTC Clone",
    description: "React.js app for seamless train booking experience.",
    imgUrl: projImg2,
    link: "https://ravisachincodinglife.github.io/Irctc-React/",
    color: "#a855f7",
  },
  {
    title: "SBI Clone",
    description: "Replicates the State Bank of India’s website interface",
    imgUrl: projImg3,
    link: "https://ravisachincodinglife.github.io/SBI-Banking-Project/",
    color: "#16f2b3",
  },
  {
    title: "Small Case Stock Market Clone",
    description: "Platform to track and manage stock investments",
    imgUrl: projImg4,
    link: "https://ravisachincodinglife.github.io/SmallCase/",
    color: "#ff5500",
  },
  {
    title: "Tourist Website Clone",
    description:
      "Responsive website showcasing destinations, booking features, and itineraries.",
    imgUrl: projImg5,
    link: "https://ravisachincodinglife.github.io/tourism-website/",
    color: "#f2a516",
  },
  {
    title: "Cefrax Restaurant Clone",
    description: "Simulates a restaurant's menu and online ordering experience",
    imgUrl: projImg6,
    link: "https://ravisachincodinglife.github.io/Cefrax---Restaurant/",
    color: "#ff00ff",
  },
];

const FloatingProjectCard: React.FC<{
  project: (typeof projects)[0];
  position: [number, number, number];
}> = ({ project, position }) => {
  const ref = React.useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.003;
      ref.current.position.y =
        position[1] +
        Math.sin(state.clock.getElapsedTime() + position[0]) * 0.2;
    }
  });

  return (
    <group ref={ref} position={position}>
      <mesh>
        <boxGeometry args={[3.5, 2.5, 0.3]} />
        <meshStandardMaterial color="#00f7ff" transparent opacity={0.15} />
      </mesh>
      <Html
        center
        style={{ transform: "translate(-50%, -50%)", pointerEvents: "auto" }}
      >
        <Paper
          elevation={12}
          sx={{
            width: { xs: 180, sm: 220, md: 250 },
            height: { xs: 260, sm: 260, md: 265 },
            p: { xs: 1, sm: 1.5, md: 2 },
            borderRadius: "16px",
            background: "rgba(0,0,0,0.65)",
            border: "1px solid rgba(0,247,255,0.3)",
            backdropFilter: "blur(6px)",
            textAlign: "center",
            color: "#fff",
            transition: "0.3s",
            cursor: "pointer",
            "&:hover": {
              transform: "scale(1.08)",
              boxShadow: "0px 0px 25px #00f7ff",
            },
          }}
          onClick={() => window.open(project.link, "_blank")}
        >
          <img
            src={project.imgUrl}
            alt={project.title}
            style={{
              width: "100%",
              height: { xs: "100px", sm: "120px", md: "140px" } as any,
              objectFit: "cover",
              borderRadius: "12px",
            }}
          />
          <Typography
            variant="h6"
            sx={{
              mt: 1,
              fontWeight: 700,
              fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1rem" },
            }}
          >
            {project.title}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "0.7rem", sm: "0.75rem", md: "0.85rem" },
              opacity: 0.85,
            }}
          >
            {project.description}
          </Typography>
        </Paper>
      </Html>
    </group>
  );
};

const Projects3D: React.FC = () => {
  const cardsPerRow = { xs: 1, sm: 2, md: 3 };
  const spacingX = { xs: 15, sm: 15, md: 15 };
  const spacingY = { xs: 14, sm: 14, md: 14 };
  const spacingZ = 0.5;
  const totalRows = Math.ceil(projects.length / cardsPerRow.md);
  const verticalOffset = ((totalRows - 1) / 2) * spacingY.md;

  return (
    <Box
      id="projects"
      sx={{
        minHeight: "100vh",
        pt: { xs: "80px", sm: "90px", md: "100px" },
        pb: 10,
        px: { xs: 2, sm: 4, md: 6 },
        background:
          "radial-gradient(circle at top left, #0f2027, #203a43, #2c5364)",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          textAlign: "center",
          mb: { xs: 5, sm: 6, md: 8 },
          fontSize: { xs: "1.6rem", sm: "2rem", md: "2.5rem" },
          background: "linear-gradient(90deg,#00f7ff,#a855f7)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        My Projects
      </Typography>

      <Box
        sx={{
          width: "100%",
          height: { xs: "65vh", sm: "75vh", md: "95vh" },
          position: "relative",
          zIndex: 0,
        }}
      >
        <Canvas
          camera={{
            position: [0, 0, Math.max(25, totalRows * spacingY.md)],
            fov: 55,
          }}
        >
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 10, 5]} intensity={0.8} />

          <Suspense fallback={null}>
            {projects.map((project, idx) => {
              const row = Math.floor(
                idx /
                  (window.innerWidth < 600
                    ? cardsPerRow.xs
                    : window.innerWidth < 900
                    ? cardsPerRow.sm
                    : cardsPerRow.md)
              );
              const col =
                idx %
                (window.innerWidth < 600
                  ? cardsPerRow.xs
                  : window.innerWidth < 900
                  ? cardsPerRow.sm
                  : cardsPerRow.md);

              const x =
                (col -
                  ((window.innerWidth < 600
                    ? cardsPerRow.xs
                    : window.innerWidth < 900
                    ? cardsPerRow.sm
                    : cardsPerRow.md) -
                    1) /
                    2) *
                (window.innerWidth < 600
                  ? spacingX.xs
                  : window.innerWidth < 900
                  ? spacingX.sm
                  : spacingX.md);
              const y =
                verticalOffset -
                row *
                  (window.innerWidth < 600
                    ? spacingY.xs
                    : window.innerWidth < 900
                    ? spacingY.sm
                    : spacingY.md);
              const z = (Math.random() - 0.5) * spacingZ;

              return (
                <FloatingProjectCard
                  key={idx}
                  project={project}
                  position={[x, y, z]}
                />
              );
            })}

            <Stars
              radius={150}
              depth={60}
              count={3000}
              factor={4}
              saturation={0.5}
              fade
            />
          </Suspense>

          <OrbitControls enablePan={false} enableZoom={false} enableRotate />
        </Canvas>
      </Box>
    </Box>
  );
};

export default Projects3D;
