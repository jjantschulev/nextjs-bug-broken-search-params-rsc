"use client";

import { useRouter } from "next/navigation";
import { FC } from "react";

export const RouterBtn: FC<{ url: string }> = ({ url }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.replace(url);
      }}
    >
      Go to: <kbd>{url}</kbd>
    </button>
  );
};
