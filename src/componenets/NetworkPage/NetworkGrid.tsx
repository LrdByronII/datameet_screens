import { Box, SimpleGrid } from "@chakra-ui/react";
import NetworkCardContainer from "./NetworkCardContainer";
import NetworkCardSml from "./NetworkCards/NetworkCardSml";
import NetworkCardMed from "./NetworkCards/NetworkCardMed";
import NetworkCardLg from "./NetworkCards/NetworkCardLg";
import NetworkCardXl from "./NetworkCards/NetworkCardXl";
import { Network } from "./NetworkPage";

interface Props {
  columns: number;
  networkDisplayItems: Network[];
  index?: number;
}

const NetworkGrid = ({ columns, networkDisplayItems }: Props) => {
  return (
    <SimpleGrid columns={columns}>
      {networkDisplayItems.map((item: Network) => (
        <Box
          {...{
            paddingBottom: 3,
            paddingRight: 3,
          }}
          key={item.id}
        >
          <NetworkCardContainer item={item}>
            {item.size === "small" && <NetworkCardSml item={item} />}
            {item.size === "medium" && <NetworkCardMed item={item} />}
            {item.size === "large" && <NetworkCardLg item={item} />}
            {item.size === "xl" && <NetworkCardXl item={item} />}
          </NetworkCardContainer>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default NetworkGrid;
