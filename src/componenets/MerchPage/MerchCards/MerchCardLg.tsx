import { Card, CardBody, HStack, Heading } from "@chakra-ui/react";
import { Merch } from "../MerchPage";

interface Props {
  item: Merch;
  isLaptop: boolean;
}

const MerchCardLg = ({ item: { label } }: Props) => {
  return (
    <Card borderRadius={10} height={"100%"} width={"100%"}>
      <CardBody justifyContent={"space-between"}>
        <HStack>
          <Heading fontWeight="bold" color="#161616" fontSize={"large"}>
            {label}
          </Heading>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default MerchCardLg;
