import { Box, SimpleGrid } from "@chakra-ui/react";
import { Membership } from "./MembershipPage";
import MembershipCardContainer from "./MembershipCardContainer";
import MembershipCardSml from "./MembershipCards/MembershipCardSml";
import MembershipCardMed from "./MembershipCards/MembershipCardMed";
import MembershipCardLg from "./MembershipCards/MembershipCardLg";
import MembershipCardXl from "./MembershipCards/MembershipCardXl";

interface Props {
  columns: number;
  membershipDisplayItems: Membership[];
  index?: number;
}

const MembershipGrid = ({ columns, membershipDisplayItems }: Props) => {
  return (
    <SimpleGrid columns={columns}>
      {membershipDisplayItems.map((item: Membership) => (
        <Box
          {...{
            paddingBottom: 3,
            paddingRight: 3,
          }}
          key={item.id}
        >
          <MembershipCardContainer item={item}>
            {item.size === "small" && <MembershipCardSml item={item} />}
            {item.size === "medium" && <MembershipCardMed item={item} />}
            {item.size === "large" && <MembershipCardLg item={item} />}
            {item.size === "xl" && <MembershipCardXl item={item} />}
          </MembershipCardContainer>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default MembershipGrid;
