import { Card, CardBody, HStack, Heading, Text } from "@chakra-ui/react";
import { Merch } from "../MerchPage";
import numberFormatter from "../../../services/numberFormatter";
import moneyFormatter from "../../../services/moneyFormatter";

interface Props {
  item: Merch;
  isLaptop: boolean;
}

const MerchCardSml = ({ item: { label, total } }: Props) => {
  return (
    <Card borderRadius={10} height={"100%"} width={"100%"}>
      <CardBody padding={4} justifyContent={"space-between"}>
        <HStack>
          <Heading fontWeight="bold" color="#161616" fontSize={"small"}>
            {label}
          </Heading>
        </HStack>
        <>
          <HStack paddingTop={3}>
            <Text fontSize={"x-large"} fontWeight="bold" color="#000000">
              {label === "Total Inventory - Items"
                ? numberFormatter(total)
                : moneyFormatter(total)}
            </Text>
          </HStack>
          {/* <HStack paddingTop={3}>
            <Text
              fontWeight="bold"
              color={text2 === "-45%" ? "#df4036" : "green"}
            >
              {text2}
            </Text>
          </HStack> */}
        </>
      </CardBody>
    </Card>
  );
};

export default MerchCardSml;
