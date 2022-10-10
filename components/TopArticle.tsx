import React from "react";
import Image from "next/image";
import { Text, Group } from "@mantine/core";

import { AnimatedText } from "./motion/AnimatedText";


export const TopArticle = () => {
  return (
    <div className="mt-20">
      <div className="flex items-center justify-center sm:text-3xl text-2xl">
        <AnimatedText text="Thankyou For Visiting!!" />
      </div>
      <div className="mt-20">
        <Group className="justify-center">
          <div className="">
            <Text weight={600} className="text-2xl border-b-2">
              Yuta N
            </Text>
            <div className="mt-4">
              <Text size="sm">
                はじめまして。ユウタと申します。飲食店勤務5年目です。
              </Text>
              <Text size="sm">
                趣味でプログラミングを始め、のめり込んでいくうちに仕事として携わっていきたいと思い、転職を決意。
              </Text>
              <Text size="sm">直近ではフロントエンドを中心に勉強中です。</Text>
            </div>
          </div>
          <div className="mt-8">
            <Image
              alt="topImage"
              src="/images/top.jpg"
              width={130}
              height={110}
              className="rounded-full"
            />
          </div>
        </Group>
      </div>
    </div>
  );
};
