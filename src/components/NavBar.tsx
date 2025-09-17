import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const navItems = [
  { name: "home", label: "Home" },
  { name: "about", label: "About" },
  { name: "experience", label: "Experience" },
  { name: "skills", label: "Skills" },
  { name: "education", label: "Education" },
  { name: "projects", label: "Projects" },
  { name: "connect", label: "Contact" },
];

export const NavBar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("home");

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const handleNavClick = (name: string) => {
    setActive(name);
    const section = document.querySelector(`#${name}`);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";
      navItems.forEach((item) => {
        const section = document.querySelector(`#${item.name}`);
        if (section) {
          const top = section.getBoundingClientRect().top;
          if (top <= 120) current = item.name;
        }
      });
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const drawer = (
    <Box
      sx={{
        width: 250,
        height: "100%",
        background: "rgba(15,32,39,0.85)",
        color: "white",
        backdropFilter: "blur(10px)",
        p: 2,
      }}
    >
      <Typography variant="h6" sx={{ mb: 2, textAlign: "center" }}>
        Sachin Saurabh
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.name}
            component="div"
            onClick={() => handleNavClick(item.name)}
            sx={{
              borderRadius: "12px",
              mb: 1,
              "&:hover": {
                background: "rgba(0,255,255,0.2)",
                boxShadow: "0px 0px 12px #00f7ff",
              },
              background:
                active === item.name
                  ? "linear-gradient(90deg, #0ff, #a855f7)"
                  : "transparent",
            }}
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          background: "rgba(15,32,39,0.6)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255,255,255,0.2)",
          boxShadow: "0px 4px 20px rgba(0, 255, 255,0.2)",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: { xs: 1, sm: 2, md: 6 },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: { xs: "1rem", sm: "1.3rem", md: "1.5rem" },
              background: "linear-gradient(90deg, #00f7ff, #a855f7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            onClick={() => handleNavClick("home")}
          >
            Sachin Saurabh
          </Typography>

          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              gap: { sm: 1.5, md: 2.5 },
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.name}
                onClick={() => handleNavClick(item.name)}
                sx={{
                  color: "white",
                  fontWeight: active === item.name ? "bold" : "normal",
                  fontSize: { sm: "0.8rem", md: "0.9rem" },
                  borderRadius: "20px",
                  px: { sm: 1.5, md: 2 },
                  transition: "all 0.3s ease",
                  background:
                    active === item.name
                      ? "linear-gradient(90deg, #0ff, #a855f7)"
                      : "transparent",
                  boxShadow:
                    active === item.name
                      ? "0 0 15px rgba(0,255,255,0.8)"
                      : "none",
                  "&:hover": {
                    background: "rgba(0,255,255,0.2)",
                    boxShadow: "0 0 12px #00f7ff",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          <IconButton
            sx={{
              display: { xs: "block", sm: "none" },
              color: "white",
            }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { xs: "block", sm: "none" } }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};
