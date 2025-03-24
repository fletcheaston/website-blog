import{j as e,aB as i}from"./index-wyCv48Bt.js";import{P as t,a as r}from"./code-block-DggC1cgA.js";import{B as a}from"./layout-4WAjEoz1.js";import{H as n}from"./header-Bq1eIV9x.js";import{T as o}from"./table-DGhhagS_.js";import{S as s}from"./separator-DmrylMMO.js";import"./button-DSdbYLev.js";import"./routeInfo-CqDql-3m.js";const w=function(){return e.jsxs(e.Fragment,{children:[e.jsx(a,{to:i.fullPath}),e.jsx(n,{hash:"part-1-prompt",children:"Part 1 – Prompt"}),e.jsxs("p",{children:["With your help, the hot springs team locates an appropriate spring which launches you neatly and precisely up to the edge of ",e.jsx("strong",{children:"Lava Island"}),"."]}),e.jsxs("p",{children:["There's just one problem: you don't see any ",e.jsx("strong",{children:"lava"}),"."]}),e.jsxs("p",{children:["You ",e.jsx("strong",{children:"do"})," see a lot of ash and igneous rock; there are even what look like gray mountains scattered around. After a while, you make your way to a nearby cluster of mountains only to discover that the valley between them is completely full of large ",e.jsx("strong",{children:"mirrors"}),". Most of the mirrors seem to be aligned in a consistent way; perhaps you should head in that direction?"]}),e.jsx("p",{children:"As you move through the valley of mirrors, you find that several of them have fallen from the large metal frames keeping them in place. The mirrors are extremely flat and shiny, and many of the fallen mirrors have lodged into the ash at strange angles. Because the terrain is all one color, it's hard to tell where it's safe to walk or where you're about to run into a mirror."}),e.jsxs("p",{children:["You note down the patterns of ash (",e.jsx("code",{children:"."}),") and rocks (",e.jsx("code",{children:"#"}),") that you see as you walk (your puzzle input); perhaps by carefully analyzing these patterns, you can figure out where the mirrors are!"]}),e.jsx("p",{children:"For example:"}),e.jsx(t,{content:`#.##..##.
..#.##.#.
##......#
##......#
..#.##.#.
..##..##.
#.#.##.#.

#...##..#
#....#..#
..##..###
#####.##.
#####.##.
..##..###
#....#..#`}),e.jsx("p",{children:"To find the reflection in each pattern, you need to find a perfect reflection across either a horizontal line between two rows or across a vertical line between two columns."}),e.jsx("p",{children:"In the first pattern, the reflection is across a vertical line between two columns; arrows on each of the two columns point at the line between the columns:"}),e.jsx(t,{content:`123456789
    ><
#.##..##.
..#.##.#.
##......#
##......#
..#.##.#.
..##..##.
#.#.##.#.
    ><
123456789`}),e.jsx("p",{children:"In this pattern, the line of reflection is the vertical line between columns 5 and 6. Because the vertical line is not perfectly in the middle of the pattern, part of the pattern (column 1) has nowhere to reflect onto and can be ignored; every other column has a reflected column within the pattern and must match exactly: column 2 matches column 9, column 3 matches 8, 4 matches 7, and 5 matches 6."}),e.jsx("p",{children:"The second pattern reflects across a horizontal line instead:"}),e.jsx(t,{content:`1 #...##..# 1
2 #....#..# 2
3 ..##..### 3
4v#####.##.v4
5^#####.##.^5
6 ..##..### 6
7 #....#..# 7`}),e.jsx("p",{children:"This pattern reflects across the horizontal line between rows 4 and 5. Row 1 would reflect with a hypothetical row 8, but since that's not in the pattern, row 1 doesn't need to match anything. The remaining rows match: row 2 matches row 7, row 3 matches row 6, and row 4 matches row 5."}),e.jsxs("p",{children:["To ",e.jsx("strong",{children:"summarize"})," your pattern notes, add up"," ",e.jsx("strong",{children:"the number of columns"})," to the left of each vertical line of reflection; to that, also add ",e.jsx("strong",{children:"100 multiplied by the number of rows"})," ","above each horizontal line of reflection. In the above example, the first pattern's vertical line has ",e.jsx("code",{children:"5"})," columns to its left and the second pattern's horizontal line has ",e.jsx("code",{children:"4"})," rows above it, a total of"," ",e.jsx("strong",{children:e.jsx("code",{children:"405"})}),"."]}),e.jsxs("p",{children:["Find the line of reflection in each of the patterns in your notes.",e.jsx("strong",{children:"What number do you get after summarizing all of your notes?"})]}),e.jsx(n,{hash:"part-1-solution",children:"Part 1 – Solution"}),e.jsx(r,{content:`from dataclasses import dataclass, field
from functools import cache
from pathlib import Path
from typing import Literal

import pytest


@cache
def differences(first: str, second: str) -> int:
    diffs = 0

    for first_char, second_char in zip(first, second, strict=False):
        if first_char != second_char:
            diffs += 1

    return diffs


@dataclass
class Grid:
    smudges: int
    rows: list[str] = field(default_factory=list)
    columns: list[str] = field(default_factory=list)

    def add(self, row: str) -> None:
        self.rows.append(row)

        if not self.columns:
            self.columns = ["" for _ in range(len(row))]

        for index, character in enumerate(row):
            self.columns[index] += character

    def calculate_reflections(self, direction: Literal["rows", "columns"]) -> int:
        data: list[str] | None = None
        multiplier = 1

        if direction == "rows":
            data = self.rows.copy()
            multiplier = 100

        if direction == "columns":
            data = self.columns.copy()

        assert data is not None

        start_indexes: list[int] = []

        for index in range(len(data) - 1):
            if differences(data[index], data[index + 1]) < 2:
                start_indexes.append(index)

        for start_index in start_indexes:
            smudges_used = 0

            reflection_index = start_index + 1
            matching = True
            end_index = start_index + 1

            while matching and start_index >= 0 and end_index < len(data):
                if data[start_index] == data[end_index]:
                    start_index -= 1
                    end_index += 1

                elif (
                    differences(data[start_index], data[end_index]) == 1
                    and self.smudges - smudges_used > 0
                ):
                    smudges_used += 1
                    start_index -= 1
                    end_index += 1

                else:
                    matching = False

            if matching and smudges_used == self.smudges:
                return reflection_index * multiplier

        return 0


def runner(document: list[str]) -> int:
    total = 0

    grid = Grid(smudges=0)

    for line in document:
        if not line:
            # Calculate reflections
            if row_count := grid.calculate_reflections("rows"):
                total += row_count
            else:
                total += grid.calculate_reflections("columns")

            # Reset grid
            grid = Grid(smudges=0)

        else:
            grid.add(line)

    # Last grid
    if row_count := grid.calculate_reflections("rows"):
        total += row_count
    else:
        total += grid.calculate_reflections("columns")

    return total


@pytest.mark.parametrize(
    "filename,output",
    [
        ("example-1.txt", 405),
        ("example-2.txt", 35538),
    ],
)
def test_runner(filename: str, output: int) -> None:
    with open(Path(__file__).with_name(filename)) as file:
        result = runner(file.read().splitlines())

        assert result == output
`}),e.jsxs("p",{children:["Answer: ",e.jsx("code",{children:"35,538"})]}),e.jsx(s,{}),e.jsx(n,{hash:"part-2-prompt",children:"Part 2 – Prompt"}),e.jsx("p",{children:"You resume walking through the valley of mirrors and - SMACK! - run directly into one. Hopefully nobody was watching, because that must have been pretty embarrassing."}),e.jsx("p",{children:"Upon closer inspection, you discover that every mirror has exactly one smudge: exactly one . or # should be the opposite type."}),e.jsx("p",{children:"In each pattern, you'll need to locate and fix the smudge that causes a different reflection line to be valid. (The old reflection line won't necessarily continue being valid after the smudge is fixed.)"}),e.jsx("p",{children:"Here's the above example again:"}),e.jsx(t,{content:`#.##..##.
..#.##.#.
##......#
##......#
..#.##.#.
..##..##.
#.#.##.#.

#...##..#
#....#..#
..##..###
#####.##.
#####.##.
..##..###
#....#..#`}),e.jsx("p",{children:"The first pattern's smudge is in the top-left corner. If the top-left # were instead ., it would have a different, horizontal line of reflection:"}),e.jsx(t,{content:`1 ..##..##. 1
2 ..#.##.#. 2
3v##......#v3
4^##......#^4
5 ..#.##.#. 5
6 ..##..##. 6
7 #.#.##.#. 7`}),e.jsx("p",{children:"With the smudge in the top-left corner repaired, a new horizontal line of reflection between rows 3 and 4 now exists. Row 7 has no corresponding reflected row and can be ignored, but every other row matches exactly: row 1 matches row 6, row 2 matches row 5, and row 3 matches row 4."}),e.jsx("p",{children:"In the second pattern, the smudge can be fixed by changing the fifth symbol on row 2 from . to #:"}),e.jsx(t,{content:`1v#...##..#v1
2^#...##..#^2
3 ..##..### 3
4 #####.##. 4
5 #####.##. 5
6 ..##..### 6
7 #....#..# 7`}),e.jsx("p",{children:"Now, the pattern has a different horizontal line of reflection between rows 1 and 2."}),e.jsx("p",{children:"Summarize your notes as before, but instead use the new different reflection lines. In this example, the first pattern's new horizontal line has 3 rows above it and the second pattern's new horizontal line has 1 row above it, summarizing to the value 400."}),e.jsxs("p",{children:["In each pattern, fix the smudge and find the different line of reflection.",e.jsx("strong",{children:"What number do you get after summarizing the new reflection line in each pattern in your notes?"})]}),e.jsx(n,{hash:"part-2-solution",children:"Part 2 – Solution"}),e.jsx(r,{content:`from dataclasses import dataclass, field
from functools import cache
from pathlib import Path
from typing import Literal

import pytest


@cache
def differences(first: str, second: str) -> int:
    diffs = 0

    for first_char, second_char in zip(first, second, strict=False):
        if first_char != second_char:
            diffs += 1

    return diffs


@dataclass
class Grid:
    smudges: int
    rows: list[str] = field(default_factory=list)
    columns: list[str] = field(default_factory=list)

    def add(self, row: str) -> None:
        self.rows.append(row)

        if not self.columns:
            self.columns = ["" for _ in range(len(row))]

        for index, character in enumerate(row):
            self.columns[index] += character

    def calculate_reflections(self, direction: Literal["rows", "columns"]) -> int:
        data: list[str] | None = None
        multiplier = 1

        if direction == "rows":
            data = self.rows.copy()
            multiplier = 100

        if direction == "columns":
            data = self.columns.copy()

        assert data is not None

        start_indexes: list[int] = []

        for index in range(len(data) - 1):
            if differences(data[index], data[index + 1]) < 2:
                start_indexes.append(index)

        for start_index in start_indexes:
            smudges_used = 0

            reflection_index = start_index + 1
            matching = True
            end_index = start_index + 1

            while matching and start_index >= 0 and end_index < len(data):
                if data[start_index] == data[end_index]:
                    start_index -= 1
                    end_index += 1

                elif (
                    differences(data[start_index], data[end_index]) == 1
                    and self.smudges - smudges_used > 0
                ):
                    smudges_used += 1
                    start_index -= 1
                    end_index += 1

                else:
                    matching = False

            if matching and smudges_used == self.smudges:
                return reflection_index * multiplier

        return 0


def runner(document: list[str]) -> int:
    total = 0

    grid = Grid(smudges=1)

    for line in document:
        if not line:
            # Calculate reflections
            if row_count := grid.calculate_reflections("rows"):
                total += row_count
            else:
                total += grid.calculate_reflections("columns")

            # Reset grid
            grid = Grid(smudges=1)

        else:
            grid.add(line)

    # Last grid
    if row_count := grid.calculate_reflections("rows"):
        total += row_count
    else:
        total += grid.calculate_reflections("columns")

    return total


@pytest.mark.parametrize(
    "filename,output",
    [
        ("example-1.txt", 400),
        ("example-2.txt", 30442),
    ],
)
def test_runner(filename: str, output: int) -> None:
    with open(Path(__file__).with_name(filename)) as file:
        result = runner(file.read().splitlines())

        assert result == output
`}),e.jsxs("p",{children:["Answer: ",e.jsx("code",{children:"30,442"})]}),e.jsx(s,{}),e.jsx(n,{hash:"recap",children:"Recap"}),e.jsxs(o,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Day"}),e.jsx("th",{children:"Part 1 Time"}),e.jsx("th",{children:"Part 1 Rank"}),e.jsx("th",{children:"Part 2 Time"}),e.jsx("th",{children:"Part 2 Rank"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"13"}),e.jsx("td",{children:"00:23:19"}),e.jsx("td",{children:"1,460"}),e.jsx("td",{children:"00:48:58"}),e.jsx("td",{children:"2,122"})]})})]})]})};export{w as component};
