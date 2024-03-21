import { Delta, StatisticsCard } from "@/components";
import { StatisticsProgressBar } from "@/components/StatisticsProgressBar";
import {
  fetchChartQueryOptions,
  fetchKpisQueryOptions,
} from "@/queries/charts/options";
import { GridIcon } from "@/styles/icons";
import { BarChart, LineChart } from "@mantine/charts";
import {
  Grid,
  Group,
  Paper,
  Skeleton,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useQueries } from "@tanstack/react-query";
import dateFormat from "dateformat";
export function MembershipReportPage() {
  let kpis = {};
  let isLoading = false;
  const results = useQueries({
    queries: [
      fetchKpisQueryOptions("membership"),
      fetchChartQueryOptions("membership-monthly"),
      fetchChartQueryOptions("membership-daily-exgst"),
    ],
  });

  const {
    isPending: isKpisPending,
    isError: isKpisError,
    error: kpisError,
    data: kpis_result,
  } = results[0];
  const {
    isPending: isChartPending,
    isError: isChartError,
    error: chartError,
    data: dm_chart,
  } = results[1];
  const {
    isPending: isDailyChartPending,
    isError: isDailyChartError,
    error: chartDailyError,
    data: dm_daily_chart,
  } = results[2];

  if (isChartPending || isDailyChartPending || isKpisPending) {
    isLoading = true;
  }

  if (isChartError) {
    return <span>Chart Error: {chartError.message}</span>;
  }

  if (isKpisError) {
    return <span>KPIs Error: {kpisError.message}</span>;
  }

  console.log(kpis);

  // these are part of the Backend KPIs yet

  kpis["churn_target"] = 12;

  kpis["new_registration_target"] = 2000;

  const mt_data: any = buildMTData(dm_chart);

  const mt_daily_data: any = buildMTDailyData(dm_daily_chart, "mmm dd");

  if (isKpisPending) {
    kpis["sales_total_ex"] = 0;
    kpis["sales_target_ex"] = 0;
    kpis["registration_total"] = 0;
    kpis["registration_target"] = 0;
    kpis["regs_new"] = 0;
    kpis["new_registration_target"] = 0;
    kpis["members_ytr"] = 0;
    kpis["previous_season_members_total"] = 0;
    kpis["churn_target"] = 0;
  } else {
    kpis = kpis_result as object;
  }

  return (
    <Skeleton visible={isLoading}>
      <Stack gap="16px" pb="140px">
        <Stack gap="16px">
          <Paper p="28px" pb="35px" shadow="md">
            <Text fw="600" size="xl1" mb="5px">
              Total Members
            </Text>
            <Title c="primary" order={1} mb="28px">
              {numberFormatter(kpis["regs_total"])}
            </Title>
          </Paper>
        </Stack>
        <Group wrap="nowrap" justify="space-between" gap="10px" mb="24px">
          <StatisticsProgressBar
            title="TOTAL REVENUE ex GST"
            currentValue={moneyFormatter(kpis["sales_total_ex"])}
            icon={<GridIcon color="var(--mantine-color-primary-6)" size={16} />}
            percentTitle="of budget"
            percentProgress={percentCalc(
              kpis["sales_total_ex"] / kpis["sales_target_ex"]
            )}
            targetValue={moneyFormatter(kpis["sales_target_ex"])}
            isLoading={isKpisPending}
          />
          <StatisticsProgressBar
            title="MEMBERSHIP"
            currentValue={numberFormatter(kpis["registration_total"])}
            icon={<GridIcon color="var(--mantine-color-primary-6)" size={16} />}
            percentTitle="of target"
            percentProgress={percentCalc(
              kpis["registration_total"] / kpis["registration_target"]
            )}
            targetValue={numberFormatter(kpis["registration_target"])}
            isLoading={isKpisPending}
          />
          <StatisticsProgressBar
            title="NEW MEMBERS"
            currentValue={numberFormatter(kpis["regs_new"])}
            icon={<GridIcon color="var(--mantine-color-primary-6)" size={16} />}
            percentTitle="of target"
            percentProgress={percentCalc(
              kpis["regs_new"] / kpis["new_registration_target"]
            )}
            targetValue={numberFormatter(kpis["new_registration_target"])}
            isLoading={isKpisPending}
          />
          <StatisticsProgressBar
            title="YTR MEMBERS"
            currentValue={numberFormatter(kpis["members_ytr"])}
            icon={<GridIcon color="var(--mantine-color-primary-6)" size={16} />}
            percentTitle="of target"
            percentProgress={percentCalc(0)}
            targetValue={numberFormatter(1)}
            isLoading={isKpisPending}
          />
          <StatisticsProgressBar
            title="CHURN"
            currentValue={`${percentCalc(
              kpis["members_ytr"] / kpis["previous_season_members_total"]
            )}%`}
            icon={<GridIcon color="var(--mantine-color-primary-6)" size={16} />}
            percentTitle="of target"
            percentProgress={percentCalc(
              kpis["ytr_members"] / kpis["previous_season_members_total"]
            )}
            targetValue={numberFormatter(kpis["churn_target"])}
            isLoading={isKpisPending}
          />
        </Group>
        <Grid>
          <Grid.Col span="auto">
            <Paper p="28px" pb="35px" shadow="md">
              <Text fw="600" size="xl1" mb="5px">
                Membership Sales
              </Text>
              <Text c="grey.5" fw="400" size="sm" mb="20px">
                Compare membership sales by month
              </Text>
              <Skeleton visible={isChartPending}>
                <BarChart
                  h={305}
                  data={mt_data}
                  dataKey="date"
                  gridAxis="xy"
                  valueFormatter={(value) => moneyFormatter(value)}
                  withLegend
                  legendProps={{ verticalAlign: "bottom", height: 50 }}
                  series={[
                    { name: dm_chart["series1_label"], color: "primary.8" },
                    { name: dm_chart["series2_label"], color: "primary.4" },
                    // { name: dm_chart['series1_label'], color: dm_chart['clubColourTone1'] },
                    // { name: dm_chart['series2_label'], color: dm_chart['clubColourTone2'] }
                  ]}
                />
              </Skeleton>
            </Paper>
          </Grid.Col>
          <Grid.Col span={4}>
            <Stack gap="10px">
              <StatisticsCard
                name="New  + Returning"
                title={numberFormatter(
                  kpis["members_new"] + kpis["members_returning"]
                )}
                h="100px"
                shadow="md"
              >
                <Delta
                  value={moneyFormatter(
                    kpis["members_new_spend_gain"] +
                      kpis["members_returning_spend_gain"]
                  )}
                  direction="up"
                />
              </StatisticsCard>
              <StatisticsCard
                name="Downsizers"
                title={numberFormatter(kpis["members_renewed_downsizers"])}
                h="100px"
                shadow="md"
              >
                <Delta
                  value={numberFormatter(
                    kpis["members_renewed_downsizers_spend_loss"]
                  )}
                  direction={
                    kpis["members_renewed_downsizers_spend_loss"] > 0
                      ? "down"
                      : "up"
                  }
                />
              </StatisticsCard>
              <StatisticsCard
                name="Upsizers"
                title={numberFormatter(kpis["members_renewed_upsizers"])}
                h="100px"
                shadow="md"
              >
                <Delta
                  value={numberFormatter(
                    kpis["members_renewed_upsizers_spend_gain"]
                  )}
                  direction={
                    kpis["members_renewed_upsizers_spend_gain"] < 0
                      ? "down"
                      : "up"
                  }
                />
              </StatisticsCard>
              <StatisticsCard
                name="Down/Up Balance"
                title={numberFormatter(
                  kpis["members_renewed_upsizers"] -
                    kpis["members_renewed_downsizers"]
                )}
                h="100px"
                shadow="md"
              >
                <Delta
                  value={numberFormatter(
                    kpis["members_renewed_upsizers_spend_gain"] -
                      kpis["members_renewed_downsizers_spend_loss"]
                  )}
                  direction={
                    kpis["members_renewed_upsizers_spend_gain"] -
                      kpis["members_renewed_downsizers_spend_loss"] <
                    0
                      ? "down"
                      : "up"
                  }
                />
              </StatisticsCard>
            </Stack>
          </Grid.Col>
        </Grid>
        <Stack gap="16px">
          <Paper p="28px" pb="35px" shadow="md">
            <Text fw="600" size="xl1" mb="5px">
              Membership Sales
            </Text>
            <Text c="grey.5" fw="400" size="sm" mb="20px">
              Compare membership sales by day
            </Text>
            <Skeleton visible={isDailyChartPending}>
              <LineChart
                h={600}
                data={mt_daily_data}
                dataKey="date"
                gridAxis="xy"
                yAxisProps={{ domain: [0, "auto"], width: 100 }}
                strokeWidth={3}
                dotProps={{ r: 2, strokeWidth: 0.5, stroke: "#fff" }}
                valueFormatter={(value) => moneyFormatter(value)}
                withLegend
                legendProps={{ verticalAlign: "bottom", height: 50 }}
                series={[
                  { name: dm_chart["series1_label"], color: "primary.8" },
                  { name: dm_chart["series2_label"], color: "primary.4" },
                ]}
              />
            </Skeleton>
          </Paper>
        </Stack>
        <Stack gap="16px">
          <Paper p="28px" pb="35px" shadow="md">
            <Text fw="600" size="xl1" mb="5px">
              Membership Counts
            </Text>
            <Text c="grey.5" fw="400" size="sm" mb="20px">
              Compare membership counts by day
            </Text>
            <Skeleton visible={isDailyChartPending}>
              <LineChart
                h={600}
                data={mt_daily_data}
                dataKey="date"
                gridAxis="xy"
                curveType="stepAfter"
                strokeWidth={3}
                dotProps={{ r: 2, strokeWidth: 0.5, stroke: "#fff" }}
                yAxisProps={{ domain: [0, "auto"], width: 100 }}
                valueFormatter={(value: any) => numberFormatter(value)}
                withLegend
                legendProps={{ verticalAlign: "bottom", height: 50 }}
                series={[
                  { name: "series3", color: "primary.8" },
                  { name: "series4", color: "primary.4" },
                ]}
              />
            </Skeleton>
          </Paper>
        </Stack>
      </Stack>
    </Skeleton>
  );
}

