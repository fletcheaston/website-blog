import{j as e,aG as o}from"./index-wyCv48Bt.js";import{P as s,a as n}from"./code-block-DggC1cgA.js";import{B as i}from"./layout-4WAjEoz1.js";import{H as t}from"./header-Bq1eIV9x.js";import{T as R}from"./table-DGhhagS_.js";import{S as r}from"./separator-DmrylMMO.js";import"./button-DSdbYLev.js";import"./routeInfo-CqDql-3m.js";const j=function(){return e.jsxs(e.Fragment,{children:[e.jsx(i,{to:o.fullPath}),e.jsx(t,{hash:"part-1-prompt",children:"Part 1 – Prompt"}),e.jsxs("p",{children:["You're still riding a camel across Desert Island when you spot a sandstorm quickly approaching. When you turn to warn the Elf, she disappears before your eyes! To be fair, she had just finished warning you about ",e.jsx("strong",{children:"ghosts"})," a few minutes ago."]}),e.jsxs("p",{children:[`One of the camel's pouches is labeled "maps" - sure enough, it's full of documents (your puzzle input) about how to navigate the desert. At least, you're pretty sure that's what they are; one of the documents contains a list of left/right instructions, and the rest of the documents seem to describe some kind of`," ",e.jsx("strong",{children:"network"})," of labeled nodes."]}),e.jsxs("p",{children:["It seems like you're meant to use the ",e.jsx("strong",{children:"left/right"})," instructions to"," ",e.jsx("strong",{children:"navigate the network"}),". Perhaps if you have the camel follow the same instructions, you can escape the haunted wasteland!"]}),e.jsxs("p",{children:["After examining the maps for a bit, two nodes stick out: ",e.jsx("code",{children:"AAA"})," and"," ",e.jsx("code",{children:"ZZZ"}),". You feel like ",e.jsx("code",{children:"AAA"})," is where you are now, and you have to follow the left/right instructions until you reach ",e.jsx("code",{children:"ZZZ"}),"."]}),e.jsxs("p",{children:["This format defines each ",e.jsx("strong",{children:"node"})," of the network individually. For example:"]}),e.jsx(s,{content:`RL

AAA = (BBB, CCC)
BBB = (DDD, EEE)
CCC = (ZZZ, GGG)
DDD = (DDD, DDD)
EEE = (EEE, EEE)
GGG = (GGG, GGG)
ZZZ = (ZZZ, ZZZ)`}),e.jsxs("p",{children:["Starting with AAA, you need to ",e.jsx("strong",{children:"look up the next element"})," based on the next left/right instruction in your input. In this example, start with"," ",e.jsx("code",{children:"AAA"})," and go ",e.jsx("strong",{children:"right"})," (",e.jsx("code",{children:"R"}),") by choosing the right element of ",e.jsx("code",{children:"AAA"}),","," ",e.jsx("strong",{children:e.jsx("code",{children:"CCC"})}),". Then, ",e.jsx("code",{children:"L"})," means to choose the ",e.jsx("strong",{children:"left"})," element of"," ",e.jsx("code",{children:"CCC"}),","," ",e.jsx("strong",{children:e.jsx("code",{children:"ZZZ"})}),". By following the left/right instructions, you reach ",e.jsx("code",{children:"ZZZ"})," in"," ",e.jsx("strong",{children:e.jsx("code",{children:"2"})})," ","steps."]}),e.jsxs("p",{children:["Of course, you might not find ",e.jsx("code",{children:"ZZZ"})," right away. If you run out of left/right instructions, repeat the whole sequence of instructions as necessary:"," ",e.jsx("code",{children:"RL"})," really means ",e.jsx("code",{children:"RLRLRLRLRLRLRLRL..."})," and so on. For example, here is a situation that takes"," ",e.jsx("strong",{children:e.jsx("code",{children:"6"})})," ","steps to reach ",e.jsx("code",{children:"ZZZ"}),":"]}),e.jsx(s,{content:`LLR

AAA = (BBB, BBB)
BBB = (AAA, ZZZ)
ZZZ = (ZZZ, ZZZ)`}),e.jsxs("p",{children:["Starting at ",e.jsx("code",{children:"AAA"}),", follow the left/right instructions.",e.jsx("strong",{children:"How many steps are required to reach ZZZ?"})]}),e.jsx(t,{hash:"part-1-solution",children:"Part 1 – Solution"}),e.jsx("p",{children:"Brute-force solution of walking through the steps."}),e.jsx(n,{content:`from pathlib import Path

import pytest


def runner(instructions: str, document: list[str]) -> int:
    steps = 0
    current_step = "AAA"

    maps: dict[str, tuple[str, str]] = {}

    for line in document:
        start, rest = line.split(" = ")
        left, right = rest.replace("(", "").replace(")", "").split(", ")

        maps[start] = (left, right)

    while current_step != "ZZZ":
        instruction = instructions[steps % len(instructions)]

        if instruction == "L":
            current_step = maps[current_step][0]
        elif instruction == "R":
            current_step = maps[current_step][1]
        else:
            raise AssertionError

        steps += 1

    return steps


@pytest.mark.parametrize(
    "filename,instructions,output",
    [
        ("example-1.txt", "RL", 2),
        (
            "example-3.txt",
            "LLRLRLLRRLRLRLLRRLRRRLRRRLRRLRRLRLRLRRRLLRLRRLRLRRRLRLLRRLRLRLLRRRLLRLRRRLRLRRLRRLRLLRRLRRLRLRLRLLRLLRRLRRLRRLRRLRRLRLLRLRLRRRLRRRLRRLRLRLRRLRRRLRLRRRLRLRLRLRRRLRRLRRLRRRLLLLRRLRRLRLRRRLRLRRRLRRLLLLRLRLRRRLRRRLRLRRLLRLRLRRRLRLRLRRRLRLLRRRLRRLRLRLRRRLRLLRRLLRRRLRRRLRRRLRRLRLRLRRRLRRRLRRRLLRRRR",
            23147,
        ),
    ],
)
def test_runner(filename: str, instructions: str, output: int) -> None:
    with open(Path(__file__).with_name(filename)) as file:
        result = runner(instructions, file.read().splitlines())

        assert result == output
`}),e.jsxs("p",{children:["Answer: ",e.jsx("code",{children:"23,147"})]}),e.jsx(r,{}),e.jsx(t,{hash:"part-2-prompt",children:"Part 2 – Prompt"}),e.jsxs("p",{children:["The sandstorm is upon you and you aren't any closer to escaping the wasteland. You had the camel follow the instructions, but you've barely left your starting position. It's going to take ",e.jsx("strong",{children:"significantly more steps"})," to escape!"]}),e.jsxs("p",{children:["What if the map isn't for people - what if the map is for ",e.jsx("strong",{children:"ghosts"}),"? Are ghosts even bound by the laws of spacetime? Only one way to find out."]}),e.jsxs("p",{children:["After examining the maps a bit longer, your attention is drawn to a curious fact: the number of nodes with names ending in ",e.jsx("code",{children:"A"})," is equal to the number ending in ",e.jsx("code",{children:"Z"}),"! If you were a ghost, you'd probably just"," ",e.jsxs("strong",{children:["start at every node that ends with ",e.jsx("code",{children:"A"})]})," ","and follow all of the paths at the same time until they all simultaneously end up at nodes that end with ",e.jsx("code",{children:"Z"}),"."]}),e.jsx("p",{children:"For example:"}),e.jsx(s,{content:`LR

11A = (11B, XXX)
11B = (XXX, 11Z)
11Z = (11B, XXX)
22A = (22B, XXX)
22B = (22C, 22C)
22C = (22Z, 22Z)
22Z = (22B, 22B)
XXX = (XXX, XXX)`}),e.jsxs("p",{children:["Here, there are two starting nodes, ",e.jsx("code",{children:"11A"})," and ",e.jsx("code",{children:"22A"})," (because they both end with ",e.jsx("code",{children:"A"}),"). As you follow each left/right instruction, use that instruction to ",e.jsx("strong",{children:"simultaneously"})," navigate away from both nodes you're currently on. Repeat this process until ",e.jsx("strong",{children:"all"})," of the nodes you're currently on end with ",e.jsx("code",{children:"Z"}),". (If only some of the nodes you're on end with ",e.jsx("code",{children:"Z"}),", they act like any other node and you continue as normal.) In this example, you would proceed as follows:"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Step 0: You are at ",e.jsx("code",{children:"11A"})," and ",e.jsx("code",{children:"22A"}),"."]}),e.jsxs("li",{children:["Step 1: You choose all of the ",e.jsx("strong",{children:"left"})," paths, leading you to"," ",e.jsx("code",{children:"11B"})," and ",e.jsx("code",{children:"22B"}),"."]}),e.jsxs("li",{children:["Step 2: You choose all of the ",e.jsx("strong",{children:"right"})," paths, leading you to"," ",e.jsx("strong",{children:e.jsx("code",{children:"11Z"})})," ","and ",e.jsx("code",{children:"22C"}),"."]}),e.jsxs("li",{children:["Step 3: You choose all of the ",e.jsx("strong",{children:"left"})," paths, leading you to"," ",e.jsx("code",{children:"11B"})," and"," ",e.jsx("strong",{children:e.jsx("code",{children:"22Z"})}),"."]}),e.jsxs("li",{children:["Step 4: You choose all of the ",e.jsx("strong",{children:"right"})," paths, leading you to"," ",e.jsx("strong",{children:e.jsx("code",{children:"11Z"})})," ","and ",e.jsx("code",{children:"22B"}),"."]}),e.jsxs("li",{children:["Step 5: You choose all of the ",e.jsx("strong",{children:"left"})," paths, leading you to"," ",e.jsx("code",{children:"11B"})," and ",e.jsx("code",{children:"22C"}),"."]}),e.jsxs("li",{children:["Step 6: You choose all of the ",e.jsx("strong",{children:"right"})," paths, leading you to"," ",e.jsx("strong",{children:e.jsx("code",{children:"11Z"})})," ","and"," ",e.jsx("strong",{children:e.jsx("code",{children:"22Z"})}),"."]})]}),e.jsxs("p",{children:["So, in this example, you end up entirely on nodes that end in ",e.jsx("code",{children:"Z"})," after"," ",e.jsx("strong",{children:e.jsx("code",{children:"6"})})," ","steps."]}),e.jsxs("p",{children:["Simultaneously start on every node that ends with ",e.jsx("code",{children:"A"}),".",e.jsx("strong",{children:"How many steps does it take before you're only on nodes that end with Z?"})]}),e.jsx(t,{hash:"part-2-solution",children:"Part 2 – Solution"}),e.jsx("p",{children:"Instead of a brute-force solution, I counted steps per cycle for each path. I could then take the least common multiple of these steps per cycle to get the final number of steps required for all these to sync up on the end positions."}),e.jsx(n,{content:`import math
from pathlib import Path

import pytest


def runner(instructions: str, document: list[str]) -> int:
    steps: list[str] = []
    maps: dict[str, tuple[str, str]] = {}

    for line in document:
        start, rest = line.split(" = ")
        left, right = rest.replace("(", "").replace(")", "").split(", ")

        maps[start] = (left, right)

        if start.endswith("A"):
            steps.append(start)

    steps_index = 0
    cycles = []

    while True:
        for index, previous_step in enumerate(steps):
            current_step = maps[previous_step]
            instruction = instructions[steps_index % len(instructions)]

            if instruction == "L":
                next_step = current_step[0]
            elif instruction == "R":
                next_step = current_step[1]
            else:
                raise AssertionError

            if next_step.endswith("Z"):
                cycles.append(steps_index + 1)

            steps[index] = next_step

        if len(cycles) == len(steps):
            break

        steps_index += 1

    return math.lcm(*cycles)


@pytest.mark.parametrize(
    "filename,instructions,output",
    [
        ("example-2.txt", "LR", 6),
        (
            "example-3.txt",
            "LLRLRLLRRLRLRLLRRLRRRLRRRLRRLRRLRLRLRRRLLRLRRLRLRRRLRLLRRLRLRLLRRRLLRLRRRLRLRRLRRLRLLRRLRRLRLRLRLLRLLRRLRRLRRLRRLRRLRLLRLRLRRRLRRRLRRLRLRLRRLRRRLRLRRRLRLRLRLRRRLRRLRRLRRRLLLLRRLRRLRLRRRLRLRRRLRRLLLLRLRLRRRLRRRLRLRRLLRLRLRRRLRLRLRRRLRLLRRRLRRLRLRLRRRLRLLRRLLRRRLRRRLRRRLRRLRLRLRRRLRRRLRRRLLRRRR",
            22289513667691,
        ),
    ],
)
def test_runner(filename: str, instructions: str, output: int) -> None:
    with open(Path(__file__).with_name(filename)) as file:
        result = runner(instructions, file.read().splitlines())

        assert result == output
`}),e.jsxs("p",{children:["Answer: ",e.jsx("code",{children:"22,289,513,667,691"})]}),e.jsx(r,{}),e.jsx(t,{hash:"recap",children:"Recap"}),e.jsxs(R,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Day"}),e.jsx("th",{children:"Part 1 Time"}),e.jsx("th",{children:"Part 1 Rank"}),e.jsx("th",{children:"Part 2 Time"}),e.jsx("th",{children:"Part 2 Rank"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"8"}),e.jsx("td",{children:"00:09:41"}),e.jsx("td",{children:"2,164"}),e.jsx("td",{children:"02:16:39"}),e.jsx("td",{children:"9,554"})]})})]}),e.jsx("p",{children:"Part 1 was very easy and the kind of problem I really enjoy!"}),e.jsx("p",{children:"I first tried the brute-force solution on Part 2. Once it didn't complete within 30 seconds, I knew I'd need to implement cycle counting to get a reasonably-fast answer, but I left the script running anyway just in case it happened to complete eventually. That script didn't complete with >2 hours of runtime 😬."}),e.jsxs("p",{children:["Cycle counting was simple ",e.jsx("em",{children:"in theory"}),", but ",e.jsx("em",{children:"in practice"}),", I had a lot of trouble figuring out how to do it properly. I did use custom test cases like I did in Day 7, but even then, it took a really long time to figure out a correct implementation 😖."]})]})};export{j as component};
