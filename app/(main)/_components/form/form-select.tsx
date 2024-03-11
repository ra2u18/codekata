"use client";

import { useState, useEffect, useMemo } from "react";

import debounce from "lodash/debounce";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PREDEFINED_TOPICS } from "@/types/constants";
import { Topic } from "@/types/custom";
import { FormInput } from "./form-input";
import { useUserStore } from "@/store/user-store";

type FormSelectProps = {
  topic?: string;
};

export const FormSelect = ({ topic = '' }: FormSelectProps) => {
  const isCustomTopic = topic && !PREDEFINED_TOPICS.includes(topic) && topic !== "Other";

  const [selectedValue, setSelectedValue] = useState<string | null>(PREDEFINED_TOPICS.includes(topic) ? topic : "Other");
  const setTopic = useUserStore((state) => state.setTopic);

  // Show the input only if "Other" is selected or a custom topic is provided.
  const showInput = selectedValue === "Other" || isCustomTopic;

  const handleSelectionChange = (value: Topic) => {
    setSelectedValue(value);

    if (value !== "Other") setTopic(value);
  };

  // Create debounce mechanism for the user custom input
  const handleCustomTopicChange = debounce((value: string) => {
    setTopic(value);
  }, 200);

  useEffect(() => {
    return () => {
      handleCustomTopicChange.cancel();
    };
  }, [handleCustomTopicChange]);

  return (
    <>
      <Select onValueChange={handleSelectionChange}>
        <SelectTrigger>
          <SelectValue placeholder={selectedValue} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Topics</SelectLabel>
            {PREDEFINED_TOPICS.map((topic) => (
              <SelectItem key={topic.toLowerCase()} value={topic}>
                {topic}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      {showInput && (
        <FormInput
          onChange={(e) => handleCustomTopicChange(e.target.value)}
          id="customTopic"
          label="Custom Topic"
          type="text"
          placeholder={isCustomTopic ? topic : ''}
        />
      )}
    </>
  );
};
