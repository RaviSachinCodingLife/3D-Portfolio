import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Chip,
  List,
  ListItem,
} from "@mui/material";
import { styled } from "@mui/system";
import Pic from "../assets/img/Pic.png";
import colorSharp from "../assets/img/color-sharp2.png";

const GlassCard = styled(Card)(() => ({
  background: "rgba(255, 255, 255, 0.05)",
  borderRadius: "20px",
  padding: "2rem",
  backdropFilter: "blur(12px)",
  border: "1px solid rgba(255, 255, 255, 0.15)",
  boxShadow:
    "0 10px 30px rgba(0, 0, 0, 0.7), inset 0 0 20px rgba(22,242,179,0.15)",
  transformStyle: "preserve-3d",
  transition: "all 0.5s ease",
  "&:hover": {
    transform: "translateY(-12px) rotateX(2deg) rotateY(-2deg) scale(1.02)",
    boxShadow:
      "0 20px 60px rgba(22,242,179,0.7), 0px 0px 40px rgba(168,85,247,0.7)",
  },
}));

const GradientHeading = styled(Typography)(() => ({
  fontWeight: 700,
  fontSize: "2rem",
  background: "linear-gradient(90deg,#00f7ff,#a855f7)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  textShadow: "0px 0px 12px rgba(168,85,247,0.7)",
}));

const ProfileWrapper = styled(Box)(() => ({
  position: "relative",
  display: "inline-block",
  perspective: "1200px",
}));

const ProfileImage = styled("img")(() => ({
  borderRadius: "20px",
  height: "100%",
  width: "100%",
  objectFit: "cover",
  border: "2px solid rgba(22,242,179,0.5)",
  boxShadow:
    "0px 15px 40px rgba(22, 242, 179, 0.5), 0px 0px 35px rgba(168, 85, 247, 0.8)",
  transform: "rotateY(10deg) rotateX(4deg)",
  transition: "all 0.6s ease",
  "&:hover": {
    transform: "rotateY(0deg) rotateX(0deg) scale(1.08)",
    boxShadow:
      "0px 25px 70px rgba(22, 242, 179, 0.9), 0px 0px 60px rgba(168, 85, 247, 1)",
  },
}));

const About = () => {
  const professionalHighlights = [
    "Built real-time fintech apps using WebSockets + React",
    "Optimized stock dashboards with AG Grid + GraphQL, reducing load time by 30%",
    "Improved app performance with lazy loading & code splitting",
    "Delivered clean, modular UIs for better collaboration",
  ];

  const skills = [
    "React.js",
    "TypeScript",
    "Redux",
    "Next.js",
    "MUI",
    "Tailwind",
    "AWS",
    "WebSockets",
    "GraphQL",
  ];

  return (
    <Box
      id="about"
      sx={{
        position: "relative",
        minHeight: "100vh",
        px: { xs: 3, sm: 4, md: 8 },
        py: { xs: 6, sm: 8, md: 12 },
        background:
          "radial-gradient(circle at top left, #0f2027, #203a43, #2c5364)",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      <Grid
        container
        spacing={6}
        alignItems="center"
        sx={{ flexDirection: { xs: "column", md: "row" } }}
      >
        <Grid size={{ xs: 12, md: 8 }}>
          <GlassCard sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
            <CardContent>
              <GradientHeading
                variant="h3"
                sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" } }}
              >
                Who I am?
              </GradientHeading>
              <Typography
                variant="body1"
                sx={{
                  mt: 2,
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.15rem" },
                  lineHeight: 1.8,
                  color: "#e0e0e0",
                }}
              >
                I’m <b>Sachin Saurabh</b>, a{" "}
                <b>Frontend Developer with 2.3+ years</b> of experience in{" "}
                <b>React.js, TypeScript, Redux, and Next.js</b>. I specialize in{" "}
                <b>
                  real-time web apps, API integrations, and performance
                  optimization
                </b>
                . I’ve worked on stock dashboards, fintech platforms, and
                real-time collaboration tools at <b>MSBC Group</b>, and
                previously interned as a <b>Java Developer at Neurosynaptic</b>.
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  mt: 3,
                  mb: 1,
                  fontWeight: 600,
                  color: "rgb(22,242,179)",
                  textShadow: "0px 0px 12px rgba(22,242,179,0.8)",
                  fontSize: { xs: "1.1rem", md: "1.3rem" },
                }}
              >
                Core Skills
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1,
                  mb: 3,
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                {skills.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    sx={{
                      background:
                        "linear-gradient(90deg, rgba(22,242,179,0.2), rgba(168,85,247,0.2))",
                      color: "#fff",
                      border: "1px solid rgba(255,255,255,0.2)",
                      fontWeight: 500,
                      fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.9rem" },
                      "&:hover": {
                        background: "linear-gradient(90deg, #00f7ff, #a855f7)",
                        boxShadow: "0px 0px 12px rgba(0,255,255,0.8)",
                      },
                    }}
                  />
                ))}
              </Box>

              <Typography
                variant="h5"
                sx={{
                  mt: 2,
                  mb: 1,
                  fontWeight: 600,
                  color: "rgb(22,242,179)",
                  textShadow: "0px 0px 12px rgba(22,242,179,0.8)",
                  fontSize: { xs: "1.1rem", md: "1.3rem" },
                }}
              >
                Professional Highlights
              </Typography>
              <List sx={{ color: "#ccc", lineHeight: 1.8 }}>
                {professionalHighlights.map((item, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      position: "relative",
                      pl: 2,
                      fontSize: { xs: "0.75rem", sm: "0.85rem", md: "0.95rem" },
                      "&::before": {
                        content: '"•"',
                        position: "absolute",
                        left: 0,
                        color: "#00f7ff",
                        fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                      },
                    }}
                  >
                    {item}
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </GlassCard>
        </Grid>

        <Grid
          size={{ xs: 12, md: 4 }}
          sx={{ textAlign: "center", mt: { xs: 4, md: 0 } }}
        >
          <ProfileWrapper
            sx={{
              width: { xs: "220px", sm: "280px", md: "320px" },
              margin: "0 auto",
            }}
          >
            <ProfileImage src={Pic} alt="Sachin Saurabh" />
          </ProfileWrapper>
        </Grid>
      </Grid>

      <Box
        component="img"
        src={colorSharp}
        alt="bg-shape"
        sx={{
          position: "absolute",
          bottom: -40,
          right: -80,
          width: { xs: "250px", sm: "350px", md: "420px" },
          opacity: 0.1,
          transform: "rotate(-15deg)",
        }}
      />
    </Box>
  );
};

export default About;
