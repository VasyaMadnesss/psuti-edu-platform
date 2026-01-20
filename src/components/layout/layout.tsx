import { Box, Container, useTheme } from "@mui/material";
import ResponsiveAppBar from "../responsive-app-bar/responsive-app-bar";
import { Outlet } from "react-router";

interface PlaygroundProps {
  onSwitchLightModeClick(e: React.MouseEvent): void;
  lightMode: boolean;
}

export const Layout = ({
  onSwitchLightModeClick,
  lightMode,
}: PlaygroundProps) => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          minHeight: "100vh", 
          bgcolor: theme.palette.background.default, 
          color: theme.palette.text.primary,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ResponsiveAppBar
          onSwitchLightModeClick={onSwitchLightModeClick}
          lightMode={lightMode}
        />
        <Container maxWidth="lg">
          <Outlet />
        </Container>
      </Box>
    </>
  );
};
