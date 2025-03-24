import{j as e}from"./index-asdfw01p.js";import{P as r,a as t}from"./code-block-DGk06EOt.js";import{B as o}from"./layout-Bbw6xlVW.js";import{H as n}from"./header-bLivdw4r.js";import{T as i}from"./table-CewKNS46.js";import{S as s}from"./separator-COdazgSt.js";import"./button-DxUZDvDh.js";import"./routeInfo-DwfsGK-b.js";const x=function(){return e.jsxs(e.Fragment,{children:[e.jsx(o,{}),e.jsx(n,{hash:"part-1-prompt",children:"Part 1 – Prompt"}),e.jsx("p",{children:"You finally reach the hot springs! You can see steam rising from secluded areas attached to the primary, ornate building."}),e.jsx("p",{children:`As you turn to enter, the researcher stops you. "Wait - I thought you were looking for the hot springs, weren't you?" You indicate that this definitely looks like hot springs to you.`}),e.jsx("p",{children:'"Oh, sorry, common mistake! This is actually the onsen! The hot springs are next door."'}),e.jsx("p",{children:'You look in the direction the researcher is pointing and suddenly notice the massive metal helixes towering overhead. "This way!"'}),e.jsx("p",{children:"It only takes you a few more steps to reach the main gate of the massive fenced-off area containing the springs. You go through the gate and into a small administrative building."}),e.jsxs("p",{children:[`"Hello! What brings you to the hot springs today? Sorry they're not very hot right now; we're having a `,e.jsx("strong",{children:"lava shortage"}),' at the moment." You ask about the missing machine parts for Desert Island.']}),e.jsx("p",{children:`"Oh, all of Gear Island is currently offline! Nothing is being manufactured at the moment, not until we get more lava to heat our forges. And our springs. The springs aren't very springy unless they're hot!"`}),e.jsxs("p",{children:['"Say, could you go up and see why the lava stopped flowing? The springs are too cold for normal operation, but we should be able to find one springy enough to launch'," ",e.jsx("strong",{children:"you"}),' up there!"']}),e.jsxs("p",{children:["There's just one problem - many of the springs have fallen into disrepair, so they're not actually sure which springs would even be ",e.jsx("strong",{children:"safe"})," to use! Worse yet, their ",e.jsx("strong",{children:"condition records of which springs are damaged"})," ","(your puzzle input) are also damaged! You'll need to help them repair the damaged records."]}),e.jsxs("p",{children:["In the giant field just outside, the springs are arranged into ",e.jsx("strong",{children:"rows"}),". For each row, the condition records show every spring and whether it is"," ",e.jsx("strong",{children:"operational"})," (",e.jsx("code",{children:"."}),") or ",e.jsx("strong",{children:"damaged"})," (",e.jsx("code",{children:"#"}),"). This is the part of the condition records that is itself damaged; for some springs, it is simply ",e.jsx("strong",{children:"unknown"})," (",e.jsx("code",{children:"?"}),") whether the spring is operational or damaged."]}),e.jsxs("p",{children:["However, the engineer that produced the condition records also duplicated some of this information in a different format! After the list of springs for a given row, the size of each ",e.jsx("strong",{children:"contiguous group of damaged springs"})," is listed in the order those groups appear in the row. This list always accounts for every damaged spring, and each number is the entire size of its contiguous group (that is, groups are always separated by at least one operational spring: ",e.jsx("code",{children:"####"})," ","would always be ",e.jsx("code",{children:"4"}),", never ",e.jsx("code",{children:"2,2"}),")."]}),e.jsx("p",{children:"So, condition records with no unknown spring conditions might look like this:"}),e.jsx(r,{content:`#.#.### 1,1,3
.#...#....###. 1,1,3
.#.###.#.###### 1,3,1,6
####.#...#... 4,1,1
#....######..#####. 1,6,5
.###.##....# 3,2,1`}),e.jsxs("p",{children:["However, the condition records are partially damaged; some of the springs' conditions are actually ",e.jsx("strong",{children:"unknown"})," (",e.jsx("code",{children:"?"}),"). For example:"]}),e.jsx(r,{content:`???.### 1,1,3
.??..??...?##. 1,1,3
?#?#?#?#?#?#?#? 1,3,1,6
????.#...#... 4,1,1
????.######..#####. 1,6,5
?###???????? 3,2,1`}),e.jsxs("p",{children:["Equipped with this information, it is your job to figure out"," ",e.jsx("strong",{children:"how many different arrangements"})," of operational and broken springs fit the given criteria in each row."]}),e.jsxs("p",{children:["In the first line (",e.jsx("code",{children:"???.### 1,1,3"}),"), there is exactly"," ",e.jsx("strong",{children:"one"})," way separate groups of one, one, and three broken springs (in that order) can appear in that row: the first three unknown springs must be broken, then operational, then broken (",e.jsx("code",{children:"#.#"}),"), making the whole row"," ",e.jsx("code",{children:"#.#.###"}),"."]}),e.jsxs("p",{children:["The second line is more interesting: ",e.jsx("code",{children:".??..??...?##. 1,1,3"})," could be a total of ",e.jsx("strong",{children:"four"})," different arrangements. The last ",e.jsx("code",{children:"?"})," must always be broken (to satisfy the final contiguous group of three broken springs), and each ",e.jsx("code",{children:"??"})," must hide exactly one of the two broken springs. (Neither"," ",e.jsx("code",{children:"??"})," could be both broken springs or they would form a single contiguous group of two; if that were true, the numbers afterward would have been"," ",e.jsx("code",{children:"2,3"})," instead.) Since each ",e.jsx("code",{children:"??"})," can either be ",e.jsx("code",{children:"#."})," ","or ",e.jsx("code",{children:".#"}),", there are four possible arrangements of springs."]}),e.jsxs("p",{children:["The last line is actually consistent with ",e.jsx("strong",{children:"ten"})," different arrangements! Because the first number is 3, the first and second ",e.jsx("code",{children:"?"})," ","must both be ",e.jsx("code",{children:"."})," (if either were ",e.jsx("code",{children:"#"}),", the first number would have to be ",e.jsx("code",{children:"4"})," or higher). However, the remaining run of unknown spring conditions have many different ways they could hold groups of two and one broken springs:"]}),e.jsx(r,{content:`?###???????? 3,2,1
.###.##.#...
.###.##..#..
.###.##...#.
.###.##....#
.###..##.#..
.###..##..#.
.###..##...#
.###...##.#.
.###...##..#
.###....##.#`}),e.jsx("p",{children:"In this example, the number of possible arrangements for each row is:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"???.### 1,1,3"})," -"," ",e.jsx("strong",{children:e.jsx("code",{children:"1"})})," ","arrangement"]}),e.jsxs("li",{children:[e.jsx("code",{children:".??..??...?##. 1,1,3"})," -"," ",e.jsx("strong",{children:e.jsx("code",{children:"4"})})," ","arrangements"]}),e.jsxs("li",{children:[e.jsx("code",{children:"?#?#?#?#?#?#?#? 1,3,1,6"})," -"," ",e.jsx("strong",{children:e.jsx("code",{children:"1"})})," ","arrangement"]}),e.jsxs("li",{children:[e.jsx("code",{children:"????.#...#... 4,1,1"})," -"," ",e.jsx("strong",{children:e.jsx("code",{children:"1"})})," ","arrangement"]}),e.jsxs("li",{children:[e.jsx("code",{children:"????.######..#####. 1,6,5"})," -"," ",e.jsx("strong",{children:e.jsx("code",{children:"4"})})," ","arrangements"]}),e.jsxs("li",{children:[e.jsx("code",{children:"?###???????? 3,2,1"})," -"," ",e.jsx("strong",{children:e.jsx("code",{children:"10"})})," ","arrangements"]})]}),e.jsxs("p",{children:["Adding all of the possible arrangement counts together produces a total of"," ",e.jsx("strong",{children:e.jsx("code",{children:"21"})})," ","arrangements."]}),e.jsxs("p",{children:["For each row, count all of the different arrangements of operational and broken springs that meet the given criteria.",e.jsx("strong",{children:"What is the sum of those counts?"})]}),e.jsx(n,{hash:"part-1-solution",children:"Part 1 – Solution"}),e.jsx("p",{children:"Count arrangements using a recursive function. Steps in the recursive function are commented below."}),e.jsx(t,{content:`from functools import cache
from pathlib import Path

import pytest


@cache
def count_arrangements(springs: str, counts: tuple[int]) -> int:
    # Base cases
    # Valid arranements only exist for no springs and no counts left
    if not springs:
        if not counts:
            return 1

        return 0

    current_spring = springs[0]

    if current_spring == "#":
        # Not enough space, invalid arrangement
        if not counts or len(springs) < counts[0]:
            return 0

        # Not enough sprints for first value, invalid arrangement
        if "." in springs[0 : counts[0]]:
            return 0

        # Too many springs for first value, invalid arrangement
        if springs[counts[0] :].startswith("#"):
            return 0

        if len(springs) > counts[0] and springs[counts[0]] == "?":
            # Recursive case 1
            # Try the next arrangement with the next springs/counts
            return count_arrangements(
                springs[counts[0] + 1 :].lstrip("."),
                counts[1:],
            )

        # Recursive case 2
        # We have enough springs to try more arrangements
        return count_arrangements(springs[counts[0] :].lstrip("."), counts[1:])

    elif current_spring == ".":
        # Recursive case 3
        # Continue with the empty space
        return count_arrangements(springs.lstrip("."), counts)

    # Recursive case 4
    # Unknown, try both # and .
    total = count_arrangements("#" + springs[1:], counts)
    total += count_arrangements("." + springs[1:], counts)
    return total


def runner(document: list[str]) -> int:
    total = 0

    for line in document:
        springs, count_str = line.split(" ")
        counts = [int(value) for value in count_str.split(",")]

        total += count_arrangements(springs, tuple(counts))

    return total


@pytest.mark.parametrize(
    "springs,counts,output",
    [
        ("#", [1], 1),
        ("#.", [1], 1),
        (".#", [1], 1),
        ("?#", [1], 1),
        ("#?", [1], 1),
        ("??", [1], 2),
        ("???", [1], 3),
        ("?.?", [1], 2),
        ("?.??", [1, 2], 1),
        ("??.??", [1, 2], 2),
        ("???.???", [1, 1], 11),
        ("???.###", [1, 3], 3),
        ("?.?.###", [1, 3], 2),
        ("???.#", [3, 1], 1),
        ("???.###", [1, 1, 3], 1),
        ("???.###", [2, 3], 2),
        (".??..??...?##.", [1, 1, 3], 4),
        ("?#?#?#?#?#?#?#?", [1, 3, 1, 6], 1),
        ("????.#...#...", [4, 1, 1], 1),
        ("????.######..#####.", [1, 6, 5], 4),
        ("?###????????", [3, 2, 1], 10),
        (".###...?????", [3, 2, 1], 3),
        (".??.?.????", [1, 1, 1], 17),
        ("???#???????##?", [1, 7, 3], 4),
        ("?#.???#???????##?.?", [2, 1, 7, 3, 1], 4),
    ],
)
def test_update_arrangements(springs: str, counts: list[int], output: int) -> None:
    assert count_arrangements(springs, tuple(counts)) == output


@pytest.mark.parametrize(
    "filename,output",
    [
        ("example-1.txt", 21),
        ("example-2.txt", 7705),
    ],
)
def test_runner(filename: str, output: int) -> None:
    with open(Path(__file__).with_name(filename)) as file:
        result = runner(file.read().splitlines())

        assert result == output
`}),e.jsxs("p",{children:["Answer: ",e.jsx("code",{children:"7,705"})]}),e.jsx(s,{}),e.jsx(n,{hash:"part-2-prompt",children:"Part 2 – Prompt"}),e.jsxs("p",{children:["As you look out at the field of springs, you feel like there are way more springs than the condition records list. When you examine the records, you discover that they were actually ",e.jsx("strong",{children:"folded up"})," this whole time!"]}),e.jsxs("p",{children:["To ",e.jsx("strong",{children:"unfold the records"}),", on each row, replace the list of spring conditions with five copies of itself (separated by ?) and replace the list of contiguous groups of damaged springs with five copies of itself (separated by ,)."]}),e.jsx("p",{children:"So, this row:"}),e.jsx("p",{children:e.jsx("code",{children:".# 1"})}),e.jsx("p",{children:"Would become:"}),e.jsx("p",{children:e.jsx("code",{children:".#?.#?.#?.#?.# 1,1,1,1,1"})}),e.jsx("p",{children:"The first line of the above example would become:"}),e.jsx("p",{children:e.jsx("code",{children:"???.###????.###????.###????.###????.### 1,1,3,1,1,3,1,1,3,1,1,3,1,1,3"})}),e.jsx("p",{children:"In the above example, after unfolding, the number of possible arrangements for some rows is now much larger:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"???.### 1,1,3"})," -"," ",e.jsx("strong",{children:e.jsx("code",{children:"1"})})," ","arrangement"]}),e.jsxs("li",{children:[e.jsx("code",{children:".??..??...?##. 1,1,3"})," -"," ",e.jsx("strong",{children:e.jsx("code",{children:"16384"})})," ","arrangements"]}),e.jsxs("li",{children:[e.jsx("code",{children:"?#?#?#?#?#?#?#? 1,3,1,6"})," -"," ",e.jsx("strong",{children:e.jsx("code",{children:"1"})})," ","arrangement"]}),e.jsxs("li",{children:[e.jsx("code",{children:"????.#...#... 4,1,1"})," -"," ",e.jsx("strong",{children:e.jsx("code",{children:"16"})})," ","arrangements"]}),e.jsxs("li",{children:[e.jsx("code",{children:"????.######..#####. 1,6,5"})," -"," ",e.jsx("strong",{children:e.jsx("code",{children:"2500"})})," ","arrangements"]}),e.jsxs("li",{children:[e.jsx("code",{children:"?###???????? 3,2,1"})," -"," ",e.jsx("strong",{children:e.jsx("code",{children:"506250"})})," ","arrangements"]})]}),e.jsxs("p",{children:["After unfolding, adding all of the possible arrangement counts together produces"," ",e.jsx("strong",{children:e.jsx("code",{children:"525152"})}),"."]}),e.jsxs("p",{children:["Unfold your condition records;"," ",e.jsx("strong",{children:"what is the new sum of possible arrangement counts?"})]}),e.jsx(n,{hash:"part-2-solution",children:"Part 2 – Solution"}),e.jsx("p",{children:"Same as Part 1, but expand the input values."}),e.jsx(t,{content:`from functools import cache
from pathlib import Path

import pytest


@cache
def count_arrangements(springs: str, counts: tuple[int]) -> int:
    # Base cases
    # Valid arranements only exist for no springs and no counts left
    if not springs:
        if not counts:
            return 1

        return 0

    current_spring = springs[0]

    if current_spring == "#":
        # Not enough space, invalid arrangement
        if not counts or len(springs) < counts[0]:
            return 0

        # Not enough sprints for first value, invalid arrangement
        if "." in springs[0 : counts[0]]:
            return 0

        # Too many springs for first value, invalid arrangement
        if springs[counts[0] :].startswith("#"):
            return 0

        if len(springs) > counts[0] and springs[counts[0]] == "?":
            # Recursive case 1
            # Try the next arrangement with the next springs/counts
            return count_arrangements(
                springs[counts[0] + 1 :].lstrip("."),
                counts[1:],
            )

        # Recursive case 2
        # We have enough springs to try more arrangements
        return count_arrangements(springs[counts[0] :].lstrip("."), counts[1:])

    elif current_spring == ".":
        # Recursive case 3
        # Continue with the empty space
        return count_arrangements(springs.lstrip("."), counts)

    # Recursive case 4
    # Unknown, try both # and .
    total = count_arrangements("#" + springs[1:], counts)
    total += count_arrangements("." + springs[1:], counts)
    return total


def runner(document: list[str]) -> int:
    total = 0

    for line in document:
        springs, count_str = line.split(" ")
        counts = [int(value) for value in count_str.split(",")]

        unfolded_counts = counts * 5
        unfolded_springs = "?".join([springs] * 5)

        total += count_arrangements(unfolded_springs, tuple(unfolded_counts))

    return total


@pytest.mark.parametrize(
    "springs,counts,output",
    [
        ("#", [1], 1),
        ("#.", [1], 1),
        (".#", [1], 1),
        ("?#", [1], 1),
        ("#?", [1], 1),
        ("??", [1], 2),
        ("???", [1], 3),
        ("?.?", [1], 2),
        ("?.??", [1, 2], 1),
        ("??.??", [1, 2], 2),
        ("???.???", [1, 1], 11),
        ("???.###", [1, 3], 3),
        ("?.?.###", [1, 3], 2),
        ("???.#", [3, 1], 1),
        ("???.###", [1, 1, 3], 1),
        ("???.###", [2, 3], 2),
        (".??..??...?##.", [1, 1, 3], 4),
        ("?#?#?#?#?#?#?#?", [1, 3, 1, 6], 1),
        ("????.#...#...", [4, 1, 1], 1),
        ("????.######..#####.", [1, 6, 5], 4),
        ("?###????????", [3, 2, 1], 10),
        (".###...?????", [3, 2, 1], 3),
        (".??.?.????", [1, 1, 1], 17),
        ("???#???????##?", [1, 7, 3], 4),
        ("?#.???#???????##?.?", [2, 1, 7, 3, 1], 4),
    ],
)
def test_update_arrangements(springs: str, counts: list[int], output: int) -> None:
    assert count_arrangements(springs, tuple(counts)) == output


@pytest.mark.parametrize(
    "filename,output",
    [
        ("example-1.txt", 525152),
        ("example-2.txt", 50338344809230),
    ],
)
def test_runner(filename: str, output: int) -> None:
    with open(Path(__file__).with_name(filename)) as file:
        result = runner(file.read().splitlines())

        assert result == output
`}),e.jsxs("p",{children:["Answer: ",e.jsx("code",{children:"50,338,344,809,230"})]}),e.jsx(s,{}),e.jsx(n,{hash:"recap",children:"Recap"}),e.jsxs(i,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Day"}),e.jsx("th",{children:"Part 1 Time"}),e.jsx("th",{children:"Part 1 Rank"}),e.jsx("th",{children:"Part 2 Time"}),e.jsx("th",{children:"Part 2 Rank"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"12"}),e.jsx("td",{children:"03:02:15"}),e.jsx("td",{children:"8,882"}),e.jsx("td",{children:"03:16:49"}),e.jsx("td",{children:"3,382"})]})})]}),e.jsx("p",{children:"Finding an efficient recursive function was extremely challenging 😖."}),e.jsx("p",{children:"I had a solution much earlier that worked for the example input, but that solution was extremely slow for the real input (taking ~2 hours 45 minutes to complete [I started it and left the terminal window open while I worked on the more efficient solution above])."})]})};export{x as component};
