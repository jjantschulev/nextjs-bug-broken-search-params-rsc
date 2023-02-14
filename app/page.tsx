import Link from "next/link";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <Link href="/path">Go to the test page</Link>
      </div>
    </div>
  );
}
