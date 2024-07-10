import { Select, Flex, Paper, Text, Button, TextInput } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { ChangeEvent, useEffect, useState } from "react";
import { LanguageList, LanguagesType } from "../types/Languages";
import { LLMResponse } from "../components/LLMResponse";

export const MainPage = () => {
  const [visibleContent, setVisibleContent] = useState(false);
  const [fromLanguage, setFromLanguage] = useState<LanguagesType>("English");
  const [toLanguage, setToLanguage] = useState<LanguagesType>("Portuguese");
  const [userGuess, setUserGuess] = useState<string>("");
  const [userSentence, setUserSentence] = useState<string>("");
  const [isUserGuessTrue, setIsUserGuessTrue] = useState<null | boolean>(null);
  const [isUserSentenceTrue, setIsUserSentenceTrue] = useState<null | boolean>(null);
  const [isDisabledCheckGuessButton, setIsDisabledCheckGuessButton] = useState(true);
  const [isDisabledCheckSentenceButton, setIsDisabledCheckSentenceButton] = useState(true);

  useEffect(() => {
    if (userGuess) {
      setIsDisabledCheckGuessButton(false);
    } else {
      setIsDisabledCheckGuessButton(true);
    }
  }, [userGuess]);

  useEffect(() => {
    if (userSentence) {
      setIsDisabledCheckSentenceButton(false);
    } else {
      setIsDisabledCheckSentenceButton(true);
    }
  }, [userSentence]);

  const randomResult = () => {
    return Math.random() >= 0.5;
  };

  const onUserGuessInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUserGuess(e.currentTarget.value);
    console.log(userGuess);
  };

  const showContent = () => {
    setVisibleContent(!visibleContent);
  };

  const onClickCheckGuessTranslationButton = () => {
    setIsUserGuessTrue(randomResult());
    console.log(isUserGuessTrue);
  };

  const onUserSentenceInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUserSentence(e.currentTarget.value);
    console.log(userSentence);
  };

  const onClickCheckUserSentenceButton = () => {
    setIsUserSentenceTrue(randomResult());
  };

  return (
    <div className="bg-black h-screen	flex justify-center items-center flex-col gap-10">
      <Flex mih={50} bg="rgba(0, 0, 0, .3)" gap="xl" justify="center" align="center" direction="row" wrap="wrap">
        <Select
          label="From"
          placeholder="Pick language"
          data={LanguageList}
          value={fromLanguage}
          onChange={setFromLanguage}
        />
        <Select
          label="To"
          placeholder="Pick language"
          data={LanguageList}
          value={toLanguage}
          onChange={setToLanguage}
        />
      </Flex>
      {!visibleContent ? (
        <Button onClick={showContent} variant="light" rightSection={<IconArrowRight size={14} />}>
          Start
        </Button>
      ) : (
        <Flex mih={50} bg="rgba(0, 0, 0, .3)" gap="xl" justify="center" align="center" direction="column" wrap="wrap">
          <Paper shadow="xs" p="lg">
            <Text>Announcement</Text>
          </Paper>
          <Flex mih={50} bg="rgba(0, 0, 0, .3)" gap="xl" justify="center" align="flex-end" direction="row" wrap="wrap">
            <TextInput
              label="Enter your guess"
              placeholder="Your variant.."
              size="lg"
              value={userGuess}
              onChange={onUserGuessInputChangeHandler}
            />
            <Button
              variant="light"
              rightSection={<IconArrowRight size={14} />}
              onClick={onClickCheckGuessTranslationButton}
              disabled={isDisabledCheckGuessButton}
              size="lg"
            >
              Check
            </Button>
          </Flex>
          <Flex mih={50} bg="rgba(0, 0, 0, .3)" gap="xl" justify="center" align="center" direction="column" wrap="wrap">
            {isUserGuessTrue !== null && <LLMResponse response={isUserGuessTrue}></LLMResponse>}
            <Flex
              mih={50}
              bg="rgba(0, 0, 0, .3)"
              gap="xl"
              justify="center"
              align="center"
              direction="column"
              wrap="wrap"
            >
              <Flex
                mih={50}
                bg="rgba(0, 0, 0, .3)"
                gap="xl"
                justify="center"
                align="flex-end"
                direction="row"
                wrap="wrap"
              >
                <TextInput
                  label="Enter a sentence using this word to remember it and check whether you are correct or not"
                  placeholder="Your sentence.."
                  size="lg"
                  value={userSentence}
                  onChange={onUserSentenceInputChangeHandler}
                />
                <Button
                  variant="light"
                  size="lg"
                  rightSection={<IconArrowRight size={14} />}
                  onClick={onClickCheckUserSentenceButton}
                  disabled={isDisabledCheckSentenceButton}
                >
                  Check
                </Button>
              </Flex>
              {isUserSentenceTrue !== null && <LLMResponse response={isUserSentenceTrue}></LLMResponse>}
            </Flex>
          </Flex>
        </Flex>
      )}
    </div>
  );
};
