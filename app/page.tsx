"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  const params = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const toggleParams = useCallback(() => {
    const newParams = new URLSearchParams(params);
    if (newParams.has("foo")) {
      newParams.delete("foo");
    } else {
      newParams.set("foo", "bar");
    }
    const newPath = `${pathname}?${newParams}`;
    router.replace(newPath);
  }, [params, location]);

  return (
    <div>
      <h1>Home</h1>
      <p>Pathname: {pathname}</p>
      <p>Params: {JSON.stringify([...params.entries()])}</p>
      <button onClick={toggleParams}>Toggle Params</button>
    </div>
  );
}
