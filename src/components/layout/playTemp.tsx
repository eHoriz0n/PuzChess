import React, { FC } from "react";
import Button from "../ui/button";
import Image from "next/image";
import Badge from "../ui/badge";
type setGame = {
  setGame: (value: boolean) => void;
  user: {
    score: number;
    badge: "ROCKIE" | "SILVER" | "GOLDEN" | "DIAMOND" | "PLATINIUM";
    chessElo: number;
  };
};
const PlayTemp: FC<setGame> = ({ setGame, user }) => {
  return (
    <div className="py-44 flex px-10  lg:px-40 justify-around  items-center w-full  ">
      <div className="flex w-auto gap-12 flex-col items-start">
        <div className="flex  flex-col md:items-start items-center">
          <h2 className="md:text-largeFnt text-[2.3rem]  font-boldFnt text-center md:text-left">
            Launch a game
          </h2>
          <p className="text-mediumFnt md:text-mediumF text-center md:text-left">
            Test your skills with a random sets <br></br> of chess puzzles
          </p>
        </div>
        <div className="flex gap-4 justify-center  md:justify-between  md:items-start  w-full max-w-[18rem] text-mediumFnt">
          <div className="flex items-center gap-2">
            <p>{user?.badge.toLowerCase()} league</p>
            <div className=" ">
              <Badge badge={user?.badge} />
            </div>
          </div>

          <p>elo: {user?.chessElo}</p>
        </div>
        <div className="flex w-full max-w-[18rem] justify-center md:justify-start">
          <Button
            label="Play"
            style="Green"
            additional="rounded-regBtn px-8 text-black"
            onClick={() => {
              setGame(true);
            }}
          />
        </div>
      </div>
      <div className="  hidden lg:block  ">
        <Image
          alt="dice"
          src={"/dice.svg"}
          quality={100}
          priority
          width={350}
          height={350}
        />{" "}
      </div>
    </div>
  );
};

export default PlayTemp;
