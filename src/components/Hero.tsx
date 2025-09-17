import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Sphere,
  MeshDistortMaterial,
  Points,
  PointMaterial,
} from "@react-three/drei";
import { Box, Typography, Button, Stack } from "@mui/material";
import { motion } from "framer-motion";
import * as THREE from "three";
import { LinkedIn, GitHub } from "@mui/icons-material";

function useTypewriter(words: string[], speed = 100, pause = 2000) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), pause);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(
      () => setSubIndex((prev) => prev + (reverse ? -1 : 1)),
      reverse ? speed / 2 : speed
    );
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((prev) => !prev), 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return `${words[index].substring(0, subIndex)}${blink ? "|" : ""}`;
}

function GlowingSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame(({ mouse }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003 + mouse.x * 0.002;
      meshRef.current.rotation.x += 0.001 + mouse.y * 0.002;
    }
  });
  return (
    <Sphere ref={meshRef} args={[1.5, 64, 64]}>
      <MeshDistortMaterial
        color="#00f7ff"
        emissive="#a855f7"
        emissiveIntensity={0.8}
        distort={0.5}
        speed={2}
      />
    </Sphere>
  );
}

function Starfield() {
  const positions = Array.from(
    { length: 4000 },
    () => (Math.random() - 0.5) * 20
  );
  return (
    <Points positions={new Float32Array(positions)} stride={3}>
      <PointMaterial transparent color="#ffffff" size={0.015} sizeAttenuation />
    </Points>
  );
}

function FloatingShape({ type = "box", color = "#ff00ff", position }: any) {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  let geometry;
  switch (type) {
    case "ring":
      geometry = <torusGeometry args={[0.8, 0.2, 16, 100]} />;
      break;
    case "pyramid":
      geometry = <coneGeometry args={[0.7, 1, 4]} />;
      break;
    default:
      geometry = <boxGeometry args={[1, 1, 1]} />;
  }

  return (
    <mesh ref={meshRef} position={position}>
      {geometry}
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.6}
      />
    </mesh>
  );
}

const MotionBox = motion(Box);

export const Hero: React.FC = () => {
  const text = useTypewriter([
    "Frontend Developer",
    "React & TypeScript Enthusiast",
    "UI/UX Designer",
    "2.3+ Years Experience",
  ]);

  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: 2, sm: 4, md: 8 },
        py: { xs: 4, sm: 6, md: 8 },
        background: "radial-gradient(circle at top, #0f2027, #203a43, #2c5364)",
        color: "white",
      }}
    >
      <MotionBox
        sx={{
          maxWidth: "100%",
          width: { xs: "100%", sm: "90%", md: "50%" },
          textAlign: { xs: "center", sm: "center", md: "left" },
        }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "1.8rem", sm: "2.2rem", md: "3rem" },
            background: "linear-gradient(90deg, #00f7ff, #a855f7)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0px 0px 20px rgba(0,247,255,0.6)",
          }}
        >
          Hi, I’m Sachin Saurabh
        </Typography>

        <Typography
          variant="h5"
          gutterBottom
          sx={{
            color: "#a855f7",
            fontWeight: 600,
            fontSize: { xs: "1rem", sm: "1.3rem", md: "1.7rem" },
            textShadow: "0px 0px 12px rgba(168,85,247,0.7)",
          }}
        >
          {text}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            opacity: 0.85,
            mb: 3,
            fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
          }}
        >
          Frontend Developer with 2.3 years of experience building scalable,
          real-time applications using React, TypeScript, Redux & AWS.
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent={{ xs: "center", md: "flex-start" }}
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <Button
              variant="outlined"
              sx={{
                borderColor: "#00f7ff",
                color: "#00f7ff",
                fontWeight: "bold",
                px: 3,
                "&:hover": {
                  background: "rgba(0,247,255,0.1)",
                  boxShadow: "0px 0px 15px rgba(0,247,255,0.7)",
                },
                fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
              }}
              href="#contact"
            >
              Let’s Connect
            </Button>
          </motion.div>

          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: 1 }}
          >
            <Button
              variant="contained"
              sx={{
                background: "linear-gradient(90deg,#00f7ff,#a855f7)",
                color: "white",
                fontWeight: "bold",
                px: 3,
                boxShadow: "0px 0px 25px rgba(0, 247, 255, 0.5)",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0px 0px 35px rgba(168,85,247,0.7)",
                },
                fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
              }}
              target="_blank"
              href="https://drive.google.com/file/d/1VpLUM69h6fp2WUQWpaAF9Eh1mQYOgVVI/view?usp=sharing"
            >
              Get Resume
            </Button>
          </motion.div>
        </Stack>

        <Stack
          direction="row"
          spacing={2}
          sx={{
            mt: 3,
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <motion.a
            href="https://www.linkedin.com/in/sachin-saurabh/"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.2 }}
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <LinkedIn
              sx={{ fontSize: { xs: 28, sm: 32, md: 36 }, color: "#00f7ff" }}
            />
          </motion.a>
          <motion.a
            href="https://github.com/RaviSachinCodingLife"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.2 }}
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 3, delay: 1 }}
          >
            <GitHub
              sx={{ fontSize: { xs: 28, sm: 32, md: 36 }, color: "#a855f7" }}
            />
          </motion.a>
        </Stack>
      </MotionBox>

      <Box
        sx={{
          width: { xs: "100%", sm: "100%", md: "50%" },
          height: { xs: "50vh", sm: "60vh", md: "70vh" },
          mt: { xs: 4, sm: 4, md: 0 },
        }}
      >
        <Canvas camera={{ position: [0, 0, 6] }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <GlowingSphere />
          <Starfield />
          <FloatingShape type="box" color="#00f7ff" position={[-6, 4, -2]} />
          <FloatingShape type="ring" color="#a855f7" position={[0, -5, -4]} />
          <FloatingShape type="pyramid" color="#ff00ff" position={[7, 2, -4]} />
        </Canvas>
      </Box>
    </Box>
  );
};
