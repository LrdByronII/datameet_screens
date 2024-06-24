import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from "ms";

interface Outlet {
  outlet: string;
  stock_value: number;
  stock_level: number;
  retail_value: number;
}

export interface KPIResponse {
  season: string;
  regs_total: number;
  sales_total_ex: number;
  sales_target_ex: number;
  registration_total: number;
  registration_target: number;
  regs_new: number;
  new_registration_target: number;
  members_ytr: number;
  previous_season_members_total: number;
  churn_target: number;
  members_new: number;
  members_returning: number;
  members_new_spend_gain: number;
  members_returning_spend_gain: number;
  members_renewed_downsizers: number;
  members_renewed_downsizers_spend_loss: number;
  members_renewed_upsizers: number;
  members_renewed_upsizers_spend_gain: number;
  outlets: Outlet[];
}

const apiClient = new APIClient<KPIResponse>(`/metrics/kpis?type=`);

const useKPIs = (
  type: "membership" | "merchandise-sales" | "merchandise-inventory"
) => {
  return useQuery({
    queryKey: ["kpi", { type }],
    queryFn: () => apiClient.getAll(type),
    staleTime: ms("1m"),
    refetchInterval: ms("1h"),
  });
};

export default useKPIs;
