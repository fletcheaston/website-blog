var C=Object.defineProperty;var I=(o,r,i)=>r in o?C(o,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[r]=i;var n=(o,r,i)=>I(o,typeof r!="symbol"?r+"":r,i);import{a as c,j as e,aB as O}from"./main-D-g3Tf5-.js";import{z as l}from"./index-mSkvzYyn.js";import{I as k}from"./view-input-DT9liz5R.js";import{T as b}from"./table-DKXWIDaS.js";import{s as A,m as u}from"./utils-BkWvjRoc.js";import{B}from"./button-A68ny3UQ.js";import{P as d,T as f}from"./code-block-BGOOd7ab.js";import{B as S}from"./layout-CijrSIdx.js";import{H as h}from"./header-DEPdYpa4.js";import{S as v}from"./separator-BVxaPIT_.js";const P=46323429,p=0,m=0,x="Program: 2,4,1,1,7,5,1,5,4,3,0,3,5,5,3,0",R=l.array(l.coerce.number()),N=R.parse(x.replace("Program: ","").split(","));let w=class{constructor(){n(this,"instructionPointer");n(this,"program");n(this,"registerA");n(this,"registerB");n(this,"registerC");n(this,"running");n(this,"output");this.instructionPointer=0,this.program=JSON.parse(JSON.stringify(N)),this.registerA=P,this.registerB=p,this.registerC=m,this.running=!0,this.output=[]}comboOperand(r){switch(r){case 0:return 0;case 1:return 1;case 2:return 2;case 3:return 3;case 4:return this.registerA;case 5:return this.registerB;case 6:return this.registerC;default:throw new Error(`Unknown operand: ${r}`)}}step(){const r=this.program[this.instructionPointer],i=this.program[this.instructionPointer+1];if(r===void 0||i===void 0){this.running=!1;return}switch(r){case 0:{const t=this.registerA,s=2**this.comboOperand(i);this.registerA=Math.floor(t/s);break}case 1:{const t=this.registerB^i;this.registerB=t;break}case 2:{const t=u(this.comboOperand(i),8);this.registerB=t;break}case 3:{if(this.registerA===0)break;this.instructionPointer=i-2;break}case 4:{const t=this.registerB^this.registerC;this.registerB=t;break}case 5:{const t=u(this.comboOperand(i),8);this.output.push(t);break}case 6:{const t=this.registerA,s=2**this.comboOperand(i);this.registerB=Math.floor(t/s);break}case 7:{const t=this.registerA,s=2**this.comboOperand(i);this.registerC=Math.floor(t/s);break}default:throw new Error(`Unknown opcode: ${r}`)}this.instructionPointer+=2}};function z(){const[o,r]=c.useState("unstarted"),[i,t]=c.useState(0),s=c.useRef(null);s.current||(s.current=new w);const g=c.useCallback(async()=>{r("in-progress"),t(0);const a=new w;for(s.current=a;a.running;)t(j=>j+1),a.step(),await A(1);r("complete")},[r,t]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mt-4 flex gap-x-4",children:[e.jsx("div",{children:e.jsx(k,{input:x})}),e.jsx("div",{children:e.jsx(B,{size:"lg",onClick:g,disabled:o==="in-progress",children:"Process Input"})})]}),e.jsxs("div",{className:"mt-4 tabular-nums",children:[e.jsxs("div",{children:["Progress: ",i]}),e.jsxs(b,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Register"}),e.jsx("th",{children:"Starting Value"}),e.jsx("th",{className:"min-w-[180px]",children:"Calculated Value"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"A"}),e.jsx("td",{children:P}),e.jsx("td",{children:s.current.registerA})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"B"}),e.jsx("td",{children:p}),e.jsx("td",{children:s.current.registerB})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"C"}),e.jsx("td",{children:m}),e.jsx("td",{children:s.current.registerC})]})]})]}),e.jsx("pre",{className:"mt-4",children:e.jsxs("code",{className:"w-full",children:["Output: ",JSON.stringify(s.current.output,null)]})})]})]})}const J=l.array(l.coerce.number()),E=J.parse(x.replace("Program: ","").split(",")),T=0x95a630ed6ebd;class y{constructor(){n(this,"instructionPointer");n(this,"program");n(this,"registerA");n(this,"registerB");n(this,"registerC");n(this,"running");n(this,"output");this.instructionPointer=0,this.program=JSON.parse(JSON.stringify(E)),this.registerA=T,this.registerB=p,this.registerC=m,this.running=!0,this.output=[]}comboOperand(r){switch(r){case 0:return 0;case 1:return 1;case 2:return 2;case 3:return 3;case 4:return this.registerA;case 5:return this.registerB;case 6:return this.registerC;default:throw new Error(`Unknown operand: ${r}`)}}step(){const r=this.program[this.instructionPointer],i=this.program[this.instructionPointer+1];if(r===void 0||i===void 0){this.running=!1;return}switch(r){case 0:{const t=this.registerA,s=2**this.comboOperand(i);this.registerA=Math.floor(t/s);break}case 1:{const t=this.registerB^i;this.registerB=t;break}case 2:{const t=u(this.comboOperand(i),8);this.registerB=t;break}case 3:{if(this.registerA===0)break;this.instructionPointer=i-2;break}case 4:{const t=this.registerB^this.registerC;this.registerB=t;break}case 5:{const t=u(this.comboOperand(i),8);this.output.push(t);break}case 6:{const t=this.registerA,s=2**this.comboOperand(i);this.registerB=Math.floor(t/s);break}case 7:{const t=this.registerA,s=2**this.comboOperand(i);this.registerC=Math.floor(t/s);break}default:throw new Error(`Unknown opcode: ${r}`)}this.instructionPointer+=2}}function M(){const[o,r]=c.useState("unstarted"),[i,t]=c.useState(0),s=c.useRef(null);s.current||(s.current=new y);const g=c.useCallback(async()=>{r("in-progress"),t(0);const a=new y;for(s.current=a;a.running;)t(j=>j+1),a.step(),await A(1);r("complete")},[r,t]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mt-4 flex gap-x-4",children:[e.jsx("div",{children:e.jsx(k,{input:x})}),e.jsx("div",{children:e.jsx(B,{size:"lg",onClick:g,disabled:o==="in-progress",children:"Process Input"})})]}),e.jsxs("div",{className:"mt-4 tabular-nums",children:[e.jsxs("div",{children:["Progress: ",i]}),e.jsxs(b,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Register"}),e.jsx("th",{children:"Starting Value"}),e.jsx("th",{className:"min-w-[180px]",children:"Calculated Value"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"A"}),e.jsx("td",{children:T}),e.jsx("td",{children:s.current.registerA})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"B"}),e.jsx("td",{children:p}),e.jsx("td",{children:s.current.registerB})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"C"}),e.jsx("td",{children:m}),e.jsx("td",{children:s.current.registerC})]})]})]}),e.jsx("pre",{className:"mt-4",children:e.jsxs("code",{className:"w-full",children:["Program: ",JSON.stringify(s.current.program,null)]})}),e.jsx("pre",{className:"mt-0",children:e.jsxs("code",{className:"w-full",children:["Output:","  ",JSON.stringify(s.current.output,null)]})})]})]})}const K=function(){return e.jsxs(e.Fragment,{children:[e.jsx(S,{to:O.fullPath}),e.jsx(h,{hash:"part-1-prompt",children:"Part 1 – Prompt"}),e.jsxs("p",{children:["The Historians push the button on their strange device, but this time, you all just feel like you're"," ",e.jsx("a",{href:"https://adventofcode.com/2018/day/6",target:"_blank",children:"falling"}),"."]}),e.jsx("p",{children:'"Situation critical", the device announces in a familiar voice. "Bootstrapping process failed. Initializing debugger...."'}),e.jsx("p",{children:"The small handheld device suddenly unfolds into an entire computer! The Historians look around nervously before one of them tosses it to you."}),e.jsxs("p",{children:["This seems to be a 3-bit computer: its program is a list of 3-bit numbers (0 through 7), like ",e.jsx("code",{children:"0,1,2,3"}),". The computer also has three ",e.jsx("em",{children:"registers"})," named"," ",e.jsx("code",{children:"A"}),", ",e.jsx("code",{children:"B"}),", and ",e.jsx("code",{children:"C"}),", but these registers aren't limited to 3 bits and can instead hold any integer."]}),e.jsxs("p",{children:["The computer knows ",e.jsx("em",{children:"eight instructions"}),", each identified by a 3-bit number (called the instruction's ",e.jsx("em",{children:"opcode"}),"). Each instruction also reads the 3-bit number after it as an input; this is called its ",e.jsx("em",{children:"operand"}),"."]}),e.jsxs("p",{children:["A number called the ",e.jsx("em",{children:"instruction pointer"})," identifies the position in the program from which the next opcode will be read; it starts at ",e.jsx("code",{children:"0"}),", pointing at the first 3-bit number in the program. Except for jump instructions, the instruction pointer increases by ",e.jsx("code",{children:"2"})," after each instruction is processed (to move past the instruction's opcode and its operand). If the computer tries to read an opcode past the end of the program, it instead ",e.jsx("em",{children:"halts"}),"."]}),e.jsxs("p",{children:["So, the program ",e.jsx("code",{children:"0,1,2,3"})," would run the instruction whose opcode is"," ",e.jsx("code",{children:"0"})," and pass it the operand ",e.jsx("code",{children:"1"}),", then run the instruction having opcode ",e.jsx("code",{children:"2"})," and pass it the operand ",e.jsx("code",{children:"3"}),", then halt."]}),e.jsxs("p",{children:["There are two types of operands; each instruction specifies the type of its operand. The value of a ",e.jsx("em",{children:"literal operand"})," is the operand itself. For example, the value of the literal operand ",e.jsx("code",{children:"7"})," is the number ",e.jsx("code",{children:"7"}),". The value of a ",e.jsx("em",{children:"combo operand"})," can be found as follows:"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Combo operands ",e.jsx("code",{children:"0"})," through ",e.jsx("code",{children:"3"})," represent literal values"," ",e.jsx("code",{children:"0"})," through ",e.jsx("code",{children:"3"}),"."]}),e.jsxs("li",{children:["Combo operand ",e.jsx("code",{children:"4"})," represents the value of register ",e.jsx("code",{children:"A"}),"."]}),e.jsxs("li",{children:["Combo operand ",e.jsx("code",{children:"5"})," represents the value of register ",e.jsx("code",{children:"B"}),"."]}),e.jsxs("li",{children:["Combo operand ",e.jsx("code",{children:"6"})," represents the value of register ",e.jsx("code",{children:"C"}),"."]}),e.jsxs("li",{children:["Combo operand ",e.jsx("code",{children:"7"})," is reserved and will not appear in valid programs."]})]}),e.jsx("p",{children:"The eight instructions are as follows:"}),e.jsxs("p",{children:["The"," ",e.jsx("code",{children:e.jsx("em",{children:"adv"})})," ","instruction (opcode"," ",e.jsx("code",{children:e.jsx("em",{children:"0"})}),") performs ",e.jsx("em",{children:"division"}),". The numerator is the value in the ",e.jsx("code",{children:"A"})," ","register. The denominator is found by raising 2 to the power of the instruction's"," ",e.jsx("em",{children:"combo"})," operand. (So, an operand of ",e.jsx("code",{children:"2"})," would divide"," ",e.jsx("code",{children:"A"})," by ",e.jsx("code",{children:"4"})," (",e.jsx("code",{children:"2^2"}),"); an operand of ",e.jsx("code",{children:"5"})," ","would divide ",e.jsx("code",{children:"A"})," by ",e.jsx("code",{children:"2^B"}),".) The result of the division operation is ",e.jsx("em",{children:"truncated"})," to an integer and then written to the ",e.jsx("code",{children:"A"})," ","register."]}),e.jsxs("p",{children:["The"," ",e.jsx("code",{children:e.jsx("em",{children:"bxl"})})," ","instruction (opcode"," ",e.jsx("code",{children:e.jsx("em",{children:"1"})}),") calculates the"," ",e.jsx("a",{href:"https://en.wikipedia.org/wiki/Bitwise_operation#XOR",target:"_blank",children:"bitwise XOR"})," ","of register ",e.jsx("code",{children:"B"})," and the instruction's ",e.jsx("em",{children:"literal"})," operand, then stores the result in register ",e.jsx("code",{children:"B"}),"."]}),e.jsxs("p",{children:["The"," ",e.jsx("code",{children:e.jsx("em",{children:"bst"})})," ","instruction (opcode"," ",e.jsx("code",{children:e.jsx("em",{children:"2"})}),") calculates the value of its ",e.jsx("em",{children:"combo"})," operand"," ",e.jsx("a",{href:"https://en.wikipedia.org/wiki/Modulo",target:"_blank",children:"modulo"})," ","8 (thereby keeping only its lowest 3 bits), then writes that value to the"," ",e.jsx("code",{children:"B"})," register."]}),e.jsxs("p",{children:["The"," ",e.jsx("code",{children:e.jsx("em",{children:"jnz"})})," ","instruction (opcode"," ",e.jsx("code",{children:e.jsx("em",{children:"3"})}),") does ",e.jsx("em",{children:"nothing"})," if the ",e.jsx("code",{children:"A"})," register is ",e.jsx("code",{children:"0"}),". However, if the ",e.jsx("code",{children:"A"})," register is ",e.jsx("em",{children:"not zero"}),", it"," ",e.jsx("span",{title:"The instruction does this using a little trampoline.",children:e.jsx("em",{children:"jumps"})})," ","by setting the instruction pointer to the value of its ",e.jsx("em",{children:"literal"})," operand; if this instruction jumps, the instruction pointer is ",e.jsx("em",{children:"not"})," increased by"," ",e.jsx("code",{children:"2"})," after this instruction."]}),e.jsxs("p",{children:["The"," ",e.jsx("code",{children:e.jsx("em",{children:"bxc"})})," ","instruction (opcode"," ",e.jsx("code",{children:e.jsx("em",{children:"4"})}),") calculates the ",e.jsx("em",{children:"bitwise XOR"})," of register ",e.jsx("code",{children:"B"})," and register"," ",e.jsx("code",{children:"C"}),", then stores the result in register ",e.jsx("code",{children:"B"}),". (For legacy reasons, this instruction reads an operand but ",e.jsx("em",{children:"ignores"})," it.)"]}),e.jsxs("p",{children:["The"," ",e.jsx("code",{children:e.jsx("em",{children:"out"})})," ","instruction (opcode"," ",e.jsx("code",{children:e.jsx("em",{children:"5"})}),") calculates the value of its ",e.jsx("em",{children:"combo"})," operand modulo 8, then ",e.jsx("em",{children:"outputs"})," ","that value. (If a program outputs multiple values, they are separated by commas.)"]}),e.jsxs("p",{children:["The"," ",e.jsx("code",{children:e.jsx("em",{children:"bdv"})})," ","instruction (opcode"," ",e.jsx("code",{children:e.jsx("em",{children:"6"})}),") works exactly like the ",e.jsx("code",{children:"adv"})," instruction except that the result is stored in the"," ",e.jsxs("em",{children:[e.jsx("code",{children:"B"})," register"]}),". (The numerator is still read from the ",e.jsx("code",{children:"A"})," register.)"]}),e.jsxs("p",{children:["The"," ",e.jsx("code",{children:e.jsx("em",{children:"cdv"})})," ","instruction (opcode"," ",e.jsx("code",{children:e.jsx("em",{children:"7"})}),") works exactly like the ",e.jsx("code",{children:"adv"})," instruction except that the result is stored in the"," ",e.jsxs("em",{children:[e.jsx("code",{children:"C"})," register"]}),". (The numerator is still read from the ",e.jsx("code",{children:"A"})," register.)"]}),e.jsx("p",{children:"Here are some examples of instruction operation:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["If register ",e.jsx("code",{children:"C"})," contains ",e.jsx("code",{children:"9"}),", the program ",e.jsx("code",{children:"2,6"})," ","would set register ",e.jsx("code",{children:"B"})," to ",e.jsx("code",{children:"1"}),"."]}),e.jsxs("li",{children:["If register ",e.jsx("code",{children:"A"})," contains ",e.jsx("code",{children:"10"}),", the program"," ",e.jsx("code",{children:"5,0,5,1,5,4"})," would output ",e.jsx("code",{children:"0,1,2"}),"."]}),e.jsxs("li",{children:["If register ",e.jsx("code",{children:"A"})," contains ",e.jsx("code",{children:"2024"}),", the program"," ",e.jsx("code",{children:"0,1,5,4,3,0"})," would output ",e.jsx("code",{children:"4,2,5,6,7,7,7,7,3,1,0"})," and leave ",e.jsx("code",{children:"0"})," in register ",e.jsx("code",{children:"A"}),"."]}),e.jsxs("li",{children:["If register ",e.jsx("code",{children:"B"})," contains ",e.jsx("code",{children:"29"}),", the program"," ",e.jsx("code",{children:"1,7"})," would set register ",e.jsx("code",{children:"B"})," to ",e.jsx("code",{children:"26"}),"."]}),e.jsxs("li",{children:["If register ",e.jsx("code",{children:"B"})," contains ",e.jsx("code",{children:"2024"})," and register"," ",e.jsx("code",{children:"C"})," contains ",e.jsx("code",{children:"43690"}),", the program ",e.jsx("code",{children:"4,0"})," would set register ",e.jsx("code",{children:"B"})," to ",e.jsx("code",{children:"44354"}),"."]})]}),e.jsxs("p",{children:["The Historians' strange device has finished initializing its debugger and is displaying some ",e.jsx("em",{children:"information about the program it is trying to run"})," (your puzzle input). For example:"]}),e.jsx(d,{content:`Register A: 729
Register B: 0
Register C: 0

Program: 0,1,5,4,3,0`}),e.jsxs("p",{children:["Your first task is to ",e.jsx("em",{children:"determine what the program is trying to output"}),". To do this, initialize the registers to the given values, then run the given program, collecting any output produced by ",e.jsx("code",{children:"out"})," instructions. (Always join the values produced by ",e.jsx("code",{children:"out"})," instructions with commas.) After the above program halts, its final output will be"," ",e.jsx("code",{children:e.jsx("em",{children:"4,6,3,5,6,3,5,2,1,0"})}),"."]}),e.jsxs("p",{children:["Using the information provided by the debugger, initialize the registers to the given values, then run the program. Once it halts,"," ",e.jsx("em",{children:"what do you get if you use commas to join the values it output into a single string?"})]}),e.jsx(h,{hash:"part-1-solution",children:"Part 1 – Solution"}),e.jsx(z,{}),e.jsxs("p",{children:["The only tricky thing with this problem was using JavaScript's ",e.jsx("code",{children:"%"})," ","operator. While Python implements this as the ",e.jsx("em",{children:"modulo"})," operator,"," ",e.jsxs("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder",target:"_blank",children:["JavaScript implements this as the ",e.jsx("em",{children:"remainder"})," operator"]}),". As such, I used my own ",e.jsx("code",{children:"modulo"})," function (the same formula that MDN specifies)."]}),e.jsx(f,{content:`export function modulo(n: number, d: number) {
    return ((n % d) + d) % d;
}`}),e.jsx("p",{children:"The bulk of the code is very simple. I found that putting the exact instructions into the code as comments helped make it extremely readable."}),e.jsx(f,{content:`const parser = z.array(z.coerce.number());
const values = parser.parse(input.replace("Program: ", "").split(","));

class Program {
    instructionPointer: number;
    program: Array<number>;

    registerA: number;
    registerB: number;
    registerC: number;

    running: boolean;
    output: Array<number>;

    constructor() {
        this.instructionPointer = 0;
        this.program = JSON.parse(JSON.stringify(values));

        this.registerA = registerA;
        this.registerB = registerB;
        this.registerC = registerC;

        this.running = true;
        this.output = [];
    }

    comboOperand(operand: number) {
        switch (operand) {
            case 0:
                return 0;

            case 1:
                return 1;

            case 2:
                return 2;

            case 3:
                return 3;

            case 4:
                return this.registerA;

            case 5:
                return this.registerB;

            case 6:
                return this.registerC;

            default:
                throw new Error(\`Unknown operand: \${operand}\`);
        }
    }

    step() {
        const opcode = this.program[this.instructionPointer];
        const operand = this.program[this.instructionPointer + 1];

        // If the computer tries to read an opcode past the end of the program, it instead halts
        if (opcode === undefined || operand === undefined) {
            this.running = false;
            return;
        }

        switch (opcode) {
            case 0: {
                // The numerator is the value in the A register
                const numerator = this.registerA;

                // The denominator is found by raising 2 to the power of the instruction's combo operand
                const denominator = 2 ** this.comboOperand(operand);

                // The result of the division operation is truncated to an integer and then written to the A register
                this.registerA = Math.floor(numerator / denominator);;

                break;
            }

            case 1: {
                // Calculates the bitwise XOR of register B and the instruction's literal operand
                const value = this.registerB ^ operand;

                // Then stores the result in register B
                this.registerB = value;

                break;
            }

            case 2: {
                // Calculates the value of its combo operand modulo 8
                const value = modulo(this.comboOperand(operand), 8);

                // Then writes that value to the B register
                this.registerB = value;

                break;
            }

            case 3: {
                // Does nothing if the A register is 0
                if (this.registerA === 0) break;

                // It jumps by setting the instruction pointer to the value of its literal operand
                // If this instruction jumps, the instruction pointer is not increased by 2 after this instruction
                // NOTE - decrement by 2 so the +2 below evens out
                this.instructionPointer = operand - 2;
                break;
            }

            case 4: {
                // Calculates the bitwise XOR of register B and register C
                const value = this.registerB ^ this.registerC;

                // Then stores the result in register B
                this.registerB = value;

                break;
            }

            case 5: {
                // Calculates the value of its combo operand modulo 8
                const value = modulo(this.comboOperand(operand), 8);

                // Then outputs that value
                this.output.push(value);

                break;
            }

            case 6: {
                // Works exactly like the adv instruction except that the result is stored in the B register
                // The numerator is the value in the A register
                const numerator = this.registerA;

                // The denominator is found by raising 2 to the power of the instruction's combo operand
                const denominator = 2 ** this.comboOperand(operand);

                // The result of the division operation is truncated to an integer and then written to the B register
                this.registerB = Math.floor(numerator / denominator);;

                break;
            }

            case 7: {
                // Works exactly like the adv instruction except that the result is stored in the C register
                // The numerator is the value in the A register
                const numerator = this.registerA;

                // The denominator is found by raising 2 to the power of the instruction's combo operand
                const denominator = 2 ** this.comboOperand(operand);

                // The result of the division operation is truncated to an integer and then written to the C register
                this.registerC = Math.floor(numerator / denominator);;

                break;
            }

            default:
                throw new Error(\`Unknown opcode: \${opcode}\`);
        }

        this.instructionPointer += 2;
    }
}`}),e.jsx(v,{}),e.jsx(h,{hash:"part-2-prompt",children:"Part 2 – Prompt"}),e.jsxs("p",{children:["Digging deeper in the device's manual, you discover the problem: this program is supposed to ",e.jsx("em",{children:"output another copy of the program"}),"! Unfortunately, the value in register ",e.jsx("code",{children:"A"})," seems to have been corrupted. You'll need to find a new value to which you can initialize register ",e.jsx("code",{children:"A"})," so that the program's output instructions produce an exact copy of the program itself."]}),e.jsx("p",{children:"For example:"}),e.jsx(d,{content:`Register A: 2024
Register B: 0
Register C: 0

Program: 0,3,5,4,3,0`}),e.jsxs("p",{children:["This program outputs a copy of itself if register ",e.jsx("code",{children:"A"})," is instead initialized to"," ",e.jsx("code",{children:e.jsx("em",{children:"117440"})}),". (The original initial value of register ",e.jsx("code",{children:"A"}),", ",e.jsx("code",{children:"2024"}),", is ignored.)"]}),e.jsx("p",{children:e.jsxs("em",{children:["What is the lowest positive initial value for register ",e.jsx("code",{children:"A"})," that causes the program to output a copy of itself?"]})}),e.jsx(h,{hash:"part-2-solution",children:"Part 2 – Solution"}),e.jsx(M,{}),e.jsx("p",{children:"I don't have a code-solution for Part 2. Instead, I played around with the output and noticed a few things:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"The number of digits in the starting value of register A roughly corresponded to the number of values in the output"}),e.jsx("li",{children:"As the starting value of register A increased, the first values in the output changed far more quickly than the later values"})]}),e.jsx("p",{children:"I also noticed that the example input had a *solution* that gave a decent starting value for my input. In this example:"}),e.jsx(d,{content:"Program: 0,3,5,4,3,0"}),e.jsx("p",{children:"I could get an exact answer for the starting value of register A with this code:"}),e.jsx(f,{content:`const parser = z.array(z.coerce.number());
const values = parser.parse(input.replace("Program: ", "").split(","));

const fastResult = sum(values.map((value, index) => {
    return value * 8 ** (index + 1);
}));`}),e.jsx("p",{children:"The math works out to be this:"}),e.jsx(d,{content:`  0 * 8 ^ 1
  3 * 8 ^ 2
  5 * 8 ^ 3
  4 * 8 ^ 4
  3 * 8 ^ 5
+ 0 * 8 ^ 6
-----------
    117,440`}),e.jsxs("p",{children:["When I ran this on my real input, I got ",e.jsx("code",{children:"130502131946256"}),". This wasn't my real answer, but it gave me a good starting value to work with."]}),e.jsx("p",{children:"To get my real answer, I (painstakingly) modified my input by hand and ran the input through my Part 1 solution to see how that affected the output. If the digits of the output got further away from the input program, I adjusted my input in the other direction."}),e.jsx("p",{children:"As the right-most digits of the output aligned with the input program, I move down the input value (starting from the left side and working right), making smaller adjustments to the value until I eventually landed on the correct number."}),e.jsx("p",{children:"I'm sure I could've done this through some iterative code, but it was just easier to do it by hand."}),e.jsx(v,{}),e.jsx(h,{hash:"recap",children:"Recap"}),e.jsxs(b,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Part 1 Time"}),e.jsx("th",{children:"Part 1 Rank"}),e.jsx("th",{children:"Part 2 Time"}),e.jsx("th",{children:"Part 2 Rank"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"00:57:03"}),e.jsx("td",{children:"4,284"}),e.jsx("td",{children:"02:26:12"}),e.jsx("td",{children:"1,949"})]})})]}),e.jsx("p",{children:"I took a big hit on Part 1 with the final ask:"}),e.jsx("p",{className:"rounded border-l-4 border-l-emerald-700 pl-2",children:e.jsx("em",{children:"...what do you get if you use commas to join the values it output into a single string?"})}),e.jsxs("p",{children:["I somehow interpreted that to mean ",e.jsx("em",{children:"don't"})," use commas, just join the output into one number. Finally figured it out tho, just wasted 20+ minutes 🙃"]}),e.jsx("p",{children:"Part 2 was interesting. This was the first problem where I did a large chunk of it by hand!"}),e.jsx("p",{children:"It wasn't fun, but it also wasn't awful ¯\\_(ツ)_/¯. It just took awhile, but I didn't need to use much brain power while working on it. So I'm okay with that."}),e.jsxs("p",{children:["I did see on the"," ",e.jsxs("a",{href:"https://www.reddit.com/r/adventofcode/comments/1hg38ah/2024_day_17_solutions/",target:"_blank",children:["subreddit that some people used ",e.jsx("code",{children:"z3"})]}),", which is super cool! I can totally see how this would make for a good"," ",e.jsx("code",{children:"z3-solver"})," problem, but I have no idea how I'd implement that myself."]})]})};export{K as component};
