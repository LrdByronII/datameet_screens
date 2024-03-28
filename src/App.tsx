import "./App.css";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import MerchPage from "./componenets/MerchPage/MerchPage";
import MembershipPage from "./componenets/MembershipPage/MembershipPage";
import NetworkPage from "./componenets/NetworkPage/NetworkPage";

function App() {
  return (
    <>
      <Grid>
        <GridItem area="nav"></GridItem>
        <GridItem area="aside"></GridItem>
        <GridItem area="main">
          <Box>
            <MerchPage />
            <MembershipPage />
            <NetworkPage />
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
