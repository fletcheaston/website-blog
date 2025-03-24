import{j as e}from"./index-PqC9iza9.js";import{P as t,a as n}from"./code-block-D1IX-jam.js";import{B as o}from"./layout-BDi6-wQ4.js";import{H as s}from"./header-DiOk6VOn.js";import{T as i}from"./table-BDCiqE9D.js";import{S as r}from"./separator-BKvhi7ks.js";import"./button-DlkBeRnu.js";import"./routeInfo-BgSgfEJj.js";const m=function(){return e.jsxs(e.Fragment,{children:[e.jsx(o,{}),e.jsx(s,{hash:"part-1-prompt",children:"Part 1 – Prompt"}),e.jsxs("p",{children:["You ride the camel through the sandstorm and stop where the ghost's maps told you to stop. The sandstorm subsequently subsides, somehow seeing you standing at an"," ",e.jsx("strong",{children:"oasis"}),"!"]}),e.jsxs("p",{children:["The camel goes to get some water and you stretch your neck. As you look up, you discover what must be yet another giant floating island, this one made of metal! That must be where the ",e.jsx("strong",{children:"parts to fix the sand machines"})," come from."]}),e.jsx("p",{children:"There's even a hang glider partially buried in the sand here; once the sun rises and heats up the sand, you might be able to use the glider and the hot air to get all the way up to the metal island!"}),e.jsx("p",{children:"While you wait for the sun to rise, you admire the oasis hidden here in the middle of Desert Island. It must have a delicate ecosystem; you might as well take some ecological readings while you wait. Maybe you can report any environmental instabilities you find to someone so the oasis can be around for the next sandstorm-worn traveler."}),e.jsxs("p",{children:["You pull out your handy ",e.jsx("strong",{children:"Oasis And Sand Instability Sensor"})," and analyze your surroundings. The OASIS produces a report of many values and how they are changing over time (your puzzle input). Each line in the report contains the"," ",e.jsx("strong",{children:"history"})," of a single value. For example:"]}),e.jsx(t,{content:`0 3 6 9 12 15
1 3 6 10 15 21
10 13 16 21 30 45`}),e.jsxs("p",{children:["To best protect the oasis, your environmental report should include a"," ",e.jsx("strong",{children:"prediction of the next value"})," in each history. To do this, start by making a new sequence from the ",e.jsx("strong",{children:"difference at each step"})," of your history. If that sequence is ",e.jsx("strong",{children:"not"})," all zeroes, repeat this process, using the sequence you just generated as the input sequence. Once all of the values in your latest sequence are zeroes, you can extrapolate what the next value of the original history should be."]}),e.jsxs("p",{children:["In the above dataset, the first history is ",e.jsx("code",{children:"0 3 6 9 12 15"}),". Because the values increase by ",e.jsx("code",{children:"3"})," each step, the first sequence of differences that you generate will be ",e.jsx("code",{children:"3 3 3 3 3"}),". Note that this sequence has one fewer value than the input sequence because at each step it considers two numbers from the input. Since these values aren't ",e.jsx("strong",{children:"all zero"}),", repeat the process: the values differ by ",e.jsx("code",{children:"0"})," at each step, so the next sequence is"," ",e.jsx("code",{children:"0 0 0 0"}),". This means you have enough information to extrapolate the history! Visually, these sequences can be arranged like this:"]}),e.jsx(t,{content:`0   3   6   9  12  15
  3   3   3   3   3
    0   0   0   0`}),e.jsx("p",{children:"To extrapolate, start by adding a new zero to the end of your list of zeroes; because the zeroes represent differences between the two values above them, this also means there is now a placeholder in every sequence above it:"}),e.jsx(t,{content:`0   3   6   9  12  15   B
  3   3   3   3   3   A
    0   0   0   0   0`}),e.jsxs("p",{children:["You can then start filling in placeholders from the bottom up.",e.jsx("code",{children:"A"})," needs to be the result of increasing ",e.jsx("code",{children:"3"})," (the value to its left) by ",e.jsx("code",{children:"0"})," (the value below it); this means ",e.jsx("code",{children:"A"})," must be"," ",e.jsx("strong",{children:e.jsx("code",{children:"3"})}),":"]}),e.jsx(t,{content:`0   3   6   9  12  15   B
  3   3   3   3   3   3
    0   0   0   0   0`}),e.jsxs("p",{children:["Finally, you can fill in ",e.jsx("code",{children:"B"}),", which needs to be the result of increasing"," ",e.jsx("code",{children:"15"})," (the value to its left) by ",e.jsx("code",{children:"3"})," (the value below it), or"," ",e.jsx("strong",{children:e.jsx("code",{children:"18"})}),":"]}),e.jsx(t,{content:`0   3   6   9  12  15  18
  3   3   3   3   3   3
    0   0   0   0   0`}),e.jsxs("p",{children:["So, the next value of the first history is"," ",e.jsx("strong",{children:e.jsx("code",{children:"18"})}),"."]}),e.jsx("p",{children:"Finding all-zero differences for the second history requires an additional sequence:"}),e.jsx(t,{content:`1   3   6  10  15  21
  2   3   4   5   6
    1   1   1   1
      0   0   0`}),e.jsx("p",{children:"Then, following the same process as before, work out the next value in each sequence from the bottom up:"}),e.jsx(t,{content:`1   3   6  10  15  21  28
  2   3   4   5   6   7
    1   1   1   1   1
      0   0   0   0`}),e.jsxs("p",{children:["So, the next value of the second history is"," ",e.jsx("strong",{children:e.jsx("code",{children:"28"})}),"."]}),e.jsx("p",{children:"The third history requires even more sequences, but its next value can be found the same way:"}),e.jsx(t,{content:`10  13  16  21  30  45  68
   3   3   5   9  15  23
     0   2   4   6   8
       2   2   2   2
         0   0   0`}),e.jsxs("p",{children:["So, the next value of the third history is"," ",e.jsx("strong",{children:e.jsx("code",{children:"68"})}),"."]}),e.jsxs("p",{children:["If you find the next value for each history in this example and add them together, you get"," ",e.jsx("strong",{children:e.jsx("code",{children:"114"})}),"."]}),e.jsxs("p",{children:["Analyze your OASIS report and extrapolate the next value for each history."," ",e.jsx("strong",{children:"What is the sum of these extrapolated values?"})]}),e.jsx(s,{hash:"part-1-solution",children:"Part 1 – Solution"}),e.jsx(n,{content:`from dataclasses import dataclass
from pathlib import Path

import pytest


@dataclass
class History:
    values: list[list[int]]

    @property
    def latest_all_zero(self) -> bool:
        return all([value == 0 for value in self.values[-1]])

    def calculate_next(self) -> None:
        next_values: list[int] = []

        for index in range(len(self.values[-1]) - 1):
            first = self.values[-1][index]
            second = self.values[-1][index + 1]

            difference = second - first

            next_values.append(difference)

        self.values.append(next_values)

    def fill_in_forwards(self) -> None:
        # Do the first manually
        self.values[-1].append(0)

        # Do the rest in a loop
        for index in range(len(self.values) - 2, -1, -1):
            self.values[index].append(
                self.values[index + 1][-1] + self.values[index][-1]
            )

    def fill_in_backwards(self) -> None:
        # Do the first manually
        self.values[-1].insert(0, 0)

        # Do the rest in a loop
        for index in range(len(self.values) - 2, -1, -1):
            self.values[index].insert(
                0, self.values[index][0] - self.values[index + 1][0]
            )


def runner(document: list[str]) -> int:
    total = 0

    for line in document:
        history = History(
            values=[[int(value.strip()) for value in line.split(" ")]],
        )

        while not history.latest_all_zero:
            history.calculate_next()

        history.fill_in_forwards()

        total += history.values[0][-1]

    return total


@pytest.mark.parametrize(
    "filename,output",
    [
        ("example-1.txt", 114),
        ("example-2.txt", 1647269739),
    ],
)
def test_runner(filename: str, output: int) -> None:
    with open(Path(__file__).with_name(filename)) as file:
        result = runner(file.read().splitlines())

        assert result == output
`}),e.jsxs("p",{children:["Answer: ",e.jsx("code",{children:"1,647,269,739"})]}),e.jsx(r,{}),e.jsx(s,{hash:"part-2-prompt",children:"Part 2 – Prompt"}),e.jsx("p",{children:"Of course, it would be nice to have even more history included in your report. Surely it's safe to just extrapolate backwards as well, right?"}),e.jsx("p",{children:"For each history, repeat the process of finding differences until the sequence of differences is entirely zero. Then, rather than adding a zero to the end and filling in the next values of each previous sequence, you should instead add a zero to the beginning of your sequence of zeroes, then fill in new first values for each previous sequence."}),e.jsx("p",{children:"In particular, here is what the third example history looks like when extrapolating back in time:"}),e.jsx(t,{content:`5  10  13  16  21  30  45
  5   3   3   5   9  15
   -2   0   2   4   6
      2   2   2   2
        0   0   0`}),e.jsxs("p",{children:["Adding the new values on the left side of each sequence from bottom to top eventually reveals the new left-most history value:"," ",e.jsx("strong",{children:e.jsx("code",{children:"5"})}),"."]}),e.jsxs("p",{children:["Doing this for the remaining example data above results in previous values of"," ",e.jsx("strong",{children:e.jsx("code",{children:"-3"})})," ","for the first history and"," ",e.jsx("strong",{children:e.jsx("code",{children:"0"})})," ","for the second history. Adding all three new values together produces"," ",e.jsx("strong",{children:e.jsx("code",{children:"2"})}),"."]}),e.jsxs("p",{children:["Analyze your OASIS report again, this time extrapolating the previous value for each history. ",e.jsx("strong",{children:"What is the sum of these extrapolated values?"})]}),e.jsx(s,{hash:"part-2-solution",children:"Part 2 – Solution"}),e.jsx(n,{content:`from dataclasses import dataclass
from pathlib import Path

import pytest


@dataclass
class History:
    values: list[list[int]]

    @property
    def latest_all_zero(self) -> bool:
        return all([value == 0 for value in self.values[-1]])

    def calculate_next(self) -> None:
        next_values: list[int] = []

        for index in range(len(self.values[-1]) - 1):
            first = self.values[-1][index]
            second = self.values[-1][index + 1]

            difference = second - first

            next_values.append(difference)

        self.values.append(next_values)

    def fill_in_forwards(self) -> None:
        # Do the first manually
        self.values[-1].append(0)

        # Do the rest in a loop
        for index in range(len(self.values) - 2, -1, -1):
            self.values[index].append(
                self.values[index + 1][-1] + self.values[index][-1]
            )

    def fill_in_backwards(self) -> None:
        # Do the first manually
        self.values[-1].insert(0, 0)

        # Do the rest in a loop
        for index in range(len(self.values) - 2, -1, -1):
            self.values[index].insert(
                0, self.values[index][0] - self.values[index + 1][0]
            )


def runner(document: list[str]) -> int:
    total = 0

    for line in document:
        history = History(
            values=[[int(value.strip()) for value in line.split(" ")]],
        )

        while not history.latest_all_zero:
            history.calculate_next()

        history.fill_in_backwards()

        total += history.values[0][0]

    return total


@pytest.mark.parametrize(
    "filename,output",
    [
        ("example-1.txt", 2),
        ("example-2.txt", 864),
    ],
)
def test_runner(filename: str, output: int) -> None:
    with open(Path(__file__).with_name(filename)) as file:
        result = runner(file.read().splitlines())

        assert result == output
`}),e.jsxs("p",{children:["Answer: ",e.jsx("code",{children:"864"})]}),e.jsx(r,{}),e.jsx(s,{hash:"recap",children:"Recap"}),e.jsxs(i,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Day"}),e.jsx("th",{children:"Part 1 Time"}),e.jsx("th",{children:"Part 1 Rank"}),e.jsx("th",{children:"Part 2 Time"}),e.jsx("th",{children:"Part 2 Rank"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"9"}),e.jsx("td",{children:"00:20:30"}),e.jsx("td",{children:"4,002"}),e.jsx("td",{children:"00:31:35"}),e.jsx("td",{children:"4,754"})]})})]}),e.jsx("p",{children:"This was a pretty fun one, not all that challenging and very satisfying to do!"}),e.jsxs("p",{children:["The most annoying part was that I got the arguments for ",e.jsx("code",{children:"list.insert"})," ","backwards. I kept trying to insert ",e.jsx("code",{children:"0"})," into lists at the ",e.jsx("code",{children:"nth"})," ","position instead of ",e.jsx("code",{children:"n"})," at the start of each list 🙃. Only wasted ~5 minutes or so being very confused ¯\\_(ツ)_/¯."]}),e.jsxs("p",{children:["The end result for the ",e.jsx("code",{children:"History"})," data model is pretty satisfying, the only moderately complex part is array indexing in the"," ",e.jsxs("code",{children:["fill_in_","{","forwards | backwards","}"]})," ","methods. And even that isn't too bad."]})]})};export{m as component};
