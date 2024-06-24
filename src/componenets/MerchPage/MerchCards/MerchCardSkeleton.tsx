import { Card, CardBody, HStack, SkeletonText } from "@chakra-ui/react";

// interface Props {
//   isLaptop: boolean;
// }

const MerchCardSkeleton = () => {
  return (
    <Card height="100%" width="100%">
      <CardBody justifyContent={"space-between"}>
        <HStack>
          <SkeletonText />
        </HStack>
        <HStack paddingTop={10}>
          <SkeletonText />
        </HStack>
        <HStack paddingTop={1}>
          <SkeletonText />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default MerchCardSkeleton;
