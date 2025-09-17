import React, { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, Stars, OrbitControls, Sphere } from "@react-three/drei";
import { Paper, Typography, Box } from "@mui/material";
import * as THREE from "three";

const experiences = [
  {
    title: "Bachelor of Science in Computer Science",
    company: "MIT School of Engineering (University of Pune)",
    date: "Aug 2017 - Aug 2021",
  },
];

const FloatingEducationCard: React.FC<{
  experience: (typeof experiences)[0];
  position: [number, number, number];
}> = ({ experience, position }) => {
  const ref = React.useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.003;
      ref.current.position.y =
        position[1] +
        Math.sin(state.clock.getElapsedTime() + position[0]) * 0.15;
    }
  });

  return (
    <group ref={ref} position={position}>
      <mesh>
        <boxGeometry args={[5, 2, 0.5]} />
        <meshStandardMaterial
          color="#a855f7"
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
            width: { xs: 220, sm: 280, md: 320 },
            p: { xs: 1.5, sm: 2, md: 3 }, 
            textAlign: "center",
            borderRadius: "20px",
            background: "rgba(0,0,0,0.6)",
            border: "1px solid rgba(168,85,247,0.4)",
            backdropFilter: "blur(8px)",
            color: "#fff",
            cursor: "pointer",
            transition: "0.3s",
            "&:hover": {
              transform: "scale(1.08)",
              boxShadow: "0px 0px 40px rgba(168,85,247,0.9)",
            },
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.3rem" }, 
            }}
          >
            {experience.title}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
              color: "#00f7ff",
              mt: 1,
            }}
          >
            {experience.company}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.9rem" },
              mt: 1,
              color: "#fff",
            }}
          >
            {experience.date}
          </Typography>
        </Paper>
      </Html>
    </group>
  );
};

const FloatingShapes = () => {
  const shapesRef = React.useRef<THREE.Group>(null!);
  useFrame(() => {
    if (shapesRef.current) shapesRef.current.rotation.y += 0.0015;
  });

  const positions: [number, number, number][] = [
    [6, 2, -5],
    [-6, -1, -4],
    [5, -2, 3],
    [-4, 3, 2],
    [7, 1, 4],
    [-5, 2, -3],
    [3, -3, -5],
    [-3, -2, 5],
    [4, 0, 2],
  ];

  return (
    <group ref={shapesRef}>
      {positions.map((pos, idx) => (
        <Sphere
          key={idx}
          args={[0.3 + Math.random() * 0.4, 16, 16]}
          position={pos}
        >
          <meshStandardMaterial
            color={`hsl(${Math.random() * 360}, 80%, 60%)`}
          />
        </Sphere>
      ))}
    </group>
  );
};

const Education: React.FC = () => {
  return (
    <Box
      id="education"
      sx={{
        minHeight: "100vh",
        pt: { xs: "80px", sm: "90px", md: "100px" }, 
        pb: { xs: 8, sm: 10, md: 12 },
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
          mb: { xs: 4, sm: 5, md: 6 },
          fontSize: { xs: "1.6rem", sm: "2rem", md: "2.5rem" },
          background: "linear-gradient(90deg,#00f7ff,#a855f7)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Education
      </Typography>

      <Box
        sx={{
          width: "100%",
          height: { xs: "55vh", sm: "65vh", md: "75vh" }, 
          position: "relative",
          zIndex: 0,
        }}
      >
        <Canvas camera={{ position: [0, 0, 14], fov: 50 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 10, 5]} intensity={0.8} />

          <Suspense fallback={null}>
            {experiences.map((exp, idx) => (
              <FloatingEducationCard
                key={idx}
                experience={exp}
                position={[0, 0, 0]}
              />
            ))}
            <FloatingShapes />
            <Stars
              radius={100}
              depth={50}
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

export default Education;
