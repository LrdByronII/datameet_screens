import { Box, SimpleGrid } from "@chakra-ui/react";
import { Network } from "./NetworkPage";
import NetworkCardContainer from "./NetworkCardContainer";
import NetworkCardSkeleton from "./NetworkCards/NetworkCardSkeleton";

interface Props {
  columns: number;
  networkDisplayItems: Network[];
  index?: number;
}

const NetworkGridSkeletons = ({ columns, networkDisplayItems }: Props) => {
  return (
    <SimpleGrid columns={columns}>
      {networkDisplayItems.map((item: Network) => (
        <Box paddingRight={5} paddingBottom={5} key={item.id}>
          <NetworkCardContainer item={item}>
            <NetworkCardSkeleton />
          </NetworkCardContainer>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default NetworkGridSkeletons;
