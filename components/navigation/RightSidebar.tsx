import ROUTES from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TagCard from "../cards/TagCard";

const hotQuestions = [
  {
    _id: "1",
    title: "How to create a custom hook in React?",
  },
  {
    _id: "2",
    title: "How to use React?",
  },
  {
    _id: "3",
    title: "How to center a div?",
  },
  {
    _id: "4",
    title: "How to generate questions?",
  },
  {
    _id: "5",
    title: "How to create custom form?",
  },
];

const popularTags = [
  { _id: "1", name: "react", questions: 100 },
  { _id: "2", name: "javascript", questions: 200 },
  { _id: "3", name: "typescript", questions: 150 },
  { _id: "4", name: "nextjs", questions: 50 },
  { _id: "5", name: "react-query", questions: 75 },
];

const RightSidebar = () => {
  return (
    <section className="pt-36 background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto p-6 border-l shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold ">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map(({ _id, title }) => (
            <Link
              key={_id}
              href={ROUTES.PROFILE(_id)}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">{title}</p>
              <Image
                src="/icons/chevron-right.svg"
                alt="Chevron"
                width={20}
                height={20}
                className="inverted-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map(({ _id, name, questions }) => (
            <TagCard
              key={_id}
              _id={_id}
              name={name}
              questions={questions}
              showCounts
              compact
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