const moneyFormatter = (value: number): string =>
  value ? `$${Math.trunc(value).toLocaleString()}` : "";
const numberFormatter = (value: number): string =>
  value ? `${Math.trunc(value).toLocaleString()}` : "";
// const percentFormatter = (value: number) => `${(value*100).toFixed(0)}%`;
const percentCalc = (value: number): number =>
  value ? Math.trunc(value * 100) : 0;

const buildMTData = (data: any, format = "mmm") => {
  if (!data) return [];
  const mt_data = [];

  data?.dates?.forEach((date: string, index: number) => {
    const nice_date = dateFormat(date, format);
    mt_data.push({
      date: nice_date,
      [data?.series1_label]:
        data?.series1?.[index] > 0 ? data?.series1?.[index] : null,
      [data?.series2_label]:
        data?.series2?.[index] > 0 ? data?.series2?.[index] : null,
      [data?.series3_label]:
        data?.series3?.[index] > 0 ? data?.series3?.[index] : null,
      [data?.series4_label]:
        data?.series4?.[index] > 0 ? data?.series4?.[index] : null,
    });
  });

  return mt_data;
};

const buildMTDailyData = (data: any, format = "mmm") => {
  if (!data) return [];

  const mt_data = [];

  const today = new Date();

  data?.dates?.forEach((aDate: string, index: number) => {
    const metricDate = new Date(aDate);
    const nice_date = dateFormat(metricDate, format);
    mt_data.push({
      date: nice_date,
      [data?.series1_label]:
        metricDate <= today ? data?.series1?.[index] : undefined, // 2024 sales
      [data?.series2_label]: data?.series2?.[index],
      series3: metricDate <= today ? data?.series3?.[index] : undefined, // 204 membership counts
      series4: data?.series4?.[index],
    });
  });

  return mt_data;
};
