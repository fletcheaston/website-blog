import{j as e,aN as s}from"./index-CwtsGJj3.js";import{P as i,a as n}from"./code-block-CHCiU50r.js";import{B as o}from"./layout-Cohubq0h.js";import{H as t}from"./header-B7Z-ZQsD.js";import{T as l}from"./table-C6tbeujV.js";import{S as r}from"./separator-B6g9dnjl.js";import"./button-D317vur7.js";import"./routeInfo-Bh0-5ykf.js";const m=function(){return e.jsxs(e.Fragment,{children:[e.jsx(o,{to:s.fullPath}),e.jsx(t,{hash:"part-1-prompt",children:"Part 1 – Prompt"}),e.jsx("p",{children:"Something is wrong with global snow production, and you've been selected to take a look. The Elves have even given you a map; on it, they've used stars to mark the top fifty locations that are likely to be having problems."}),e.jsx("p",{children:"You've been doing this long enough to know that to restore snow operations, you need to check all fifty stars by December 25th."}),e.jsx("p",{children:"Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!"}),e.jsx("p",{children:`You try to ask why they can't just use a weather machine ("not powerful enough") and where they're even sending you ("the sky") and why your map looks mostly blank ("you sure ask a lot of questions") and hang on did you just say the sky ("of course, where do you think snow comes from") when you realize that the Elves are already loading you into a trebuchet ("please hold still, we need to strap you in").`}),e.jsx("p",{children:"As they're making the final adjustments, they discover that their calibration document (your puzzle input) has been amended by a very young Elf who was apparently just excited to show off her art skills. Consequently, the Elves are having trouble reading the values on the document."}),e.jsxs("p",{children:["The newly-improved calibration document consists of lines of text; each line originally contained a specific ",e.jsx("strong",{children:"calibration value"})," that the Elves now need to recover. On each line, the calibration value can be found by combining the ",e.jsx("strong",{children:"first digit"})," and the ",e.jsx("strong",{children:"last digit"})," (in that order) to form a single ",e.jsx("strong",{children:"two-digit number"}),"."]}),e.jsx("p",{children:"For example:"}),e.jsx(i,{content:`1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`}),e.jsxs("p",{children:["In this example, the calibration values of these four lines are ",e.jsx("code",{children:"12"}),","," ",e.jsx("code",{children:"38"}),", ",e.jsx("code",{children:"15"}),", and ",e.jsx("code",{children:"77"}),". Adding these together produces"," ",e.jsx("strong",{children:e.jsx("code",{children:"142"})}),"."]}),e.jsxs("p",{children:["Consider your entire calibration document.",e.jsx("strong",{children:"What is the sum of all of the calibration values?"})]}),e.jsx(t,{hash:"part-1-solution",children:"Part 1 – Solution"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Remove all non-numeric characters from the line"}),e.jsx("li",{children:"Combine the first and last numeric characters for that line and cast to an integer"}),e.jsx("li",{children:"Add the result to a running total"})]}),e.jsx(n,{content:`from pathlib import Path

import pytest


def runner(document: list[str]) -> int:
    total = 0

    for line in document:
        # Remove all non-numeric characters from the string
        numerics = [character for character in line if character.isnumeric()]

        # Combine first and last digits, add to total
        total += int(f"{numerics[0]}{numerics[-1]}")

    return total


@pytest.mark.parametrize(
    "filename,total",
    [
        ("example-1.txt", 142),
        ("example-3.txt", 54338),
    ],
)
def test_runner(filename: str, total: int) -> None:
    with open(Path(__file__).with_name(filename)) as file:
        result = runner(file.read().splitlines())

        assert result == total
`}),e.jsxs("p",{children:["Answer: ",e.jsx("code",{children:"54,338"})]}),e.jsx(r,{}),e.jsx(t,{hash:"part-2-prompt",children:"Part 2 – Prompt"}),e.jsxs("p",{children:["Your calculation isn't quite right. It looks like some of the digits are actually"," ",e.jsx("strong",{children:"spelled out with letters"}),":",e.jsx("code",{children:"one"}),", ",e.jsx("code",{children:"two"}),","," ",e.jsx("code",{children:"three"}),", ",e.jsx("code",{children:"four"}),", ",e.jsx("code",{children:"five"}),", ",e.jsx("code",{children:"six"}),","," ",e.jsx("code",{children:"seven"}),", ",e.jsx("code",{children:"eight"}),", and ",e.jsx("code",{children:"nine"})," ",e.jsx("strong",{children:"also"})," ",'count as valid "digits".']}),e.jsx("p",{children:"Equipped with this new information, you now need to find the real first and last digit on each line. For example:"}),e.jsx(i,{content:`two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`}),e.jsxs("p",{children:["In this example, the calibration values are ",e.jsx("code",{children:"29"}),", ",e.jsx("code",{children:"83"}),","," ",e.jsx("code",{children:"13"}),", ",e.jsx("code",{children:"24"}),", ",e.jsx("code",{children:"42"}),", ",e.jsx("code",{children:"14"}),", and"," ",e.jsx("code",{children:"76"}),". Adding these together produces"," ",e.jsx("strong",{children:e.jsx("code",{children:"281"})}),"."]}),e.jsx("p",{children:e.jsx("strong",{children:"What is the sum of all of the calibration values?"})}),e.jsx(t,{hash:"part-2-solution",children:"Part 2 – Solution"}),e.jsx("p",{children:"The solution for Part 2 builds off of Part 1, but breaks a few assumptions."}),e.jsxs("ol",{children:[e.jsx("li",{children:'A "valid digit" can correspond to any number'}),e.jsx("li",{children:`The set of "valid digits" isn't limited to characters of numbers 1-9`}),e.jsx("li",{children:`A "valid digit" isn't limited to one character long`})]}),e.jsxs("p",{children:[`That's pretty much it. For an example of breaking these assumptions, let's look at the "valid digit" of `,e.jsx("code",{children:"three"}),"."]}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"three"})," corresponds to a calibration score of 3"]}),e.jsxs("li",{children:[e.jsx("code",{children:"three"})," isn't in this set of characters: ",e.jsx("code",{children:"1"}),","," ",e.jsx("code",{children:"2"}),", ",e.jsx("code",{children:"3"}),", ",e.jsx("code",{children:"4"}),", ",e.jsx("code",{children:"5"}),", ",e.jsx("code",{children:"6"}),","," ",e.jsx("code",{children:"7"}),", ",e.jsx("code",{children:"8"}),", ",e.jsx("code",{children:"9"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"three"})," is 5 characters long"]})]}),e.jsx("p",{children:"With that in mind, we need to..."}),e.jsxs("ol",{children:[e.jsx("li",{children:'Enable a mapping from "valid digits" to their calibration score'}),e.jsx("li",{children:"Enable substring index searching/comparisons, starting from both the left and right sides of the string"})]}),e.jsx(n,{content:`import functools
from pathlib import Path

import pytest

VALID_DIGIT_TO_NUM: dict[str, int] = {
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9,
}

VALID_DIGITS = VALID_DIGIT_TO_NUM.keys()


def reduce_lfind(a: str, b: str, line: str) -> str:
    position_a = line.find(a)
    position_b = line.find(b)

    if position_a == -1:
        return b

    if position_b == -1:
        return a

    if position_a < position_b:
        return a

    return b


def reduce_rfind(a: str, b: str, line: str) -> str:
    position_a = line.rfind(a)
    position_b = line.rfind(b)

    if position_a == -1:
        return b

    if position_b == -1:
        return a

    if position_a > position_b:
        return a

    return b


def runner(document: list[str]) -> int:
    total = 0

    for line in document:
        # Find the earliest "digit"
        first_digit = functools.reduce(
            lambda a, b: reduce_lfind(a, b, line), VALID_DIGITS
        )
        last_digit = functools.reduce(
            lambda a, b: reduce_rfind(a, b, line), VALID_DIGITS
        )

        first = VALID_DIGIT_TO_NUM[first_digit]
        last = VALID_DIGIT_TO_NUM[last_digit]

        # Combine first and last digits, add to total
        total += int(f"{first}{last}")

    return total


@pytest.mark.parametrize(
    "filename,total",
    [
        ("example-2.txt", 281),
        ("example-3.txt", 53389),
    ],
)
def test_runner(filename: str, total: int) -> None:
    with open(Path(__file__).with_name(filename)) as file:
        result = runner(file.read().splitlines())

        assert result == total
`}),e.jsxs("p",{children:["Answer: ",e.jsx("code",{children:"53,389"})]}),e.jsx(r,{}),e.jsx(t,{hash:"recap",children:"Recap"}),e.jsxs(l,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Day"}),e.jsx("th",{children:"Part 1 Time"}),e.jsx("th",{children:"Part 1 Rank"}),e.jsx("th",{children:"Part 2 Time"}),e.jsx("th",{children:"Part 2 Rank"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"1"}),e.jsx("td",{children:"02:00:23"}),e.jsx("td",{children:"19,252"}),e.jsx("td",{children:"02:49:23"}),e.jsx("td",{children:"14,553"})]})})]}),e.jsxs("p",{children:["This took a ",e.jsx("strong",{children:"LOT"})," longer than expected, mostly because I was setting up the project and playing around with various config tools while doing so 😅."]}),e.jsxs("p",{children:["I also spent way too much time on a silly mistake. I made the"," ",e.jsx("code",{children:"reduce_rfind"})," function first, copied that for the"," ",e.jsx("code",{children:"reduce_lfind"})," function, and forgot to change the ",e.jsx("code",{children:"line.rfind"})," ","calls to ",e.jsx("code",{children:"line.find"}),". So I spent a bunch of time troubleshooting that 🙃."]}),e.jsx("p",{children:"But overall, super fun! I'm sure tomorrow will go much smoother 😁."})]})};export{m as component};
