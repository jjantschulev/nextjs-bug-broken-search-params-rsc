"use client";

import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";

/** Add your relevant code here for the issue to reproduce */
export default function Page() {
  const router = useRouter();
  const pathname = usePathname();

  const setSearchParams = useCallback(() => {
    const params = new URLSearchParams();
    params.set("value", (Math.random() * 1000000).toFixed());
    router.replace(`${pathname}?${params}`);
  }, []);

  return (
    <div>
      <h1>Problem Page</h1>
      <button onClick={setSearchParams}>Set Search Params</button>
    </div>
  );
}
