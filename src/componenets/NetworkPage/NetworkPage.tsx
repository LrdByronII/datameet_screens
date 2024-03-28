import { Box, HStack } from "@chakra-ui/react";
import { useState } from "react";
import { networkData } from "../../data/dummyData.json";
import NetworkGridSkeletons from "./NetworkGridSkeletons";
import NetworkGrid from "./NetworkGrid";

export interface Network {
  id: number;
  label: string;
  text1: string;
  text2: string;
  int1: number;
  int2: number;
  size: string;
}

const NetworkPage = () => {
  const [isLoading] = useState(false);

  const groups: Network[][] = [[]];
  let count = 0;
  for (let i = 0; i < networkData.length; i++) {
    if (i !== 0 && networkData[i].size === networkData[i - 1].size) {
      groups[count].push(networkData[i]);
    } else if (i === 0) {
      groups[count].push(networkData[i]);
    } else {
      groups.push([networkData[i]]);
      count++;
    }
  }

  const gridMaker = (group: Network[], index: number) => {
    if (index === 2) {
      return;
    } else if (index === 3) {
      return (
        <HStack key={index} gap={0}>
          <NetworkGrid networkDisplayItems={groups[index - 1]} columns={1} />
          <NetworkGrid networkDisplayItems={group} columns={1} />
        </HStack>
      );
    } else {
      return (
        <HStack key={index}>
          <NetworkGrid networkDisplayItems={group} columns={4} />
        </HStack>
      );
    }
  };

  const gridMakerSkeleton = (group: Network[], index: number) => {
    if (index === 2) {
      return;
    } else if (index === 3) {
      return (
        <HStack key={index} gap={0}>
          <NetworkGridSkeletons
            networkDisplayItems={groups[index - 1]}
            columns={1}
          />
          <NetworkGridSkeletons networkDisplayItems={group} columns={1} />
        </HStack>
      );
    } else {
      return (
        <HStack key={index}>
          <NetworkGridSkeletons networkDisplayItems={group} columns={4} />
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

      <Box paddingBottom={500}>
        {groups.map((group, index) => gridMaker(group, index))}
      </Box>
    </Box>
  );
};

export default NetworkPage;
