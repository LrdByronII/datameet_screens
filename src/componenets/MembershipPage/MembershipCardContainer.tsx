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
          {...{ width: 1160, height: label === "Total Members" ? 120 : 480 }}
        >
          {children}
        </Box>
      )}
    </>
  );
};

export default MembershipCardContainer;
