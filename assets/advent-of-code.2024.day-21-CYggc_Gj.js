import{r as l,j as e}from"./index-asdfw01p.js";import{a as g,C as u}from"./utils-D-kyB9IB.js";import{z as d,I as k}from"./view-input-CL2vAZfB.js";import{B as w}from"./button-DxUZDvDh.js";import{P as h,T as f}from"./code-block-DGk06EOt.js";import{B as K}from"./layout-Bbw6xlVW.js";import{H as v}from"./header-bLivdw4r.js";import{T as I}from"./table-CewKNS46.js";import{S as b}from"./separator-COdazgSt.js";import"./routeInfo-DwfsGK-b.js";const p=`593A
283A
670A
459A
279A`,S=d.array(d.string()),q=S.parse(p.split(`
`)),N={AA:"",A0:"<A",A1:"^<<A",A2:"<^A",A3:"^A",A4:"^^<<A",A5:"<^^A",A6:"^^A",A7:"^^^<<A",A8:"<^^^A",A9:"^^^A","00":"","0A":">A","01":"^<A","02":"^A","03":"^>A","04":"^^<A","05":"^^A","06":"^^>A","07":"^^^<A","08":"^^^A","09":"^^^>A",11:"","1A":">>vA",10:">vA",12:">A",13:">>A",14:"^A",15:"^>A",16:"^>>A",17:"^^A",18:"^^>A",19:"^^>>A",22:"","2A":"v>A",20:"vA",21:"<A",23:">A",24:"<^A",25:"^A",26:"^>A",27:"<^^A",28:"^^A",29:"^^>A",33:"","3A":"vA",30:"<vA",31:"<<A",32:"<A",34:"<<^A",35:"<^A",36:"^A",37:"<<^^A",38:"<^^A",39:"^^A",44:"","4A":">>vvA",40:">vvA",41:"vA",42:"v>A",43:"v>>A",45:">A",46:">>A",47:"^A",48:"^>A",49:"^>>A",55:"","5A":"vv>A",50:"vvA",51:"<vA",52:"vA",53:"v>A",54:"<A",56:">A",57:"<^A",58:"^A",59:"^>A",66:"","6A":"vvA",60:"<vvA",61:"<<vA",62:"<vA",63:"vA",64:"<<A",65:"<A",67:"<<^A",68:"<^A",69:"^A",77:"","7A":">>vvvA",70:">vvvA",71:"vvA",72:"vv>A",73:"vv>>A",74:"vA",75:"v>A",76:"v>>A",78:">A",79:">>A",88:"","8A":">vvvA",80:"vvvA",81:"<vvA",82:"vvA",83:"vv>A",84:"<vA",85:"vA",86:"v>A",87:"<A",89:">A",99:"","9A":"vvvA",90:"<vvvA",91:"<<vvA",92:"<vvA",93:"vvA",94:"<<vA",95:"<vA",96:"vA",97:"<<A",98:"<A","A^":"<A","A<":"v<<A",Av:"<vA","A>":"vA","^^":"","^A":">A","^<":"v<A","^v":"vA","^>":"v>A","<<":"","<A":">>^A","<^":">^A","<v":">A","<>":">>A",vv:"",vA:"^>A","v^":"^A","v<":"<A","v>":">A",">>":"",">A":"^A",">^":"<^A","><":"<<A",">v":"<A"};function T(t){return t.charAt(0)===t.charAt(1)?"A":N[t]}function $(t,o,A){for(let n=0;n<o.length-1;n+=1){const i=o[n],c=o[n+1],r=`${i}${c}`;t.set(r,t.get(r)+A)}}function H(t){const o=new u;for(const A of t.keys()){const n=T(A),i=t.get(A);$(o,`A${n}`,i)}return o}function z(){const[t,o]=l.useState("unstarted"),[A,n]=l.useState(0),i=l.useCallback(async()=>{o("in-progress"),n(0);for await(const c of q){const r=`A${c}`;let a=new u;for(let s=0;s<r.length-1;s+=1){const x=r[s],j=r[s+1],y=T(`${x}${j}`);$(a,`A${y}`,1)}for(let s=0;s<2;s+=1)a=H(a);const m=d.coerce.number().parse(c.replaceAll("A",""));n(s=>s+g(a.values())*m)}o("complete")},[o,n]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mt-4 flex gap-x-4",children:[e.jsx("div",{children:e.jsx(k,{input:p})}),e.jsx("div",{children:e.jsx(w,{size:"lg",onClick:i,disabled:t==="in-progress",children:"Process Input"})})]}),e.jsx("div",{className:"mt-4 tabular-nums",children:e.jsxs("div",{children:["Total: ",A]})})]})}const F=d.array(d.string()),U=F.parse(p.split(`
`)),B={AA:"",A0:"<A",A1:"^<<A",A2:"<^A",A3:"^A",A4:"^^<<A",A5:"<^^A",A6:"^^A",A7:"^^^<<A",A8:"<^^^A",A9:"^^^A","00":"","0A":">A","01":"^<A","02":"^A","03":"^>A","04":"^^<A","05":"^^A","06":"^^>A","07":"^^^<A","08":"^^^A","09":"^^^>A",11:"","1A":">>vA",10:">vA",12:">A",13:">>A",14:"^A",15:"^>A",16:"^>>A",17:"^^A",18:"^^>A",19:"^^>>A",22:"","2A":"v>A",20:"vA",21:"<A",23:">A",24:"<^A",25:"^A",26:"^>A",27:"<^^A",28:"^^A",29:"^^>A",33:"","3A":"vA",30:"<vA",31:"<<A",32:"<A",34:"<<^A",35:"<^A",36:"^A",37:"<<^^A",38:"<^^A",39:"^^A",44:"","4A":">>vvA",40:">vvA",41:"vA",42:"v>A",43:"v>>A",45:">A",46:">>A",47:"^A",48:"^>A",49:"^>>A",55:"","5A":"vv>A",50:"vvA",51:"<vA",52:"vA",53:"v>A",54:"<A",56:">A",57:"<^A",58:"^A",59:"^>A",66:"","6A":"vvA",60:"<vvA",61:"<<vA",62:"<vA",63:"vA",64:"<<A",65:"<A",67:"<<^A",68:"<^A",69:"^A",77:"","7A":">>vvvA",70:">vvvA",71:"vvA",72:"vv>A",73:"vv>>A",74:"vA",75:"v>A",76:"v>>A",78:">A",79:">>A",88:"","8A":">vvvA",80:"vvvA",81:"<vvA",82:"vvA",83:"vv>A",84:"<vA",85:"vA",86:"v>A",87:"<A",89:">A",99:"","9A":"vvvA",90:"<vvvA",91:"<<vvA",92:"<vvA",93:"vvA",94:"<<vA",95:"<vA",96:"vA",97:"<<A",98:"<A","A^":"<A","A<":"v<<A",Av:"<vA","A>":"vA","^^":"","^A":">A","^<":"v<A","^v":"vA","^>":"v>A","<<":"","<A":">>^A","<^":">^A","<v":">A","<>":">>A",vv:"",vA:"^>A","v^":"^A","v<":"<A","v>":">A",">>":"",">A":"^A",">^":"<^A","><":"<<A",">v":"<A"};function P(t){return t.charAt(0)===t.charAt(1)?"A":B[t]}function C(t,o,A){for(let n=0;n<o.length-1;n+=1){const i=o[n],c=o[n+1],r=`${i}${c}`;t.set(r,t.get(r)+A)}}function O(t){const o=new u;for(const A of t.keys()){const n=P(A),i=t.get(A);C(o,`A${n}`,i)}return o}function R(){const[t,o]=l.useState("unstarted"),[A,n]=l.useState(0),i=l.useCallback(async()=>{o("in-progress"),n(0);for await(const c of U){const r=`A${c}`;let a=new u;for(let s=0;s<r.length-1;s+=1){const x=r[s],j=r[s+1],y=P(`${x}${j}`);C(a,`A${y}`,1)}for(let s=0;s<25;s+=1)a=O(a);const m=d.coerce.number().parse(c.replaceAll("A",""));n(s=>s+g(a.values())*m)}o("complete")},[o,n]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mt-4 flex gap-x-4",children:[e.jsx("div",{children:e.jsx(k,{input:p})}),e.jsx("div",{children:e.jsx(w,{size:"lg",onClick:i,disabled:t==="in-progress",children:"Process Input"})})]}),e.jsx("div",{className:"mt-4 tabular-nums",children:e.jsxs("div",{children:["Total: ",A]})})]})}const Q=function(){return e.jsxs(e.Fragment,{children:[e.jsx(K,{}),e.jsx(v,{hash:"part-1-prompt",children:"Part 1 – Prompt"}),e.jsxs("p",{children:["As you teleport onto Santa's"," ",e.jsx("a",{href:"https://adventofcode.com/2019/day/25",target:"_blank",children:"Reindeer-class starship"}),", The Historians begin to panic: someone from their search party is ",e.jsx("em",{children:"missing"}),". A quick life-form scan by the ship's computer reveals that when the missing Historian teleported, he arrived in another part of the ship."]}),e.jsxs("p",{children:["The door to that area is locked, but the computer can't open it; it can only be opened by ",e.jsx("em",{children:"physically typing"})," the door codes (your puzzle input) on the numeric keypad on the door."]}),e.jsxs("p",{children:["The numeric keypad has four rows of buttons: ",e.jsx("code",{children:"789"}),", ",e.jsx("code",{children:"456"}),","," ",e.jsx("code",{children:"123"}),", and finally an empty gap followed by ",e.jsx("code",{children:"0A"}),". Visually, they are arranged like this:"]}),e.jsx(h,{content:`+---+---+---+
| 7 | 8 | 9 |
+---+---+---+
| 4 | 5 | 6 |
+---+---+---+
| 1 | 2 | 3 |
+---+---+---+
    | 0 | A |
    +---+---+`}),e.jsxs("p",{children:["Unfortunately, the area outside the door is currently ",e.jsx("em",{children:"depressurized"})," and nobody can go near the door. A robot needs to be sent instead."]}),e.jsxs("p",{children:["The robot has no problem navigating the ship and finding the numeric keypad, but it's not designed for button pushing: it can't be told to push a specific button directly. Instead, it has a robotic arm that can be controlled remotely via a"," ",e.jsx("em",{children:"directional keypad"}),"."]}),e.jsxs("p",{children:["The directional keypad has two rows of buttons: a gap / ",e.jsx("code",{children:"^"})," (up) /"," ",e.jsx("code",{children:"A"})," (activate) on the first row and ",e.jsx("code",{children:"<"})," (left) /"," ",e.jsx("code",{children:"v"})," (down) / ",e.jsx("code",{children:">"})," (right) on the second row. Visually, they are arranged like this:"]}),e.jsx(h,{content:`    +---+---+
    | ^ | A |
+---+---+---+
| < | v | > |
+---+---+---+`}),e.jsxs("p",{children:["When the robot arrives at the numeric keypad, its robotic arm is pointed at the"," ",e.jsx("code",{children:"A"})," button in the bottom right corner. After that, this directional keypad remote control must be used to maneuver the robotic arm: the up / down / left / right buttons cause it to move its arm one button in that direction, and the"," ",e.jsx("code",{children:"A"})," button causes the robot to briefly move forward, pressing the button being aimed at by the robotic arm."]}),e.jsxs("p",{children:["For example, to make the robot type ",e.jsx("code",{children:"029A"})," on the numeric keypad, one sequence of inputs on the directional keypad you could use is:"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"<"})," to move the arm from ",e.jsx("code",{children:"A"})," (its initial position) to"," ",e.jsx("code",{children:"0"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"A"})," to push the ",e.jsx("code",{children:"0"})," button."]}),e.jsxs("li",{children:[e.jsx("code",{children:"^A"})," to move the arm to the ",e.jsx("code",{children:"2"})," button and push it."]}),e.jsxs("li",{children:[e.jsx("code",{children:">^^A"})," to move the arm to the ",e.jsx("code",{children:"9"})," button and push it."]}),e.jsxs("li",{children:[e.jsx("code",{children:"vvvA"})," to move the arm to the ",e.jsx("code",{children:"A"})," button and push it."]})]}),e.jsxs("p",{children:["In total, there are three shortest possible sequences of button presses on this directional keypad that would cause the robot to type ",e.jsx("code",{children:"029A"}),":"," ",e.jsx("code",{children:"<A^A>^^AvvvA"}),", ",e.jsx("code",{children:"<A^A^>^AvvvA"}),", and"," ",e.jsx("code",{children:"<A^A^^>AvvvA"}),"."]}),e.jsxs("p",{children:["Unfortunately, the area containing this directional keypad remote control is currently experiencing ",e.jsx("em",{children:"high levels of radiation"})," and nobody can go near it. A robot needs to be sent instead."]}),e.jsxs("p",{children:["When the robot arrives at the directional keypad, its robot arm is pointed at the"," ",e.jsx("code",{children:"A"})," button in the upper right corner. After that, a"," ",e.jsx("em",{children:"second, different"})," directional keypad remote control is used to control this robot (in the same way as the first robot, except that this one is typing on a directional keypad instead of a numeric keypad)."]}),e.jsxs("p",{children:["There are multiple shortest possible sequences of directional keypad button presses that would cause this robot to tell the first robot to type ",e.jsx("code",{children:"029A"})," on the door. One such sequence is"," ",e.jsx("code",{children:"v<<A>>^A<A>AvA<^AA>A<vAAA>^A"}),"."]}),e.jsxs("p",{children:["Unfortunately, the area containing this second directional keypad remote control is currently"," ",e.jsxs("em",{children:[e.jsx("code",{children:"-40"})," degrees"]}),"! Another robot will need to be sent to type on that directional keypad, too."]}),e.jsxs("p",{children:["There are many shortest possible sequences of directional keypad button presses that would cause this robot to tell the second robot to tell the first robot to eventually type ",e.jsx("code",{children:"029A"})," on the door. One such sequence is"," ",e.jsx("code",{children:"<vA<AA>>^AvAA<^A>A<v<A>>^AvA^A<vA>^A<v<A>^A>AAvA^A<v<A>A>^AAAvA<^A>A"}),"."]}),e.jsxs("p",{children:["Unfortunately, the area containing this third directional keypad remote control is currently ",e.jsx("em",{children:"full of Historians"}),", so no robots can find a clear path there. Instead, ",e.jsx("em",{children:"you"})," will have to type this sequence yourself."]}),e.jsx("p",{children:"Were you to choose this sequence of button presses, here are all of the buttons that would be pressed on your directional keypad, the two robots' directional keypads, and the numeric keypad:"}),e.jsx(h,{content:`<vA<AA>>^AvAA<^A>A<v<A>>^AvA^A<vA>^A<v<A>^A>AAvA^A<v<A>A>^AAAvA<^A>A
v<<A>>^A<A>AvA<^AA>A<vAAA>^A
<A^A>^^AvvvA
029A`}),e.jsx("p",{children:"In summary, there are the following keypads:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["One directional keypad that ",e.jsx("em",{children:"you"})," are using."]}),e.jsxs("li",{children:["Two directional keypads that ",e.jsx("em",{children:"robots"})," are using."]}),e.jsxs("li",{children:["One numeric keypad (on a door) that a ",e.jsx("em",{children:"robot"})," is using."]})]}),e.jsxs("p",{children:["It is important to remember that these robots are not designed for button pushing. In particular, if a robot arm is ever aimed at a ",e.jsx("em",{children:"gap"})," where no button is present on the keypad, even for an instant, the robot will ",e.jsx("em",{children:"panic"})," ","unrecoverably. So, don't do that. All robots will initially aim at the keypad's"," ",e.jsx("code",{children:"A"})," key, wherever it is."]}),e.jsxs("p",{children:["To unlock the door, ",e.jsx("em",{children:"five"})," codes will need to be typed on its numeric keypad. For example:"]}),e.jsx(h,{content:`029A
980A
179A
456A
379A`}),e.jsx("p",{children:"For each of these, here is a shortest sequence of button presses you could type to cause the desired code to be typed on the numeric keypad:"}),e.jsx(h,{content:`029A: <vA<AA>>^AvAA<^A>A<v<A>>^AvA^A<vA>^A<v<A>^A>AAvA^A<v<A>A>^AAAvA<^A>A
980A: <v<A>>^AAAvA^A<vA<AA>>^AvAA<^A>A<v<A>A>^AAAvA<^A>A<vA>^A<A>A
179A: <v<A>>^A<vA<A>>^AAvAA<^A>A<v<A>>^AAvA^A<vA>^AA<A>A<v<A>A>^AAAvA<^A>A
456A: <v<A>>^AA<vA<A>>^AAvAA<^A>A<vA>^A<A>A<vA>^A<A>A<v<A>A>^AAvA<^A>A
379A: <v<A>>^AvA^A<vA<AA>>^AAvA<^A>AAvA^A<vA>^AA<A>A<v<A>A>^AAAvA<^A>A`}),e.jsxs("p",{children:["The Historians are getting nervous; the ship computer doesn't remember whether the missing Historian is trapped in the area containing a ",e.jsx("em",{children:"giant electromagnet"})," ","or ",e.jsx("em",{children:"molten lava"}),". You'll need to make sure that for each of the five codes, you find the ",e.jsx("em",{children:"shortest sequence"})," of button presses necessary."]}),e.jsxs("p",{children:["The ",e.jsx("em",{children:"complexity"})," of a single code (like ",e.jsx("code",{children:"029A"}),") is equal to the result of multiplying these two values:"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:["The ",e.jsx("em",{children:"length of the shortest sequence"})," of button presses you need to type on your directional keypad in order to cause the code to be typed on the numeric keypad; for ",e.jsx("code",{children:"029A"}),", this would be ",e.jsx("code",{children:"68"}),"."]}),e.jsxs("li",{children:["The ",e.jsx("em",{children:"numeric part of the code"})," (ignoring leading zeroes); for"," ",e.jsx("code",{children:"029A"}),", this would be ",e.jsx("code",{children:"29"}),"."]})]}),e.jsxs("p",{children:["In the above example, complexity of the five codes can be found by calculating"," ",e.jsx("code",{children:"68 * 29"}),", ",e.jsx("code",{children:"60 * 980"}),", ",e.jsx("code",{children:"68 * 179"}),","," ",e.jsx("code",{children:"64 * 456"}),", and ",e.jsx("code",{children:"64 * 379"}),". Adding these together produces"," ",e.jsx("code",{children:e.jsx("em",{children:"126384"})}),"."]}),e.jsxs("p",{children:["Find the fewest number of button presses you'll need to perform in order to cause the robot in front of the door to type each code."," ",e.jsx("em",{children:"What is the sum of the complexities of the five codes on your list?"})]}),e.jsx(v,{hash:"part-1-solution",children:"Part 1 – Solution"}),e.jsx(z,{}),e.jsxs("p",{children:["First, build up a map of"," ",e.jsxs("code",{children:["{","previous key","}"]})," ","to"," ",e.jsxs("code",{children:["{","current key","}"]}),". Explicit types help here to ensure a combination isn't forgotten."]}),e.jsxs("p",{children:["If we don't change keys, there are no key presses needed (for example,"," ",e.jsx("code",{children:'AA: ""'}),")."]}),e.jsx(f,{content:`const numKeys = ["A", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"] as const;
const dirKeys = ["A", "^", "<", "v", ">"] as const;

type NumKey = (typeof numKeys)[number];
type DirKey = (typeof dirKeys)[number];

const keyToNext: Record<\`\${NumKey}\${NumKey}\` | \`\${DirKey}\${DirKey}\`, string> = {
    AA: "",
    A0: "<A",
    A1: "^<<A",
    A2: "<^A",
    A3: "^A",
    A4: "^^<<A",
    A5: "<^^A",
    A6: "^^A",
    A7: "^^^<<A",
    A8: "<^^^A",
    A9: "^^^A",
    "00": "",
    "0A": ">A",
    "01": "^<A",
    "02": "^A",
    "03": "^>A",
    "04": "^^<A",
    "05": "^^A",
    "06": "^^>A",
    "07": "^^^<A",
    "08": "^^^A",
    "09": "^^^>A",
    "11": "",
    "1A": ">>vA",
    "10": ">vA",
    "12": ">A",
    "13": ">>A",
    "14": "^A",
    "15": "^>A",
    "16": "^>>A",
    "17": "^^A",
    "18": "^^>A",
    "19": "^^>>A",
    "22": "",
    "2A": "v>A",
    "20": "vA",
    "21": "<A",
    "23": ">A",
    "24": "<^A",
    "25": "^A",
    "26": "^>A",
    "27": "<^^A",
    "28": "^^A",
    "29": "^^>A",
    "33": "",
    "3A": "vA",
    "30": "<vA",
    "31": "<<A",
    "32": "<A",
    "34": "<<^A",
    "35": "<^A",
    "36": "^A",
    "37": "<<^^A",
    "38": "<^^A",
    "39": "^^A",
    "44": "",
    "4A": ">>vvA",
    "40": ">vvA",
    "41": "vA",
    "42": "v>A",
    "43": "v>>A",
    "45": ">A",
    "46": ">>A",
    "47": "^A",
    "48": "^>A",
    "49": "^>>A",
    "55": "",
    "5A": "vv>A",
    "50": "vvA",
    "51": "<vA",
    "52": "vA",
    "53": "v>A",
    "54": "<A",
    "56": ">A",
    "57": "<^A",
    "58": "^A",
    "59": "^>A",
    "66": "",
    "6A": "vvA",
    "60": "<vvA",
    "61": "<<vA",
    "62": "<vA",
    "63": "vA",
    "64": "<<A",
    "65": "<A",
    "67": "<<^A",
    "68": "<^A",
    "69": "^A",
    "77": "",
    "7A": ">>vvvA",
    "70": ">vvvA",
    "71": "vvA",
    "72": "vv>A",
    "73": "vv>>A",
    "74": "vA",
    "75": "v>A",
    "76": "v>>A",
    "78": ">A",
    "79": ">>A",
    "88": "",
    "8A": ">vvvA",
    "80": "vvvA",
    "81": "<vvA",
    "82": "vvA",
    "83": "vv>A",
    "84": "<vA",
    "85": "vA",
    "86": "v>A",
    "87": "<A",
    "89": ">A",
    "99": "",
    "9A": "vvvA",
    "90": "<vvvA",
    "91": "<<vvA",
    "92": "<vvA",
    "93": "vvA",
    "94": "<<vA",
    "95": "<vA",
    "96": "vA",
    "97": "<<A",
    "98": "<A",
    "A^": "<A",
    "A<": "v<<A",
    Av: "<vA",
    "A>": "vA",
    "^^": "",
    "^A": ">A",
    "^<": "v<A",
    "^v": "vA",
    "^>": "v>A",
    "<<": "",
    "<A": ">>^A",
    "<^": ">^A",
    "<v": ">A",
    "<>": ">>A",
    vv: "",
    vA: "^>A",
    "v^": "^A",
    "v<": "<A",
    "v>": ">A",
    ">>": "",
    ">A": "^A",
    ">^": "<^A",
    "><": "<<A",
    ">v": "<A",
} as const;
`}),e.jsxs("p",{children:['A few helper functions for updating the "layers" of key presses. The'," ",e.jsx("code",{children:"calculateParentKeystrokes"}),' function creates a new counter for the next "layer".']}),e.jsx(f,{content:`function nextKey(key: string) {
    if (key.charAt(0) === key.charAt(1)) {
        return "A";
    }

    // @ts-ignore
    return keyToNext[key]!;
}

function updateCounter(counter: Counter, keys: string, count: number) {
    for (let i = 0; i < keys.length - 1; i += 1) {
        const previous = keys[i]!;
        const current = keys[i + 1]!;

        const movement = \`\${previous}\${current}\`;

        counter.set(movement, counter.get(movement) + count);
    }
}

function calculateParentKeystrokes(counter: Counter) {
    const parentCounter = new Counter();

    for (const key of counter.keys()) {
        const next = nextKey(key);
        const count = counter.get(key);

        // All robots start on A
        updateCounter(parentCounter, \`A\${next}\`, count);
    }

    return parentCounter;
}
`}),e.jsx("p",{children:"And finally, we process all values in the input."}),e.jsx(f,{content:`// Process values
for await (const value of values) {
    // Numpad always starts at A
    const instructions = \`A\${value}\`;

    let counter = new Counter();

    for (let i = 0; i < instructions.length - 1; i += 1) {
        const previous = instructions[i]!;
        const current = instructions[i + 1]!;

        const movement = nextKey(\`\${previous}\${current}\`);

        // Every movement requires pressing A
        updateCounter(counter, \`A\${movement}\`, 1);
    }

    // Iterate over levels
    for (let level = 0; level < 2; level += 1) {
        counter = calculateParentKeystrokes(counter);
    }

    const numeric = z.coerce.number().parse(value.replaceAll("A", ""));

    runningTotal += sum(counter.values()) * numeric;
}`}),e.jsx(b,{}),e.jsx(v,{hash:"part-2-prompt",children:"Part 2 – Prompt"}),e.jsxs("p",{children:["Just as the missing Historian is released, The Historians realize that a"," ",e.jsx("em",{children:"second"})," member of their search party has also been missing"," ",e.jsx("span",{title:"bum bum BUUUUUM",children:"this entire time"}),"!"]}),e.jsx("p",{children:"A quick life-form scan reveals the Historian is also trapped in a locked area of the ship. Due to a variety of hazards, robots are once again dispatched, forming another chain of remote control keypads managing robotic-arm-wielding robots."}),e.jsx("p",{children:"This time, many more robots are involved. In summary, there are the following keypads:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["One directional keypad that ",e.jsx("em",{children:"you"})," are using."]}),e.jsxs("li",{children:[e.jsx("em",{children:"25"})," directional keypads that ",e.jsx("em",{children:"robots"})," are using."]}),e.jsxs("li",{children:["One numeric keypad (on a door) that a ",e.jsx("em",{children:"robot"})," is using."]})]}),e.jsx("p",{children:"The keypads form a chain, just like before: your directional keypad controls a robot which is typing on a directional keypad which controls a robot which is typing on a directional keypad... and so on, ending with the robot which is typing on the numeric keypad."}),e.jsx("p",{children:"The door codes are the same this time around; only the number of robots and directional keypads has changed."}),e.jsxs("p",{children:["Find the fewest number of button presses you'll need to perform in order to cause the robot in front of the door to type each code."," ",e.jsx("em",{children:"What is the sum of the complexities of the five codes on your list?"})]}),e.jsx(v,{hash:"part-2-solution",children:"Part 2 – Solution"}),e.jsx(R,{}),e.jsx("p",{children:"This uses the exact same code as Part 1, but checks 25 levels instead of 2."}),e.jsx(b,{}),e.jsx(v,{hash:"recap",children:"Recap"}),e.jsxs(I,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Part 1 Time"}),e.jsx("th",{children:"Part 1 Rank"}),e.jsx("th",{children:"Part 2 Time"}),e.jsx("th",{children:"Part 2 Rank"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"18:41:00"}),e.jsx("td",{children:"11,297"}),e.jsx("td",{children:"18:48:16"}),e.jsx("td",{children:"7,521"})]})})]}),e.jsxs("p",{children:["I didn't really start on this until the following day. I looked at the problem when it came out, guessed that Part 2 would have ",e.jsx("em",{children:"N"})," many more layers, and decided to sleep on it. In total, this probably took ~3 hours or so of actual work."]}),e.jsx("p",{children:"I'm not 100% satisfied with my solution. Changing some of the directions in my mapping gives me a different answer, even though it feels like it shouldn't. But ¯\\_(ツ)_/¯ just happy to be through this one."})]})};export{Q as component};
