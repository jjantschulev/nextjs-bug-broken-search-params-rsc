import { headers } from "next/headers";
import { RouterBtn } from "./RouterBtn";

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
      <RouterBtn url="/path/?query=bar" />
      <br />
      <RouterBtn url="/path/?query=foo" />
    </div>
  );
}
