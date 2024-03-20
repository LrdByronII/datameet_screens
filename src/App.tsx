import "./App.css";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import MembershipPage from "./componenets/MembershipPage/MembershipPage";
import MerchPage from "./componenets/MerchPage/MerchPage";
import NetworkPage from "./componenets/NetworkPage/NetworkPage";

function App() {
  return (
    <>
      <Grid>
        <GridItem area="nav"></GridItem>
        <GridItem area="aside"></GridItem>
        <GridItem area="main">
          <Box>
            <NetworkPage />
            <MembershipPage />
            <MerchPage />
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
