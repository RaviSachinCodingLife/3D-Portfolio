import React, { useState } from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const Contact = () => {
  const [formDetails, setFormDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [buttonText, setButtonText] = useState("Send");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setButtonText("Sending...");

    try {
      await emailjs.send(
        "service_nn9c2nm",
        "template_iuittjn",
        {
          from_name: `${formDetails.firstName} ${formDetails.lastName}`,
          from_email: formDetails.email,
          phone: formDetails.phone,
          message: formDetails.message,
          to_email: "ravisachin36@gmail.com",
        },
        "bog2P2ce2t3sPoKA9"
      );

      toast.success("Message sent successfully!");
      setFormDetails({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Try again!");
    }

    setButtonText("Send");
  };

  return (
    <Box
      id="connect"
      sx={{
        py: { xs: 6, sm: 8, md: 10 },
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background:
          "radial-gradient(circle at top left, #0f2027, #203a43, #2c5364)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: { xs: "8%", sm: "12%" },
          left: { xs: "4%", sm: "6%" },
          width: { xs: 100, sm: 140 },
          height: { xs: 100, sm: 140 },
          borderRadius: "50%",
          background: "linear-gradient(135deg, #00f7ff, #a855f7)",
          filter: "blur(70px)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: "12%", sm: "18%" },
          right: { xs: "8%", sm: "12%" },
          width: { xs: 120, sm: 170 },
          height: { xs: 120, sm: 170 },
          borderRadius: "50%",
          background: "linear-gradient(135deg, #ff00ff, #00f7ff)",
          filter: "blur(90px)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="sm" sx={{ position: "relative", zIndex: 1 }}>
        <Paper
          elevation={10}
          sx={{
            p: { xs: 3, sm: 5 },
            borderRadius: 4,
            background: "rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(14px)",
            border: "1px solid rgba(255,255,255,0.2)",
            boxShadow: "0 8px 32px rgba(0, 247, 255, 0.3)",
            transform: "perspective(1000px) rotateX(2deg) rotateY(-2deg)",
            transition: "transform 0.4s ease",
            "&:hover": {
              transform:
                "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1.02)",
              boxShadow: "0 12px 40px rgba(0, 247, 255, 0.5)",
            },
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            align="center"
            sx={{
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
              background: "linear-gradient(90deg, #00f7ff, #a855f7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "bold",
              mb: { xs: 2, sm: 3 },
            }}
          >
            Get In Touch
          </Typography>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  name="firstName"
                  label="First Name"
                  value={formDetails.firstName}
                  onChange={handleChange}
                  InputProps={{
                    style: {
                      color: "#fff",
                      borderRadius: "12px",
                      background: "rgba(255,255,255,0.05)",
                    },
                  }}
                  InputLabelProps={{ style: { color: "#bbb" } }}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  name="lastName"
                  label="Last Name"
                  value={formDetails.lastName}
                  onChange={handleChange}
                  InputProps={{
                    style: {
                      color: "#fff",
                      borderRadius: "12px",
                      background: "rgba(255,255,255,0.05)",
                    },
                  }}
                  InputLabelProps={{ style: { color: "#bbb" } }}
                />
              </Grid>

              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  name="email"
                  type="email"
                  label="Email Address"
                  value={formDetails.email}
                  onChange={handleChange}
                  InputProps={{
                    style: {
                      color: "#fff",
                      borderRadius: "12px",
                      background: "rgba(255,255,255,0.05)",
                    },
                  }}
                  InputLabelProps={{ style: { color: "#bbb" } }}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  name="phone"
                  type="tel"
                  label="Phone No."
                  value={formDetails.phone}
                  onChange={handleChange}
                  InputProps={{
                    style: {
                      color: "#fff",
                      borderRadius: "12px",
                      background: "rgba(255,255,255,0.05)",
                    },
                  }}
                  InputLabelProps={{ style: { color: "#bbb" } }}
                />
              </Grid>

              <Grid size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  multiline
                  rows={5}
                  name="message"
                  label="Message"
                  value={formDetails.message}
                  onChange={handleChange}
                  InputProps={{
                    style: {
                      color: "#fff",
                      borderRadius: "12px",
                      background: "rgba(255,255,255,0.05)",
                    },
                  }}
                  InputLabelProps={{ style: { color: "#bbb" } }}
                />
              </Grid>

              <Grid size={{ xs: 12 }}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  endIcon={<SendIcon />}
                  sx={{
                    py: { xs: 1.2, sm: 1.5 },
                    borderRadius: "12px",
                    background: "linear-gradient(90deg,#00f7ff,#a855f7)",
                    fontWeight: "bold",
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                    boxShadow: "0px 0px 20px rgba(0,247,255,0.5)",
                    "&:hover": {
                      background: "linear-gradient(90deg,#a855f7,#00f7ff)",
                      boxShadow: "0px 0px 30px rgba(0,247,255,0.8)",
                    },
                  }}
                >
                  {buttonText}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default Contact;
