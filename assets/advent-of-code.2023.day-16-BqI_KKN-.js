import{j as e,a_ as r}from"./main-6CusI5Kr.js";import{P as i,a as t}from"./code-block-DJuaFDsd.js";import{B as a}from"./layout-DPQIvm_h.js";import{H as n}from"./header-B42DZ3GE.js";import{T as d}from"./table-BieFWCaC.js";import{S as o}from"./separator-S9MOKPTH.js";import"./button-DBE4koem.js";const f=function(){return e.jsxs(e.Fragment,{children:[e.jsx(a,{to:r.fullPath}),e.jsx(n,{hash:"part-1-prompt",children:"Part 1 – Prompt"}),e.jsxs("p",{children:["With the beam of light completely focused ",e.jsx("strong",{children:"somewhere"}),", the reindeer leads you deeper still into the Lava Production Facility. At some point, you realize that the steel facility walls have been replaced with cave, and the doorways are just cave, and the floor is cave, and you're pretty sure this is actually just a giant cave."]}),e.jsx("p",{children:"Finally, as you approach what must be the heart of the mountain, you see a bright light in a cavern up ahead. There, you discover that the beam of light you so carefully focused is emerging from the cavern wall closest to the facility and pouring all of its energy into a contraption on the opposite side."}),e.jsxs("p",{children:["Upon closer inspection, the contraption appears to be a flat, two-dimensional square grid containing ",e.jsx("strong",{children:"empty space"})," (",e.jsx("code",{children:"."}),"),"," ",e.jsx("strong",{children:"mirrors"})," (",e.jsx("code",{children:"/"})," and ",e.jsx("code",{children:"\\"}),"), and"," ",e.jsx("strong",{children:"splitters"})," (",e.jsx("code",{children:"|"})," and ",e.jsx("code",{children:"-"}),")."]}),e.jsxs("p",{children:["The contraption is aligned so that most of the beam bounces around the grid, but each tile on the grid converts some of the beam's light into ",e.jsx("strong",{children:"heat"})," ","to melt the rock in the cavern."]}),e.jsx("p",{children:"You note the layout of the contraption (your puzzle input). For example:"}),e.jsx(i,{content:`.|...\\....
|.-.\\.....
.....|-...
........|.
..........
.........\\
..../.\\\\..
.-.-/..|..
.|....-|.\\
..//.|....`}),e.jsx("p",{children:"The beam enters in the top-left corner from the left and heading to the right. Then, its behavior depends on what it encounters as it moves:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["If the beam encounters ",e.jsx("strong",{children:"empty space"})," (",e.jsx("code",{children:"."}),"), it continues in the same direction."]}),e.jsxs("li",{children:["If the beam encounters a ",e.jsx("strong",{children:"mirror"})," (",e.jsx("code",{children:"/"})," or"," ",e.jsx("code",{children:"\\"}),"), the beam is ",e.jsx("strong",{children:"reflected"})," 90 degrees depending on the angle of the mirror. For instance, a rightward-moving beam that encounters a"," ",e.jsx("code",{children:"/"})," mirror would continue ",e.jsx("strong",{children:"upward"})," in the mirror's column, while a rightward-moving beam that encounters a ",e.jsx("code",{children:"\\"})," mirror would continue ",e.jsx("strong",{children:"downward"})," from the mirror's column."]}),e.jsxs("li",{children:["If the beam encounters the ",e.jsx("strong",{children:"pointy end of a splitter"})," (",e.jsx("code",{children:"|"})," or ",e.jsx("code",{children:"-"}),"), the beam passes through the splitter as if the splitter were ",e.jsx("strong",{children:"empty space"}),". For instance, a rightward-moving beam that encounters a ",e.jsx("code",{children:"-"})," splitter would continue in the same direction."]}),e.jsxs("li",{children:["If the beam encounters the ",e.jsx("strong",{children:"flat side of a splitter"})," (",e.jsx("code",{children:"|"})," or ",e.jsx("code",{children:"-"}),"), the beam is"," ",e.jsx("strong",{children:"split into two beams"})," going in each of the two directions the splitter's pointy ends are pointing. For instance, a rightward-moving beam that encounters a ",e.jsx("code",{children:"|"})," splitter would split into two beams: one that continues ",e.jsx("strong",{children:"upward"})," from the splitter's column and one that continues ",e.jsx("strong",{children:"downward"})," from the splitter's column."]})]}),e.jsxs("p",{children:["Beams do not interact with other beams; a tile can have many beams passing through it at the same time. A tile is ",e.jsx("strong",{children:"energized"})," if that tile has at least one beam pass through it, reflect in it, or split in it."]}),e.jsx("p",{children:"In the above example, here is how the beam of light bounces around the contraption:"}),e.jsx(i,{content:`>|<<<\\....
|v-.\\^....
.v...|->>>
.v...v^.|.
.v...v^...
.v...v^..\\
.v../2\\\\..
<->-/vv|..
.|<<<2-|.\\
.v//.|.v..`}),e.jsxs("p",{children:["Beams are only shown on empty tiles; arrows indicate the direction of the beams. If a tile contains beams moving in multiple directions, the number of distinct directions is shown instead. Here is the same diagram but instead only showing whether a tile is ",e.jsx("strong",{children:"energized"})," (",e.jsx("code",{children:"#"}),") or not (",e.jsx("code",{children:"."}),"):"]}),e.jsx(i,{content:`######....
.#...#....
.#...#####
.#...##...
.#...##...
.#...##...
.#..####..
########..
.#######..
.#...#.#..
`}),e.jsxs("p",{children:["Ultimately, in this example,"," ",e.jsx("strong",{children:e.jsx("code",{children:"46"})})," ","tiles become ",e.jsx("strong",{children:"energized"}),"."]}),e.jsxs("p",{children:["The light isn't energizing enough tiles to produce lava; to debug the contraption, you need to start by analyzing the current situation. With the beam starting in the top-left heading right, ",e.jsx("strong",{children:"how many tiles end up being energized?"})]}),e.jsx(n,{hash:"part-1-solution",children:"Part 1 – Solution"}),e.jsx("p",{children:"Basically, just gotta keep track of..."}),e.jsxs("ul",{children:[e.jsx("li",{children:"All of the tiles that have been energized"}),e.jsx("li",{children:"All of the beams (the first beam splits almost immediately)"})]}),e.jsxs("p",{children:["Each beam requires you keeping track of it's position and direction. The direction of the beam can when it lands on a non-empty (",e.jsx("code",{children:"."}),") tile."]}),e.jsx("p",{children:"I chose to keep track of beams in a coordinate-grid of beams instead of putting position information on the beams themselves."}),e.jsx(t,{content:`from dataclasses import dataclass, field
from pathlib import Path
from typing import Literal

import pytest


@dataclass(frozen=True)
class Coordinate:
    x: int
    y: int


@dataclass(frozen=True)
class Beam:
    x_direction: Literal[-1, 0, 1]
    y_direction: Literal[-1, 0, 1]

    def __post_init__(self) -> None:
        assert abs(self.x_direction) != abs(self.y_direction)


def default_beam_grid() -> dict[Coordinate, list[Beam]]:
    return {
        Coordinate(x=0, y=0): [
            Beam(
                x_direction=1,
                y_direction=0,
            )
        ]
    }


def default_energized_grid() -> dict[Coordinate, set[Beam]]:
    return {Coordinate(x=0, y=0): set()}


@dataclass
class Grid:
    grid: dict[Coordinate, str] = field(default_factory=dict)
    beam_grid: dict[Coordinate, list[Beam]] = field(default_factory=default_beam_grid)
    energized_grid: dict[Coordinate, set[Beam]] = field(
        default_factory=default_energized_grid
    )

    max_x: int = 0
    max_y: int = 0

    def add_coordinate(self, *, x: int, y: int, character: str) -> None:
        self.max_x = max(self.max_x, x + 1)
        self.max_y = max(self.max_y, y + 1)

        self.grid[Coordinate(x=x, y=y)] = character

    def start(self, coordinate: Coordinate, beam: Beam) -> None:
        self.beam_grid = {coordinate: [beam]}
        self.energized_grid = {coordinate: set()}

    def step(self) -> None:
        new_beam_grid: dict[Coordinate, list[Beam]] = {}

        for coordinate, beams in self.beam_grid.items():
            if not beams:
                # No beams left in coordinate, just skip
                continue

            if coordinate not in self.grid:
                # Coordinate outside of the grid?
                # Beam has left the grid and can no longer return
                continue

            for beam in beams:
                if self.grid[coordinate] == ".":
                    # Move the beam in the direction it was going
                    new_coordinate = Coordinate(
                        x=coordinate.x + beam.x_direction,
                        y=coordinate.y + beam.y_direction,
                    )

                    if new_coordinate not in new_beam_grid:
                        new_beam_grid[new_coordinate] = []

                    new_beam_grid[new_coordinate].append(beam)

                elif self.grid[coordinate] == "|":
                    if beam.y_direction in [-1, 1]:
                        # Keep the beam moving
                        new_coordinate = Coordinate(
                            x=coordinate.x + beam.x_direction,
                            y=coordinate.y + beam.y_direction,
                        )

                        if new_coordinate not in new_beam_grid:
                            new_beam_grid[new_coordinate] = []

                        new_beam_grid[new_coordinate].append(beam)

                    elif beam.x_direction in [-1, 1]:
                        # Split the beam to go up
                        new_coordinate_up = Coordinate(
                            x=coordinate.x,
                            y=coordinate.y - 1,
                        )

                        if new_coordinate_up not in new_beam_grid:
                            new_beam_grid[new_coordinate_up] = []

                        new_beam_grid[new_coordinate_up].append(
                            Beam(
                                x_direction=0,
                                y_direction=-1,
                            )
                        )

                        # Split the beam to go down
                        new_coordinate_down = Coordinate(
                            x=coordinate.x,
                            y=coordinate.y + 1,
                        )

                        if new_coordinate_down not in new_beam_grid:
                            new_beam_grid[new_coordinate_down] = []

                        new_beam_grid[new_coordinate_down].append(
                            Beam(
                                x_direction=0,
                                y_direction=1,
                            )
                        )

                elif self.grid[coordinate] == "-":
                    if beam.x_direction in [-1, 1]:
                        # Keep the beam moving
                        new_coordinate = Coordinate(
                            x=coordinate.x + beam.x_direction,
                            y=coordinate.y + beam.y_direction,
                        )

                        if new_coordinate not in new_beam_grid:
                            new_beam_grid[new_coordinate] = []

                        new_beam_grid[new_coordinate].append(beam)

                    elif beam.y_direction in [-1, 1]:
                        # Split the beam to go left
                        new_coordinate_up = Coordinate(
                            x=coordinate.x - 1,
                            y=coordinate.y,
                        )

                        if new_coordinate_up not in new_beam_grid:
                            new_beam_grid[new_coordinate_up] = []

                        new_beam_grid[new_coordinate_up].append(
                            Beam(
                                x_direction=-1,
                                y_direction=0,
                            )
                        )

                        # Split the beam to go right
                        new_coordinate_down = Coordinate(
                            x=coordinate.x + 1,
                            y=coordinate.y,
                        )

                        if new_coordinate_down not in new_beam_grid:
                            new_beam_grid[new_coordinate_down] = []

                        new_beam_grid[new_coordinate_down].append(
                            Beam(
                                x_direction=1,
                                y_direction=0,
                            )
                        )

                elif self.grid[coordinate] == "/":
                    if beam.x_direction == 1:
                        # Move the beam up
                        new_coordinate = Coordinate(
                            x=coordinate.x,
                            y=coordinate.y - 1,
                        )

                        if new_coordinate not in new_beam_grid:
                            new_beam_grid[new_coordinate] = []

                        new_beam_grid[new_coordinate].append(
                            Beam(
                                x_direction=0,
                                y_direction=-1,
                            )
                        )

                    elif beam.x_direction == -1:
                        # Move the beam down
                        new_coordinate = Coordinate(
                            x=coordinate.x,
                            y=coordinate.y + 1,
                        )

                        if new_coordinate not in new_beam_grid:
                            new_beam_grid[new_coordinate] = []

                        new_beam_grid[new_coordinate].append(
                            Beam(
                                x_direction=0,
                                y_direction=1,
                            )
                        )

                    elif beam.y_direction == 1:
                        # Move the beam left
                        new_coordinate = Coordinate(
                            x=coordinate.x - 1,
                            y=coordinate.y,
                        )

                        if new_coordinate not in new_beam_grid:
                            new_beam_grid[new_coordinate] = []

                        new_beam_grid[new_coordinate].append(
                            Beam(
                                x_direction=-1,
                                y_direction=0,
                            )
                        )

                    elif beam.y_direction == -1:
                        # Move the beam right
                        new_coordinate = Coordinate(
                            x=coordinate.x + 1,
                            y=coordinate.y,
                        )

                        if new_coordinate not in new_beam_grid:
                            new_beam_grid[new_coordinate] = []

                        new_beam_grid[new_coordinate].append(
                            Beam(
                                x_direction=1,
                                y_direction=0,
                            )
                        )

                elif self.grid[coordinate] == "\\\\":
                    if beam.x_direction == 1:
                        # Move the beam down
                        new_coordinate = Coordinate(
                            x=coordinate.x,
                            y=coordinate.y + 1,
                        )

                        if new_coordinate not in new_beam_grid:
                            new_beam_grid[new_coordinate] = []

                        new_beam_grid[new_coordinate].append(
                            Beam(
                                x_direction=0,
                                y_direction=1,
                            )
                        )

                    elif beam.x_direction == -1:
                        # Move the beam up
                        new_coordinate = Coordinate(
                            x=coordinate.x,
                            y=coordinate.y - 1,
                        )

                        if new_coordinate not in new_beam_grid:
                            new_beam_grid[new_coordinate] = []

                        new_beam_grid[new_coordinate].append(
                            Beam(
                                x_direction=0,
                                y_direction=-1,
                            )
                        )

                    elif beam.y_direction == 1:
                        # Move the beam right
                        new_coordinate = Coordinate(
                            x=coordinate.x + 1,
                            y=coordinate.y,
                        )

                        if new_coordinate not in new_beam_grid:
                            new_beam_grid[new_coordinate] = []

                        new_beam_grid[new_coordinate].append(
                            Beam(
                                x_direction=1,
                                y_direction=0,
                            )
                        )

                    elif beam.y_direction == -1:
                        # Move the beam left
                        new_coordinate = Coordinate(
                            x=coordinate.x - 1,
                            y=coordinate.y,
                        )

                        if new_coordinate not in new_beam_grid:
                            new_beam_grid[new_coordinate] = []

                        new_beam_grid[new_coordinate].append(
                            Beam(
                                x_direction=-1,
                                y_direction=0,
                            )
                        )

        # If we've seen this beam at this coordinate in the energized grid, remove it
        cleaned_beam_grid: dict[Coordinate, list[Beam]] = {}

        for coordinate, beams in new_beam_grid.items():
            cleaned_beam_grid[coordinate] = []

            if coordinate in self.energized_grid:
                for beam in beams:
                    if beam in self.energized_grid[coordinate]:
                        pass

                    else:
                        self.energized_grid[coordinate].add(beam)
                        cleaned_beam_grid[coordinate].append(beam)

            elif coordinate in self.grid:
                if coordinate not in self.energized_grid:
                    self.energized_grid[coordinate] = set()

                self.energized_grid[coordinate].update(set(beams))
                cleaned_beam_grid[coordinate] = beams

        self.beam_grid = cleaned_beam_grid

    def count_energized(self) -> int:
        count = 0

        for coordinate in self.grid:
            if coordinate in self.energized_grid:
                count += 1

        return count


def runner(document: list[str]) -> int:
    grid = Grid()

    for y_index, line in enumerate(document):
        for x_index, character in enumerate(line):
            grid.add_coordinate(x=x_index, y=y_index, character=character)

    grid.start(Coordinate(x=0, y=0), Beam(x_direction=1, y_direction=0))

    while grid.beam_grid:
        grid.step()

    return grid.count_energized()


@pytest.mark.parametrize(
    "filename,output",
    [
        ("example-1.txt", 46),
        ("example-2.txt", 3),
        ("example-3.txt", 3),
        ("example-4.txt", 2),
        ("example-5.txt", 2),
        ("example-6.txt", 4),
        ("example-7.txt", 41),
        ("example-8.txt", 31),
        ("example-9.txt", 7543),
    ],
)
def test_runner(filename: str, output: int) -> None:
    with open(Path(__file__).with_name(filename)) as file:
        result = runner(file.read().splitlines())

        assert result == output
`}),e.jsxs("p",{children:["Answer: ",e.jsx("code",{children:"7,543"})]}),e.jsx(o,{}),e.jsx(n,{hash:"part-2-prompt",children:"Part 2 – Prompt"}),e.jsxs("p",{children:["As you try to work out what might be wrong, the reindeer tugs on your shirt and leads you to a nearby control panel. There, a collection of buttons lets you align the contraption so that the beam enters from ",e.jsx("strong",{children:"any edge tile"})," and heading away from that edge. (You can choose either of two directions for the beam if it starts on a corner; for instance, if the beam starts in the bottom-right corner, it can start heading either left or upward.)"]}),e.jsxs("p",{children:["So, the beam could start on any tile in the top row (heading downward), any tile in the bottom row (heading upward), any tile in the leftmost column (heading right), or any tile in the rightmost column (heading left). To produce lava, you need to find the configuration that ",e.jsx("strong",{children:"energizes as many tiles as possible"}),"."]}),e.jsx("p",{children:"In the above example, this can be achieved by starting the beam in the fourth tile from the left in the top row:"}),e.jsx(i,{content:`.|<2<\\....
|v-v\\^....
.v.v.|->>>
.v.v.v^.|.
.v.v.v^...
.v.v.v^..\\
.v.v/2\\\\..
<-2-/vv|..
.|<<<2-|.\\
.v//.|.v..`}),e.jsxs("p",{children:["Using this configuration,"," ",e.jsx("strong",{children:e.jsx("code",{children:"51"})})," ","tiles are energized:"]}),e.jsx(i,{content:`.#####....
.#.#.#....
.#.#.#####
.#.#.##...
.#.#.##...
.#.#.##...
.#.#####..
########..
.#######..
.#...#.#..`}),e.jsxs("p",{children:["Find the initial beam configuration that energizes the largest number of tiles;"," ",e.jsx("strong",{children:"how many tiles are energized in that configuration?"})]}),e.jsx(n,{hash:"part-2-solution",children:"Part 2 – Solution"}),e.jsx("p",{children:"Identical solution to Part 1, but check energized counts for starting at each edge tile."}),e.jsx(t,{content:`from dataclasses import dataclass, field
from pathlib import Path
from typing import Literal

import pytest


@dataclass(frozen=True)
class Coordinate:
    x: int
    y: int


@dataclass(frozen=True)
class Beam:
    x_direction: Literal[-1, 0, 1]
    y_direction: Literal[-1, 0, 1]

    def __post_init__(self) -> None:
        assert abs(self.x_direction) != abs(self.y_direction)


def default_beam_grid() -> dict[Coordinate, list[Beam]]:
    return {
        Coordinate(x=0, y=0): [
            Beam(
                x_direction=1,
                y_direction=0,
            )
        ]
    }


def default_energized_grid() -> dict[Coordinate, set[Beam]]:
    return {Coordinate(x=0, y=0): set()}


@dataclass
class Grid:
    grid: dict[Coordinate, str] = field(default_factory=dict)
    beam_grid: dict[Coordinate, list[Beam]] = field(default_factory=default_beam_grid)
    energized_grid: dict[Coordinate, set[Beam]] = field(
        default_factory=default_energized_grid
    )

    max_x: int = 0
    max_y: int = 0

    def add_coordinate(self, *, x: int, y: int, character: str) -> None:
        self.max_x = max(self.max_x, x + 1)
        self.max_y = max(self.max_y, y + 1)

        self.grid[Coordinate(x=x, y=y)] = character

    def start(self, coordinate: Coordinate, beam: Beam) -> None:
        self.beam_grid = {coordinate: [beam]}
        self.energized_grid = {coordinate: set()}

    def step(self) -> None:
        new_beam_grid: dict[Coordinate, list[Beam]] = {}

        for coordinate, beams in self.beam_grid.items():
            if not beams:
                # No beams left in coordinate, just skip
                continue

            if coordinate not in self.grid:
                # Coordinate outside of the grid?
                # Beam has left the grid and can no longer return
                continue

            for beam in beams:
                if self.grid[coordinate] == ".":
                    # Move the beam in the direction it was going
                    new_coordinate = Coordinate(
                        x=coordinate.x + beam.x_direction,
                        y=coordinate.y + beam.y_direction,
                    )

                    if new_coordinate not in new_beam_grid:
                        new_beam_grid[new_coordinate] = []

                    new_beam_grid[new_coordinate].append(beam)

                elif self.grid[coordinate] == "|":
                    if beam.y_direction in [-1, 1]:
                        # Keep the beam moving
                        new_coordinate = Coordinate(
                            x=coordinate.x + beam.x_direction,
                            y=coordinate.y + beam.y_direction,
                        )

                        if new_coordinate not in new_beam_grid:
                            new_beam_grid[new_coordinate] = []

                        new_beam_grid[new_coordinate].append(beam)

                    elif beam.x_direction in [-1, 1]:
                        # Split the beam to go up
                        new_coordinate_up = Coordinate(
                            x=coordinate.x,
                            y=coordinate.y - 1,
                        )

                        if new_coordinate_up not in new_beam_grid:
                            new_beam_grid[new_coordinate_up] = []

                        new_beam_grid[new_coordinate_up].append(
                            Beam(
                                x_direction=0,
                                y_direction=-1,
                            )
                        )

                        # Split the beam to go down
                        new_coordinate_down = Coordinate(
                            x=coordinate.x,
                            y=coordinate.y + 1,
                        )

                        if new_coordinate_down not in new_beam_grid:
                            new_beam_grid[new_coordinate_down] = []

                        new_beam_grid[new_coordinate_down].append(
                            Beam(
                                x_direction=0,
                                y_direction=1,
                            )
                        )

                elif self.grid[coordinate] == "-":
                    if beam.x_direction in [-1, 1]:
                        # Keep the beam moving
                        new_coordinate = Coordinate(
                            x=coordinate.x + beam.x_direction,
                            y=coordinate.y + beam.y_direction,
                        )

                        if new_coordinate not in new_beam_grid:
                            new_beam_grid[new_coordinate] = []

                        new_beam_grid[new_coordinate].append(beam)

                    elif beam.y_direction in [-1, 1]:
                        # Split the beam to go left
                        new_coordinate_up = Coordinate(
                            x=coordinate.x - 1,
                            y=coordinate.y,
                        )

                        if new_coordinate_up not in new_beam_grid:
                            new_beam_grid[new_coordinate_up] = []

                        new_beam_grid[new_coordinate_up].append(
                            Beam(
                                x_direction=-1,
                                y_direction=0,
                            )
                        )

                        # Split the beam to go right
                        new_coordinate_down = Coordinate(
                            x=coordinate.x + 1,
                            y=coordinate.y,
                        )

                        if new_coordinate_down not in new_beam_grid:
                            new_beam_grid[new_coordinate_down] = []

                        new_beam_grid[new_coordinate_down].append(
                            Beam(
                                x_direction=1,
                                y_direction=0,
                            )
                        )

                elif self.grid[coordinate] == "/":
                    if beam.x_direction == 1:
                        # Move the beam up
                        new_coordinate = Coordinate(
                            x=coordinate.x,
                            y=coordinate.y - 1,
                        )

                        if new_coordinate not in new_beam_grid:
                            new_beam_grid[new_coordinate] = []

                        new_beam_grid[new_coordinate].append(
                            Beam(
                                x_direction=0,
                                y_direction=-1,
                            )
                        )

                    elif beam.x_direction == -1:
                        # Move the beam down
                        new_coordinate = Coordinate(
                            x=coordinate.x,
                            y=coordinate.y + 1,
                        )

                        if new_coordinate not in new_beam_grid:
                            new_beam_grid[new_coordinate] = []

                        new_beam_grid[new_coordinate].append(
                            Beam(
                                x_direction=0,
                                y_direction=1,
                            )
                        )

                    elif beam.y_direction == 1:
                        # Move the beam left
                        new_coordinate = Coordinate(
                            x=coordinate.x - 1,
                            y=coordinate.y,
                        )

                        if new_coordinate not in new_beam_grid:
                            new_beam_grid[new_coordinate] = []

                        new_beam_grid[new_coordinate].append(
                            Beam(
                                x_direction=-1,
                                y_direction=0,
                            )
                        )

                    elif beam.y_direction == -1:
                        # Move the beam right
                        new_coordinate = Coordinate(
                            x=coordinate.x + 1,
                            y=coordinate.y,
                        )

                        if new_coordinate not in new_beam_grid:
                            new_beam_grid[new_coordinate] = []

                        new_beam_grid[new_coordinate].append(
                            Beam(
                                x_direction=1,
                                y_direction=0,
                            )
                        )

                elif self.grid[coordinate] == "\\\\":
                    if beam.x_direction == 1:
                        # Move the beam down
                        new_coordinate = Coordinate(
                            x=coordinate.x,
                            y=coordinate.y + 1,
                        )

                        if new_coordinate not in new_beam_grid:
                            new_beam_grid[new_coordinate] = []

                        new_beam_grid[new_coordinate].append(
                            Beam(
                                x_direction=0,
                                y_direction=1,
                            )
                        )

                    elif beam.x_direction == -1:
                        # Move the beam up
                        new_coordinate = Coordinate(
                            x=coordinate.x,
                            y=coordinate.y - 1,
                        )

                        if new_coordinate not in new_beam_grid:
                            new_beam_grid[new_coordinate] = []

                        new_beam_grid[new_coordinate].append(
                            Beam(
                                x_direction=0,
                                y_direction=-1,
                            )
                        )

                    elif beam.y_direction == 1:
                        # Move the beam right
                        new_coordinate = Coordinate(
                            x=coordinate.x + 1,
                            y=coordinate.y,
                        )

                        if new_coordinate not in new_beam_grid:
                            new_beam_grid[new_coordinate] = []

                        new_beam_grid[new_coordinate].append(
                            Beam(
                                x_direction=1,
                                y_direction=0,
                            )
                        )

                    elif beam.y_direction == -1:
                        # Move the beam left
                        new_coordinate = Coordinate(
                            x=coordinate.x - 1,
                            y=coordinate.y,
                        )

                        if new_coordinate not in new_beam_grid:
                            new_beam_grid[new_coordinate] = []

                        new_beam_grid[new_coordinate].append(
                            Beam(
                                x_direction=-1,
                                y_direction=0,
                            )
                        )

        # If we've seen this beam at this coordinate in the energized grid, remove it
        cleaned_beam_grid: dict[Coordinate, list[Beam]] = {}

        for coordinate, beams in new_beam_grid.items():
            cleaned_beam_grid[coordinate] = []

            if coordinate in self.energized_grid:
                for beam in beams:
                    if beam in self.energized_grid[coordinate]:
                        pass

                    else:
                        self.energized_grid[coordinate].add(beam)
                        cleaned_beam_grid[coordinate].append(beam)

            elif coordinate in self.grid:
                if coordinate not in self.energized_grid:
                    self.energized_grid[coordinate] = set()

                self.energized_grid[coordinate].update(set(beams))
                cleaned_beam_grid[coordinate] = beams

        self.beam_grid = cleaned_beam_grid

    def count_energized(self) -> int:
        count = 0

        for coordinate in self.grid:
            if coordinate in self.energized_grid:
                count += 1

        return count


def runner(document: list[str]) -> int:
    grid = Grid()

    max_x = len(document[0])
    max_y = len(document)

    for y_index, line in enumerate(document):
        for x_index, character in enumerate(line):
            grid.add_coordinate(x=x_index, y=y_index, character=character)

    max_energized = 0

    # Start from left moving right
    for y in range(max_y):
        grid.start(Coordinate(x=0, y=y), Beam(x_direction=1, y_direction=0))

        while grid.beam_grid:
            grid.step()

        max_energized = max(max_energized, grid.count_energized())

    # Start from right moving left
    for y in range(max_y):
        grid.start(Coordinate(x=max_x, y=y), Beam(x_direction=-1, y_direction=0))

        while grid.beam_grid:
            grid.step()

        max_energized = max(max_energized, grid.count_energized())

    # Start from top moving down
    for x in range(max_x):
        grid.start(Coordinate(x=x, y=0), Beam(x_direction=0, y_direction=1))

        while grid.beam_grid:
            grid.step()

        max_energized = max(max_energized, grid.count_energized())

    # Start from bottom moving up
    for x in range(max_x):
        grid.start(Coordinate(x=x, y=max_y), Beam(x_direction=0, y_direction=-1))

        while grid.beam_grid:
            grid.step()

        max_energized = max(max_energized, grid.count_energized())

    return max_energized


@pytest.mark.parametrize(
    "filename,output",
    [
        ("example-1.txt", 51),
        ("example-9.txt", 8231),  # Very slow
    ],
)
def test_runner(filename: str, output: int) -> None:
    with open(Path(__file__).with_name(filename)) as file:
        result = runner(file.read().splitlines())

        assert result == output
`}),e.jsxs("p",{children:["Answer: ",e.jsx("code",{children:"8,231"})]}),e.jsx(o,{}),e.jsx(n,{hash:"recap",children:"Recap"}),e.jsxs(d,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Day"}),e.jsx("th",{children:"Part 1 Time"}),e.jsx("th",{children:"Part 1 Rank"}),e.jsx("th",{children:"Part 2 Time"}),e.jsx("th",{children:"Part 2 Rank"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"16"}),e.jsx("td",{children:"04:11:44"}),e.jsx("td",{children:"9,007"}),e.jsx("td",{children:"04:33:04"}),e.jsx("td",{children:"8,641"})]})})]}),e.jsx("p",{children:"This was pretty rough..."}),e.jsx("p",{children:"Not because the challenge was all that difficult. This was a really fun challenge!!"}),e.jsx("p",{children:"No, the difficult part was finding bugs in my code. I have a line that looks like this:"}),e.jsx("p",{children:e.jsx("code",{children:"for coordinate, beams in self.beam_grid.items():"})}),e.jsxs("p",{children:["And later in the code, within the same scope, I reused the ",e.jsx("code",{children:"coordinate"})," ","variable instead of creating a ",e.jsx("code",{children:"new_coordinate"})," variable. This meant that when I had multiple beams from"," ",e.jsx("code",{children:"for coordinate, beams in self.beam_grid.items():"}),", I was modifying the"," ",e.jsx("strong",{children:"starting coordinate"})," for any beam"," ",e.jsx("strong",{children:"other than the first"}),". This would cause ",e.jsx("strong",{children:"some"})," beams to move diagonally when they overlapped with another beam."]}),e.jsx("p",{children:"I spent the vast, vast majority of my time trying to debug my code. I ended up creating a visualization for the grid and watching the full input map iterate step by step until I saw a discrepancy between steps (when a beam moved diagonally). Once I saw the behavior, I was able to recreate this with some test examples, and I was able to find the bug pretty quickly after that."}),e.jsx("p",{children:"Some obvious ways I could have avoided this:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Keep my scopes small in functions by splitting that big method up into smaller methods"}),e.jsx("li",{children:"Better linting tools to alert me to variable redefinition. Notably, if I used TypeScript instead of Python, I would've caught this issue immediately"})]}),e.jsx("p",{children:"I was so happy when I finally finished Part 1, I took a 15 minute breather before attempting Part 2. Thankfully, Part 2 was super simple!"})]})};export{f as component};
