import{j as e}from"./index-asdfw01p.js";import{P as t,a as s}from"./code-block-DGk06EOt.js";import{B as i}from"./layout-Bbw6xlVW.js";import{H as a}from"./header-bLivdw4r.js";import{T as l}from"./table-CewKNS46.js";import{S as n}from"./separator-COdazgSt.js";import"./button-DxUZDvDh.js";import"./routeInfo-DwfsGK-b.js";const u=function(){return e.jsxs(e.Fragment,{children:[e.jsx(i,{}),e.jsx(a,{hash:"part-1-prompt",children:"Part 1 – Prompt"}),e.jsx("p",{children:'You continue following signs for "Hot Springs" and eventually come across an observatory. The Elf within turns out to be a researcher studying cosmic expansion using the giant telescope here.'}),e.jsx("p",{children:"He doesn't know anything about the missing machine parts; he's only visiting for this research project. However, he confirms that the hot springs are the next-closest area likely to have people; he'll even take you straight there once he's done with today's observation analysis."}),e.jsx("p",{children:"Maybe you can help him with the analysis to speed things up?"}),e.jsxs("p",{children:["The researcher has collected a bunch of data and compiled the data into a single giant ",e.jsx("strong",{children:"image"})," (your puzzle input). The image includes"," ",e.jsx("strong",{children:"empty space"})," (",e.jsx("code",{children:"."}),") and ",e.jsx("strong",{children:"galaxies"})," (",e.jsx("code",{children:"#"}),"). For example:"]}),e.jsx(t,{content:`...#......
.......#..
#.........
..........
......#...
.#........
.........#
..........
.......#..
#...#.....`}),e.jsxs("p",{children:["The researcher is trying to figure out the sum of the lengths of the"," ",e.jsx("strong",{children:"shortest path between every pair of galaxies"}),". However, there's a catch: the universe expanded in the time it took the light from those galaxies to reach the observatory."]}),e.jsxs("p",{children:["Due to something involving gravitational effects,"," ",e.jsx("strong",{children:"only some space expands"}),". In fact, the result is that"," ",e.jsx("strong",{children:"any rows or columns that contain no galaxies"})," should all actually be twice as big."]}),e.jsx("p",{children:"In the above example, three columns and two rows contain no galaxies:"}),e.jsx(t,{content:`   v  v  v
 ...#......
 .......#..
 #.........
>..........<
 ......#...
 .#........
 .........#
>..........<
 .......#..
 #...#.....
   ^  ^  ^`}),e.jsxs("p",{children:["These rows and columns need to be ",e.jsx("strong",{children:"twice as big"}),"; the result of cosmic expansion therefore looks like this:"]}),e.jsx("p",{children:"Equipped with this expanded universe, the shortest path between every pair of galaxies can be found. It can help to assign every galaxy a unique number:"}),e.jsx(t,{content:`....1........
.........2...
3............
.............
.............
........4....
.5...........
............6
.............
.............
.........7...
8....9.......`}),e.jsxs("p",{children:["In these 9 galaxies, there are ",e.jsx("strong",{children:"36 pairs"}),". Only count each pair once; order within the pair doesn't matter. For each pair, find any shortest path between the two galaxies using only steps that move up, down, left, or right exactly one"," ",e.jsx("code",{children:"."})," or ",e.jsx("code",{children:"#"})," at a time. (The shortest path between two galaxies is allowed to pass through another galaxy.)"]}),e.jsxs("p",{children:["For example, here is one of the shortest paths between galaxies ",e.jsx("code",{children:"5"})," and"," ",e.jsx("code",{children:"9"}),":"]}),e.jsx(t,{content:`....1........
.........2...
3............
.............
.............
........4....
.5...........
.##.........6
..##.........
...##........
....##...7...
8....9.......`}),e.jsxs("p",{children:["This path has length"," ",e.jsx("strong",{children:e.jsx("code",{children:"9"})})," ","because it takes a minimum of ",e.jsx("strong",{children:"nine steps"})," to get from galaxy"," ",e.jsx("code",{children:"5"})," to galaxy ",e.jsx("code",{children:"9"})," (the eight locations marked ",e.jsx("code",{children:"#"})," ","plus the step onto galaxy ",e.jsx("code",{children:"9"})," itself). Here are some other example shortest path lengths:"]}),e.jsxs("p",{children:["Between galaxy ",e.jsx("code",{children:"1"})," and galaxy ",e.jsx("code",{children:"7"}),": ",e.jsx("code",{children:"15"}),"Between galaxy ",e.jsx("code",{children:"3"})," and galaxy ",e.jsx("code",{children:"6"}),": ",e.jsx("code",{children:"17"}),"Between galaxy ",e.jsx("code",{children:"8"})," and galaxy ",e.jsx("code",{children:"9"}),": ",e.jsx("code",{children:"5"})]}),e.jsxs("p",{children:["In this example, after expanding the universe, the sum of the shortest path between all 36 pairs of galaxies is"," ",e.jsx("strong",{children:e.jsx("code",{children:"374"})}),"."]}),e.jsxs("p",{children:["Expand the universe, then find the length of the shortest path between every pair of galaxies.",e.jsx("strong",{children:"What is the sum of these lengths?"})]}),e.jsx(a,{hash:"part-1-solution",children:"Part 1 – Solution"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Parse the grid from the input"}),e.jsx("li",{children:'"Expand" the galaxies by finding which rows/columns are full of empty space (and thus, should be "expanded")'}),e.jsx("li",{children:"Create combinations of galaxy coordinates"}),e.jsx("li",{children:"Iterate over combinations, and for each galaxy combination..."}),e.jsx("li",{children:"Calculate the full Manhattan distance between them normally"}),e.jsx("li",{children:'Check to see what empty/"expanded" rows/columns are between the galaxies'}),e.jsxs("li",{children:['Multiply the number of empty/"expanded" rows/columns by the expansion factor (',e.jsx("code",{children:"displacement"})," in the code) minus ",e.jsx("code",{children:"1"})," (because we already counted those rows/columns), and add to the total distance"]})]}),e.jsx(s,{content:`from dataclasses import dataclass, field
from itertools import combinations
from pathlib import Path

import pytest


@dataclass
class Grid:
    space: list[list[str]]
    displacement: int
    galaxies: list[tuple[int, int]] = field(default_factory=list)
    galaxy_combos: list[tuple[tuple[int, int], tuple[int, int]]] = field(
        default_factory=list
    )

    rows_displaced: list[int] = field(default_factory=list)
    columns_displaced: list[int] = field(default_factory=list)

    def expand(self) -> None:
        # Expand the rows
        for index, row in enumerate(self.space):
            if all([char == "." for char in row]):
                self.rows_displaced.append(index)

        # Expand the columns
        for x_index in range(len(self.space[0])):
            if all(
                [
                    self.space[y_index][x_index] == "."
                    for y_index in range(len(self.space))
                ]
            ):
                self.columns_displaced.append(x_index)

    def pair_galaxies(self) -> None:
        for y_index, row in enumerate(self.space):
            for x_index, character in enumerate(row):
                if character == "#":
                    self.galaxies.append((x_index, y_index))

        for galaxy_combo in combinations(self.galaxies, 2):
            self.galaxy_combos.append(galaxy_combo)

    def calculate_galaxy_combo_distances(self) -> int:
        total_distance = 0

        for galaxy_a, galaxy_b in self.galaxy_combos:
            x_displacements = 0
            y_displacements = 0

            for column in self.columns_displaced:
                if (
                    galaxy_a[0] > column > galaxy_b[0]
                    or galaxy_a[0] < column < galaxy_b[0]
                ):
                    x_displacements += self.displacement - 1

            for row in self.rows_displaced:
                if galaxy_a[1] > row > galaxy_b[1] or galaxy_a[1] < row < galaxy_b[1]:
                    y_displacements += self.displacement - 1

            distance = (
                abs(galaxy_a[0] - galaxy_b[0])
                + x_displacements
                + abs(galaxy_a[1] - galaxy_b[1])
                + y_displacements
            )

            total_distance += distance

        return total_distance


def runner(document: list[str]) -> int:
    grid = Grid(
        space=[list(line) for line in document],
        displacement=2,
    )

    grid.expand()

    grid.pair_galaxies()

    return grid.calculate_galaxy_combo_distances()


@pytest.mark.parametrize(
    "filename,output",
    [
        ("example-1.txt", 374),
        ("example-2.txt", 9550717),
    ],
)
def test_runner(filename: str, output: int) -> None:
    with open(Path(__file__).with_name(filename)) as file:
        result = runner(file.read().splitlines())

        assert result == output
`}),e.jsxs("p",{children:["Answer: ",e.jsx("code",{children:"9,550,717"})]}),e.jsx(n,{}),e.jsx(a,{hash:"part-2-prompt",children:"Part 2 – Prompt"}),e.jsxs("p",{children:["The galaxies are much ",e.jsx("strong",{children:"older"})," (and thus much"," ",e.jsx("strong",{children:"farther apart"}),") than the researcher initially estimated."]}),e.jsxs("p",{children:["Now, instead of the expansion you did before, make each empty row or column"," ",e.jsx("strong",{children:"one million times"})," larger. That is, each empty row should be replaced with ",e.jsx("code",{children:"1000000"})," empty rows, and each empty column should be replaced with ",e.jsx("code",{children:"1000000"})," empty columns."]}),e.jsxs("p",{children:["(In the example above, if each empty row or column were merely ",e.jsx("code",{children:"10"})," times larger, the sum of the shortest paths between every pair of galaxies would be"," ",e.jsx("strong",{children:e.jsx("code",{children:"1030"})}),". If each empty row or column were merely ",e.jsx("code",{children:"100"})," times larger, the sum of the shortest paths between every pair of galaxies would be"," ",e.jsx("strong",{children:e.jsx("code",{children:"8410"})}),". However, your universe will need to expand far beyond these values.)"]}),e.jsxs("p",{children:["Starting with the same initial image, expand the universe according to these new rules, then find the length of the shortest path between every pair of galaxies.",e.jsx("strong",{children:"What is the sum of these lengths?"})]}),e.jsx(a,{hash:"part-2-solution",children:"Part 2 – Solution"}),e.jsxs("p",{children:["Exactly the same as Part 1, but use a displacement of ",e.jsx("code",{children:"1,000,000"})," instead of ",e.jsx("code",{children:"2"}),"."]}),e.jsx(s,{content:`from dataclasses import dataclass, field
from itertools import combinations
from pathlib import Path

import pytest


@dataclass
class Grid:
    space: list[list[str]]
    displacement: int
    galaxies: list[tuple[int, int]] = field(default_factory=list)
    galaxy_combos: list[tuple[tuple[int, int], tuple[int, int]]] = field(
        default_factory=list
    )

    rows_displaced: list[int] = field(default_factory=list)
    columns_displaced: list[int] = field(default_factory=list)

    def expand(self) -> None:
        # Expand the rows
        for index, row in enumerate(self.space):
            if all([char == "." for char in row]):
                self.rows_displaced.append(index)

        # Expand the columns
        for x_index in range(len(self.space[0])):
            if all(
                [
                    self.space[y_index][x_index] == "."
                    for y_index in range(len(self.space))
                ]
            ):
                self.columns_displaced.append(x_index)

    def pair_galaxies(self) -> None:
        for y_index, row in enumerate(self.space):
            for x_index, character in enumerate(row):
                if character == "#":
                    self.galaxies.append((x_index, y_index))

        for galaxy_combo in combinations(self.galaxies, 2):
            self.galaxy_combos.append(galaxy_combo)

    def calculate_galaxy_combo_distances(self) -> int:
        total_distance = 0

        for galaxy_a, galaxy_b in self.galaxy_combos:
            x_displacements = 0
            y_displacements = 0

            for column in self.columns_displaced:
                if (
                    galaxy_a[0] > column > galaxy_b[0]
                    or galaxy_a[0] < column < galaxy_b[0]
                ):
                    x_displacements += self.displacement - 1

            for row in self.rows_displaced:
                if galaxy_a[1] > row > galaxy_b[1] or galaxy_a[1] < row < galaxy_b[1]:
                    y_displacements += self.displacement - 1

            distance = (
                abs(galaxy_a[0] - galaxy_b[0])
                + x_displacements
                + abs(galaxy_a[1] - galaxy_b[1])
                + y_displacements
            )

            total_distance += distance

        return total_distance


def runner(document: list[str]) -> int:
    grid = Grid(
        space=[list(line) for line in document],
        displacement=1000000,
    )

    grid.expand()

    grid.pair_galaxies()

    return grid.calculate_galaxy_combo_distances()


@pytest.mark.parametrize(
    "filename,output",
    [
        ("example-1.txt", 82000210),
        ("example-2.txt", 648458253817),
    ],
)
def test_runner(filename: str, output: int) -> None:
    with open(Path(__file__).with_name(filename)) as file:
        result = runner(file.read().splitlines())

        assert result == output
`}),e.jsxs("p",{children:["Answer: ",e.jsx("code",{children:"648,458,253,817"})]}),e.jsx(n,{}),e.jsx(a,{hash:"recap",children:"Recap"}),e.jsxs(l,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Day"}),e.jsx("th",{children:"Part 1 Time"}),e.jsx("th",{children:"Part 1 Rank"}),e.jsx("th",{children:"Part 2 Time"}),e.jsx("th",{children:"Part 2 Rank"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"11"}),e.jsx("td",{children:"00:30:42"}),e.jsx("td",{children:"3,942"}),e.jsx("td",{children:"02:24:34"}),e.jsx("td",{children:"9,580"})]})})]}),e.jsx("p",{children:"Part 1 was fairly straightforward. I got stuck on Part 2 for so long because of an off-by-one error when I double-counted rows/columns, which didn't occur in Part 1."}),e.jsx("p",{children:"After solving Part 2, I updated the Part 1 code to match."})]})};export{u as component};
