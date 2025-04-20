import{j as e,aW as o,I as t}from"./main-CV-jdQ_C.js";import{P as r,a as s}from"./code-block-BIvcJb77.js";import{B as a}from"./layout-BHv86BKp.js";import{H as n}from"./header-BtPm5KK-.js";import{T as l}from"./table-Dn-AaJC3.js";import{S as i}from"./separator-eCvJb-7k.js";import"./button-DiQvsG2T.js";const j=function(){return e.jsxs(e.Fragment,{children:[e.jsx(a,{to:o.fullPath}),e.jsx(n,{hash:"part-1-prompt",children:"Part 1 – Prompt"}),e.jsxs("p",{children:["Thanks to your efforts, the machine parts factory is one of the first factories up and running since the lavafall came back. However, to catch up with the large backlog of parts requests, the factory will also need a"," ",e.jsx("strong",{children:"large supply of lava"})," for a while; the Elves have already started creating a large lagoon nearby for this purpose."]}),e.jsxs("p",{children:["However, they aren't sure the lagoon will be big enough; they've asked you to take a look at the ",e.jsx("strong",{children:"dig plan"})," (your puzzle input). For example:"]}),e.jsx(r,{content:`R 6 (#70c710)
D 5 (#0dc571)
L 2 (#5713f0)
D 2 (#d2c081)
R 2 (#59c680)
D 2 (#411b91)
L 5 (#8ceee2)
U 2 (#caa173)
L 1 (#1b58a2)
U 2 (#caa171)
R 2 (#7807d2)
U 3 (#a77fa3)
L 2 (#015232)
U 2 (#7a21e3)`}),e.jsxs("p",{children:["The digger starts in a 1 meter cube hole in the ground. They then dig the specified number of meters ",e.jsx("strong",{children:"up"})," (",e.jsx("code",{children:"U"}),"), ",e.jsx("strong",{children:"down"})," (",e.jsx("code",{children:"D"}),"), ",e.jsx("strong",{children:"left"})," (",e.jsx("code",{children:"L"}),"), or ",e.jsx("strong",{children:"right"})," (",e.jsx("code",{children:"R"}),'), clearing full 1 meter cubes as they go. The directions are given as seen from above, so if "up" were north, then "right" would be east, and so on. Each trench is also listed with'," ",e.jsx("strong",{children:"the color that the edge of the trench should be painted"})," as an RGB hexadecimal color code."]}),e.jsxs("p",{children:["When viewed from above, the above example dig plan would result in the following loop of ",e.jsx("strong",{children:"trench"})," (",e.jsx("code",{children:"#"}),") having been dug out from otherwise"," ",e.jsx("strong",{children:"ground-level terrain"})," (",e.jsx("code",{children:"."}),"):"]}),e.jsx(r,{content:`#######
#.....#
###...#
..#...#
..#...#
###.###
#...#..
##..###
.#....#
.######`}),e.jsxs("p",{children:["At this point, the trench could contain 38 cubic meters of lava. However, this is just the edge of the lagoon; the next step is to"," ",e.jsx("strong",{children:"dig out the interior"})," so that it is one meter deep as well:"]}),e.jsx(r,{content:`#######
#######
#######
..#####
..#####
#######
#####..
#######
.######
.######`}),e.jsxs("p",{children:["Now, the lagoon can contain a much more respectable"," ",e.jsx("strong",{children:e.jsx("code",{children:"62"})})," ","cubic meters of lava. While the interior is dug out, the edges are also painted according to the color codes in the dig plan."]}),e.jsxs("p",{children:["The Elves are concerned the lagoon won't be large enough; if they follow their dig plan, ",e.jsx("strong",{children:"how many cubic meters of lava could it hold?"})]}),e.jsx(n,{hash:"part-1-solution",children:"Part 1 – Solution"}),e.jsx("p",{children:'Iterate over directions and add each new point to a path, updating the "current" point as we go.'}),e.jsxs("p",{children:["Once we have the path, calculating the enclosed area can be found using the"," ",e.jsx("a",{href:"https://numpy.org/doc/stable/reference/generated/numpy.trapz.html",target:"_blank",children:e.jsx("code",{children:"np.trapz"})})," ","function. This function doesn't include the permiter, so we have to account for that ourselves."]}),e.jsxs("p",{children:["Wondering why we take ",e.jsx("code",{children:"half_permiter"})," and ",e.jsx("code",{children:"+1"})," into account for the area calculation? See the visualization below."]}),e.jsx(s,{content:`from dataclasses import dataclass
from pathlib import Path

import numpy as np
import pytest


@dataclass(frozen=True)
class Coordinate:
    x: int
    y: int

    def __repr__(self) -> str:
        return f"x: {self.x}, y: {self.y}"


OFFSET: dict[str, tuple[int, int]] = {
    "R": (1, 0),
    "L": (-1, 0),
    "U": (0, -1),
    "D": (0, 1),
}


@dataclass
class BigGrid:
    current: Coordinate
    path: list[Coordinate]

    half_perimiter: int = 0

    @property
    def enclosed_area(self) -> int:
        x_coordinates = [position.x for position in self.path[:-1]]
        y_coordinates = [position.y for position in self.path[:-1]]

        # Calculates the area within
        area = abs(np.trapezoid(y_coordinates, x=x_coordinates))

        return area + self.half_perimiter + 1

    def move(self, x: int, y: int) -> None:
        # One of these is always zero, just add both
        self.half_perimiter += (abs(x) + abs(y)) / 2

        self.current = Coordinate(
            x=self.current.x + x,
            y=self.current.y + y,
        )
        self.path.append(self.current)


def runner(document: list[str]) -> int:
    grid = BigGrid(
        current=Coordinate(x=0, y=0),
        path=[Coordinate(x=0, y=0)],
    )

    for line in document:
        direction, distance, _ = line.split(" ")

        x_offset, y_offset = OFFSET[direction]
        grid.move(x_offset * int(distance), y_offset * int(distance))

    return grid.enclosed_area


@pytest.mark.parametrize(
    "filename,output",
    [
        ("example-1.txt", 62),
        ("example-2.txt", 48795),
    ],
)
def test_runner(filename: str, output: int) -> None:
    with open(Path(__file__).with_name(filename)) as file:
        result = runner(file.read().splitlines())

        assert result == output
`}),e.jsxs("p",{children:["Answer: ",e.jsx("code",{children:"48,795"})]}),e.jsx(i,{}),e.jsx(n,{hash:"part-2-prompt",children:"Part 2 – Prompt"}),e.jsxs("p",{children:["The Elves were right to be concerned; the planned lagoon would be"," ",e.jsx("strong",{children:"much too small"}),"."]}),e.jsxs("p",{children:["After a few minutes, someone realizes what happened; someone"," ",e.jsx("strong",{children:"swapped the color and instruction parameters"})," when producing the dig plan. They don't have time to fix the bug; one of them asks if you can"," ",e.jsx("strong",{children:"extract the correct instructions"})," from the hexadecimal codes."]}),e.jsxs("p",{children:["Each hexadecimal code is ",e.jsx("strong",{children:"six hexadecimal digits"})," long. The first five hexadecimal digits encode the ",e.jsx("strong",{children:"distance in meters"})," as a five-digit hexadecimal number. The last hexadecimal digit encodes the** direction to dig**: ",e.jsx("code",{children:"0"})," means ",e.jsx("code",{children:"R"}),", ",e.jsx("code",{children:"1"})," means ",e.jsx("code",{children:"D"}),","," ",e.jsx("code",{children:"2"})," means ",e.jsx("code",{children:"L"}),", and ",e.jsx("code",{children:"3"})," means ",e.jsx("code",{children:"U"}),"."]}),e.jsx("p",{children:"So, in the above example, the hexadecimal codes can be converted into the true instructions:"}),e.jsx(r,{content:`#70c710 = R 461937
#0dc571 = D 56407
#5713f0 = R 356671
#d2c081 = D 863240
#59c680 = R 367720
#411b91 = D 266681
#8ceee2 = L 577262
#caa173 = U 829975
#1b58a2 = L 112010
#caa171 = D 829975
#7807d2 = L 491645
#a77fa3 = U 686074
#015232 = L 5411
#7a21e3 = U 500254`}),e.jsxs("p",{children:["Digging out this loop and its interior produces a lagoon that can hold an impressive"," ",e.jsx("strong",{children:e.jsx("code",{children:"952408144115"})})," ","cubic meters of lava."]}),e.jsxs("p",{children:["Convert the hexadecimal color codes into the correct instructions; if the Elves follow this new dig plan,"," ",e.jsx("strong",{children:"how many cubic meters of lava could the lagoon hold?"})]}),e.jsx(n,{hash:"part-2-solution",children:"Part 2 – Solution"}),e.jsx("p",{children:"Exact same as Part 1, but convert the hex codes into directions."}),e.jsxs("p",{children:["Wondering why we take ",e.jsx("code",{children:"half_permiter"})," and ",e.jsx("code",{children:"+1"})," into account for the area calculation? See the visualization below."]}),e.jsx(s,{content:`from dataclasses import dataclass
from pathlib import Path

import numpy as np
import pytest


@dataclass(frozen=True)
class Coordinate:
    x: int
    y: int

    def __repr__(self) -> str:
        return f"x: {self.x}, y: {self.y}"


OFFSET: dict[str, tuple[int, int]] = {
    "R": (1, 0),
    "L": (-1, 0),
    "U": (0, -1),
    "D": (0, 1),
}


@dataclass
class BigGrid:
    current: Coordinate
    path: list[Coordinate]

    half_perimiter: int = 0

    @property
    def enclosed_area(self) -> int:
        x_coordinates = [position.x for position in self.path[:-1]]
        y_coordinates = [position.y for position in self.path[:-1]]

        # Calculates the area within
        area = abs(np.trapezoid(y_coordinates, x=x_coordinates))

        return area + self.half_perimiter + 1

    def move(self, x: int, y: int) -> None:
        # One of these is always zero, just add both
        self.half_perimiter += (abs(x) + abs(y)) / 2

        self.current = Coordinate(
            x=self.current.x + x,
            y=self.current.y + y,
        )
        self.path.append(self.current)


def runner(document: list[str]) -> int:
    grid = BigGrid(
        current=Coordinate(x=0, y=0),
        path=[Coordinate(x=0, y=0)],
    )

    direction_map: dict[str, str] = {
        "0": "R",
        "1": "D",
        "2": "L",
        "3": "U",
    }

    for line in document:
        _, __, color = line.split(" ")

        # Convert from hex to decimal
        distance = int(color[2:7], 16)
        direction = direction_map[color[7]]

        x_offset, y_offset = OFFSET[direction]
        grid.move(x_offset * distance, y_offset * distance)

    return grid.enclosed_area


@pytest.mark.parametrize(
    "filename,output",
    [
        ("example-1.txt", 952408144115),
        ("example-2.txt", 40654918441248),
    ],
)
def test_runner(filename: str, output: int) -> None:
    with open(Path(__file__).with_name(filename)) as file:
        result = runner(file.read().splitlines())

        assert result == output
`}),e.jsxs("p",{children:["Answer: ",e.jsx("code",{children:"40,654,918,441,248"})]}),e.jsx(i,{}),e.jsx(n,{hash:"recap",children:"Recap"}),e.jsxs(l,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Day"}),e.jsx("th",{children:"Part 1 Time"}),e.jsx("th",{children:"Part 1 Rank"}),e.jsx("th",{children:"Part 2 Time"}),e.jsx("th",{children:"Part 2 Rank"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"18"}),e.jsx("td",{children:"00:34:46"}),e.jsx("td",{children:"1,918"}),e.jsx("td",{children:"01:17:50"}),e.jsx("td",{children:"1,583"})]})})]}),e.jsx("p",{children:'My initial solution for Part 1 was nearly identical to my Day 10 (Pipe Maze) solution. I used flood-fill to fill up the interior space and I counted the "enclosed" tiles. This worked for the both the real and example input.'}),e.jsx("p",{children:"Part 2 has directions that make the path multiple orders of magnitude longer (and the enclosed area multiple orders of magnitude larger). Flood-fill obviously wouldn't work here."}),e.jsxs("p",{children:["Wondering why we take ",e.jsx("code",{children:"half_permiter"})," and ",e.jsx("code",{children:"+1"})," into account for the area calculation? See below."]}),e.jsx(n,{hash:"visualizations",children:"Visualization"}),e.jsx("h3",{children:"Step 1"}),e.jsxs("p",{children:["Lets say we have this path. The top-left tile is ",e.jsx("code",{children:"(1, 1)"}),". However, that position ",e.jsx("code",{children:"(1, 1)"})," is in the ",e.jsx("strong",{children:"center"})," of the tile."]}),e.jsx(t,{src:"/blog/advent-of-code/2023/day-18/path-1.png",alt:"Example Path"}),e.jsx("h3",{children:"Step 2"}),e.jsxs("p",{children:["When we use ",e.jsx("code",{children:"np.trapz"})," to calculate the enclosed area, it's calculating the area using the ",e.jsx("strong",{children:"center points"})," of each tile in the path."]}),e.jsxs("p",{children:["If we divide the grid by 2x in each direction, we can see how the"," ",e.jsx("strong",{children:"green"})," area is enclosed by the ",e.jsx("strong",{children:"center points"})," of each path tile."]}),e.jsx(t,{src:"/blog/advent-of-code/2023/day-18/path-2.png",alt:"Example Path with Enclosed Area"}),e.jsx("h3",{children:"Step 3"}),e.jsxs("p",{children:["However, this misses part of area covered by ",e.jsx("strong",{children:"the path itself"}),". It looks like ~half of the path is inside of the enclosed area, so we'll start with that."]}),e.jsxs("p",{children:["Let's look at the grid with the ",e.jsx("strong",{children:"top half"})," of each path tile highlighted in ",e.jsx("strong",{children:"pink"}),"."]}),e.jsx(t,{src:"/blog/advent-of-code/2023/day-18/path-3.png",alt:"Example Path with Highlighted Half-Tiles"}),e.jsx("h3",{children:"Step 4"}),e.jsxs("p",{children:["Many of these sub-tiles are obviously within the ",e.jsx("strong",{children:"enclosed"})," area, so let's highlight those in ",e.jsx("strong",{children:"orange"}),"."]}),e.jsx(t,{src:"/blog/advent-of-code/2023/day-18/path-4.png",alt:"Example Path with Highlighted Half-Tiles"}),e.jsx("h3",{children:"Step 5"}),e.jsxs("p",{children:["Let's move these sub-tiles to the path, covering sub-tiles that"," ",e.jsx("strong",{children:"aren't enclosed"}),"."]}),e.jsx(t,{src:"/blog/advent-of-code/2023/day-18/path-5.png",alt:"Example Path with Moved Half-Tiles"}),e.jsx("h3",{children:"Step 6"}),e.jsxs("p",{children:["This leaves us with all of the ",e.jsx("strong",{children:"green"})," tiles in the"," ",e.jsx("strong",{children:"enclosed"})," section (calculated by ",e.jsx("code",{children:"np.trapz"}),"),",e.jsx("strong",{children:"pink"})," and ",e.jsx("strong",{children:"orange"})," sub-tiles covering"," ",e.jsx("strong",{children:"half of the permiter"}),", and ",e.jsx("strong",{children:"four purple"})," sub-tiles representing corners that weren't counted."]}),e.jsxs("p",{children:["The ",e.jsx("strong",{children:"four purple"})," sub-tiles make a full tile, hence the"," ",e.jsx("code",{children:"+1"}),"."]}),e.jsxs("p",{children:["We will always end up with ",e.jsx("strong",{children:"four purple"})," sub-tiles that weren't counted, regardless of the path."]}),e.jsxs("p",{children:["The final calculation is ",e.jsx("code",{children:"np.trapz(...) + half_perimiter + 1"}),"."]}),e.jsx(t,{src:"/blog/advent-of-code/2023/day-18/path-6.png",alt:"Example Path with Final Positions"})]})};export{j as component};
