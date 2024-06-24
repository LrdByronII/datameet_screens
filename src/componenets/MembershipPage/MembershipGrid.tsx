import { Box, SimpleGrid } from "@chakra-ui/react";
import { Membership } from "./MembershipPage";
import MembershipCardContainer from "./MembershipCardContainer";
import MembershipCardSml from "./MembershipCards/MembershipCardSml";
import MembershipCardMed from "./MembershipCards/MembershipCardMed";
import MembershipCardLg from "./MembershipCards/MembershipCardLg";
import MembershipCardXl from "./MembershipCards/MembershipCardXl";

interface Props {
  columns: object;
  membershipDisplayItems: Membership[];
  isLaptop: boolean;
}

const MembershipGrid = ({
  columns,
  membershipDisplayItems,
  isLaptop,
}: Props) => {
  return (
    <SimpleGrid columns={columns}>
      {membershipDisplayItems.map((item: Membership) => (
        <Box paddingBottom={3} paddingRight={3} key={item.id}>
          <MembershipCardContainer item={item}>
            {item.size === "small" && (
              <MembershipCardSml item={item} isLaptop={isLaptop} />
            )}
            {item.size === "medium" && (
              <MembershipCardMed item={item} isLaptop={isLaptop} />
            )}
            {item.size === "large" && (
              <MembershipCardLg item={item} isLaptop={isLaptop} />
            )}
            {item.size === "xl" && (
              <MembershipCardXl item={item} isLaptop={isLaptop} />
            )}
          </MembershipCardContainer>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default MembershipGrid;
