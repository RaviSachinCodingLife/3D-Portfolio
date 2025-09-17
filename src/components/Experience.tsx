import React, { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Box as DreiBox } from "@react-three/drei";
import { Box, Typography, Paper, Grid } from "@mui/material";
import * as THREE from "three";

interface ExperienceType {
  company: string;
  roles: { title: string; date: string; color: string }[];
  year: number;
  position: [number, number, number];
}

const experiences: ExperienceType[] = [
  {
    company: "iBase Electrosoft LLP",
    roles: [
      {
        title: "Full Stack Web Developer, Angular JS Developer",
        date: "Dec 2020 - Apr 2022",
        color: "#00f7ff",
      },
    ],
    year: 2021,
    position: [-6, 0, 0],
  },
  {
    company: "Tcr Innovation",
    roles: [
      {
        title: "Frontend Web Development",
        date: "Apr 2022 - May 2022",
        color: "#a855f7",
      },
    ],
    year: 2022,
    position: [8, 3, 4],
  },
  {
    company: "Infinite Graphix Tech",
    roles: [
      {
        title: "Diploma in Web Page Designing",
        date: "Feb 2022 - Sept 2022",
        color: "#ff9900",
      },
    ],
    year: 2022,
    position: [-8, -5, 0],
  },
  {
    company: "MSBC Group",
    roles: [
      {
        title: "Jr. Software Developer",
        date: "Sep 2022 - Dec 2024",
        color: "#16f2b3",
      },
    ],
    year: 2023,
    position: [4, -12, 0],
  },
  {
    company: "Neurosynaptic Communications",
    roles: [
      {
        title: "Java Developer Intern",
        date: "Aug 2021 - Nov 2021",
        color: "#ff5500",
      },
    ],
    year: 2021,
    position: [-8, -12, 0],
  },
];

const FloatingShape: React.FC<{
  position: [number, number, number];
  color: string;
  size?: number;
  shape?: "sphere" | "box";
}> = ({ position, color, size = 0.4, shape = "sphere" }) => {
  const ref = React.useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.015;
      ref.current.position.y =
        position[1] + Math.sin(state.clock.getElapsedTime() * 0.8) * 0.3;
    }
  });
  return shape === "sphere" ? (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        metalness={0.5}
        roughness={0.3}
      />
    </mesh>
  ) : (
    <DreiBox ref={ref} args={[size, size, size]}>
      <meshStandardMaterial
        color={color}
        emissive={color}
        metalness={0.5}
        roughness={0.3}
      />
    </DreiBox>
  );
};

const ExperienceCard: React.FC<{
  company: string;
  roles: { title: string; date: string; color: string }[];
  align: "left" | "right";
}> = ({ company, roles, align }) => {
  return (
    <Paper
      elevation={14}
      sx={{
        p: { xs: 2, sm: 3, md: 4 },
        minWidth: { xs: "90%", sm: 350, md: 400 },
        borderRadius: "25px",
        background: "rgba(255,255,255,0.05)",
        border: `2px solid #16f2b3`,
        boxShadow: "0 0 25px #16f2b3, inset 0 0 15px #16f2b3",
        backdropFilter: "blur(15px)",
        textAlign: align,
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-10px) scale(1.03)",
          boxShadow: "0 0 45px #16f2b3, inset 0 0 25px #16f2b3",
        },
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
          mb: 2,
          color: "#00f7ff",
          fontSize: { xs: "1rem", md: "1.1rem" },
        }}
      >
        {company}
      </Typography>
      {roles.map((role, i) => (
        <Box key={i} sx={{ mb: 1 }}>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 600,
              fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1rem" },
              background: `linear-gradient(90deg, ${role.color}, #fff)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {role.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: role.color,
              fontSize: { xs: "0.75rem", sm: "0.85rem", md: "0.9rem" },
            }}
          >
            {role.date}
          </Typography>
        </Box>
      ))}
    </Paper>
  );
};

const groupByYear = (data: ExperienceType[]) => {
  return data.reduce<Record<number, ExperienceType[]>>((acc, exp) => {
    if (!acc[exp.year]) acc[exp.year] = [];
    acc[exp.year].push(exp);
    return acc;
  }, {});
};

const ExperienceTimeline3D: React.FC = () => {
  const grouped = groupByYear(experiences);

  return (
    <Box
      id="experience"
      sx={{
        minHeight: "100vh",
        py: { xs: 6, sm: 8, md: 10 },
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
          mb: { xs: 6, sm: 8, md: 10 },
          fontSize: { xs: "1.8rem", sm: "2.2rem", md: "3rem" },
          background: "linear-gradient(90deg,#00f7ff,#a855f7)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        PROFESSIONAL EXPERIENCE
      </Typography>

      {Object.keys(grouped)
        .sort()
        .map((year) => (
          <Box key={year} sx={{ mb: { xs: 8, sm: 9, md: 10 } }}>
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                mb: { xs: 4, sm: 5, md: 6 },
                fontWeight: 700,
                fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
                background: "linear-gradient(90deg,#ff9900,#a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {year}
            </Typography>

            <Grid container spacing={3} justifyContent="center">
              {grouped[+year].map((exp, i) => (
                <Grid
                  key={i}
                  size={{ xs: 12, sm: 6, md: 4 }}
                  sx={{
                    display: "flex",
                    justifyContent: {
                      xs: "center",
                      md: i % 2 === 0 ? "flex-start" : "flex-end",
                    },
                    mb: { xs: 4, md: 0 },
                  }}
                >
                  <ExperienceCard
                    company={exp.company}
                    roles={exp.roles}
                    align={i % 2 === 0 ? "left" : "right"}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}

      <Canvas
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
        camera={{ position: [0, -5, 30], fov: 50 }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={0.8} />
        <Suspense fallback={null}>
          {experiences.map((exp, idx) => (
            <React.Fragment key={idx}>
              <FloatingShape
                position={[exp.position[0] * 1.5, exp.position[1] + 1, 0]}
                color={exp.roles[0].color}
              />
              <FloatingShape
                position={[exp.position[0] * -1, exp.position[1] + 0.5, 1]}
                color={exp.roles[0].color}
                shape="box"
                size={0.5}
              />
              <FloatingShape
                position={[exp.position[0] / 2, exp.position[1] - 1, -1]}
                color={exp.roles[0].color}
              />
            </React.Fragment>
          ))}
          <Stars
            radius={150}
            depth={60}
            count={5000}
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
  );
};

export default ExperienceTimeline3D;
