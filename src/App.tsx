import "./App.css";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import MerchPage from "./componenets/MerchPage/MerchPage";

function App() {
  return (
    <>
      <Grid>
        <GridItem area="nav"></GridItem>
        <GridItem area="aside"></GridItem>
        <GridItem area="main">
          <Box>
            <MerchPage />
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
