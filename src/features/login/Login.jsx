import { Stack, Box, Typography, Input, Button } from "@mui/material";
import InputField from "@/components/InputField";
import GoogleIcon from "@/assets/images/google-icon.svg?react";
import TwitterIcon from "@/assets/images/twitter-icon.svg?react";
import FacebookIcon from "@/assets/images/facebook-icon.svg?react";
import mainImage from "@/assets/images/campus-verse-hero-img.png";

const Login = () => {
  return (
    <Stack
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: { xs: "#021E3D", md: "#F5F5F5" },
      }}
    >
      <Stack
        sx={{
          width: { xs: "95%", sm: "80%" },
          maxWidth: { xs: "450px", md: "80%" },
          height: "90%",
          maxHeight: "700px",
          flexDirection: { xs: "column", md: "row" },
          backgroundColor: "white",
          justifyContent: "center",
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Box
          sx={{ backgroundColor: "#011e3e", width: "50%", textAlign: "center" }}
        >
          <Box
            component="img"
            src={mainImage}
            sx={{
              height: "100%",
              width: "100%",
              objectFit: "contain",
              display: { xs: "none", md: "block" },
            }}
          ></Box>
        </Box>
        <Stack
          sx={{
            alignItems: "center",
            justifyContent: "center",
            width: { xs: "100%", md: "50%" },
            height: "100%",
            paddingX: { xs: 5, lg: 10 },
            paddingY: 5,
            boxSizing: "border-box",
          }}
        >
          <Stack
            sx={{
              width: "100%",
              flex: 1,
              justifyContent: "space-between",
              overflow: "auto",
              maxHeight: "550px",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            <Typography
              variant="h5"
              component={"h5"}
              sx={{ color: "text.primary", fontWeight: "700" }}
            >
              Log In
            </Typography>
            <InputField label="Email" />
            <Stack gap={2}>
              <InputField label="Password" />
              <Stack
                sx={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "start",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "18px",
                    padding: "10px 20px",
                    textTransform: "none",
                  }}
                  disableRipple
                >
                  Log In
                </Button>
                <Typography
                  variant="body1"
                  component={"h5"}
                  color="text.secondary"
                  sx={{ cursor: "pointer", textDecoration: "underline" }}
                >
                  Forget Password?
                </Typography>
              </Stack>
            </Stack>

            <Typography variant="body1" component={"h5"} color="black">
              Don’t have an account?{" "}
              <Typography
                variant="body1"
                component={"span"}
                color="text.primary"
                sx={{ fontWeight: "800", cursor: "pointer" }}
              >
                Sign Up
              </Typography>
            </Typography>
            <Typography variant="body2" component={"h6"} color="text.secondary">
              or
            </Typography>
            <Stack sx={{ gap: 2 }}>
              <Typography
                variant="body1"
                component={"p"}
                color="text.secondary"
                sx={{ fontWeight: "700" }}
              >
                Log In with
              </Typography>
              <Stack sx={{ flexDirection: "row", gap: "10px" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "44px",
                    height: "44px",
                    borderRadius: "4px",
                    border: "1px solid #E4E4E4",
                    backgroundColor: "#F1F1F1",
                    cursor: "pointer",
                  }}
                >
                  <GoogleIcon />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    width: "44px",
                    height: "44px",
                    borderRadius: "4px",
                    border: "1px solid #E4E4E4",
                    backgroundColor: "#F1F1F1",
                    cursor: "pointer",
                  }}
                >
                  <TwitterIcon />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "44px",
                    height: "44px",
                    borderRadius: "4px",
                    border: "1px solid #E4E4E4",
                    backgroundColor: "#F1F1F1",
                    cursor: "pointer",
                  }}
                >
                  <FacebookIcon />
                </Box>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Login;
