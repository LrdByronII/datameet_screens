import {
  Card,
  Flex,
  Paper,
  Progress,
  Skeleton,
  Stack,
  Text,
  Title,
} from "@mantine/core";

interface Props {
  title: string;
  icon: any;
  currentValue: number;
  targetValue: number;
  percentProgress: number;
  percentTitle: number;
  isLoading: boolean;
}

const StatisticsProgressBar = ({
  title,
  icon,
  currentValue,
  targetValue,
  percentProgress,
  percentTitle,
  isLoading,
}: Props) => {
  return (
    <Card p="16px" w="100%" shadow="lg">
      <Stack gap="16px">
        <Flex align="center" gap="10px">
          <Paper p="4px" radius="md" bg="primary.1" w="24px" h="24px">
            {icon}
          </Paper>
          <Text size="sm" fw="600" c="grey.5">
            {title}
          </Text>
        </Flex>
        <Stack gap="8px">
          <Skeleton visible={isLoading}>
            <Title order={4}>{currentValue}</Title>
          </Skeleton>
          <Skeleton visible={isLoading}>
            <Text size="sm" fw="600" c="primary">
              {percentProgress}% {percentTitle}
            </Text>
          </Skeleton>
        </Stack>
        <Flex justify="space-between" gap="8px" align="center">
          <Skeleton visible={isLoading}>
            <Progress w="100%" value={percentProgress} />
          </Skeleton>
          <Skeleton visible={isLoading}>
            <Text size="sm" fw="600" c="grey.4">
              {targetValue}
            </Text>
          </Skeleton>
        </Flex>
      </Stack>
    </Card>
  );
};

export default StatisticsProgressBar;
