import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Merch } from "../MerchPage";
import bar_chart from "../../../assets/bar_chart.png";

interface Props {
  item: Merch;
}

const MerchCardXl = ({ item }: Props) => {
  return (
    <Card borderRadius={10} height={"100%"} width={"100%"}>
      <CardBody justifyContent={"space-between"}>
        <HStack>
          <Heading fontWeight="bold" color="#161616" fontSize={item.size}>
            {item.label}
          </Heading>
        </HStack>
        <Image src={bar_chart} width={800} align="center" />
      </CardBody>
    </Card>
  );
};

export default MerchCardXl;
