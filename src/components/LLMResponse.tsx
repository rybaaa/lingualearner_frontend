import { Badge } from "@mantine/core";
import { IconHeart, IconMoodSad } from "@tabler/icons-react";
import { LLMResponseType } from "../types/LLMResponseType";

export const LLMResponse = ({ response }: LLMResponseType) => {
  console.log("response: " + response);
  return (
    <>
      {response ? (
        <Badge size="xl" rightSection={<IconHeart size={16} />}>
          You're right!
        </Badge>
      ) : (
        <Badge size="xl" rightSection={<IconMoodSad size={16} />}>
          You're not right
        </Badge>
      )}
    </>
  );
};
