import { Box, HStack } from "@chakra-ui/react";
import MerchGrid from "./MerchGrid";
import { useState } from "react";
import data from "../data/dummyData";
import MerchGridSkeletons from "./MerchGridSkeletons";

export interface Merch {
  id: number;
  label: string;
  data: number;
  value: string | number;
  size: "small" | "medium" | "large" | "xl";
}

const MerchPage = () => {
  const [isLoading] = useState(false);

  const groups: Merch[][] = [[]];
  let count = 0;
  for (let i = 0; i < data.length; i++) {
    if (i !== 0 && data[i].size === data[i - 1].size) {
      groups[count].push(data[i]);
    } else if (i === 0) {
      groups[count].push(data[i]);
    } else {
      groups.push([data[i]]);
      count++;
    }
  }

  const gridMakerSkeleton = (group: Merch[], index: number) => {
    if (index === 0) {
      return;
    } else if (index === 1) {
      return (
        <HStack key={index}>
          <MerchGridSkeletons
            merchDisplayItems={groups[index - 1]}
            columns={1}
          />
          <MerchGridSkeletons merchDisplayItems={group} columns={2} />
        </HStack>
      );
    } else {
      return (
        <HStack key={index}>
          <MerchGridSkeletons merchDisplayItems={group} columns={2} />
        </HStack>
      );
    }
  };
  const gridMaker = (group: Merch[], index: number) => {
    if (index === 0) {
      return;
    } else if (index === 1) {
      return (
        <HStack key={index} gap={0}>
          <MerchGrid merchDisplayItems={groups[index - 1]} columns={1} />
          <MerchGrid merchDisplayItems={group} columns={2} />
        </HStack>
      );
    } else {
      return (
        <HStack key={index}>
          <MerchGrid merchDisplayItems={group} columns={2} />
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

export default MerchPage;
