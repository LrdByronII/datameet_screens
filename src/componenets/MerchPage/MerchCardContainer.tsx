import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  size: string;
}

const MerchCardContainer = ({ children, size }: Props) => {
  return (
    <>
      {size === "small" && (
        <Box width={372} height={131}>
          {children}
        </Box>
      )}
      {size === "medium" && (
        <Box width={373} height={281}>
          {children}
        </Box>
      )}
      {size === "large" && (
        <Box width={568} height={180}>
          {children}
        </Box>
      )}
      {size === "xl" && (
        <Box width={1157} height={370}>
          {children}
        </Box>
      )}
    </>
  );
};

export default MerchCardContainer;
