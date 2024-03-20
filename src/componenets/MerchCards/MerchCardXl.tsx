import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  // Skeleton,
  Text,
} from "@chakra-ui/react";
import { Merch } from "../MerchPage";
import half_bar from "../assets/half_bar.png";
import pie from "../assets/pie.png";
import bar_chart from "../assets/bar_chart.png";
import line_chart from "../assets/line_chart.png";

interface Props {
  item: Merch;
}

const MerchCardXl = ({ item }: Props) => {
  return (
    <Card borderRadius={10} height={"100%"} width={"100%"}>
      {/* <Skeleton height={100} /> */}
      <CardBody justifyContent={"space-between"}>
        <HStack>
          <Heading fontWeight="bold" color="#161616" fontSize={item.size}>
            {item.label}
          </Heading>
        </HStack>
        {item.label === "Total Merchandise Sales" && (
          <Image paddingBottom={2} src={half_bar} width={250} />
        )}
        {item.label === "Actual Sales vs Budget" && (
          <Image src={bar_chart} width={800} align="center" />
        )}
        {item.label === "Comparison Sales" && (
          <Image src={line_chart} width={450} />
        )}
        {item.label === "Inventory" && <Image src={pie} width={450} />}
        {item.size === "small" && (
          <>
            <HStack paddingTop={2}>
              <Text fontWeight="bold" color="#000000">
                Total: {item.data}
              </Text>
            </HStack>
            <HStack paddingTop={1}>
              <Text
                fontWeight="bold"
                color={item.value === "-45%" ? "#df4036" : "green"}
              >
                {item.value !== "-45%" ? "Target: " + item.value : item.value}
              </Text>
            </HStack>
          </>
        )}
        {item.size === "medium" && (
          <>
            <HStack>
              <Text fontWeight="bold" color="#000000">
                Total: {item.data}
              </Text>
              <Text
                fontWeight="bold"
                color={item.value === "-45%" ? "#df4036" : "green"}
              >
                {item.value !== "-45%" ? "Target: " + item.value : item.value}
              </Text>
            </HStack>
          </>
        )}
      </CardBody>
    </Card>
  );
};

export default MerchCardXl;
