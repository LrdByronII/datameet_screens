import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Merch } from "./MerchPage";

interface Props {
  children: ReactNode;
  item: Merch;
}

const MerchCardContainer = ({ children, item: { size } }: Props) => {
  return (
    <>
      {size === "small" && (
        <Box width={{ base: 271, xl: 372 }} height={{ xl: 131 }}>
          {children}
        </Box>
      )}
      {size === "medium" && (
        <Box width={{ base: 271, xl: 373 }} height={{ xl: 281 }}>
          {children}
        </Box>
      )}
      {size === "large" && (
        <Box width={{ base: 271, xl: 568 }} height={{ xl: 180 }}>
          {children}
        </Box>
      )}
      {size === "xl" && (
        <Box width={{ base: 271, xl: 1157 }} height={{ base: 400, xl: 370 }}>
          {children}
        </Box>
      )}
    </>
  );
};

export default MerchCardContainer;
