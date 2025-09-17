import React, { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html, Stars } from "@react-three/drei";
import { Box, Typography, Paper } from "@mui/material";
import * as THREE from "three";
import ReactJs from "../assets/img/skills/React.png";
import JavaScript from "../assets/img/skills/js.png";
import Canva from "../assets/img/skills/Canva.svg";
import ChartJs from "../assets/img/skills/Chartjs.png";
import Figma from "../assets/img/skills/Figma.png";
import Github from "../assets/img/skills/github.png";
import Npm from "../assets/img/skills/Npm.png";
import Angular from "../assets/img/skills/angular.png";
import AntDesign from "../assets/img/skills/ant-design.png";
import Bootstrap from "../assets/img/skills/bootstrap.png";
import CSS3 from "../assets/img/skills/css3.png";
import Firebase from "../assets/img/skills/firebase.png";
import GraphQl from "../assets/img/skills/graphql.png";
import Html5 from "../assets/img/skills/html.png";
import Jira from "../assets/img/skills/jira.svg";
import Mui from "../assets/img/skills/mui.png";
import Redux from "../assets/img/skills/redux.svg";
import Sass from "../assets/img/skills/sass.png";
import Tailwind from "../assets/img/skills/tailwind.png";
import Typescript from "../assets/img/skills/typescript.png";

const skills = [
  { icon: ReactJs, text: "React" },
  { icon: JavaScript, text: "JavaScript" },
  { icon: Canva, text: "Canva" },
  { icon: ChartJs, text: "Chart Js" },
  { icon: Figma, text: "Figma" },
  { icon: Github, text: "Github" },
  { icon: Npm, text: "Npm" },
  { icon: Angular, text: "Angular" },
  { icon: AntDesign, text: "Ant Design" },
  { icon: Bootstrap, text: "Bootstrap" },
  { icon: CSS3, text: "CSS3" },
  { icon: Firebase, text: "Firebase" },
  { icon: GraphQl, text: "GraphQl" },
  { icon: Html5, text: "Html5" },
  { icon: Jira, text: "Jira" },
  { icon: Mui, text: "Material UI" },
  { icon: Redux, text: "Redux" },
  { icon: Sass, text: "Sass" },
  { icon: Tailwind, text: "Tailwind" },
  { icon: Typescript, text: "Typescript" },
];

const FloatingSkillCard: React.FC<{
  skill: { icon: string; text: string };
  position: [number, number, number];
}> = ({ skill, position }) => {
  const ref = React.useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.004;
      ref.current.position.y =
        position[1] +
        Math.sin(state.clock.getElapsedTime() + position[0]) * 0.15;
    }
  });

  return (
    <group ref={ref} position={position}>
      <mesh>
        <boxGeometry args={[2, 1, 0.3]} />
        <meshStandardMaterial
          color="#16f2b3"
          transparent
          opacity={0.2}
          roughness={0.2}
          metalness={0.6}
        />
      </mesh>
      <Html
        center
        style={{ transform: "translate(-50%, -50%)", pointerEvents: "auto" }}
      >
        <Paper
          elevation={10}
          sx={{
            width: { xs: 110, sm: 130, md: 150 },
            p: { xs: 0.5, sm: 0.8, md: 1 },
            textAlign: "center",
            borderRadius: "12px",
            background: "rgba(0,0,0,0.6)",
            border: "1px solid rgba(22,242,179,0.3)",
            backdropFilter: "blur(5px)",
            color: "#fff",
            cursor: "pointer",
            transition: "0.3s",
            "&:hover": {
              transform: "scale(1.1)",
              boxShadow: "0px 0px 25px #00f7ff",
            },
          }}
        >
          <img
            src={skill.icon}
            alt={skill.text}
            width={50}
            height={50}
            style={{ maxWidth: "100%", height: "auto", minHeight: "50px" }}
          />
          <Typography
            sx={{
              mt: 0.5,
              fontWeight: 600,
              fontSize: { xs: "0.6rem", sm: "0.75rem", md: "0.85rem" },
            }}
          >
            {skill.text}
          </Typography>
        </Paper>
      </Html>
    </group>
  );
};

const Skills: React.FC = () => {
  const cardsPerRow = { xs: 3, sm: 4, md: 5 };
  const spacingX = { xs: 8, sm: 10, md: 12 };
  const spacingY = { xs: 5, sm: 6, md: 7 };
  const spacingZ = 2;

  const totalRows = Math.ceil(skills.length / cardsPerRow.md);
  const verticalOffset = ((totalRows - 1) / 2) * spacingY.md - 2;

  return (
    <Box
      id="skills"
      sx={{
        minHeight: "100vh",
        px: { xs: 2, sm: 4, md: 6 },
        pt: { xs: 10, sm: 12, md: 14 },
        pb: { xs: 8, sm: 10, md: 12 },
        background:
          "radial-gradient(circle at top left, #0f2027, #203a43, #2c5364)",
        color: "#fff",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          textAlign: "center",
          mb: { xs: 4, sm: 5, md: 6 },
          fontSize: { xs: "1.6rem", sm: "2rem", md: "2.5rem" },
          background: "linear-gradient(90deg,#00f7ff,#a855f7)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        My Skills
      </Typography>

      <Box
        sx={{
          width: "100%",
          height: { xs: "60vh", sm: "70vh", md: "85vh" },
          position: "relative",
          zIndex: 0,
        }}
      >
        <Canvas camera={{ position: [0, 0, 25], fov: 65 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 10, 5]} intensity={0.8} />

          <Suspense fallback={null}>
            {skills.map((skill, idx) => {
              const row = Math.floor(idx / cardsPerRow.md);
              const col = idx % cardsPerRow.md;

              const x = (col - (cardsPerRow.md - 1) / 2) * spacingX.md;
              const y = verticalOffset - row * spacingY.md;
              const z = (Math.random() - 0.5) * spacingZ;

              return (
                <FloatingSkillCard
                  key={idx}
                  skill={skill}
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

          <OrbitControls
            enablePan={false}
            enableZoom={false}
            enableRotate={true}
          />
        </Canvas>
      </Box>
    </Box>
  );
};

export default Skills;
