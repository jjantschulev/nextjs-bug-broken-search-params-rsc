# Search params are concatenated to request pathname in RSC request.

I noticed that when making a request to a page with a query string, the query string is concatenated to the request pathname when examined from middleware.

Ie:

1. use `router.replace()` in a client component to update the query params to `/path/?value=123`
2. middleware logs the `request.url` as '/pathvalue=123`. The trailing slash and the question mark is missing.
   - Both `req.url` and `req.nextUrl.href` have this same issue.
   - This issue does NOT occur in dev mode or in a local build (`yarn build` and `yarn start`). It only occurs when deployed to Vercel.
   - This issue occurs only if the `RSC` header is sent in the request. If the `RSC` header is not sent, the request url is correct in the middleware.
   - Hence we can observe the incorrect request url in the middleware by running `curl -v "https://nextjs-bug-broken-search-params-rsc.vercel.app/path/?value=123" -H "RSC: 1"`.
     - This will result in the incorrect pathname of `/pathvalue=123` in the middleware.
     - And `req.nextUrl.search` will be empty.
   - However if we run `curl -v "https://nextjs-bug-broken-search-params-rsc.vercel.app/path/?value=123"`, the request url is correct in the middleware.
     - This will result in the correct pathname of `/path/` in the middleware.
     - And `req.nextUrl.search` will be `?value=123`.

- To Aid in debugging I "return" the values of `req.url`, `req.nextUrl.href`, `req.nextUrl.pathname`, and `req.nextUrl.search` in the middleware by setting response headers such as `x-request-url`.

To see this issue live, visit [this vercel deployment](https://nextjs-bug-broken-search-params-rsc.vercel.app/path/)

The important files are:

- `middleware.tsx`
- `app/path/page.tsx`

This seems like a major bug in handling of URLs and search params in RSC requests. I hope we can resolve this quickly. Please let me know if you need any more information.

---

### Default Issue Readme below

This is a [Next.js](https://nextjs.org/) template to use when reporting a [bug in the Next.js repository](https://github.com/vercel/next.js/issues).

## Getting Started

These are the steps you should follow when creating a bug report:

- Bug reports must be verified against the `next@canary` release. The canary version of Next.js ships daily and includes all features and fixes that have not been released to the stable version yet. Think of canary as a public beta. Some issues may already be fixed in the canary version, so please verify that your issue reproduces before opening a new issue. Issues not verified against `next@canary` will be closed after 30 days.
- Make sure your issue is not a duplicate. Use the [GitHub issue search](https://github.com/vercel/next.js/issues) to see if there is already an open issue that matches yours. If that is the case, upvoting the other issue's first comment is desireable as we often prioritize issues based on the number of votes they receive. Note: Adding a "+1" or "same issue" comment without adding more context about the issue should be avoided. If you only find closed related issues, you can link to them using the issue number and `#`, eg.: `I found this related issue: #3000`.
- If you think the issue is not in Next.js, the best place to ask for help is our [Discord community](https://nextjs.org/discord) or [GitHub discussions](https://github.com/vercel/next.js/discussions). Our community is welcoming and can often answer a project-related question faster than the Next.js core team.
- Make the reproduction as minimal as possible. Try to exclude any code that does not help reproducing the issue. E.g. if you experience problems with Routing, including ESLint configurations or API routes aren't necessary. The less lines of code is to read through, the easier it is for the Next.js team to investigate. It may also help catching bugs in your codebase before publishing an issue.

## How to use this template

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example reproduction-template reproduction-app
```

```bash
yarn create next-app --example reproduction-template reproduction-app
```

```bash
pnpm create next-app --example reproduction-template reproduction-app
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [How to Contribute to Open Source (Next.js)](https://www.youtube.com/watch?v=cuoNzXFLitc) - a video tutorial by Lee Robinson
- [Triaging in the Next.js repository](https://github.com/vercel/next.js/blob/canary/contributing.md#triaging) - how we work on issues
- [StackBlitz](https://stackblitz.com/fork/github/vercel/next.js/tree/canary/examples/reproduction-template) - Edit this repository on StackBlitz
- [CodeSandbox](https://codesandbox.io/s/github/vercel/next.js/tree/canary/examples/reproduction-template) - Edit this repository on CodeSandbox

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deployment

If your reproduction needs to be deployed, the easiest way is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
