import dateFormat from "dateformat";
import { ChartData } from "./useCharts";

interface MTData {
  date: string;
}

export const buildMTData = (data: ChartData, isLaptop = true) => {
  if (!data) return [];
  const mt_data: MTData[] = [];
  data?.dates?.forEach((date: string, index: number) => {
    if (
      !isLaptop &&
      dateFormat(date, "mmm") !== dateFormat(Date.now(), "mmm")
    ) {
      return;
    }
    mt_data.push({
      date: date,
      [data?.series1_label]:
        data?.series1?.[index] > 0 ? data?.series1?.[index] : null,
      [data?.series2_label]:
        data?.series2?.[index] > 0 ? data?.series2?.[index] : null,
      // [data?.series3_label]:
      //   data?.series3?.[index] > 0 ? data?.series3?.[index] : null,
      // [data?.series4_label]:
      //   data?.series4?.[index] > 0 ? data?.series4?.[index] : null,
    });
  });
  return mt_data;
};
