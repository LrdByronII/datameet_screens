import { Box, HStack } from "@chakra-ui/react";
import { Text } from "@mantine/core";
import dummyData from "../../data/dummyData";
import useKPIs, { KPIResponse } from "../../hooks/useKPIs";
import MerchGrid from "./MerchGrid";
import MerchGridSkeletons from "./MerchGridSkeletons";
import { useState } from "react";

export interface Merch {
  id: number;
  label: string;
  text1: string;
  text2: string;
  total: number;
  target: number;
  size: string;
}

const MerchPage = () => {
  // const device = { sml: 1, xl: 2}
  const [isLaptop, setIsLaptop] = useState(true);

  const {
    data: salesData,
    error: salesError,
    isLoading: isSalesLoading,
  } = useKPIs("merchandise-sales");
  const {
    data: inventoryData,
    error: inventoryError,
    isLoading: isInventoryLoading,
  } = useKPIs("merchandise-inventory");

  const kpis = { ...inventoryData?.body, ...salesData?.body } as KPIResponse;

  if (salesError || inventoryError)
    return (
      <Text>
        Error: {salesError ? salesError.message : inventoryError?.message}
      </Text>
    );

  const mapWithLabel = (label: string) => {
    let total = 1;
    let target = 69;

    switch (label) {
      case "Total Members":
        total = kpis?.regs_total;
        break;
      case "TOTAL REVENUE ext GST":
        total = kpis?.sales_total_ex;
        target = kpis?.sales_target_ex;
        break;
      case "MEMBERSHIP":
        total = kpis?.registration_total;
        target = kpis?.registration_target;
        break;
      case "CHURN":
        total = kpis?.members_ytr;
        target = kpis?.previous_season_members_total;
        break;
      case "NEW MEMBERS":
        total = kpis?.regs_new;
        target = kpis?.new_registration_target;
        break;
      case "New + Returning":
        total = kpis?.members_new + kpis?.members_returning;
        target = kpis?.members_new_spend_gain;
        break;
      case "Downsizers":
        total = kpis?.members_renewed_downsizers;
        target = kpis?.members_renewed_downsizers_spend_loss;
        break;
      case "Upsizers":
        total = kpis?.members_renewed_upsizers;
        target = kpis?.members_renewed_upsizers_spend_gain;
        break;
      case "Down/Up Balance":
        total =
          kpis?.members_renewed_upsizers - kpis?.members_renewed_downsizers;
        target =
          kpis?.members_renewed_upsizers_spend_gain -
          kpis?.members_renewed_downsizers_spend_loss;
        break;
      case "Total Inventory - Items":
        total = kpis?.outlets?.reduce(
          (acc: number, outlet: any) => acc + outlet["stock_level"],
          0
        );
        break;
      case "Total Retail Value":
        total = kpis?.outlets?.reduce(
          (acc: number, outlet: any) => acc + outlet["retail_value"],
          0
        );
        break;
      case "Total Stock Value":
        total = kpis?.outlets?.reduce(
          (acc: number, outlet: any) => acc + outlet["stock_value"],
          0
        );
        break;
    }
    return { total, target };
  };

  const merchData = dummyData.merchData.map((item) => {
    const { total, target } = mapWithLabel(item.label);
    return { ...item, total, target };
  });

  const groups: Merch[][] = [[]];
  let count = 0;
  for (let i = 0; i < merchData.length; i++) {
    if (i !== 0 && merchData[i].size === merchData[i - 1].size) {
      groups[count].push(merchData[i]);
    } else if (i === 0) {
      groups[count].push(merchData[i]);
    } else {
      groups.push([merchData[i]]);
      count++;
    }
  }
  const gridMaker = (group: Merch[], index: number, laptop = true) => {
    if (index === 0 && laptop) {
      return;
    } else if (index === 1 && laptop) {
      return (
        <HStack key={index} gap={0}>
          <MerchGrid
            merchDisplayItems={groups[index - 1]}
            columns={{ xl: 1 }}
            isLaptop={laptop}
          />
          <MerchGrid
            merchDisplayItems={group}
            columns={{ xl: 2 }}
            isLaptop={laptop}
          />
        </HStack>
      );
    } else {
      return (
        <HStack key={index}>
          <MerchGrid
            merchDisplayItems={group}
            columns={{ xl: 2 }}
            isLaptop={laptop}
          />
        </HStack>
      );
    }
  };

  const gridMakerSkeleton = (group: Merch[], index: number, laptop = true) => {
    if (index === 0 && laptop) {
      return;
    } else if (index === 1 && laptop) {
      return (
        <HStack key={index}>
          <MerchGridSkeletons
            merchDisplayItems={groups[index - 1]}
            columns={{ xl: 1 }}
            isLaptop={laptop}
          />
          <MerchGridSkeletons
            merchDisplayItems={group}
            columns={{ xl: 2 }}
            isLaptop={laptop}
          />
        </HStack>
      );
    } else {
      return (
        <HStack key={index}>
          <MerchGridSkeletons
            merchDisplayItems={group}
            columns={{ xl: 2 }}
            isLaptop={laptop}
          />
        </HStack>
      );
    }
  };

  return (
    <Box paddingLeft={5}>
      {isSalesLoading ||
        (isInventoryLoading && (
          <Box paddingBottom={8}>
            {groups.map((group, index) =>
              gridMakerSkeleton(group, index, isLaptop)
            )}
          </Box>
        ))}

      <Box paddingBottom={8} onClick={() => setIsLaptop(!isLaptop)}>
        {groups.map((group, index) => gridMaker(group, index, isLaptop))}
      </Box>
    </Box>
  );
};

export default MerchPage;
