import { Box, SimpleGrid } from "@chakra-ui/react";
import MerchCardContainer from "./MerchCardContainer";
import { Merch } from "./MerchPage";
import MerchCardSkeleton from "./MerchCardSkeleton";

interface Props {
  columns: number;
  merchDisplayItems: Merch[];
  index?: number;
}

const MerchGridSkeletons = ({ columns, merchDisplayItems }: Props) => {
  return (
    <SimpleGrid columns={columns}>
      {merchDisplayItems.map((item: Merch) => (
        <Box paddingRight={5} paddingBottom={5} key={item.id}>
          <MerchCardContainer size={item.size}>
            <MerchCardSkeleton />
          </MerchCardContainer>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default MerchGridSkeletons;
