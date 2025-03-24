import{r as l,j as e}from"./index-asdfw01p.js";import{s as v,a as z}from"./utils-D-kyB9IB.js";import{z as a,I as S}from"./view-input-CL2vAZfB.js";import{B as k}from"./button-DxUZDvDh.js";import{A as P,a as T,b as I,c as N}from"./accordion-DhbGs5hJ.js";import{P as C,T as g}from"./code-block-DGk06EOt.js";import{I as O}from"./routeInfo-DwfsGK-b.js";import{B as $}from"./layout-Bbw6xlVW.js";import{H as u}from"./header-bLivdw4r.js";import{T as H}from"./table-CewKNS46.js";import{S as b}from"./separator-COdazgSt.js";const p="4 4841539 66 5279 49207 134 609568 0",R=a.array(a.coerce.number()),J=R.parse(p.split(" ")),y=25;function B(){const[o,t]=l.useState("unstarted"),[d,c]=l.useState(0),s=l.useRef([]),j=l.useCallback(async()=>{t("in-progress"),c(0),s.current=JSON.parse(JSON.stringify(J));for(let h=0;h<y;h++){c(n=>n+1);const i=s.current.map(n=>{if(n===0)return[1];const r=`${n}`;if(r.length%2===0){const m=a.coerce.number().parse(r.slice(0,r.length/2)),f=a.coerce.number().parse(r.slice(r.length/2,r.length));return[m,f]}return[n*2024]});s.current=i.flat(),await v(1)}t("complete")},[t,c]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mt-4 flex gap-x-4",children:[e.jsx("div",{children:e.jsx(S,{input:p})}),e.jsx("div",{children:e.jsx(k,{size:"lg",onClick:j,disabled:o==="in-progress",children:"Process Input"})})]}),e.jsxs("div",{className:"mt-4 tabular-nums",children:[e.jsxs("div",{children:["Progress: ",d," / ",y]}),e.jsxs("div",{children:["Total Stones: ",s.current.length]}),s.current&&e.jsx(P,{type:"single",collapsible:!0,children:e.jsxs(T,{value:"stones",children:[e.jsx(I,{children:"All Stones"}),e.jsx(N,{children:e.jsx("pre",{className:"mt-0",children:e.jsx("code",{className:"w-full leading-tight",children:JSON.stringify(s.current,null,2)})})})]})})]})]})}const F=a.array(a.coerce.number()).transform(o=>Object.fromEntries(o.map(t=>[t,1]))),E=F.parse(p.split(" ")),w=75;function x(o,t,d){o[t]||(o[t]=0),o[t]+=d}function K(){const[o,t]=l.useState("unstarted"),[d,c]=l.useState(0),s=l.useRef({}),j=l.useCallback(async()=>{t("in-progress"),c(0),s.current=JSON.parse(JSON.stringify(E));for(let h=0;h<w;h++)c(i=>i+1),s.current=Object.entries(s.current).reduce((i,[n,r])=>{const m=a.coerce.number().parse(n);if(m===0)x(i,"1",r);else if(n.length%2===0){const f=a.coerce.number().parse(n.slice(0,n.length/2)),A=a.coerce.number().parse(n.slice(n.length/2,n.length));x(i,`${f}`,r),x(i,`${A}`,r)}else x(i,`${m*2024}`,r);return i},{}),await v(1);t("complete")},[t,c]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mt-4 flex gap-x-4",children:[e.jsx("div",{children:e.jsx(S,{input:p})}),e.jsx("div",{children:e.jsx(k,{size:"lg",onClick:j,disabled:o==="in-progress",children:"Process Input"})})]}),e.jsxs("div",{className:"mt-4 tabular-nums",children:[e.jsxs("div",{children:["Progress: ",d," / ",w]}),e.jsxs("div",{children:["Total Stones: ",z(Object.values(s.current))]}),s.current&&e.jsx(P,{type:"single",collapsible:!0,children:e.jsxs(T,{value:"stones",children:[e.jsx(I,{children:"Stone Counter"}),e.jsx(N,{children:e.jsx("pre",{className:"mt-0",children:e.jsx("code",{className:"w-full leading-tight",children:JSON.stringify(s.current,null,2)})})})]})})]})]})}const X=function(){return e.jsxs(e.Fragment,{children:[e.jsx($,{}),e.jsx(u,{hash:"part-1-prompt",children:"Part 1 – Prompt"}),e.jsxs("p",{children:["The ancient civilization on"," ",e.jsx("a",{href:"https://adventofcode.com/2019/day/20",target:"_blank",children:"Pluto"})," ","was known for its ability to manipulate spacetime, and while the Historians explore their infinite corridors, you've noticed a strange set of physics-defying stones."]}),e.jsxs("p",{children:["At first glance, they seem like normal stones: they're arranged in a perfectly"," ",e.jsx("em",{children:"straight line"}),", and each stone has a ",e.jsx("em",{children:"number"})," engraved on it."]}),e.jsxs("p",{children:["The strange part is that every time you"," ",e.jsx("span",{title:"No, they're not statues. Why do you ask?",children:"blink"}),", the stones"," ",e.jsx("em",{children:"change"}),"."]}),e.jsxs("p",{children:["Sometimes, the number engraved on a stone changes. Other times, a stone might"," ",e.jsx("em",{children:"split in two"}),", causing all the other stones to shift over a bit to make room in their perfectly straight line."]}),e.jsxs("p",{children:["As you observe them for a while, you find that the stones have a consistent behavior. Every time you blink, the stones each ",e.jsx("em",{children:"simultaneously"})," change according to the ",e.jsx("em",{children:"first applicable rule"})," in this list:"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:["If the stone is engraved with the number ",e.jsx("code",{children:"0"}),", it is replaced by a stone engraved with the number ",e.jsx("code",{children:"1"}),"."]}),e.jsxs("li",{children:["If the stone is engraved with a number that has an ",e.jsx("em",{children:"even"})," number of digits, it is replaced by ",e.jsx("em",{children:"two stones"}),". The left half of the digits are engraved on the new left stone, and the right half of the digits are engraved on the new right stone. (The new numbers don't keep extra leading zeroes:"," ",e.jsx("code",{children:"1000"})," would become stones ",e.jsx("code",{children:"10"})," and ",e.jsx("code",{children:"0"}),".)"]}),e.jsxs("li",{children:["If none of the other rules apply, the stone is replaced by a new stone; the old stone's number ",e.jsx("em",{children:"multiplied by 2024"})," is engraved on the new stone."]})]}),e.jsxs("p",{children:["No matter how the stones change, their ",e.jsx("em",{children:"order is preserved"}),", and they stay on their perfectly straight line."]}),e.jsx("p",{children:"How will the stones evolve if you keep blinking at them? You take a note of the number engraved on each stone in the line (your puzzle input)."}),e.jsxs("p",{children:["If you have an arrangement of five stones engraved with the numbers"," ",e.jsx("code",{children:"0 1 10 99 999"})," and you blink once, the stones transform as follows:"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:["The first stone, ",e.jsx("code",{children:"0"}),", becomes a stone marked ",e.jsx("code",{children:"1"}),"."]}),e.jsxs("li",{children:["The second stone, ",e.jsx("code",{children:"1"}),", is multiplied by 2024 to become"," ",e.jsx("code",{children:"2024"}),"."]}),e.jsxs("li",{children:["The third stone, ",e.jsx("code",{children:"10"}),", is split into a stone marked ",e.jsx("code",{children:"1"})," ","followed by a stone marked ",e.jsx("code",{children:"0"}),"."]}),e.jsxs("li",{children:["The fourth stone, ",e.jsx("code",{children:"99"}),", is split into two stones marked"," ",e.jsx("code",{children:"9"}),"."]}),e.jsxs("li",{children:["The fifth stone, ",e.jsx("code",{children:"999"}),", is replaced by a stone marked"," ",e.jsx("code",{children:"2021976"}),"."]})]}),e.jsxs("p",{children:["So, after blinking once, your five stones would become an arrangement of seven stones engraved with the numbers ",e.jsx("code",{children:"1 2024 1 0 9 9 2021976"}),"."]}),e.jsx("p",{children:"Here is a longer example:"}),e.jsx(C,{content:`Initial arrangement:
125 17

After 1 blink:
253000 1 7

After 2 blinks:
253 0 2024 14168

After 3 blinks:
512072 1 20 24 28676032

After 4 blinks:
512 72 2024 2 0 2 4 2867 6032

After 5 blinks:
1036288 7 2 20 24 4048 1 4048 8096 28 67 60 32

After 6 blinks:
2097446912 14168 4048 2 0 2 4 40 48 2024 40 48 80 96 2 8 6 7 6 0 3 2`}),e.jsxs("p",{children:["In this example, after blinking six times, you would have ",e.jsx("code",{children:"22"})," stones. After blinking 25 times, you would have"," ",e.jsx("code",{children:e.jsx("em",{children:"55312"})})," ","stones!"]}),e.jsxs("p",{children:["Consider the arrangement of stones in front of you."," ",e.jsx("em",{children:"How many stones will you have after blinking 25 times?"})]}),e.jsx(u,{hash:"part-1-solution",children:"Part 1 – Solution"}),e.jsx(B,{}),e.jsx("p",{className:"mt-4",children:'Brute-force solution. Keep track of all stones in a single array, recalculating the entire array for every "blink".'}),e.jsx(g,{content:`const allStones = allStones.map((stone) => {
    if (stone === 0) {
        return [1];
    }

    const stoneStr = \`\${stone}\`;

    if (stoneStr.length % 2 === 0) {
        const newStone1 = z.coerce
            .number()
            .parse(stoneStr.slice(0, stoneStr.length / 2));

        const newStone2 = z.coerce
            .number()
            .parse(stoneStr.slice(stoneStr.length / 2, stoneStr.length));

        return [newStone1, newStone2];
    }

    return [stone * 2024];
});
`}),e.jsx(b,{}),e.jsx(u,{hash:"part-2-prompt",children:"Part 2 – Prompt"}),e.jsxs("p",{children:["The Historians sure are taking a long time. To be fair, the infinite corridors"," ",e.jsx("em",{children:"are"})," very large."]}),e.jsx("p",{children:e.jsx("em",{children:"How many stones would you have after blinking a total of 75 times?"})}),e.jsx(u,{hash:"part-2-solution",children:"Part 2 – Solution"}),e.jsx(K,{}),e.jsx("p",{className:"mt-4",children:"Part 2 uses a completely different algorithm than Part 1. Keep track of stone counts instead of individual stones."}),e.jsx(g,{content:`const stoneCounter = Object.entries(stoneCounter).reduce(
    (accumulator, [stoneStr, count]) => {
        const stone = z.coerce.number().parse(stoneStr);

        if (stone === 0) {
            add(accumulator, "1", count);
        } else if (stoneStr.length % 2 === 0) {
            const newStone1 = z.coerce
                .number()
                .parse(stoneStr.slice(0, stoneStr.length / 2));

            const newStone2 = z.coerce
                .number()
                .parse(stoneStr.slice(stoneStr.length / 2, stoneStr.length));

            add(accumulator, \`\${newStone1}\`, count);
            add(accumulator, \`\${newStone2}\`, count);
        } else {
            add(accumulator, \`\${stone * 2024}\`, count);
        }

        return accumulator;
    },
    {} as Record<string, number>
);
`}),e.jsx(b,{}),e.jsx(u,{hash:"recap",children:"Recap"}),e.jsxs(H,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Part 1 Time"}),e.jsx("th",{children:"Part 1 Rank"}),e.jsx("th",{children:"Part 2 Time"}),e.jsx("th",{children:"Part 2 Rank"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"00:11:17"}),e.jsx("td",{children:"2,746"}),e.jsx("td",{children:"01:21:55"}),e.jsx("td",{children:"6,057"})]})})]}),e.jsxs("p",{children:["The real trick to Part 2 is not track each stone individually, but to count the number of stones with a given value. That way, we can do a single check and update all of the stones with that value. I rarely use JavaScript's ",e.jsx("code",{children:"reduce"})," ","method, so good opportunity to get more familiar with it!"]}),e.jsx("p",{children:"This took a bit of fiddling around though, and I didn't think to do this until I tried a few other methods:"}),e.jsx("p",{children:"For the first attempt at Part 2, I tried the brute-force method on Part 2, but it soon slowed down to a halt after ~35 blinks."}),e.jsxs("p",{children:['For my second attempt at Part 2, I drew out a tree-diagram of "base numbers" branching out to other "base numbers". I was hoping to reduce the problem down to some complicated maths, and created a bit of code (now scrapped) to help build these trees. I was basically set on this method, until I fed in my input values. The first "large" input value (',e.jsx("code",{children:"4841539"}),") blew up the JavaScript runtime in my browser with a ",e.jsx("code",{children:"Maximum call stack size exceeded"})," error."]}),e.jsx(O,{src:"/blog/advent-of-code/2024/day-11/stones.jpg",alt:"A partial tree diagram of base numbers to other base numbers, drawn on my whiteboard"})]})};export{X as component};
