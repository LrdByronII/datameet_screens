import { Box, HStack, Text } from "@chakra-ui/react";
import dummyData from "../../data/dummyData";
import MembershipGridSkeletons from "./MembershipGridSkeletons";
import MembershipGrid from "./MembershipGrid";
import useKPIs, { KPIResponse } from "../../hooks/useKPIs";
import { useState } from "react";

export interface Membership {
  id: number;
  label: string;
  text1: string;
  text2: string;
  total: number;
  target: number;
  size: string;
}

const MembershipPage = () => {
  const [isLaptop, setIsLaptop] = useState(true);

  const { data: kpiData, error, isLoading } = useKPIs("membership");
  const kpis = kpiData?.body as KPIResponse;

  if (error) return <Text>{error.message}</Text>;

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
    }
    return { total, target };
  };

  const membershipData = dummyData.membershipData.map((item) => {
    const { total, target } = mapWithLabel(item.label);
    return { ...item, total, target };
  });

  const groups: Membership[][] = [[]];
  let count = 0;
  for (let i = 0; i < membershipData.length; i++) {
    if (i !== 0 && membershipData[i].size === membershipData[i - 1].size) {
      groups[count].push(membershipData[i]);
    } else if (i === 0) {
      groups[count].push(membershipData[i]);
    } else {
      groups.push([membershipData[i]]);
      count++;
    }
  }

  const gridMaker = (group: Membership[], index: number, laptop = true) => {
    if (index === 2 && laptop) {
      return;
    } else if (index === 3 && laptop) {
      return (
        <HStack key={index} gap={0}>
          <MembershipGrid
            membershipDisplayItems={groups[index - 1]}
            columns={{ xl: 1 }}
            isLaptop={laptop}
          />
          <MembershipGrid
            membershipDisplayItems={group}
            columns={{ xl: 1 }}
            isLaptop={laptop}
          />
        </HStack>
      );
    } else {
      return (
        <HStack key={index}>
          <MembershipGrid
            membershipDisplayItems={group}
            columns={{ xl: 4 }}
            isLaptop={laptop}
          />
        </HStack>
      );
    }
  };

  const gridMakerSkeleton = (
    group: Membership[],
    index: number,
    laptop = true
  ) => {
    if (index === 2 && laptop) {
      return;
    } else if (index === 3 && laptop) {
      return (
        <HStack key={index} gap={0}>
          <MembershipGridSkeletons
            membershipDisplayItems={groups[index - 1]}
            columns={{ xl: 1 }}
            isLaptop={laptop}
          />
          <MembershipGridSkeletons
            membershipDisplayItems={group}
            columns={{ xl: 1 }}
            isLaptop={laptop}
          />
        </HStack>
      );
    } else {
      return (
        <HStack key={index}>
          <MembershipGridSkeletons
            membershipDisplayItems={group}
            columns={{ xl: 4 }}
            isLaptop={laptop}
          />
        </HStack>
      );
    }
  };

  return (
    <Box paddingLeft={5}>
      {isLoading && (
        <Box paddingBottom={8}>
          {groups.map((group, index) =>
            gridMakerSkeleton(group, index, isLaptop)
          )}
        </Box>
      )}

      <Box paddingBottom={8} onClick={() => setIsLaptop(!isLaptop)}>
        {groups.map((group, index) => gridMaker(group, index, isLaptop))}
      </Box>
    </Box>
  );
};

export default MembershipPage;
