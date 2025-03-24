import{j as e,aL as s}from"./index-wyCv48Bt.js";import{P as r,a as t}from"./code-block-DggC1cgA.js";import{B as d}from"./layout-4WAjEoz1.js";import{H as n}from"./header-Bq1eIV9x.js";import{T as i}from"./table-DGhhagS_.js";import{S as c}from"./separator-DmrylMMO.js";import"./button-DSdbYLev.js";import"./routeInfo-CqDql-3m.js";const _=function(){return e.jsxs(e.Fragment,{children:[e.jsx(d,{to:s.fullPath}),e.jsx(n,{hash:"part-1-prompt",children:"Part 1 – Prompt"}),e.jsxs("p",{children:["You and the Elf eventually reach a gondola lift station; he says the gondola lift will take you up to the ",e.jsx("strong",{children:"water source"}),", but this is as far as he can bring you. You go inside."]}),e.jsx("p",{children:"It doesn't take long to find the gondolas, but there seems to be a problem: they're not moving."}),e.jsx("p",{children:'"Aaah!"'}),e.jsx("p",{children:`You turn around to see a slightly-greasy Elf with a wrench and a look of surprise. "Sorry, I wasn't expecting anyone! The gondola lift isn't working right now; it'll still be a while before I can fix it." You offer to help.`}),e.jsxs("p",{children:["The engineer explains that an engine part seems to be missing from the engine, but nobody can figure out which one. If you can"," ",e.jsx("strong",{children:"add up all the part numbers"})," in the engine schematic, it should be easy to work out which part is missing."]}),e.jsxs("p",{children:["The engine schematic (your puzzle input) consists of a visual representation of the engine. There are lots of numbers and symbols you don't really understand, but apparently ",e.jsx("strong",{children:"any number adjacent to a symbol"}),', even diagonally, is a "part number" and should be included in your sum. (Periods (.) do not count as a symbol.)']}),e.jsx("p",{children:"Here is an example engine schematic:"}),e.jsx(r,{content:`467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`}),e.jsxs("p",{children:["In this schematic, two numbers are ",e.jsx("strong",{children:"not"})," part numbers because they are not adjacent to a symbol: ",e.jsx("code",{children:"114"})," (top right) and ",e.jsx("code",{children:"58"})," ","(middle right). Every other number is adjacent to a symbol and so is a part number; their sum is"," ",e.jsx("strong",{children:e.jsx("code",{children:"4361"})}),"."]}),e.jsxs("p",{children:["Of course, the actual engine schematic is much larger.",e.jsx("strong",{children:"What is the sum of all of the part numbers in the engine schematic?"})]}),e.jsx(n,{hash:"part-1-solution",children:"Part 1 – Solution"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Extract numbers and their positions (start through stop coordinates) from the input"}),e.jsxs("li",{children:["Extract symbols (non-numeric and non-",e.jsx("code",{children:"."})," characters) and their positions (single coordinate)"]}),e.jsxs("li",{children:["For each number, check to see if the coordinates 1 position away contain a symbol",e.jsx("ul",{children:e.jsx("li",{children:'If so, add the number to the total and mark that number as "already found"'})})]})]}),e.jsx(t,{content:`from pathlib import Path

import pytest


def runner(document: list[str]) -> int:
    total = 0

    number_index: dict[int, int] = {}
    number_counter = 0

    number_map: dict[tuple[int, int], int] = {}

    symbol_coordinates: set[tuple[int, int]] = set()

    for line_index, line in enumerate(document):
        character_indexes: list[int] = []
        running_number = ""

        for character_index, character in enumerate(line.strip()):
            if character.isnumeric():
                character_indexes.append(character_index)
                running_number += character

            elif character == ".":
                if running_number:
                    for inner_character_index in character_indexes:
                        number_map[(line_index, inner_character_index)] = number_counter

                    number_index[number_counter] = int(running_number)
                    number_counter += 1

                running_number = ""
                character_indexes = []

            else:
                symbol_coordinates.add((line_index, character_index))

                if running_number:
                    for inner_character_index in character_indexes:
                        number_map[(line_index, inner_character_index)] = number_counter

                    number_index[number_counter] = int(running_number)
                    number_counter += 1

                running_number = ""
                character_indexes = []

        if running_number:
            for inner_character_index in character_indexes:
                number_map[(line_index, inner_character_index)] = number_counter

            number_index[number_counter] = int(running_number)
            number_counter += 1

    # Iterate over the number map
    # Check for any coordinates next to/diagnol from the the coordinate
    found_indexes: set[int] = set()

    for coordinate, index in number_map.items():
        number = number_index[index]

        for x in [-1, 0, 1]:
            if index in found_indexes:
                continue

            for y in [-1, 0, 1]:
                if index in found_indexes:
                    continue

                new_coordinate = (coordinate[0] + y, coordinate[1] + x)

                # Next to symbol
                if new_coordinate in symbol_coordinates:
                    found_indexes.add(index)
                    total += number

    return total


@pytest.mark.parametrize(
    "filename,total",
    [
        ("example-1.txt", 4361),
        ("example-2.txt", 512794),
    ],
)
def test_runner(filename: str, total: str) -> None:
    with open(Path(__file__).with_name(filename)) as file:
        result = runner(file.read().splitlines())

        assert result == total
`}),e.jsxs("p",{children:["Answer: ",e.jsx("code",{children:"512,794 "})]}),e.jsx(c,{}),e.jsx(n,{hash:"part-2-prompt",children:"Part 2 – Prompt"}),e.jsx("p",{children:"The engineer finds the missing part and installs it in the engine! As the engine springs to life, you jump in the closest gondola, finally ready to ascend to the water source."}),e.jsx("p",{children:`You don't seem to be going very fast, though. Maybe something is still wrong? Fortunately, the gondola has a phone labeled "help", so you pick it up and the engineer answers.`}),e.jsx("p",{children:"Before you can explain the situation, she suggests that you look out the window. There stands the engineer, holding a phone in one hand and waving with the other. You're going so slowly that you haven't even left the station. You exit the gondola."}),e.jsxs("p",{children:["The missing part wasn't the only issue - one of the gears in the engine is wrong. A"," ",e.jsx("strong",{children:"gear"})," is any ",e.jsx("code",{children:"*"})," symbol that is adjacent to"," ",e.jsx("strong",{children:"exactly two part numbers"}),". Its ",e.jsx("strong",{children:"gear ratio"})," is the result of multiplying those two numbers together."]}),e.jsx("p",{children:"This time, you need to find the gear ratio of every gear and add them all up so that the engineer can figure out which gear needs to be replaced."}),e.jsx("p",{children:"Consider the same engine schematic again:"}),e.jsx(r,{content:`467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`}),e.jsxs("p",{children:["In this schematic, there are ",e.jsx("strong",{children:"two"})," gears. The first is in the top left; it has part numbers ",e.jsx("code",{children:"467"})," and ",e.jsx("code",{children:"35"}),", so its gear ratio is"," ",e.jsx("code",{children:"16345"}),". The second gear is in the lower right; its gear ratio is"," ",e.jsx("code",{children:"451490"}),". (The ",e.jsx("code",{children:"*"})," adjacent to ",e.jsx("code",{children:"617"})," is"," ",e.jsx("strong",{children:"not"})," a gear because it is only adjacent to one part number.) Adding up all of the gear ratios produces"," ",e.jsx("strong",{children:e.jsx("code",{children:"467835"})}),"."]}),e.jsx("p",{children:e.jsx("strong",{children:"What is the sum of all of the gear ratios in your engine schematic?"})}),e.jsx(n,{hash:"part-2-solution",children:"Part 2 – Solution"}),e.jsx("p",{children:"This builds off of Part 1, but checks for coordinates around each gear for two numbers instead of coordinates around each number for a symbol."}),e.jsx("p",{children:"I misunderstood some of the requirements, so there's a few silly things in the presented solution that I didn't bother removing before I completed the problem."}),e.jsx(t,{content:`from pathlib import Path

import pytest


def runner(document: list[str]) -> int:
    total = 0

    number_index: dict[int, int] = {}
    number_counter = 0

    number_map: dict[tuple[int, int], int] = {}

    symbol_coordinates: dict[tuple[int, int], bool] = {}

    for line_index, line in enumerate(document):
        character_indexes: list[int] = []
        running_number = ""

        for character_index, character in enumerate(line.strip()):
            if character.isnumeric():
                character_indexes.append(character_index)
                running_number += character

            elif character == ".":
                if running_number:
                    for inner_character_index in character_indexes:
                        number_map[(line_index, inner_character_index)] = number_counter

                    number_index[number_counter] = int(running_number)
                    number_counter += 1

                running_number = ""
                character_indexes = []

            else:
                if character == "*":
                    symbol_coordinates[(line_index, character_index)] = True
                else:
                    symbol_coordinates[(line_index, character_index)] = False

                if running_number:
                    for inner_character_index in character_indexes:
                        number_map[(line_index, inner_character_index)] = number_counter

                    number_index[number_counter] = int(running_number)
                    number_counter += 1

                running_number = ""
                character_indexes = []

        if running_number:
            for inner_character_index in character_indexes:
                number_map[(line_index, inner_character_index)] = number_counter

            number_index[number_counter] = int(running_number)
            number_counter += 1

    # Check for gears
    found_indexes: set[int] = set()

    for coordinate, is_gear in symbol_coordinates.items():
        if not is_gear:
            continue

        gear_indexes: set[int] = set()

        for x in [-1, 0, 1]:
            for y in [-1, 0, 1]:
                new_coordinate = (coordinate[0] + y, coordinate[1] + x)

                if new_coordinate in number_map:
                    gear_indexes.add(number_map[new_coordinate])

        if len(gear_indexes) == 2:
            first = gear_indexes.pop()
            second = gear_indexes.pop()

            # Add to total
            total += number_index[first] * number_index[second]

            # Mark these as found
            found_indexes.add(first)
            found_indexes.add(second)

    return total


@pytest.mark.parametrize(
    "filename,total",
    [
        ("example-1.txt", 467835),
        ("example-2.txt", 67779080),
    ],
)
def test_runner(filename: str, total: str) -> None:
    with open(Path(__file__).with_name(filename)) as file:
        result = runner(file.read().splitlines())

        assert result == total
`}),e.jsxs("p",{children:["Answer: ",e.jsx("code",{children:"67,779,080"})]}),e.jsx(n,{hash:"recap",children:"Recap"}),e.jsxs(i,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Day"}),e.jsx("th",{children:"Part 1 Time"}),e.jsx("th",{children:"Part 1 Rank"}),e.jsx("th",{children:"Part 2 Time"}),e.jsx("th",{children:"Part 2 Rank"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"3"}),e.jsx("td",{children:"00:25:44"}),e.jsx("td",{children:"2,399"}),e.jsx("td",{children:"00:36:21"}),e.jsx("td",{children:"2,067"})]})})]}),e.jsx("p",{children:"This was actually a bit of a challenge! I'm pretty happy that I got a working solution (relatively) quickly, but... The code is pretty gross, it's pretty hard to understand without context, there's a handful of repeated sections, it's not particularly efficient."}),e.jsxs("p",{children:["The worst part was keeping track of whether or not I had added a number to the running total. I did this with the ",e.jsx("code",{children:"number_index"}),', which maps from "order of this number in the entire input" to "the actual number".']}),e.jsx("p",{children:"It's useful to think of the input string as a grid with coordinates."}),e.jsxs(i,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{}),e.jsx("th",{children:"x0"}),e.jsx("th",{children:"x1"}),e.jsx("th",{children:"x2"}),e.jsx("th",{children:"x3"}),e.jsx("th",{children:"x4"}),e.jsx("th",{children:"x5"}),e.jsx("th",{children:"x6"}),e.jsx("th",{children:"x7"}),e.jsx("th",{children:"x8"}),e.jsx("th",{children:"x9"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"y0"})}),e.jsx("td",{children:"4"}),e.jsx("td",{children:"6"}),e.jsx("td",{children:"7"}),e.jsx("td",{children:"."}),e.jsx("td",{children:"."}),e.jsx("td",{children:"1"}),e.jsx("td",{children:"1"}),e.jsx("td",{children:"4"}),e.jsx("td",{children:"."}),e.jsx("td",{children:"."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"y1"})}),e.jsx("td",{children:"."}),e.jsx("td",{children:"."}),e.jsx("td",{children:"."}),e.jsx("td",{children:"*"}),e.jsx("td",{children:"."}),e.jsx("td",{children:"."}),e.jsx("td",{children:"."}),e.jsx("td",{children:"."}),e.jsx("td",{children:"."}),e.jsx("td",{children:"."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"y2"})}),e.jsx("td",{children:"."}),e.jsx("td",{children:"."}),e.jsx("td",{children:"3"}),e.jsx("td",{children:"5"}),e.jsx("td",{children:"."}),e.jsx("td",{children:"."}),e.jsx("td",{children:"6"}),e.jsx("td",{children:"3"}),e.jsx("td",{children:"3"}),e.jsx("td",{children:"."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"y3"})}),e.jsx("td",{children:"."}),e.jsx("td",{children:"."}),e.jsx("td",{children:"."}),e.jsx("td",{children:"."}),e.jsx("td",{children:"."}),e.jsx("td",{children:"."}),e.jsx("td",{children:"#"}),e.jsx("td",{children:"."}),e.jsx("td",{children:"."}),e.jsx("td",{children:"."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"y4"})}),e.jsx("td",{children:"6"}),e.jsx("td",{children:"1"}),e.jsx("td",{children:"7"}),e.jsx("td",{children:"*"}),e.jsx("td",{children:"."}),e.jsx("td",{children:"."}),e.jsx("td",{children:"."}),e.jsx("td",{children:"."}),e.jsx("td",{children:"."}),e.jsx("td",{children:"."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"y5"})}),e.jsx("td",{children:"."}),e.jsx("td",{children:"."}),e.jsx("td",{children:"."}),e.jsx("td",{children:"."}),e.jsx("td",{children:"."}),e.jsx("td",{children:"+"}),e.jsx("td",{children:"."}),e.jsx("td",{children:"5"}),e.jsx("td",{children:"8"}),e.jsx("td",{children:"."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"y6"})}),e.jsx("td",{children:"."}),e.jsx("td",{children:"."}),e.jsx("td",{children:"5"}),e.jsx("td",{children:"9"}),e.jsx("td",{children:"2"}),e.jsx("td",{children:"."}),e.jsx("td",{children:"."}),e.jsx("td",{children:"."}),e.jsx("td",{children:"."}),e.jsx("td",{children:"."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"y7"})}),e.jsx("td",{children:"."}),e.jsx("td",{children:"."}),e.jsx("td",{children:"."}),e.jsx("td",{children:"."}),e.jsx("td",{children:"."}),e.jsx("td",{children:"."}),e.jsx("td",{children:"7"}),e.jsx("td",{children:"5"}),e.jsx("td",{children:"5"}),e.jsx("td",{children:"."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"y8"})}),e.jsx("td",{children:"."}),e.jsx("td",{children:"."}),e.jsx("td",{children:"."}),e.jsx("td",{children:"$"}),e.jsx("td",{children:"."}),e.jsx("td",{children:"*"}),e.jsx("td",{children:"."}),e.jsx("td",{children:"."}),e.jsx("td",{children:"."}),e.jsx("td",{children:"."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"y9"})}),e.jsx("td",{children:"."}),e.jsx("td",{children:"6"}),e.jsx("td",{children:"6"}),e.jsx("td",{children:"4"}),e.jsx("td",{children:"."}),e.jsx("td",{children:"5"}),e.jsx("td",{children:"9"}),e.jsx("td",{children:"8"}),e.jsx("td",{children:"."}),e.jsx("td",{children:"."})]})]})]}),e.jsxs("p",{children:["Let's say we want to check for numbers around ",e.jsx("code",{children:"(x3, y1)"})," (a gear). We need to check all coordinates adjacent and diagonal to ",e.jsx("code",{children:"(x3, y1)"}),", which we can do with a nested for loop, adding offsets to each coordinate component (-1, 0, and 1 for both the ",e.jsx("code",{children:"x"})," and ",e.jsx("code",{children:"y"})," axes). We'll find the"," ",e.jsx("code",{children:"7"})," of ",e.jsx("code",{children:"467"})," at ",e.jsx("code",{children:"(x2, y0)"})," first, which gives us the number ",e.jsx("code",{children:"467"})," (sorta). We'll also find ",e.jsx("code",{children:"3"})," of"," ",e.jsx("code",{children:"35"})," at ",e.jsx("code",{children:"(x2, y2)"})," and ",e.jsx("code",{children:"5"})," of ",e.jsx("code",{children:"35"})," at"," ",e.jsx("code",{children:"(x3, y2)"}),", which gives us the number ",e.jsx("code",{children:"35"})," (twice) (sorta)."]}),e.jsx("p",{children:"Instead of referencing each number as-is, we instead reference it through an index. This lets us differentiate between a gear next to two parts of a number (as in the example above) and a gear next to two separate but identical numbers. We do get the number eventually, but we work with the de-duplicated indexes first."})]})};export{_ as component};
