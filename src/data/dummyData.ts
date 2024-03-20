import { Membership } from "../componenets/MembershipPage/MembershipPage";
import { Merch } from "../componenets/MerchPage/MerchPage";
import { Network } from "../componenets/NetworkPage/NetworkPage";

export const membershipData = [
    {
      id: 1,
      label: "Total Members",
      data: "29,069",
      value: "29,069",
      size: "xl",
    },
    {
      id: 2,
      label: "TOTAL REVENUE ext GST",
      data: '$4,196,740',
      value: "103% of budget",
      size: "medium",
    },
    {
      id: 3,
      label: "MEMBERSHIP",
      data: "29,069",
      value: "90% of target",
      size: "medium",
    },
    {
      id: 4,
      label: "CHURN",
      data: "8",
      value: "800% of target",
      size: "medium",
    },
    {
      id: 5,
      label: "NEW MEMBERS",
      data: "1,883",
      value:
        "94% of target",
      size: "medium",
    },
    {
      id: 6,
      label: "Membership Sales",
      data: 'Compare membership sales by month',
      value: "+45%",
      size: "large",
    },
    {
      id: 7,
      label: "New + Returning",
      data: "1,889",
      value: "+$300853",
      size: "small",
    },
    {
      id: 8,
      label: "Downsizers",
      data: "1,747",
      value: "-204953",
      size: "small",
    },
    {
      id: 9,
      label: "Upsizers",
      data: "2,821",
      value: "+238121",
      size: "small",
    },
    {
      id: 10,
      label: "Down/Up Balance",
      data: "1,074",
      value: "+33168",
      size: "small",
    },
    {
      id: 11,
      label: "Membership Sales",
      data: 'Compare membership sales by day',
      value: "Previous years performance",
      size: "xl",
    },
  ] as Membership[]

  export const merchData = [
    {
      id: 1,
      label: "Total Merchandise Sales",
      data: 925630.758,
      value: 2650029,
      size: "medium",
    },
    {
      id: 2,
      label: "Total Inventory - Items",
      data: 600000,
      value: "-45%",
      size: "small",
    },
    {
      id: 3,
      label: "Total Retail Value",
      data: 1400000,
      value: "+45%",
      size: "small",
    },
    {
      id: 4,
      label: "Official Wear Sales",
      data: 400000,
      value: "-45%",
      size: "small",
    },
    {
      id: 5,
      label: "Other Sales",
      data: 200000,
      value: "+45%",
      size: "small",
    },
    {
      id: 6,
      label: "Actual Sales vs Budget",
      data: 270000,
      value:
        "Nov Budget: soooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo",
      size: "xl",
    },
    {
      id: 7,
      label: "Inventory",
      data: 5.98734,
      value: "Secondary Text",
      size: "large",
    },
    {
      id: 8,
      label: "Comparison Sales",
      data: 270000,
      value: "Previous years performance",
      size: "large",
    },
  ] as Merch[]

  export const networkData = [
    {
      id: 1,
      label: "Network Accounts",
      data: "925630.758",
      value: "2650029",
      size: "xl",
    },
    {
      id: 2,
      label: "Total Customers",
      data: "600000",
      value: "-45%",
      size: "medium",
    },
    {
      id: 3,
      label: "Total Accounts",
      data: "1400000",
      value: "+45%",
      size: "medium",
    },
    {
      id: 4,
      label: "Transactions (last 7 days)",
      data: "400000",
      value: "+45%",
      size: "medium",
    },
    {
      id: 5,
      label: "Revenue (last 7 days)",
      data: "200000",
      value: "-45%",
      size: "medium",
    },
  ] as Network[]