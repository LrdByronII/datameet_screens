import { Card, CardBody, HStack, SkeletonText } from "@chakra-ui/react";

const NetworkCardSkeleton = () => {
  return (
    <Card height="100%" width="100%">
      <CardBody>
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

export default NetworkCardSkeleton;
