import { Box, SimpleGrid } from "@chakra-ui/react";
import MerchCardXl from "./MerchCards/MerchCardXl";
import MerchCardContainer from "./MerchCardContainer";
import { Merch } from "./MerchPage";
import MerchCardLg from "./MerchCards/MerchCardLg";
import MerchCardMed from "./MerchCards/MerchCardMed";
import MerchCardSml from "./MerchCards/MerchCardSml";

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
            {item.size === "small" && <MerchCardSml item={item} />}
            {item.size === "medium" && <MerchCardMed item={item} />}
            {item.size === "large" && <MerchCardLg item={item} />}
            {item.size === "xl" && <MerchCardXl item={item} />}
          </MerchCardContainer>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default MerchGrid;
