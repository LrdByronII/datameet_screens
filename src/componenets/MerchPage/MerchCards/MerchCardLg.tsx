import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Merch } from "../MerchPage";
import pie from "../../../assets/pie.png";
import line_chart from "../../../assets/line_chart.png";

interface Props {
  item: Merch;
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
        {label === "Comparison Sales" && <Image src={line_chart} width={450} />}
        {label === "Inventory" && <Image src={pie} width={450} />}
      </CardBody>
    </Card>
  );
};

export default MerchCardLg;
