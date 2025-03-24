import{j as e}from"./index-BOVISP07.js";import{P as t,a as n}from"./code-block-BHhHmU_4.js";import{B as i}from"./layout-CKZEFHhW.js";import{H as r}from"./header-00-8GVRa.js";import{T as s}from"./table-COcN6_W2.js";import{S as o}from"./separator-CAx1mVLs.js";import"./button-BbjwN_Wg.js";import"./routeInfo-DNFRKWbG.js";const m=function(){return e.jsxs(e.Fragment,{children:[e.jsx(i,{}),e.jsx(r,{hash:"part-1-prompt",children:"Part 1 – Prompt"}),e.jsx("p",{children:"You reach the place where all of the mirrors were pointing: a massive parabolic reflector dish attached to the side of another large mountain."}),e.jsx("p",{children:"The dish is made up of many small mirrors, but while the mirrors themselves are roughly in the shape of a parabolic reflector dish, each individual mirror seems to be pointing in slightly the wrong direction. If the dish is meant to focus light, all it's doing right now is sending it in a vague direction."}),e.jsx("p",{children:"This system must be what provides the energy for the lava! If you focus the reflector dish, maybe you can go where it's pointing and use the light to fix the lava production."}),e.jsx("p",{children:"Upon closer inspection, the individual mirrors each appear to be connected via an elaborate system of ropes and pulleys to a large metal platform below the dish. The platform is covered in large rocks of various shapes. Depending on their position, the weight of the rocks deforms the platform, and the shape of the platform controls which ropes move and ultimately the focus of the dish."}),e.jsxs("p",{children:["In short: if you move the rocks, you can focus the dish. The platform even has a control panel on the side that lets you ",e.jsx("strong",{children:"tilt"})," it in one of four directions! The rounded rocks (",e.jsx("code",{children:"O"}),") will roll when the platform is tilted, while the cube-shaped rocks (",e.jsx("code",{children:"#"}),") will stay in place. You note the positions of all of the empty spaces (",e.jsx("code",{children:"."}),") and rocks (your puzzle input). For example:"]}),e.jsx(t,{content:`O....#....
O.OO#....#
.....##...
OO.#O....O
.O.....O#.
O.#..O.#.#
..O..#O..O
.......O..
#....###..
#OO..#....`}),e.jsxs("p",{children:["Start by tilting the lever so all of the rocks will slide ",e.jsx("strong",{children:"north"})," as far as they will go:"]}),e.jsx(t,{content:`OOOO.#.O..
OO..#....#
OO..O##..O
O..#.OO...
........#.
..#....#.#
..O..#.O.O
..O.......
#....###..
#....#....`}),e.jsxs("p",{children:["You notice that the support beams along the north side of the platform are"," ",e.jsx("strong",{children:"damaged"}),"; to ensure the platform doesn't collapse, you should calculate the ",e.jsx("strong",{children:"total load"})," on the north support beams."]}),e.jsxs("p",{children:["The amount of load caused by a single rounded rock (",e.jsx("code",{children:"O"}),") is equal to the number of rows from the rock to the south edge of the platform, including the row the rock is on. (Cube-shaped rocks (",e.jsx("code",{children:"#"}),") don't contribute to load.) So, the amount of load caused by each rock in each row is as follows:"]}),e.jsx(t,{content:`OOOO.#.O.. 10
OO..#....#  9
OO..O##..O  8
O..#.OO...  7
........#.  6
..#....#.#  5
..O..#.O.O  4
..O.......  3
#....###..  2
#....#....  1`}),e.jsxs("p",{children:["The total load is the sum of the load caused by all of the"," ",e.jsx("strong",{children:"rounded rocks"}),". In this example, the total load is"," ",e.jsx("strong",{children:e.jsx("code",{children:"136"})}),"."]}),e.jsxs("p",{children:["Tilt the platform so that the rounded rocks all roll north. Afterward,"," ",e.jsx("strong",{children:"what is the total load on the north support beams?"})]}),e.jsx(r,{hash:"part-1-solution",children:"Part 1 – Solution"}),e.jsxs("p",{children:["The ",e.jsx("code",{children:"tilt_left"}),' function does all the heavy lifting. This works because we consider each "line" independent from the others, where a "line" is a column of characters.']}),e.jsx("p",{children:'Basically, we just try to move round rocks "left" until we hit either another round rock, the edge of the board, or a square rock.'}),e.jsx(n,{content:`from collections import Counter
from pathlib import Path

import pytest


def tilt_left(line: str) -> str:
    rock_map: Counter[int] = Counter({0: 0})
    square_rock_map: list[int] = [-1]
    current_index = 0

    rock_line: list[str] = []

    for index, character in enumerate(line):
        if character == "#":
            current_index += 1
            rock_line.append("#")
            square_rock_map.append(index)

        elif character == ".":
            rock_line.append(".")

        elif character == "O":
            rock_map[current_index] += 1
            rock_line.append(".")

    for index, square_rock_index in enumerate(square_rock_map):
        round_rocks = rock_map[index]

        for offset in range(round_rocks):
            rock_line[square_rock_index + offset + 1] = "O"

    return "".join(rock_line)


def runner(document: list[str]) -> int:
    total = 0

    line_size = len(document[0])
    lines: list[str] = ["" for _ in range(line_size)]

    for line in document:
        for index, character in enumerate(line):
            lines[index] += character

    for index, line in enumerate(lines):
        lines[index] = tilt_left(line)

    for row_index in range(line_size):
        line_total = 0

        for line in lines:
            if line[row_index] == "O":
                line_total += 1

        line_total *= line_size - row_index
        total += line_total

    return total


@pytest.mark.parametrize(
    "line,output",
    [
        ("OOO", "OOO"),
        ("O.O", "OO."),
        ("O..O", "OO.."),
        ("O#.O", "O#O."),
        ("O.#.O", "O.#O."),
        ("O.O#..OO.#.O", "OO.#OO...#O."),
    ],
)
def test_tilt_left(line: str, output: str) -> None:
    assert tilt_left(line) == output


@pytest.mark.parametrize(
    "filename,output",
    [
        ("example-1.txt", 136),
        ("example-2.txt", 110677),
    ],
)
def test_runner(filename: str, output: int) -> None:
    with open(Path(__file__).with_name(filename)) as file:
        result = runner(file.read().splitlines())

        assert result == output
`}),e.jsxs("p",{children:["Answer: ",e.jsx("code",{children:"110,677"})]}),e.jsx(o,{}),e.jsx(r,{hash:"part-2-prompt",children:"Part 2 – Prompt"}),e.jsxs("p",{children:[`The parabolic reflector dish deforms, but not in a way that focuses the beam. To do that, you'll need to move the rocks to the edges of the platform. Fortunately, a button on the side of the control panel labeled "`,e.jsx("strong",{children:"spin cycle"}),'" attempts to do just that!']}),e.jsxs("p",{children:["Each ",e.jsx("strong",{children:"cycle"})," tilts the platform four times so that the rounded rocks roll ",e.jsx("strong",{children:"north"}),", then ",e.jsx("strong",{children:"west"}),", then ",e.jsx("strong",{children:"south"}),", then ",e.jsx("strong",{children:"east"}),". After each tilt, the rounded rocks roll as far as they can before the platform tilts in the next direction. After one cycle, the platform will have finished rolling the rounded rocks in those four directions in that order."]}),e.jsx("p",{children:"Here's what happens in the example above after each of the first few cycles:"}),e.jsx("p",{children:"After 1 cycle:"}),e.jsx(t,{content:`.....#....
....#...O#
...OO##...
.OO#......
.....OOO#.
.O#...O#.#
....O#....
......OOOO
#...O###..
#..OO#....`}),e.jsx("p",{children:"After 2 cycles:"}),e.jsx(t,{content:`.....#....
....#...O#
.....##...
..O#......
.....OOO#.
.O#...O#.#
....O#...O
.......OOO
#..OO###..
#.OOO#...O`}),e.jsx("p",{children:"After 3 cycles:"}),e.jsx(t,{content:`.....#....
....#...O#
.....##...
..O#......
.....OOO#.
.O#...O#.#
....O#...O
.......OOO
#...O###.O
#.OOO#...O`}),e.jsxs("p",{children:["This process should work if you leave it running long enough, but you're still worried about the north support beams. To make sure they'll survive for a while, you need to calculate the ",e.jsx("strong",{children:"total load"})," on the north support beams after"," ",e.jsx("code",{children:"1000000000"})," cycles."]}),e.jsxs("p",{children:["In the above example, after ",e.jsx("code",{children:"1000000000"})," cycles, the total load on the north support beams is"," ",e.jsx("strong",{children:e.jsx("code",{children:"64"})}),"."]}),e.jsxs("p",{children:["Run the spin cycle for ",e.jsx("code",{children:"1000000000"})," cycles. Afterward,"," ",e.jsx("strong",{children:"what is the total load on the north support beams?"})]}),e.jsx(r,{hash:"part-2-solution",children:"Part 2 – Solution"}),e.jsx("p",{children:"Similar to Part 1, with some additional functions for rotating the board."}),e.jsxs("p",{children:["The key insight here is that the board will repeat after ",e.jsx("code",{children:"N"})," cycles of rotating and tilting. Once we reach a repeat board configuration, we count the number of steps in a cycle and can figure out the final position from there."]}),e.jsx(n,{content:`from collections import Counter
from pathlib import Path

import pytest


def tilt_left(line: str) -> str:
    rock_map: Counter[int] = Counter({0: 0})
    square_rock_map: list[int] = [-1]
    current_index = 0

    rock_line: list[str] = []

    for index, character in enumerate(line):
        if character == "#":
            current_index += 1
            rock_line.append("#")
            square_rock_map.append(index)

        elif character == ".":
            rock_line.append(".")

        elif character == "O":
            rock_map[current_index] += 1
            rock_line.append(".")

    for index, square_rock_index in enumerate(square_rock_map):
        round_rocks = rock_map[index]

        for offset in range(round_rocks):
            rock_line[square_rock_index + offset + 1] = "O"

    return "".join(rock_line)


def rotate_90(raw_lines: list[str]) -> list[str]:
    # Rotates 90 degrees clockwise
    line_size = len(raw_lines[0])
    lines: list[str] = ["" for _ in range(line_size)]

    for line in raw_lines:
        for index, character in enumerate(reversed(line)):
            lines[index] += character

    return lines


def rotate_180(raw_lines: list[str]) -> list[str]:
    new_lines = raw_lines.copy()

    for _ in range(2):
        new_lines = rotate_90(new_lines)

    return new_lines


def rotate_270(raw_lines: list[str]) -> list[str]:
    new_lines = raw_lines.copy()

    for _ in range(3):
        new_lines = rotate_90(new_lines)

    return new_lines


def runner(document: list[str]) -> int:
    size = 1_000_000_000

    counter = 0
    cycle_repeats: int | None = None
    cycle_counter: dict[str, int] = {}
    cycles: dict[int, list[str]] = {}

    while counter < size:
        north = [tilt_left(line) for line in rotate_90(document)]
        west = [tilt_left(line) for line in rotate_270(north)]
        south = [tilt_left(line) for line in rotate_270(west)]
        east = [tilt_left(line) for line in rotate_270(south)]

        cycled = rotate_180(east)

        cycles[counter] = cycled

        cycle_key = "".join(cycled)

        if cycle_key in cycle_counter:
            cycle_repeats = cycle_counter[cycle_key]
            break

        else:
            cycle_counter[cycle_key] = counter

        counter += 1
        document = cycled

    if cycle_repeats is None:
        last_cycle = cycles[counter - 1]
    else:
        final_cycle = (
            cycle_repeats + (size - cycle_repeats) % (counter - cycle_repeats) - 1
        )
        last_cycle = cycles[final_cycle]

    total = 0

    for index, line in enumerate(last_cycle):
        total += line.count("O") * (len(last_cycle) - index)

    return total


@pytest.mark.parametrize(
    "line,output",
    [
        ("OOO", "OOO"),
        ("O.O", "OO."),
        ("O..O", "OO.."),
        ("O#.O", "O#O."),
        ("O.#.O", "O.#O."),
        ("O.O#..OO.#.O", "OO.#OO...#O."),
    ],
)
def test_tilt_left(line: str, output: str) -> None:
    assert tilt_left(line) == output


@pytest.mark.parametrize(
    "lines,output",
    [
        (["ABC", "DEF", "GHI"], ["CFI", "BEH", "ADG"]),
        (["CFI", "BEH", "ADG"], ["IHG", "FED", "CBA"]),
        (["IHG", "FED", "CBA"], ["GDA", "HEB", "IFC"]),
        (["GDA", "HEB", "IFC"], ["ABC", "DEF", "GHI"]),
    ],
)
def test_rotate_90(lines: list[str], output: list[str]) -> None:
    assert rotate_90(lines) == output


@pytest.mark.parametrize(
    "filename,output",
    [
        ("example-1.txt", 64),
        ("example-2.txt", 90551),
    ],
)
def test_runner(filename: str, output: int) -> None:
    with open(Path(__file__).with_name(filename)) as file:
        result = runner(file.read().splitlines())

        assert result == output
`}),e.jsxs("p",{children:["Answer: ",e.jsx("code",{children:"90,551"})]}),e.jsx(o,{}),e.jsx(r,{hash:"recap",children:"Recap"}),e.jsxs(s,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Day"}),e.jsx("th",{children:"Part 1 Time"}),e.jsx("th",{children:"Part 1 Rank"}),e.jsx("th",{children:"Part 2 Time"}),e.jsx("th",{children:"Part 2 Rank"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"14"}),e.jsx("td",{children:"02:04:22"}),e.jsx("td",{children:"9,332"}),e.jsx("td",{children:"03:18:55"}),e.jsx("td",{children:"6,846"})]})})]}),e.jsx("p",{children:"I started ~1 hour 34 minutes late 🙃."}),e.jsx("p",{children:"I ended up making some tests for the rotate functions, that took a bit of fiddling to get correct. And the end result is still very strange looking. I perform a 90 degree roatation, then three 270 degree rotations, then a final 180 degree rotation to complete a cycle. It works, just very strange looking."}),e.jsx("p",{children:"Detecting cycles wasn't particularly hard, I could just convert the board to a string and check against a dict/set of strings. I used a dictionary, mapping string-boards to steps, which made some of the math easier."}),e.jsx("p",{children:"Once we find our cycle, we just account for the cycle start offset and we can find the final board configuration with a simple lookup table."})]})};export{m as component};
