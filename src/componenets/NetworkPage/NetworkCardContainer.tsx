import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Network } from "./NetworkPage";

interface Props {
  children: ReactNode;
  item: Network;
}

const NetworkCardContainer = ({ children, item: { size, label } }: Props) => {
  return (
    <>
      {size === "small" && (
        <Box width={140} height={85}>
          {children}
        </Box>
      )}
      {size === "medium" && (
        <Box width={281} height={115}>
          {children}
        </Box>
      )}
      {size === "large" && (
        <Box width={1008} height={376}>
          {children}
        </Box>
      )}
      {size === "xl" && (
        <Box
          {...{ width: 1160, height: label !== "Total Members" ? 120 : 480 }}
        >
          {children}
        </Box>
      )}
    </>
  );
};

export default NetworkCardContainer;
