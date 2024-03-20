import { Box, HStack } from "@chakra-ui/react";
import { useState } from "react";
import { membershipData } from "../../data/dummyData";
import MembershipGridSkeletons from "./MembershipGridSkeletons";
import MembershipGrid from "./MembershipGrid";

export interface Membership {
  id: number;
  label: string;
  data: string;
  value: string;
  size: "small" | "medium" | "large" | "xl";
}

const MembershipPage = () => {
  const [isLoading] = useState(false);

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

  const gridMaker = (group: Membership[], index: number) => {
    if (index === 2) {
      return;
    } else if (index === 3) {
      return (
        <HStack key={index} gap={0}>
          <MembershipGrid
            membershipDisplayItems={groups[index - 1]}
            columns={1}
          />
          <MembershipGrid membershipDisplayItems={group} columns={1} />
        </HStack>
      );
    } else {
      return (
        <HStack key={index}>
          <MembershipGrid membershipDisplayItems={group} columns={4} />
        </HStack>
      );
    }
  };

  const gridMakerSkeleton = (group: Membership[], index: number) => {
    if (index === 2) {
      return;
    } else if (index === 3) {
      return (
        <HStack key={index} gap={0}>
          <MembershipGridSkeletons
            membershipDisplayItems={groups[index - 1]}
            columns={1}
          />
          <MembershipGridSkeletons membershipDisplayItems={group} columns={1} />
        </HStack>
      );
    } else {
      return (
        <HStack key={index}>
          <MembershipGridSkeletons membershipDisplayItems={group} columns={4} />
        </HStack>
      );
    }
  };

  groups.map((group, index) => gridMaker(group, index));

  return (
    <Box paddingLeft={5}>
      {isLoading && (
        <Box paddingBottom={8}>
          {groups.map((group, index) => gridMakerSkeleton(group, index))}
        </Box>
      )}

      <Box paddingBottom={8}>
        {groups.map((group, index) => gridMaker(group, index))}
      </Box>
    </Box>
  );
};

export default MembershipPage;
