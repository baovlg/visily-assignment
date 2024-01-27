import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import Content from "@/components/Content";
import { Box, Stack } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <Header />
      <Stack direction="row">
        <SideBar />
        <Content />
      </Stack>
    </Box>
  );
}
