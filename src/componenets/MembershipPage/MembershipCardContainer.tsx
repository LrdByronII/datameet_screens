import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Membership } from "./MembershipPage";

interface Props {
  children: ReactNode;
  item: Membership;
}

const MembershipCardContainer = ({
  children,
  item: { size, label },
}: Props) => {
  return (
    <>
      {size === "small" && (
        <Box width={{ base: 271, xl: 140 }} height={{ xl: 85 }}>
          {children}
        </Box>
      )}
      {size === "medium" && (
        <Box width={{ base: 271, xl: 281 }} height={{ xl: 120 }}>
          {children}
        </Box>
      )}
      {size === "large" && (
        <Box width={{ base: 271, xl: 1008 }} height={{ xl: 376 }}>
          {children}
        </Box>
      )}
      {size === "xl" && (
        <Box
          {...{
            width: { base: 271, xl: 1160 },
            height: { xl: label === "Total Members" ? 120 : 480 },
          }}
        >
          {children}
        </Box>
      )}
    </>
  );
};

export default MembershipCardContainer;
