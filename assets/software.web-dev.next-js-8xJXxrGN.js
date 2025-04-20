import{j as e,N as s,O as a,P as n}from"./main-D9G3XBrV.js";import{T as r}from"./code-block-hQgQ5wpU.js";import{B as i}from"./layout-CJ5V7MbM.js";import{H as o}from"./header-DTrf65Je.js";import{S as t}from"./separator-xl41aIvv.js";import"./button-l-Wcb_eN.js";const u=function(){return e.jsxs(e.Fragment,{children:[e.jsx(i,{to:s.fullPath}),e.jsx(o,{hash:"static-web-apps",children:"Static Web Apps"}),e.jsx("p",{children:'A "web app" is typically a piece of software that...'}),e.jsxs("ol",{className:"mt-2",children:[e.jsx("li",{children:"Runs in a browser (Chrome, Firefox, Safari, Edge, Chromium, etc.)"}),e.jsx("li",{children:"Contains interactive content"})]}),e.jsx("p",{children:`What differentiates web apps from websites is the kinds of interactions someone can perform. There's no simple binary between "website" and "web app", it's more of a spectrum that software can fall along.`}),e.jsx("h3",{children:"Web System Spectrum"}),e.jsxs("div",{className:"mt-4 flex w-full items-center justify-center gap-x-2",children:[e.jsx("div",{className:"text-xl",children:"Website"}),e.jsxs("div",{className:"flex flex-grow items-center",children:[e.jsx(a,{className:"h-6 w-6"}),e.jsx("div",{className:"-mx-4 flex-grow border-t-2 border-t-slate-800"}),e.jsx(n,{className:"h-6 w-6"})]}),e.jsx("div",{className:"text-xl",children:"Web App"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("div",{children:[e.jsx("div",{children:"Self-contained"}),e.jsx("div",{children:"Static, read-only content"}),e.jsx("div",{children:"Content is the same for all users"})]}),e.jsxs("div",{className:"text-right",children:[e.jsx("div",{children:"Talks to external systems"}),e.jsx("div",{children:"Dynamic, interactive content"}),e.jsx("div",{children:"Content depends on the user"})]})]}),e.jsx(t,{}),e.jsx("h3",{children:e.jsxs("code",{children:[e.jsx("a",{href:"https://nextjs.org/docs/app/api-reference/functions/generate-static-params",target:"_blank",children:"generateStaticParams"})," "]})}),e.jsxs("p",{children:[e.jsx("code",{children:"generateStaticParams"})," is a function that allows you to determine dynamic-routes at build-time instead of runtime. This will let you query a database or other external system for data once, when the software is built."]}),e.jsx("p",{children:"This can greatly reduce your cloud infrastructure overhead if you have dynamic content that can be determined ahead of time."}),e.jsx(r,{content:`// Return a list of \`params\` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const posts = await database.query(...);
 
  return posts.map((post) => ({
    slug: post.slug,
  }))
}
 
// Multiple versions of this page will be statically generated
// using the \`params\` returned by \`generateStaticParams\`
export const Route = createFileRoute("/software/web-dev/next-js")({
    component: Page,
});

function Page(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  
  // Query for the full set of data by the \`slug\` param
  const post = await database.query(...);

  // Render static content
  // ...
}`}),e.jsx(t,{}),e.jsx("h3",{children:e.jsxs("code",{children:[e.jsx("a",{href:"https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic",target:"_blank",children:'export const dynamic = "force-static";'})," "]})}),e.jsxs("p",{children:[e.jsx("code",{children:'export const dynamic = "force-static";'})," will force your page/route to be static. Any dynamic functions (",e.jsx("code",{children:"cookies"}),", ",e.jsx("code",{children:"headers"}),", etc.) will return empty values."]}),e.jsx("p",{children:"Any data fetched by the page will be fetched one at build time."}),e.jsx(t,{}),e.jsxs("p",{children:["By using ",e.jsx("code",{children:"generateStaticParams"})," and"," ",e.jsx("code",{children:'export const dynamic = "force-static";'}),", you can render all pages in your Nest.js web app at build time."]}),e.jsx("p",{children:"You can still use Client Components if you want highly-interactive content."})]})};export{u as component};
