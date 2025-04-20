import{j as e,b2 as r,I as s}from"./main-4SycZPY2.js";import{P as t,a as i}from"./code-block-BW2cNKoo.js";import{B as a}from"./layout-DVJpTeKt.js";import{H as n}from"./header-z1l8V5th.js";import{T as l}from"./table-DCpUFErF.js";import{S as o}from"./separator-DAE-boxv.js";import"./button-BBme8Wym.js";const u=function(){return e.jsxs(e.Fragment,{children:[e.jsx(a,{to:r.fullPath}),e.jsx(n,{hash:"part-1-prompt",children:"Part 1 – Prompt"}),e.jsx("p",{children:"You use the hang glider to ride the hot air from Desert Island all the way up to the floating metal island. This island is surprisingly cold and there definitely aren't any thermals to glide on, so you leave your hang glider behind."}),e.jsx("p",{children:`You wander around for a while, but you don't find any people or animals. However, you do occasionally find signposts labeled "Hot Springs" pointing in a seemingly consistent direction; maybe you can find someone at the hot springs and ask them where the desert-machine parts are made.`}),e.jsx("p",{children:"The landscape here is alien; even the flowers and trees are made of metal. As you stop to admire some metal grass, you notice something metallic scurry away in your peripheral vision and jump into a big pipe! It didn't look like any animal you've ever seen; if you want a better look, you'll need to get ahead of it."}),e.jsx("p",{children:`Scanning the area, you discover that the entire field you're standing on is densely packed with pipes; it was hard to tell at first because they're the same metallic silver color as the "ground". You make a quick sketch of all of the surface pipes you can see (your puzzle input).`}),e.jsxs("p",{children:["The pipes are arranged in a two-dimensional grid of ",e.jsx("strong",{children:"tiles"}),":"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"|"})," is a ",e.jsx("strong",{children:"vertical pipe"})," connecting north and south."]}),e.jsxs("li",{children:[e.jsx("code",{children:"-"})," is a ",e.jsx("strong",{children:"horizontal pipe"})," connecting east and west."]}),e.jsxs("li",{children:[e.jsx("code",{children:"L"})," is a ",e.jsx("strong",{children:"90-degree bend"})," connecting north and east."]}),e.jsxs("li",{children:[e.jsx("code",{children:"J"})," is a ",e.jsx("strong",{children:"90-degree bend"})," connecting north and west."]}),e.jsxs("li",{children:[e.jsx("code",{children:"7"})," is a ",e.jsx("strong",{children:"90-degree bend"})," connecting south and west."]}),e.jsxs("li",{children:[e.jsx("code",{children:"F"})," is a ",e.jsx("strong",{children:"90-degree bend"})," connecting south and east."]}),e.jsxs("li",{children:[e.jsx("code",{children:"."})," is ",e.jsx("strong",{children:"ground"}),"; there is no pipe in this tile."]}),e.jsxs("li",{children:[e.jsx("code",{children:"S"})," is the ",e.jsx("strong",{children:"starting position"})," of the animal; there is a pipe on this tile, but your sketch doesn't show what shape the pipe has."]})]}),e.jsxs("p",{children:["Based on the acoustics of the animal's scurrying, you're confident the pipe that contains the animal is ",e.jsx("strong",{children:"one large, continuous loop"}),"."]}),e.jsx("p",{children:"For example, here is a square loop of pipe:"}),e.jsx(t,{content:`.....
.F-7.
.|.|.
.L-J.
.....`}),e.jsx("p",{children:"If the animal had entered this loop in the northwest corner, the sketch would instead look like this:"}),e.jsx(t,{content:`.....
.S-7.
.|.|.
.L-J.
.....`}),e.jsxs("p",{children:["In the above diagram, the S tile is still a 90-degree ",e.jsx("code",{children:"F"})," bend: you can tell because of how the adjacent pipes connect to it."]}),e.jsxs("p",{children:["Unfortunately, there are also many pipes that"," ",e.jsx("strong",{children:"aren't connected to the loop"}),"! This sketch shows the same loop as above:"]}),e.jsx(t,{content:`-L|F7
7S-7|
L|7||
-L-J|
L|-JF`}),e.jsxs("p",{children:["In the above diagram, you can still figure out which pipes form the main loop: they're the ones connected to S, pipes ",e.jsx("strong",{children:"those"})," pipes connect to, pipes those pipes connect to, and so on. Every pipe in the main loop connects to its two neighbors (including S, which will have exactly two pipes connecting to it, and which is assumed to connect back to those two pipes)."]}),e.jsx("p",{children:"Here is a sketch that contains a slightly more complex main loop:"}),e.jsx(t,{content:`..F7.
.FJ|.
SJ.L7
|F--J
LJ...`}),e.jsx("p",{children:"Here's the same example sketch with the extra, non-main-loop pipe tiles also shown:"}),e.jsx(t,{content:`7-F7-
.FJ|7
SJLL7
|F--J
LJ.LJ`}),e.jsxs("p",{children:["If you want to ",e.jsx("strong",{children:"get out ahead of the animal"}),", you should find the tile in the loop that is ",e.jsx("strong",{children:"farthest"})," from the starting position. Because the animal is in the pipe, it doesn't make sense to measure this by direct distance. Instead, you need to find the tile that would take the longest number of steps ",e.jsx("strong",{children:"along the loop"})," to reach from the starting point - regardless of which way around the loop the animal went."]}),e.jsx("p",{children:"In the first example with the square loop:"}),e.jsx(t,{content:`.....
.S-7.
.|.|.
.L-J.
.....`}),e.jsx("p",{children:"You can count the distance each tile in the loop is from the starting point like this:"}),e.jsx(t,{content:`.....
.012.
.1.3.
.234.
.....`}),e.jsx("p",{children:"In this example, the farthest point from the start is 4 steps away."}),e.jsx("p",{children:"Here's the more complex loop again:"}),e.jsx(t,{content:`..F7.
.FJ|.
SJ.L7
|F--J
LJ...`}),e.jsx("p",{children:"Here are the distances for each tile on that loop:"}),e.jsx(t,{content:`..45.
.236.
01.78
14567
23...`}),e.jsxs("p",{children:["Find the single giant loop starting at ",e.jsx("code",{children:"S"}),".",e.jsx("strong",{children:"How many steps along the loop does it take to get from the starting position to the point farthest from the starting position?"})]}),e.jsx(n,{hash:"part-1-solution",children:"Part 1 – Solution"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Find the start position"}),e.jsx("li",{children:"Find connected pipe to the start position"}),e.jsxs("li",{children:["Follow the pipe until we get back to the start position, counting the number of tiles in the pipe as we go",e.jsx("ul",{children:e.jsxs("li",{children:["This makes heavy usage of the ",e.jsx("code",{children:"OFFSET_MAP"})]})})]}),e.jsxs("li",{children:["Return the ",e.jsx("code",{children:"length of the pipe / 2"})]})]}),e.jsx("p",{children:e.jsxs("strong",{children:['"Why ',e.jsx("code",{children:"length of the pipe / 2"}),'?"']})}),e.jsx("p",{children:"Because the pipe always connects back to the start position, it must always have an even number of segments."}),e.jsx("p",{children:"Don't believe me? Try to draw a continuous pipe with an odd number of segments."}),e.jsx(i,{content:`from dataclasses import dataclass
from pathlib import Path

import pytest


@dataclass
class Position:
    x: int
    y: int


# (character, x-offset, y-offset) -> (x-offset, y-offset)
OFFSET_MAP: dict[tuple[str, int, int], Position] = {
    ("|", 0, 1): Position(x=0, y=1),
    ("|", 0, -1): Position(x=0, y=-1),
    ("-", 1, 0): Position(x=1, y=0),
    ("-", -1, 0): Position(x=-1, y=0),
    ("L", 0, 1): Position(x=1, y=0),
    ("L", -1, 0): Position(x=0, y=-1),
    ("J", 1, 0): Position(x=0, y=-1),
    ("J", 0, 1): Position(x=-1, y=0),
    ("7", 1, 0): Position(x=0, y=1),
    ("7", 0, -1): Position(x=-1, y=0),
    ("F", -1, 0): Position(x=0, y=1),
    ("F", 0, -1): Position(x=1, y=0),
}


@dataclass
class Map:
    start: Position
    current: Position

    positions: list[Position]
    characters: list[list[str]]

    def get_character(self, x: int, y: int) -> str | None:
        if 0 <= x < len(self.characters[0]) and 0 <= y <= len(self.characters):
            return self.characters[y][x]

        return None

    def run(self) -> int:
        steps = 0

        # Move one position manually
        next_offset: Position | None = None

        for x_offset, y_offset in [(0, 1), (0, -1), (1, 0), (-1, 0)]:
            next_character = self.get_character(
                x=self.current.x + x_offset,
                y=self.current.y + y_offset,
            )

            if OFFSET_MAP.get((next_character, x_offset, y_offset)):
                next_offset = OFFSET_MAP[(next_character, x_offset, y_offset)]
                self.current = Position(
                    x=self.current.x + x_offset, y=self.current.y + y_offset
                )

                steps += 1

                break

        while self.current != self.start:
            # Get the character at the next position
            next_character = self.get_character(
                x=self.current.x + next_offset.x,
                y=self.current.y + next_offset.y,
            )

            self.positions.append(self.current)
            self.current = Position(
                x=self.current.x + next_offset.x, y=self.current.y + next_offset.y
            )

            steps += 1

            next_offset = OFFSET_MAP.get((next_character, next_offset.x, next_offset.y))

        return steps // 2


def runner(document: list[str]) -> int:
    character_map: list[list[str]] = []

    position = Position(x=0, y=0)

    for y_index, line in enumerate(document):
        character_map.append(list(line))

        for x_index, character in enumerate(line):
            if character == "S":
                position = Position(x=x_index, y=y_index)

    pipe_map = Map(
        start=position,
        current=position,
        positions=[position],
        characters=character_map,
    )

    return pipe_map.run()


@pytest.mark.parametrize(
    "filename,output",
    [
        ("example-1.txt", 8),
        ("example-5.txt", 6968),  # Very slow
    ],
)
def test_runner(filename: str, output: int) -> None:
    with open(Path(__file__).with_name(filename)) as file:
        result = runner(file.read().splitlines())

        assert result == output
`}),e.jsxs("p",{children:["Answer: ",e.jsx("code",{children:"6,968"})]}),e.jsx(o,{}),e.jsx(n,{hash:"part-2-prompt",children:"Part 2 – Prompt"}),e.jsxs("p",{children:["You quickly reach the farthest point of the loop, but the animal never emerges. Maybe its nest is ",e.jsx("strong",{children:"within the area enclosed by the loop"}),"?"]}),e.jsx("p",{children:"To determine whether it's even worth taking the time to search for such a nest, you should calculate how many tiles are contained within the loop. For example:"}),e.jsx(t,{content:`...........
.S-------7.
.|F-----7|.
.||.....||.
.||.....||.
.|L-7.F-J|.
.|..|.|..|.
.L--J.L--J.
...........`}),e.jsxs("p",{children:["The above loop encloses merely ",e.jsx("strong",{children:"four tiles"})," - the two pairs of"," ",e.jsx("code",{children:"."})," in the southwest and southeast (marked ",e.jsx("code",{children:"I"})," below). The middle ",e.jsx("code",{children:"."})," tiles (marked ",e.jsx("code",{children:"O"})," below) are ",e.jsx("strong",{children:"not"})," ","in the loop. Here is the same loop again with those regions marked:"]}),e.jsx(t,{content:`...........
.S-------7.
.|F-----7|.
.||OOOOO||.
.||OOOOO||.
.|L-7OF-J|.
.|II|O|II|.
.L--JOL--J.
.....O.....`}),e.jsxs("p",{children:["In fact, there doesn't even need to be a full tile path to the outside for tiles to count as outside the loop - squeezing between pipes is also allowed! Here,"," ",e.jsx("code",{children:"I"})," is still within the loop and ",e.jsx("code",{children:"O"})," is still outside the loop:"]}),e.jsx(t,{content:`..........
.S------7.
.|F----7|.
.||OOOO||.
.||OOOO||.
.|L-7F-J|.
.|II||II|.
.L--JL--J.
..........`}),e.jsxs("p",{children:["In both of the above examples,"," ",e.jsx("strong",{children:e.jsx("code",{children:"4"})})," ","tiles are enclosed by the loop."]}),e.jsx("p",{children:"Here's a larger example:"}),e.jsx(t,{content:`.F----7F7F7F7F-7....
.|F--7||||||||FJ....
.||.FJ||||||||L7....
FJL7L7LJLJ||LJ.L-7..
L--J.L7...LJS7F-7L7.
....F-J..F7FJ|L7L7L7
....L7.F7||L7|.L7L7|
.....|FJLJ|FJ|F7|.LJ
....FJL-7.||.||||...
....L---J.LJ.LJLJ...`}),e.jsxs("p",{children:["The above sketch has many random bits of ground, some of which are in the loop (",e.jsx("code",{children:"I"}),") and some of which are outside it (",e.jsx("code",{children:"O"}),"):"]}),e.jsx(t,{content:`OF----7F7F7F7F-7OOOO
O|F--7||||||||FJOOOO
O||OFJ||||||||L7OOOO
FJL7L7LJLJ||LJIL-7OO
L--JOL7IIILJS7F-7L7O
OOOOF-JIIF7FJ|L7L7L7
OOOOL7IF7||L7|IL7L7|
OOOOO|FJLJ|FJ|F7|OLJ
OOOOFJL-7O||O||||OOO
OOOOL---JOLJOLJLJOOO`}),e.jsxs("p",{children:["In this larger example,"," ",e.jsx("strong",{children:e.jsx("code",{children:"8"})})," ","tiles are enclosed by the loop."]}),e.jsx("p",{children:"Any tile that isn't part of the main loop can count as being enclosed by the loop. Here's another example with many bits of junk pipe lying around that aren't connected to the main loop at all:"}),e.jsx(t,{content:`FF7FSF7F7F7F7F7F---7
L|LJ||||||||||||F--J
FL-7LJLJ||||||LJL-77
F--JF--7||LJLJ7F7FJ-
L---JF-JLJ.||-FJLJJ7
|F|F-JF---7F7-L7L|7|
|FFJF7L7F-JF7|JL---7
7-L-JL7||F7|L7F-7F7|
L.L7LFJ|||||FJL7||LJ
L7JLJL-JLJLJL--JLJ.L`}),e.jsxs("p",{children:["Here are just the tiles that are ",e.jsx("strong",{children:"enclosed by the loop"})," marked with I:"]}),e.jsx(t,{content:`FF7FSF7F7F7F7F7F---7
L|LJ||||||||||||F--J
FL-7LJLJ||||||LJL-77
F--JF--7||LJLJIF7FJ-
L---JF-JLJIIIIFJLJJ7
|F|F-JF---7IIIL7L|7|
|FFJF7L7F-JF7IIL---7
7-L-JL7||F7|L7F-7F7|
L.L7LFJ|||||FJL7||LJ
L7JLJL-JLJLJL--JLJ.L`}),e.jsxs("p",{children:["In this last example,"," ",e.jsx("strong",{children:e.jsx("code",{children:"10"})})," ","tiles are enclosed by the loop."]}),e.jsxs("p",{children:["Figure out whether you have time to search for the nest by calculating the area within the loop.",e.jsx("strong",{children:"How many tiles are enclosed by the loop?"})]}),e.jsx(n,{hash:"part-2-solution",children:"Part 2 – Solution"}),e.jsx("p",{children:"There are two ways I could think of solving this."}),e.jsxs("ol",{children:[e.jsx("li",{children:e.jsx("a",{href:"https://en.wikipedia.org/wiki/Flood_fill",target:"_blank",children:"Flood fill"})}),e.jsx("li",{children:e.jsx("a",{href:"https://en.wikipedia.org/wiki/Point_in_polygon",target:"_blank",children:"Point in polygon"})})]}),e.jsx("p",{children:"My solution below uses flood fill, but I initially solved this problem with a (slow) point in polygon implementation."}),e.jsx(i,{content:`from dataclasses import dataclass, field
from pathlib import Path

import pytest

# Doesn't matter what these characters are...
# As long as they don't conflict with existing characters in the map.
# These choices print with nice colors for debugging.
OPEN_CHARACTER = "\\033[94m█\\033[0m"
ENCLOSED_CHARACTER = "\\033[31m█\\033[0m"


@dataclass
class Position:
    x: int
    y: int


# (character, x-offset, y-offset) -> (x-offset, y-offset)
OFFSET_MAP: dict[tuple[str, int, int], Position] = {
    ("|", 0, 1): Position(x=0, y=1),
    ("|", 0, -1): Position(x=0, y=-1),
    ("-", 1, 0): Position(x=1, y=0),
    ("-", -1, 0): Position(x=-1, y=0),
    ("L", 0, 1): Position(x=1, y=0),
    ("L", -1, 0): Position(x=0, y=-1),
    ("J", 1, 0): Position(x=0, y=-1),
    ("J", 0, 1): Position(x=-1, y=0),
    ("7", 1, 0): Position(x=0, y=1),
    ("7", 0, -1): Position(x=-1, y=0),
    ("F", -1, 0): Position(x=0, y=1),
    ("F", 0, -1): Position(x=1, y=0),
}

EXPAND_MAP: dict[str, tuple[list[str], list[str], list[str]]] = {
    OPEN_CHARACTER: (
        [OPEN_CHARACTER, OPEN_CHARACTER, OPEN_CHARACTER],
        [OPEN_CHARACTER, OPEN_CHARACTER, OPEN_CHARACTER],
        [OPEN_CHARACTER, OPEN_CHARACTER, OPEN_CHARACTER],
    ),
    ENCLOSED_CHARACTER: (
        [ENCLOSED_CHARACTER, ENCLOSED_CHARACTER, ENCLOSED_CHARACTER],
        [ENCLOSED_CHARACTER, ENCLOSED_CHARACTER, ENCLOSED_CHARACTER],
        [ENCLOSED_CHARACTER, ENCLOSED_CHARACTER, ENCLOSED_CHARACTER],
    ),
    "S": (
        ["S", "S", "S"],
        ["S", "S", "S"],
        ["S", "S", "S"],
    ),
    "|": (
        [ENCLOSED_CHARACTER, "|", ENCLOSED_CHARACTER],
        [ENCLOSED_CHARACTER, "|", ENCLOSED_CHARACTER],
        [ENCLOSED_CHARACTER, "|", ENCLOSED_CHARACTER],
    ),
    "-": (
        [ENCLOSED_CHARACTER, ENCLOSED_CHARACTER, ENCLOSED_CHARACTER],
        ["-", "-", "-"],
        [ENCLOSED_CHARACTER, ENCLOSED_CHARACTER, ENCLOSED_CHARACTER],
    ),
    "L": (
        [ENCLOSED_CHARACTER, "|", ENCLOSED_CHARACTER],
        [ENCLOSED_CHARACTER, "L", "-"],
        [ENCLOSED_CHARACTER, ENCLOSED_CHARACTER, ENCLOSED_CHARACTER],
    ),
    "J": (
        [ENCLOSED_CHARACTER, "|", ENCLOSED_CHARACTER],
        ["-", "J", ENCLOSED_CHARACTER],
        [ENCLOSED_CHARACTER, ENCLOSED_CHARACTER, ENCLOSED_CHARACTER],
    ),
    "7": (
        [ENCLOSED_CHARACTER, ENCLOSED_CHARACTER, ENCLOSED_CHARACTER],
        ["-", "7", ENCLOSED_CHARACTER],
        [ENCLOSED_CHARACTER, "|", ENCLOSED_CHARACTER],
    ),
    "F": (
        [ENCLOSED_CHARACTER, ENCLOSED_CHARACTER, ENCLOSED_CHARACTER],
        [ENCLOSED_CHARACTER, "F", "-"],
        [ENCLOSED_CHARACTER, "|", ENCLOSED_CHARACTER],
    ),
}


@dataclass
class Map:
    start: Position
    current: Position

    positions: list[Position]
    characters: list[list[str]]

    expanded_characters: list[list[str]] = field(default_factory=list)

    def get_character(self, x: int, y: int) -> str | None:
        if 0 <= x < len(self.characters[0]) and 0 <= y <= len(self.characters):
            return self.characters[y][x]

        return None

    def run(self) -> int:
        steps = 0

        # Move one position manually
        next_offset: Position | None = None

        for x_offset, y_offset in [(0, 1), (0, -1), (1, 0), (-1, 0)]:
            next_character = self.get_character(
                x=self.current.x + x_offset,
                y=self.current.y + y_offset,
            )

            if OFFSET_MAP.get((next_character, x_offset, y_offset)):
                next_offset = OFFSET_MAP[(next_character, x_offset, y_offset)]
                self.current = Position(
                    x=self.current.x + x_offset, y=self.current.y + y_offset
                )

                steps += 1

                break

        while self.current != self.start:
            # Get the character at the next position
            next_character = self.get_character(
                x=self.current.x + next_offset.x,
                y=self.current.y + next_offset.y,
            )

            self.positions.append(self.current)
            self.current = Position(
                x=self.current.x + next_offset.x, y=self.current.y + next_offset.y
            )

            steps += 1

            next_offset = OFFSET_MAP.get((next_character, next_offset.x, next_offset.y))

        return steps // 2

    def is_in_loop(self, x: int, y: int) -> bool:
        return any(position.x == x and position.y == y for position in self.positions)

    def get_enclosed_positions(self) -> int:
        enclosed = 0

        for y_index in range(len(self.characters)):
            for x_index in range(len(self.characters[0])):
                if not self.is_in_loop(x_index, y_index):
                    crosses = 0

                    # Offset by 0.5 to account for corners, points, etc.
                    y_position = y_index + 0.5

                    # For each point pair in the loop, see if we intersect it
                    for p_index in range(len(self.positions) - 1):
                        a = self.positions[p_index]
                        b = self.positions[p_index + 1]

                        if a.y == b.y:
                            continue

                        if (
                            (a.y > y_position > b.y or a.y < y_position < b.y)
                            and a.x > x_index
                            and b.x > x_index
                        ):
                            crosses += 1

                    if crosses % 2 == 1:
                        self.characters[y_index][x_index] = ENCLOSED_CHARACTER
                        enclosed += 1

        return enclosed

    def cleanup(self) -> None:
        for y_index in range(len(self.characters)):
            for x_index in range(len(self.characters[0])):
                if not self.is_in_loop(x_index, y_index):
                    if (
                        y_index == 0
                        or y_index == len(self.characters) - 1
                        or (x_index == 0 or x_index == len(self.characters[0]) - 1)
                    ):
                        self.characters[y_index][x_index] = OPEN_CHARACTER

                    else:
                        self.characters[y_index][x_index] = ENCLOSED_CHARACTER

    def expand(self) -> None:
        # 3x the height of characters
        self.expanded_characters = [[] for _ in range(len(self.characters) * 3)]

        for y_index in range(len(self.characters)):
            for x_index in range(len(self.characters[0])):
                character = self.characters[y_index][x_index]

                first_line, second_line, third_line = EXPAND_MAP[character]

                self.expanded_characters[y_index * 3] += first_line
                self.expanded_characters[y_index * 3 + 1] += second_line
                self.expanded_characters[y_index * 3 + 2] += third_line

    def flood_fill(self) -> None:
        # {(x, y)}
        positions_to_check: set[tuple[int, int]] = set()

        # Fill positions to check with initial data of all Os
        for y_index in range(len(self.expanded_characters)):
            for x_index in range(len(self.expanded_characters[0])):
                character = self.expanded_characters[y_index][x_index]

                if character == OPEN_CHARACTER:
                    positions_to_check.add((x_index, y_index))

        while positions_to_check:
            x_index, y_index = positions_to_check.pop()

            # Check in cardinal directions
            for x_offset, y_offset in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                try:
                    character = self.expanded_characters[y_index + y_offset][
                        x_index + x_offset
                    ]

                    if character == ENCLOSED_CHARACTER:
                        self.expanded_characters[y_index + y_offset][
                            x_index + x_offset
                        ] = OPEN_CHARACTER
                        positions_to_check.add((x_index + x_offset, y_index + y_offset))
                except IndexError:
                    pass

    def shrink(self) -> None:
        for y_index in range(0, len(self.expanded_characters), 3):
            for x_index in range(0, len(self.expanded_characters[0]), 3):
                # Get the center of each 3x3 grid
                character = self.expanded_characters[y_index - 2][x_index - 2]
                self.characters[y_index // 3 - 1][x_index // 3 - 1] = character

    def count(self, character: str) -> int:
        total = 0

        for y_index in range(len(self.characters)):
            for x_index in range(len(self.characters[0])):
                if self.characters[y_index][x_index] == character:
                    total += 1

        return total


def runner(document: list[str]) -> int:
    character_map: list[list[str]] = []

    position = Position(x=0, y=0)

    for y_index, line in enumerate(document):
        character_map.append(list(line))

        for x_index, character in enumerate(line):
            if character == "S":
                position = Position(x=x_index, y=y_index)

    pipe_map = Map(
        start=position,
        current=position,
        positions=[position],
        characters=character_map,
    )

    pipe_map.run()
    pipe_map.cleanup()
    pipe_map.expand()
    pipe_map.flood_fill()
    pipe_map.shrink()

    return pipe_map.count(ENCLOSED_CHARACTER)


@pytest.mark.parametrize(
    "filename,output",
    [
        ("example-2.txt", 4),
        ("example-3.txt", 4),
        ("example-4.txt", 2),
        ("example-5.txt", 413),  # Very slow
    ],
)
def test_runner(filename: str, output: int) -> None:
    with open(Path(__file__).with_name(filename)) as file:
        result = runner(file.read().splitlines())

        assert result == output
`}),e.jsxs("p",{children:["Answer: ",e.jsx("code",{children:"413"})]}),e.jsx(o,{}),e.jsx(n,{hash:"recap",children:"Recap"}),e.jsxs(l,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Day"}),e.jsx("th",{children:"Part 1 Time"}),e.jsx("th",{children:"Part 1 Rank"}),e.jsx("th",{children:"Part 2 Time"}),e.jsx("th",{children:"Part 2 Rank"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"10"}),e.jsx("td",{children:"01:13:29"}),e.jsx("td",{children:"5,227"}),e.jsx("td",{children:"02:53:15"}),e.jsx("td",{children:"3,953"})]})})]}),e.jsx(n,{hash:"visualizations",children:"Visualizations"}),e.jsx("p",{children:"Red rectangles represent the enclosed characters within the map."}),e.jsxs("p",{children:["Green rectangles represent the characters within the map that"," ",e.jsx("strong",{children:"appear"})," to be enclosed but actually ",e.jsx("strong",{children:"aren't"}),"."]}),e.jsx("h3",{children:"Large - Enclosed"}),e.jsx(s,{src:"/blog/advent-of-code/2023/day-10/pipe-maze-large-empty.png",alt:"Pipe Maze Empty"}),e.jsx("h3",{children:"Large - Enclosed + Escaped"}),e.jsx(s,{src:"/blog/advent-of-code/2023/day-10/pipe-maze-large-filled.png",alt:"Pipe Maze Filled"})]})};export{u as component};
