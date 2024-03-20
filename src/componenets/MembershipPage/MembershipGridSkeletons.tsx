import { Box, SimpleGrid } from "@chakra-ui/react";
import { Membership } from "./MembershipPage";
import MembershipCardContainer from "./MembershipCardContainer";
import MembershipCardSkeleton from "./MembershipCards/MembershipCardSkeleton";

interface Props {
  columns: number;
  membershipDisplayItems: Membership[];
  index?: number;
}

const MembershipGridSkeletons = ({
  columns,
  membershipDisplayItems,
}: Props) => {
  return (
    <SimpleGrid columns={columns}>
      {membershipDisplayItems.map((item: Membership) => (
        <Box paddingRight={5} paddingBottom={5} key={item.id}>
          <MembershipCardContainer item={item}>
            <MembershipCardSkeleton />
          </MembershipCardContainer>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default MembershipGridSkeletons;
