import { Stack, Box, Typography, Input, Button } from "@mui/material";
import InputField from "../../components/InputField";

const Login = () => {
  return (
    <Stack
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F5F5F5",
      }}
    >
      <Stack
        sx={{
          width: "80%",
          height: "80%",
          flexDirection: { xs: "column", md: "row" },
          backgroundColor: "white",
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Box
          sx={{ backgroundColor: "#011e3e", width: "50%", textAlign: "center" }}
        >
          <Box
            component="img"
            src="src/assets/images/campus-verse-hero-img.png"
            sx={{ height: "100%", width: "100%", objectFit: "contain" }}
          ></Box>
        </Box>
        <Stack
          sx={{
            alignItems: "center",
            justifyContent: "center",
            width: "50%",
            padding: 10,
            boxSizing: "border-box",
          }}
        >
          <Stack sx={{ width: "100%", height: "100%", gap: 5 }}>
            <Stack gap={3}>
              <Typography
                variant="h5"
                component={"h5"}
                sx={{ color: "text.primary", fontWeight: "700" }}
              >
                Log In
              </Typography>
              <InputField label="Email" />
              <InputField label="Password" />
              <Stack
                sx={{ flexDirection: "row", justifyContent: "space-between" }}
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
              <Typography variant="body1" component={"h5"} color="black">
                Don’t have an account?{" "}
                <Typography
                  variant="body1"
                  component={"span"}
                  color="text.primary"
                  sx={{ fontWeight: "800" }}
                >
                  Sign Up
                </Typography>
              </Typography>
              <Stack>
                <Typography
                  variant="body2"
                  component={"h6"}
                  color="text.secondary"
                >
                  or
                </Typography>
                <Typography
                  variant="body1"
                  component={"p"}
                  color="text.secondary"
                  sx={{ fontWeight: "700" }}
                >
                  Log In With
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Login;
