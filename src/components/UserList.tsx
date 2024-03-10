"use client";

import React, { Dispatch, SetStateAction } from "react";
import User from "./User";
import { UserData } from "../../proto/typescript/pb_out/main";

// テストデータ
const users: UserData[] = [
  {
    userId: "hogehogeId",
    username: "Mike Tanaka",
    firstname: "Mike",
    lastname: "Tanaka",
    firstnameKana: "マイク",
    lastnameKana: "タナカ",
    statusMessage: "I wanna be a CTO !!",
    tag: [
      {
        tagId: "tag1",
        tagName: "Engineer",
      },
      {
        tagId: "tag2",
        tagName: "CTO",
      },
    ],
    iconImageHash:
      "https://storage.googleapis.com/dev-open-hacku-bucket/dev-person-images/person1.jpg",
  },
  {
    userId: "John Smith",
    username: "John Smith",
    firstname: "John",
    lastname: "Smith",
    firstnameKana: "ジョン",
    lastnameKana: "スミス",
    statusMessage: "Learning new things every day!",
    tag: [
      {
        tagId: "tag3",
        tagName: "Developer",
      },
      {
        tagId: "tag4",
        tagName: "Tech Enthusiast",
      },
    ],
    iconImageHash:
      "https://storage.googleapis.com/dev-open-hacku-bucket/dev-person-images/person2.jpg",
  },
  {
    userId: "Emily Johnson",
    username: "Emily Johnson",
    firstname: "Emily",
    lastname: "Johnson",
    firstnameKana: "エミリー",
    lastnameKana: "ジョンソン",
    statusMessage: "Coding is my passion!",
    tag: [
      {
        tagId: "tag5",
        tagName: "Software Engineer",
      },
      {
        tagId: "tag6",
        tagName: "Problem Solver",
      },
    ],
    iconImageHash:
      "https://storage.googleapis.com/dev-open-hacku-bucket/dev-person-images/person3.jpg",
  },
  {
    userId: "Jessica Lee",
    username: "Jessica Lee",
    firstname: "Jessica",
    lastname: "Lee",
    firstnameKana: "ジェシカ",
    lastnameKana: "リー",
    statusMessage: "Creating innovative solutions!",
    tag: [
      {
        tagId: "tag7",
        tagName: "Product Manager",
      },
      {
        tagId: "tag8",
        tagName: "Entrepreneur",
      },
    ],
    iconImageHash:
      "https://storage.googleapis.com/dev-open-hacku-bucket/dev-person-images/person4.jpg",
  },
  {
    userId: "Michael Brown",
    username: "Michael Brown",
    firstname: "Michael",
    lastname: "Brown",
    firstnameKana: "マイケル",
    lastnameKana: "ブラウン",
    statusMessage: "Dreaming big and achieving bigger!",
    tag: [
      {
        tagId: "tag9",
        tagName: "Business Analyst",
      },
      {
        tagId: "tag10",
        tagName: "Data Scientist",
      },
    ],
    iconImageHash:
      "https://storage.googleapis.com/dev-open-hacku-bucket/dev-person-images/person5.jpg",
  },
  {
    userId: "Sophia Martinez",
    username: "Sophia Martinez",
    firstname: "Sophia",
    lastname: "Martinez",
    firstnameKana: "ソフィア",
    lastnameKana: "マルティネス",
    statusMessage: "Exploring the world of AI!",
    tag: [
      {
        tagId: "tag11",
        tagName: "AI Researcher",
      },
      {
        tagId: "tag12",
        tagName: "Machine Learning Engineer",
      },
    ],
    iconImageHash:
      "https://storage.googleapis.com/dev-open-hacku-bucket/dev-person-images/person6.jpg",
  },
  {
    userId: "David Garcia",
    username: "David Garcia",
    firstname: "David",
    lastname: "Garcia",
    firstnameKana: "デイビッド",
    lastnameKana: "ガルシア",
    statusMessage: "Building the future, one line of code at a time!",
    tag: [
      {
        tagId: "tag13",
        tagName: "Web Developer",
      },
      {
        tagId: "tag14",
        tagName: "UI/UX Designer",
      },
    ],
    iconImageHash:
      "https://storage.googleapis.com/dev-open-hacku-bucket/dev-person-images/person7.jpg",
  },
];

interface Props {
  setHoveredUser: Dispatch<SetStateAction<null | UserData>>;
}

/**
 * UserList Component
 * ユーザー一覧
 */
const UserList = (props: Props) => {
  const { setHoveredUser } = props;

  return (
    <div className="divide-y">
      {users.map((user) => {
        return (
          <div key={user.userId} onMouseEnter={() => setHoveredUser(user)}>
            <User user={user} />
          </div>
        );
      })}
    </div>
  );
};

export default UserList;