import { Stack, Typography, Input } from "@mui/material";

const InputField = ({ label }) => {
  return (
    <Stack spacing={1}>
      <Typography
        variant="body1"
        component={"h5"}
        sx={{ color: "text.secondary" }}
      >
        {label}
      </Typography>
      <Input
        id={label}
        sx={{
          border: "1px solid #E4E4E4",
          borderRadius: "4px",
          backgroundColor: "#F1F1F1",
          height: "40px",
          padding: "10px",
          "&::before": {
            content: "none",
          },
          "&::after": {
            content: "none",
          },
        }}
      />
    </Stack>
  );
};

export default InputField;
