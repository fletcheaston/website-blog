var k=Object.defineProperty;var v=(i,t,s)=>t in i?k(i,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[t]=s;var g=(i,t,s)=>v(i,typeof t!="symbol"?t+"":t,s);import{a as h,j as e,aK as S}from"./main-D9G3XBrV.js";import{z as x}from"./index-mSkvzYyn.js";import{I as b}from"./view-input-FEvSyGmF.js";import{s as w}from"./utils-Lxqj250D.js";import{B as P}from"./button-l-Wcb_eN.js";import{P as n,T as y}from"./code-block-hQgQ5wpU.js";import{B as T}from"./layout-CJ5V7MbM.js";import{H as d}from"./header-DTrf65Je.js";import{T as $}from"./table-CCRoz54v.js";import{C as I}from"./callout-B4Z6dmDh.js";import{S as f}from"./separator-xl41aIvv.js";const p=`012589824304345454345653403898787654310365890
323456712215216783238732312345693201223456781
450144603304306690129641002105892100378901672
343223454456987601234553213456743898465432543
234019765567898501246764789122156784567643456
105678876678983454334895601033021093298932167
987619989569332569543210592344534580112341098
294501238410221078632346787659645676903654348
103410549322101010701458698998765019854789239
212321678989230127890569542345674326761021178
101436769476541436909878431089781015432430087
212345854300498545415678921678196727034567696
210256901211067636324105670543067878123678545
367107810562109897013234787102158969243989430
458998765673456708943101496234549054552170121
321043234589843217652112345109632143461078760
423450103477876876501001232238761232678989654
214567612100945983492376521045690101021234523
105678998761238012385489431058788987120098012
210987787687439121076378942389005678967127656
309456712596528732154307875470114343458934565
498349803487015678567210566965223062101703403
567208701236012569458923417854332176019812212
610119654345643454345698706763894385498703389
231023543210789843210789210012765294307654471
132984980125632310107650123498874101212343560
045675670346541001238943210567943079810014541
125036561257892890547765300343012986701321632
034123498766783087654854301250123875432430701
945671210345892167898901232765234566001521894
876980343210763012789876501875678987189654323
567878432198754803650105432984789843278789010
438969567087634984543215678793212658943898123
821054698456125675643454349783104367652387654
981023789307087676012067245692323456701098578
672316548218996587654198130541214987898123469
543007437100105498903210021230301854302210158
432108128901234567810347130765415675211000147
543219037654323216921438941891034986732789230
698349898341010105434567234567127867845654321
786458723038765123457870123898221058965421032
665467012129851034566962123765432348974330541
674398543122345643677870054878901067889245670
983287654031298762986521067965013454900196989
210189876540107601095432398874322103210187878`,A=x.array(x.string().transform(i=>i.split(""))),_=A.parse(p.split(`
`));let C=class{constructor(t){g(this,"matrix");this.matrix=JSON.parse(JSON.stringify(t))}get trailheads(){const t=[];return this.matrix.forEach((s,a)=>{s.forEach((r,o)=>{r==="0"&&t.push({y:a,x:o})})}),t}at(t){var s;return(s=this.matrix[t.y])==null?void 0:s[t.x]}getPaths(t,s){if(s===9)return[`${t.y},${t.x}`];const a=[];return this.at({y:t.y-1,x:t.x})===`${s+1}`&&a.push(...this.getPaths({y:t.y-1,x:t.x},s+1)),this.at({y:t.y,x:t.x+1})===`${s+1}`&&a.push(...this.getPaths({y:t.y,x:t.x+1},s+1)),this.at({y:t.y+1,x:t.x})===`${s+1}`&&a.push(...this.getPaths({y:t.y+1,x:t.x},s+1)),this.at({y:t.y,x:t.x-1})===`${s+1}`&&a.push(...this.getPaths({y:t.y,x:t.x-1},s+1)),a}toJSON(){return this.matrix.map(t=>t.join(""))}};function N(){const[i,t]=h.useState("unstarted"),[s,a]=h.useState(0),r=h.useRef(),[o,l]=h.useState(0),u=h.useCallback(async()=>{t("in-progress"),a(0),l(0),r.current=new C(_);for await(const m of r.current.trailheads){a(c=>c+1);const j=new Set(r.current.getPaths(m,0));l(c=>c+j.size),await w(1)}t("complete")},[t,l,a]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mt-4 flex gap-x-4",children:[e.jsx("div",{children:e.jsx(b,{input:p})}),e.jsx("div",{children:e.jsx(P,{size:"lg",onClick:u,disabled:i==="in-progress",children:"Process Input"})})]}),e.jsxs("div",{className:"mt-4 tabular-nums",children:[e.jsxs("div",{children:["Iterations: ",s]}),e.jsxs("div",{children:["Paths: ",o]})]})]})}const J=x.array(x.string().transform(i=>i.split(""))),q=J.parse(p.split(`
`));class z{constructor(t){g(this,"matrix");this.matrix=JSON.parse(JSON.stringify(t))}get trailheads(){const t=[];return this.matrix.forEach((s,a)=>{s.forEach((r,o)=>{r==="0"&&t.push({y:a,x:o})})}),t}at(t){var s;return(s=this.matrix[t.y])==null?void 0:s[t.x]}getPaths(t,s){if(s===9)return[`${t.y},${t.x}`];const a=[];return this.at({y:t.y-1,x:t.x})===`${s+1}`&&a.push(...this.getPaths({y:t.y-1,x:t.x},s+1)),this.at({y:t.y,x:t.x+1})===`${s+1}`&&a.push(...this.getPaths({y:t.y,x:t.x+1},s+1)),this.at({y:t.y+1,x:t.x})===`${s+1}`&&a.push(...this.getPaths({y:t.y+1,x:t.x},s+1)),this.at({y:t.y,x:t.x-1})===`${s+1}`&&a.push(...this.getPaths({y:t.y,x:t.x-1},s+1)),a}toJSON(){return this.matrix.map(t=>t.join(""))}}function E(){const[i,t]=h.useState("unstarted"),[s,a]=h.useState(0),r=h.useRef(),[o,l]=h.useState(0),u=h.useCallback(async()=>{t("in-progress"),a(0),l(0),r.current=new z(q);for await(const m of r.current.trailheads){a(c=>c+1);const j=r.current.getPaths(m,0);l(c=>c+j.length),await w(1)}t("complete")},[t,l,a]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mt-4 flex gap-x-4",children:[e.jsx("div",{children:e.jsx(b,{input:p})}),e.jsx("div",{children:e.jsx(P,{size:"lg",onClick:u,disabled:i==="in-progress",children:"Process Input"})})]}),e.jsxs("div",{className:"mt-4 tabular-nums",children:[e.jsxs("div",{children:["Iterations: ",s]}),e.jsxs("div",{children:["Paths: ",o]})]})]})}const Q=function(){return e.jsxs(e.Fragment,{children:[e.jsx(T,{to:S.fullPath}),e.jsx(d,{hash:"part-1-prompt",children:"Part 1 – Prompt"}),e.jsxs("p",{children:["You all arrive at a"," ",e.jsx("a",{href:"https://adventofcode.com/2023/day/15",target:"_blank",children:"Lava Production Facility"})," ","on a floating island in the sky. As the others begin to search the massive industrial complex, you feel a small nose boop your leg and look down to discover a"," ",e.jsx("span",{title:"i knew you would come back",children:"reindeer"})," wearing a hard hat."]}),e.jsxs("p",{children:[`The reindeer is holding a book titled "Lava Island Hiking Guide". However, when you open the book, you discover that most of it seems to have been scorched by lava! As you're about to ask how you can help, the reindeer brings you a blank`," ",e.jsx("a",{href:"https://en.wikipedia.org/wiki/Topographic_map",target:"_blank",children:"topographic map"})," ","of the surrounding area (your puzzle input) and looks up at you excitedly."]}),e.jsx("p",{children:"Perhaps you can help fill in the missing hiking trails?"}),e.jsxs("p",{children:["The topographic map indicates the ",e.jsx("em",{children:"height"})," at each position using a scale from ",e.jsx("code",{children:"0"})," (lowest) to ",e.jsx("code",{children:"9"})," (highest). For example:"]}),e.jsx(n,{content:`0123
1234
8765
9876`}),e.jsxs("p",{children:["Based on un-scorched scraps of the book, you determine that a good hiking trail is"," ",e.jsx("em",{children:"as long as possible"})," and has an ",e.jsx("em",{children:"even, gradual, uphill slope"}),". For all practical purposes, this means that a ",e.jsx("em",{children:"hiking trail"})," is any path that starts at height ",e.jsx("code",{children:"0"}),", ends at height ",e.jsx("code",{children:"9"}),", and always increases by a height of exactly 1 at each step. Hiking trails never include diagonal steps - only up, down, left, or right (from the perspective of the map)."]}),e.jsx("p",{children:"You look up from the map and notice that the reindeer has helpfully begun to construct a small pile of pencils, markers, rulers, compasses, stickers, and other equipment you might need to update the map with hiking trails."}),e.jsxs("p",{children:["A ",e.jsx("em",{children:"trailhead"})," is any position that starts one or more hiking trails - here, these positions will always have height ",e.jsx("code",{children:"0"}),". Assembling more fragments of pages, you establish that a trailhead's ",e.jsx("em",{children:"score"})," is the number of"," ",e.jsx("code",{children:"9"}),"-height positions reachable from that trailhead via a hiking trail. In the above example, the single trailhead in the top left corner has a score of"," ",e.jsx("code",{children:"1"})," because it can reach a single ",e.jsx("code",{children:"9"})," (the one in the bottom left)."]}),e.jsxs("p",{children:["This trailhead has a score of ",e.jsx("code",{children:"2"}),":"]}),e.jsx(n,{content:`...0...
...1...
...2...
6543456
7.....7
8.....8
9.....9`}),e.jsxs("p",{children:["(The positions marked ",e.jsx("code",{children:"."})," are impassable tiles to simplify these examples; they do not appear on your actual topographic map.)"]}),e.jsxs("p",{children:["This trailhead has a score of ",e.jsx("code",{children:"4"})," because every ",e.jsx("code",{children:"9"})," is reachable via a hiking trail except the one immediately to the left of the trailhead:"]}),e.jsx(n,{content:`..90..9
...1.98
...2..7
6543456
765.987
876....
987....`}),e.jsxs("p",{children:["This topographic map contains ",e.jsx("em",{children:"two"})," trailheads; the trailhead at the top has a score of ",e.jsx("code",{children:"1"}),", while the trailhead at the bottom has a score of"," ",e.jsx("code",{children:"2"}),":"]}),e.jsx(n,{content:`10..9..
2...8..
3...7..
4567654
...8..3
...9..2
.....01`}),e.jsx("p",{children:"Here's a larger example:"}),e.jsx(n,{content:`89010123
78121874
87430965
96549874
45678903
32019012
01329801
10456732`}),e.jsxs("p",{children:["This larger example has 9 trailheads. Considering the trailheads in reading order, they have scores of ",e.jsx("code",{children:"5"}),", ",e.jsx("code",{children:"6"}),", ",e.jsx("code",{children:"5"}),", ",e.jsx("code",{children:"3"}),","," ",e.jsx("code",{children:"1"}),", ",e.jsx("code",{children:"3"}),", ",e.jsx("code",{children:"5"}),", ",e.jsx("code",{children:"3"}),", and ",e.jsx("code",{children:"5"}),". Adding these scores together, the sum of the scores of all trailheads is"," ",e.jsx("code",{children:e.jsx("em",{children:"36"})}),"."]}),e.jsxs("p",{children:["The reindeer gleefully carries over a protractor and adds it to the pile."," ",e.jsx("em",{children:"What is the sum of the scores of all trailheads on your topographic map?"})]}),e.jsx(d,{hash:"part-1-solution",children:"Part 1 – Solution"}),e.jsx(N,{}),e.jsx("p",{className:"mt-4",children:"A few steps to this:"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Get all of the trailheads by checking for positions in the matrix that contain a"," ",e.jsx("code",{children:"0"})]}),e.jsxs("li",{children:["Iterate over each trailhead",e.jsxs("ol",{children:[e.jsx("li",{children:"Get the number of trailends for each trailhead"}),e.jsx("li",{children:"De-duplicate the trailends for each trailhead"}),e.jsx("li",{children:"Count the number of de-duplicated trailends for each trailhead"})]})]})]}),e.jsxs("p",{children:["The code below shows how I calculated trailheads and paths. The real magic is in the"," ",e.jsx("code",{children:"getPaths"})," method. This is a recursive method that iterates over positions around the current position, checking for the next step in the matrix. If we find the next step, recursively call the method with the next node."]}),e.jsxs(I,{level:"question",header:e.jsxs(e.Fragment,{children:["What's up with"," ",e.jsxs("code",{children:["type StrPosition = `$","{","number","}",",$","{","number","}","`"]})]}),children:[e.jsxs("p",{children:["In JavaScript, object equality is"," ",e.jsx("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness",target:"_blank",children:"weird"}),", especially if you're coming from a language like Python."]}),e.jsxs("p",{children:["In Python, you'll typically use ",e.jsx("code",{children:"object_a == object_b"}),", which works out-of-the-box for instances of Pydantic classes and dataclasses."]}),e.jsxs("p",{children:["In JavaScript, equality checks are similar to Python's"," ",e.jsx("code",{children:"object_a is object_b"}),"."]}),e.jsx("p",{children:"My goal was to get an object that didn't force me to worry about JavaScript's funky object equality. By converting the coordinates to a string, instead of using an object, I could just use simple equality checks."}),e.jsxs("p",{children:["I could've used something like"," ",e.jsxs("a",{href:"https://lodash.com/docs/#isEqual",target:"_blank",children:["lodash's ",e.jsx("code",{children:"isEqual"})]}),", but this was easier ¯\\_(ツ)_/¯"]}),e.jsxs("p",{children:["So instead of doing deep object equality checks, I simply put the numbers into a string. That string always has the ",e.jsx("code",{children:"y"})," and ",e.jsx("code",{children:"x"})," coordinates within the matrix. TypeScript helps guarentee this with"," ",e.jsx("a",{href:"https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types",target:"_blank",children:"literal types"}),"."]}),e.jsx("p",{children:"Then, when I want to de-duplicate data, I can simply transform the array of strings into a set of strings."})]}),e.jsx(y,{content:`const parser = z.array(z.string().transform((value) => value.split("")));
const values = parser.parse(input.split("\\n"));

interface Position {
    y: number;
    x: number;
}

type StrPosition = \`\${number},\${number}\`;

class Map {
    matrix: Array<Array<string>>;

    constructor(matrix: Array<Array<string>>) {
        // Poor man's deep-copy
        this.matrix = JSON.parse(JSON.stringify(matrix));
    }

    get trailheads() {
        const nodes: Array<Position> = [];

        this.matrix.forEach((row, y) => {
            row.forEach((character, x) => {
                if (character === "0") {
                    nodes.push({ y, x });
                }
            });
        });

        return nodes;
    }

    at(position: Position) {
        return this.matrix[position.y]?.[position.x];
    }

    getPaths(position: Position, current: number): Array<StrPosition> {
        if (current === 9) {
            return [\`\${position.y},\${position.x}\`];
        }

        // Check all surrounding nodes for current + 1
        const paths: Array<StrPosition> = [];

        // Above
        if (this.at({ y: position.y - 1, x: position.x }) === \`\${current + 1}\`) {
            paths.push(...this.getPaths({ y: position.y - 1, x: position.x }, current + 1));
        }

        // Right
        if (this.at({ y: position.y, x: position.x + 1 }) === \`\${current + 1}\`) {
            paths.push(...this.getPaths({ y: position.y, x: position.x + 1 }, current + 1));
        }

        // Below
        if (this.at({ y: position.y + 1, x: position.x }) === \`\${current + 1}\`) {
            paths.push(...this.getPaths({ y: position.y + 1, x: position.x }, current + 1));
        }

        // Left
        if (this.at({ y: position.y, x: position.x - 1 }) === \`\${current + 1}\`) {
            paths.push(...this.getPaths({ y: position.y, x: position.x - 1 }, current + 1));
        }

        return paths;
    }
}
`}),e.jsx(f,{}),e.jsx(d,{hash:"part-2-prompt",children:"Part 2 – Prompt"}),e.jsx("p",{children:"The reindeer spends a few minutes reviewing your hiking trail map before realizing something, disappearing for a few minutes, and finally returning with yet another slightly-charred piece of paper."}),e.jsxs("p",{children:["The paper describes a second way to measure a trailhead called its ",e.jsx("em",{children:"rating"}),". A trailhead's rating is the ",e.jsx("em",{children:"number of distinct hiking trails"})," which begin at that trailhead. For example:"]}),e.jsx(n,{content:`.....0.
..4321.
..5..2.
..6543.
..7..4.
..8765.
..9....`}),e.jsxs("p",{children:["The above map has a single trailhead; its rating is ",e.jsx("code",{children:"3"})," because there are exactly three distinct hiking trails which begin at that position:"]}),e.jsx(n,{content:`.....0.   .....0.   .....0.
..4321.   .....1.   .....1.
..5....   .....2.   .....2.
..6....   ..6543.   .....3.
..7....   ..7....   .....4.
..8....   ..8....   ..8765.
..9....   ..9....   ..9....`}),e.jsxs("p",{children:["Here is a map containing a single trailhead with rating ",e.jsx("code",{children:"13"}),":"]}),e.jsx(n,{content:`..90..9
...1.98
...2..7
6543456
765.987
876....
987....`}),e.jsxs("p",{children:["This map contains a single trailhead with rating ",e.jsx("code",{children:"227"})," (because there are"," ",e.jsx("code",{children:"121"})," distinct hiking trails that lead to the ",e.jsx("code",{children:"9"})," on the right edge and ",e.jsx("code",{children:"106"})," that lead to the ",e.jsx("code",{children:"9"})," on the bottom edge):"]}),e.jsx(n,{content:`012345
123456
234567
345678
4.6789
56789.`}),e.jsx("p",{children:"Here's the larger example from before:"}),e.jsx(n,{content:`89010123
78121874
87430965
96549874
45678903
32019012
01329801
10456732`}),e.jsxs("p",{children:["Considering its trailheads in reading order, they have ratings of ",e.jsx("code",{children:"20"}),","," ",e.jsx("code",{children:"24"}),", ",e.jsx("code",{children:"10"}),", ",e.jsx("code",{children:"4"}),", ",e.jsx("code",{children:"1"}),", ",e.jsx("code",{children:"4"}),","," ",e.jsx("code",{children:"5"}),", ",e.jsx("code",{children:"8"}),", and ",e.jsx("code",{children:"5"}),". The sum of all trailhead ratings in this larger example topographic map is"," ",e.jsx("code",{children:e.jsx("em",{children:"81"})}),"."]}),e.jsxs("p",{children:["You're not sure how, but the reindeer seems to have crafted some tiny flags out of toothpicks and bits of paper and is using them to mark trailheads on your topographic map. ",e.jsx("em",{children:"What is the sum of the ratings of all trailheads?"})]}),e.jsx(d,{hash:"part-2-solution",children:"Part 2 – Solution"}),e.jsx(E,{}),e.jsxs("p",{children:["This uses the ",e.jsx("em",{children:"exact same code"})," as Part 1, but I don't de-duplicate trailends."]}),e.jsx(f,{}),e.jsx(d,{hash:"recap",children:"Recap"}),e.jsxs($,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Part 1 Time"}),e.jsx("th",{children:"Part 1 Rank"}),e.jsx("th",{children:"Part 2 Time"}),e.jsx("th",{children:"Part 2 Rank"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"00:22:14"}),e.jsx("td",{children:"3,459"}),e.jsx("td",{children:"00:23:56"}),e.jsx("td",{children:"2,795"})]})})]}),e.jsxs("p",{children:["This was fairly easy, especially for a Day 10 problem. I'm super proud of my Part 2 solution, which ",e.jsx("em",{children:"only required me to change two lines of code"})," from my Part 1 solution. All of the time spent on Part 2 was double-checking the given examples to make sure I didn't miss anything."]}),e.jsx("h3",{children:"Part 1"}),e.jsx(y,{content:`const trailends = new Set(map.getPaths(trailhead, 0));

runningTotal += trailends.size;`}),e.jsx("h3",{children:"Part 2"}),e.jsx(y,{content:`const trailends = map.getPaths(trailhead, 0);

runningTotal += trailends.length;`})]})};export{Q as component};
