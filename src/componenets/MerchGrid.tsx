import { Box, SimpleGrid } from "@chakra-ui/react";
import MerchCardXl from "./MerchCards/MerchCardXl";
import MerchCardContainer from "./MerchCardContainer";
import { Merch } from "./MerchPage";

interface Props {
  columns: number;
  merchDisplayItems: Merch[];
  index?: number;
}

const MerchGrid = ({ columns, merchDisplayItems }: Props) => {
  return (
    <SimpleGrid columns={columns}>
      {merchDisplayItems.map((item: Merch) => (
        <Box paddingRight={5} paddingBottom={5} key={item.id}>
          <MerchCardContainer size={item.size}>
            <MerchCardXl item={item} />
          </MerchCardContainer>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default MerchGrid;
