import { Group } from "@components/Group";
import { VStack } from "@gluestack-ui/themed";

export function Home() {
  return (
    <VStack flex={1}>
      <Home />
      <Group name="Costas" isActive={false} />
    </VStack>
  );
}
