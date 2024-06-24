import { Box, SimpleGrid } from "@chakra-ui/react";
import { Merch } from "./MerchPage";
import MerchCardXl from "./MerchCards/MerchCardXl";
import MerchCardContainer from "./MerchCardContainer";
import MerchCardLg from "./MerchCards/MerchCardLg";
import MerchCardMed from "./MerchCards/MerchCardMed";
import MerchCardSml from "./MerchCards/MerchCardSml";

interface Props {
  columns: object;
  merchDisplayItems: Merch[];
  isLaptop: boolean;
}

const MerchGrid = ({ columns, merchDisplayItems, isLaptop }: Props) => {
  return (
    <SimpleGrid columns={columns}>
      {merchDisplayItems.map((item: Merch) => (
        <Box paddingRight={5} paddingBottom={5} key={item.id}>
          <MerchCardContainer item={item}>
            {item.size === "small" && (
              <MerchCardSml item={item} isLaptop={isLaptop} />
            )}
            {item.size === "medium" && (
              <MerchCardMed item={item} isLaptop={isLaptop} />
            )}
            {item.size === "large" && (
              <MerchCardLg item={item} isLaptop={isLaptop} />
            )}
            {item.size === "xl" && (
              <MerchCardXl item={item} isLaptop={isLaptop} />
            )}
          </MerchCardContainer>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default MerchGrid;
