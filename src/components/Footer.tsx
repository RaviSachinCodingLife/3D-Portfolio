import { Box, Grid, Typography, IconButton, keyframes } from "@mui/material";
import { LinkedIn, GitHub, Link } from "@mui/icons-material";

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
`;

export const Footer = () => {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/sachin-saurabh/",
      icon: <LinkedIn fontSize="medium" />,
    },
    {
      href: "https://github.com/RaviSachinCodingLife",
      icon: <GitHub fontSize="medium" />,
    },
    {
      href: "https://linktr.ee/ravicodinglife",
      icon: <Link fontSize="medium" />,
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        color: "#fff",
        py: { xs: 4, sm: 5, md: 6 }, 
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: { xs: -40, sm: -60 },
          left: { xs: -40, sm: -60 },
          width: { xs: 120, sm: 200 },
          height: { xs: 120, sm: 200 },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(22,242,179,0.3), transparent 70%)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: -40, sm: -60 },
          right: { xs: -40, sm: -60 },
          width: { xs: 140, sm: 220 },
          height: { xs: 140, sm: 220 },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(170,54,124,0.25), transparent 70%)",
        }}
      />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
        spacing={2}
        sx={{ position: "relative", zIndex: 2 }}
      >
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: { xs: 2, sm: 3, md: 4 }, 
            }}
          >
            {socialLinks.map((link, index) => (
              <IconButton
                key={index}
                component="a"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "#16f2b3",
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(22,242,179,0.3)",
                  transition: "all 0.3s ease",
                  animation: `${float} 3s ease-in-out infinite`,
                  animationDelay: `${index * 0.4}s`,
                  fontSize: { xs: "1.2rem", sm: "1.5rem" },
                  width: { xs: 40, sm: 50 },
                  height: { xs: 40, sm: 50 },
                  "&:hover": {
                    transform: "scale(1.2) translateY(-5px)",
                    boxShadow: "0px 0px 25px #16f2b3",
                  },
                }}
              >
                {link.icon}
              </IconButton>
            ))}
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Typography
            variant="body2"
            sx={{
              color: "#aaa",
              textAlign: "center",
              fontSize: { xs: "0.75rem", sm: "0.85rem", md: "1rem" }, 
              mt: 2,
            }}
          >
            © {new Date().getFullYear()} Portfolio Developed by{" "}
            <Typography
              component="a"
              href="https://www.linkedin.com/in/shahidkhan23/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#16f2b3",
                fontWeight: "600",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Sachin Saurabh
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
