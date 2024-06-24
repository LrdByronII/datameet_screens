import { Card, CardBody, HStack, SkeletonText } from "@chakra-ui/react";

// interface Props {
//   isLaptop: boolean;
// }

const MembershipCardSkeleton = () => {
  return (
    <Card borderRadius={10} height="100%" width="100%">
      <CardBody>
        <HStack>
          <SkeletonText />
        </HStack>
        <HStack>
          <SkeletonText />
        </HStack>
        <HStack>
          <SkeletonText />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default MembershipCardSkeleton;
