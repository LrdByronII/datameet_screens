import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from "ms";

export interface ChartData {
  dates: string[];
  series1: any[];
  series2: any[];
  series3: any[];
  series4: any[];
  series1_label: string;
  series2_label: string;
  series3_label: string;
  series4_label: string;
  series1Total: number;
  series2Total: number;
  series3Total: number;
  series4Total: number;
}

const apiClient = new APIClient<ChartData>(`/metrics/chart?config=`);

const useCharts = (
  config:
    | "membership-monthly"
    | "membership-daily-exgst"
    | "merchandise-monthly"
) => {
  return useQuery({
    queryKey: ["chart", { config }],
    queryFn: () => apiClient.getAll(config),
    staleTime: ms("1m"),
    refetchInterval: ms("1h"),
  });
};

export default useCharts;
