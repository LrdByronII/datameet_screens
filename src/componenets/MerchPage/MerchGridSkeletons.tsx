import { Box, SimpleGrid } from "@chakra-ui/react";
import MerchCardContainer from "./MerchCardContainer";
import { Merch } from "./MerchPage";
import MerchCardSkeleton from "./MerchCards/MerchCardSkeleton";

interface Props {
  columns: object;
  merchDisplayItems: Merch[];
  isLaptop: boolean;
}

const MerchGridSkeletons = ({ columns, merchDisplayItems }: Props) => {
  return (
    <SimpleGrid columns={columns}>
      {merchDisplayItems.map((item: Merch) => (
        <Box paddingRight={5} paddingBottom={5} key={item.id}>
          <MerchCardContainer item={item}>
            <MerchCardSkeleton />
          </MerchCardContainer>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default MerchGridSkeletons;
