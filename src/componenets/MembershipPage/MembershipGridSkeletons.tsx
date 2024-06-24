import { Box, SimpleGrid } from "@chakra-ui/react";
import { Membership } from "./MembershipPage";
import MembershipCardContainer from "./MembershipCardContainer";
import MembershipCardSkeleton from "./MembershipCards/MembershipCardSkeleton";

interface Props {
  columns: object;
  membershipDisplayItems: Membership[];
  isLaptop: boolean;
}

const MembershipGridSkeletons = ({
  columns,
  membershipDisplayItems,
}: Props) => {
  return (
    <SimpleGrid columns={columns}>
      {membershipDisplayItems.map((item: Membership) => (
        <Box paddingRight={3} paddingBottom={3} key={item.id}>
          <MembershipCardContainer item={item}>
            <MembershipCardSkeleton />
          </MembershipCardContainer>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default MembershipGridSkeletons;
