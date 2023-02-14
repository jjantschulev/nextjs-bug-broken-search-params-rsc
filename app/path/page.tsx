import { headers } from "next/headers";
import Link from "next/link";

/** Add your relevant code here for the issue to reproduce */
export default function Page() {
  const h = headers();
  const reqUrl = h.get("x-request-url");
  return (
    <div>
      <h1>Problem Page</h1>
      <p>
        <kbd>x-request-url: {reqUrl}</kbd>
      </p>
      <div>
        <Link href="/path/?query=foo">/?query=foo</Link>
      </div>
      <div>
        <Link href="/path/?query=bar">/?query=bar</Link>
      </div>
    </div>
  );
}
