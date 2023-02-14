"use client";
import { useCallback, useState } from "react";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  const [path, setPath] = useState("/api/?query=world");
  const [result, setResult] = useState("");

  const makeRequest = useCallback(async () => {
    const request = await fetch(path);
    const reqUrl = request.headers.get("x-request-url");
    setResult(reqUrl);
  }, [path]);

  return (
    <div>
      <h1>Home</h1>
      <input
        type="text"
        value={path}
        onChange={(e) => setPath(e.target.value)}
      />
      <p>
        <kbd>x-request-url: {result}</kbd>
      </p>
      <button onClick={makeRequest}>Make Request</button>
    </div>
  );
}
