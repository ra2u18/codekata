import { PREDEFINED_TOPICS } from "./constants";

type Topic = (typeof PREDEFINED_TOPICS)[number];

type User = {
  name: string;
  surname: string;
  topic: Topic | string;
  imageUrl: string | null;
};
