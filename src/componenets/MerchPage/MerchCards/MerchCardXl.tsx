import { Box, Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Merch } from "../MerchPage";
import bar_chart from "../../../assets/bar_chart.png";

interface Props {
  item: Merch;
}

const MerchCardXl = ({ item }: Props) => {
  return (
    <Card borderRadius={10} height={"100%"} width={"100%"}>
      <CardBody justifyContent={"space-between"}>
        <HStack paddingBottom={3}>
          <Heading fontWeight="bold" color="#161616" fontSize={item.size}>
            {item.label}
          </Heading>
        </HStack>
        <Box
          borderRadius={5}
          padding={2}
          bg={"green"}
          width={1115}
          height={204}
        >
          <Image src={bar_chart} borderRadius={3} width={1099} align="center" />
        </Box>
      </CardBody>
    </Card>
  );
};

export default MerchCardXl;
