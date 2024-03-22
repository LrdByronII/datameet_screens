import { BarChart } from "@mantine/charts";
import { Grid, Paper, Text } from "@mantine/core";

const MembershipReportPage = () => {
  const data = [
    { month: "January", Smartphones: 1200, Laptops: 900, Tablets: 200 },
    { month: "February", Smartphones: 1900, Laptops: 1200, Tablets: 400 },
    { month: "March", Smartphones: 400, Laptops: 1000, Tablets: 200 },
    { month: "April", Smartphones: 1000, Laptops: 200, Tablets: 800 },
    { month: "May", Smartphones: 800, Laptops: 1400, Tablets: 1200 },
    { month: "June", Smartphones: 750, Laptops: 600, Tablets: 1000 },
  ];

  return (
    <Grid>
      <Grid.Col span="auto">
        <Paper p="28px" pb="35px" shadow="md">
          <Text> Hello Mantine</Text>
          <BarChart
            h={300}
            data={data}
            dataKey="month"
            series={[
              { name: "Smartphones", color: "green" },
              { name: "Laptops", color: "blue" },
              { name: "Tablets", color: "teal" },
            ]}
            tickLine="y"
          />
        </Paper>
      </Grid.Col>
    </Grid>
  );
};

export default MembershipReportPage;
