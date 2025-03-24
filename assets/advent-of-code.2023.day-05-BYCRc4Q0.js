import{j as e,aJ as r}from"./index-CwtsGJj3.js";import{P as s,a as o}from"./code-block-CHCiU50r.js";import{B as i}from"./layout-Cohubq0h.js";import{H as t}from"./header-B7Z-ZQsD.js";import{T as a}from"./table-C6tbeujV.js";import{S as n}from"./separator-B6g9dnjl.js";import"./button-D317vur7.js";import"./routeInfo-Bh0-5ykf.js";const f=function(){return e.jsxs(e.Fragment,{children:[e.jsx(i,{to:r.fullPath}),e.jsx(t,{hash:"part-1-prompt",children:"Part 1 – Prompt"}),e.jsx("p",{children:'You take the boat and find the gardener right where you were told he would be: managing a giant "garden" that looks more to you like a farm.'}),e.jsxs("p",{children:['"A water source? Island Island ',e.jsx("strong",{children:"is"}),` the water source!" You point out that Snow Island isn't receiving any water.`]}),e.jsxs("p",{children:['"Oh, we had to stop the water because we ',e.jsx("strong",{children:"ran out of sand"}),` to filter it with! Can't make snow with dirty water. Don't worry, I'm sure we'll get more sand soon; we only turned off the water a few days... weeks... oh no." His face sinks into a look of horrified realization.`]}),e.jsx("p",{children:`"I've been so busy making sure everyone here has food that I completely forgot to check why we stopped getting more sand! There's a ferry leaving soon that is headed over in that direction - it's much faster than your boat. Could you please go check it out?"`}),e.jsxs("p",{children:['You barely have time to agree to this request when he brings up another. "While you wait for the ferry, maybe you can help us with our'," ",e.jsx("strong",{children:"food production problem"}),`. The latest Island Island Almanac just arrived and we're having trouble making sense of it."`]}),e.jsxs("p",{children:["The almanac (your puzzle input) lists all of the seeds that need to be planted. It also lists what type of soil to use with each kind of seed, what type of fertilizer to use with each kind of soil, what type of water to use with each kind of fertilizer, and so on. Every type of seed, soil, fertilizer and so on is identified with a number, but numbers are reused by each category - that is, soil"," ",e.jsx("code",{children:"123"})," and fertilizer ",e.jsx("code",{children:"123"})," aren't necessarily related to each other."]}),e.jsx("p",{children:"For example:"}),e.jsx(s,{content:`seeds: 79 14 55 13

seed-to-soil map:
50 98 2
52 50 48

soil-to-fertilizer map:
0 15 37
37 52 2
39 0 15

fertilizer-to-water map:
49 53 8
0 11 42
42 0 7
57 7 4

water-to-light map:
88 18 7
18 25 70

light-to-temperature map:
45 77 23
81 45 19
68 64 13

temperature-to-humidity map:
0 69 1
1 0 69

humidity-to-location map:
60 56 37
56 93 4`}),e.jsxs("p",{children:["The almanac starts by listing which seeds need to be planted: seeds ",e.jsx("code",{children:"79"}),","," ",e.jsx("code",{children:"14"}),", ",e.jsx("code",{children:"55"}),", and ",e.jsx("code",{children:"13"}),"."]}),e.jsxs("p",{children:["The rest of the almanac contains a list of ",e.jsx("strong",{children:"maps"})," which describe how to convert numbers from a ",e.jsx("strong",{children:"source category"})," into numbers in a"," ",e.jsx("strong",{children:"destination category"}),". That is, the section that starts with"," ",e.jsx("code",{children:"seed-to-soil map:"})," describes how to convert a"," ",e.jsx("strong",{children:"seed number"})," (the source) to a ",e.jsx("strong",{children:"soil number"})," (the destination). This lets the gardener and his team know which soil to use with which seeds, which water to use with which fertilizer, and so on."]}),e.jsxs("p",{children:["Rather than list every source number and its corresponding destination number one by one, the maps describe entire ",e.jsx("strong",{children:"ranges"})," of numbers that can be converted. Each line within a map contains three numbers: the"," ",e.jsx("strong",{children:"destination range start"}),", the ",e.jsx("strong",{children:"source range start"}),", and the ",e.jsx("strong",{children:"range length"}),"."]}),e.jsxs("p",{children:["Consider again the example ",e.jsx("code",{children:"seed-to-soil map"}),":"]}),e.jsx(s,{content:`50 98 2
52 50 48`}),e.jsxs("p",{children:["The first line has a ",e.jsx("strong",{children:"destination range start"})," of ",e.jsx("code",{children:"50"}),", a"," ",e.jsx("strong",{children:"source range start"})," of ",e.jsx("code",{children:"98"}),", and a range length of"," ",e.jsx("code",{children:"2"}),". This line means that the source range starts at ",e.jsx("code",{children:"98"})," and contains two values: ",e.jsx("code",{children:"98"})," and ",e.jsx("code",{children:"99"}),". The destination range is the same length, but it starts at ",e.jsx("code",{children:"50"}),", so its two values are"," ",e.jsx("code",{children:"50"})," and ",e.jsx("code",{children:"51"}),". With this information, you know that seed number ",e.jsx("code",{children:"98"})," corresponds to soil number ",e.jsx("code",{children:"50"})," and that seed number ",e.jsx("code",{children:"99"})," corresponds to soil number ",e.jsx("code",{children:"51"}),"."]}),e.jsxs("p",{children:["The second line means that the source range starts at ",e.jsx("code",{children:"50"})," and contains"," ",e.jsx("code",{children:"48"})," values: ",e.jsx("code",{children:"50"}),", ",e.jsx("code",{children:"51"}),", ..., ",e.jsx("code",{children:"96"}),","," ",e.jsx("code",{children:"97"}),". This corresponds to a destination range starting at ",e.jsx("code",{children:"52"})," ","and also containing ",e.jsx("code",{children:"48"})," values: ",e.jsx("code",{children:"52"}),", ",e.jsx("code",{children:"53"}),", ...,"," ",e.jsx("code",{children:"98"}),", ",e.jsx("code",{children:"99"}),". So, seed number ",e.jsx("code",{children:"53"})," corresponds to soil number ",e.jsx("code",{children:"55"}),"."]}),e.jsxs("p",{children:["Any source numbers that ",e.jsx("strong",{children:"aren't mapped"})," correspond to the"," ",e.jsx("strong",{children:"same"})," destination number. So, seed number ",e.jsx("code",{children:"10"})," ","corresponds to soil number ",e.jsx("code",{children:"10"}),"."]}),e.jsx("p",{children:"So, the entire list of seed numbers and their corresponding soil numbers looks like this:"}),e.jsx(s,{content:`seed  soil
0     0
1     1
...   ...
48    48
49    49
50    52
51    53
...   ...
96    98
97    99
98    50
99    51`}),e.jsx("p",{children:"With this map, you can look up the soil number required for each initial seed number:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Seed number ",e.jsx("code",{children:"79"})," corresponds to soil number ",e.jsx("code",{children:"81"}),"."]}),e.jsxs("li",{children:["Seed number ",e.jsx("code",{children:"14"})," corresponds to soil number ",e.jsx("code",{children:"14"}),"."]}),e.jsxs("li",{children:["Seed number ",e.jsx("code",{children:"55"})," corresponds to soil number ",e.jsx("code",{children:"57"}),"."]}),e.jsxs("li",{children:["Seed number ",e.jsx("code",{children:"13"})," corresponds to soil number ",e.jsx("code",{children:"13"}),"."]})]}),e.jsxs("p",{children:["The gardener and his team want to get started as soon as possible, so they'd like to know the closest location that needs a seed. Using these maps, find the"," ",e.jsx("strong",{children:"lowest location number that corresponds to any of the initial seeds"}),". To do this, you'll need to convert each seed number through other categories until you can find its corresponding ",e.jsx("strong",{children:"location number"}),". In this example, the corresponding types are:"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Seed ",e.jsx("code",{children:"79"}),", soil ",e.jsx("code",{children:"81"}),", fertilizer ",e.jsx("code",{children:"81"}),", water"," ",e.jsx("code",{children:"81"}),", light ",e.jsx("code",{children:"74"}),", temperature ",e.jsx("code",{children:"78"}),", humidity"," ",e.jsx("code",{children:"78"}),","," ",e.jsxs("strong",{children:["location ",e.jsx("code",{children:"82"})]}),"."]}),e.jsxs("li",{children:["Seed ",e.jsx("code",{children:"14"}),", soil ",e.jsx("code",{children:"14"}),", fertilizer ",e.jsx("code",{children:"53"}),", water"," ",e.jsx("code",{children:"49"}),", light ",e.jsx("code",{children:"42"}),", temperature ",e.jsx("code",{children:"42"}),", humidity"," ",e.jsx("code",{children:"43"}),","," ",e.jsxs("strong",{children:["location ",e.jsx("code",{children:"43"})]}),"."]}),e.jsxs("li",{children:["Seed ",e.jsx("code",{children:"55"}),", soil ",e.jsx("code",{children:"57"}),", fertilizer ",e.jsx("code",{children:"57"}),", water"," ",e.jsx("code",{children:"53"}),", light ",e.jsx("code",{children:"46"}),", temperature ",e.jsx("code",{children:"82"}),", humidity"," ",e.jsx("code",{children:"82"}),","," ",e.jsxs("strong",{children:["location ",e.jsx("code",{children:"86"})]}),"."]}),e.jsxs("li",{children:["Seed ",e.jsx("code",{children:"13"}),", soil ",e.jsx("code",{children:"13"}),", fertilizer ",e.jsx("code",{children:"52"}),", water"," ",e.jsx("code",{children:"41"}),", light ",e.jsx("code",{children:"34"}),", temperature ",e.jsx("code",{children:"34"}),", humidity"," ",e.jsx("code",{children:"35"}),","," ",e.jsxs("strong",{children:["location ",e.jsx("code",{children:"35"})]}),"."]})]}),e.jsxs("p",{children:["So, the lowest location number in this example is"," ",e.jsx("strong",{children:e.jsx("code",{children:"35"})}),"."]}),e.jsx("p",{children:e.jsx("strong",{children:"What is the lowest location number that corresponds to any of the initial seed numbers?"})}),e.jsx(t,{hash:"part-1-solution",children:"Part 1 – Solution"}),e.jsx("p",{children:"For each seed, push it through all the layers of mapping with range/bounds checking."}),e.jsx(o,{content:`from pathlib import Path

import pytest


def runner(document: list[str], seeds: list[int]) -> int:
    locations: list[int] = []

    mode = "seed-to-soil-map:"

    for seed in seeds:
        soil = 0
        fertilizer = 0
        water = 0
        light = 0
        temperature = 0
        humidity = 0
        location = 0

        for line in document:
            if not line:
                pass

            elif ":" in line:
                mode = line

                if mode == "seed-to-soil map:":
                    soil = seed

                if mode == "soil-to-fertilizer map:":
                    fertilizer = soil

                if mode == "fertilizer-to-water map:":
                    water = fertilizer

                if mode == "water-to-light map:":
                    light = water

                if mode == "light-to-temperature map:":
                    temperature = light

                if mode == "temperature-to-humidity map:":
                    humidity = temperature

                if mode == "humidity-to-location map:":
                    location = humidity

            else:
                destination_start_str, source_start_str, range_length_str = line.split(
                    " "
                )

                destination_start = int(destination_start_str)
                source_start = int(source_start_str)
                range_length = int(range_length_str)

                if (
                    mode == "seed-to-soil map:"
                    and source_start <= seed < source_start + range_length
                ):
                    soil = seed + (destination_start - source_start)

                if (
                    mode == "soil-to-fertilizer map:"
                    and source_start <= soil < source_start + range_length
                ):
                    fertilizer = soil + (destination_start - source_start)

                if (
                    mode == "fertilizer-to-water map:"
                    and source_start <= fertilizer < source_start + range_length
                ):
                    water = fertilizer + (destination_start - source_start)

                if (
                    mode == "water-to-light map:"
                    and source_start <= water < source_start + range_length
                ):
                    light = water + (destination_start - source_start)

                if (
                    mode == "light-to-temperature map:"
                    and source_start <= light < source_start + range_length
                ):
                    temperature = light + (destination_start - source_start)

                if (
                    mode == "temperature-to-humidity map:"
                    and source_start <= temperature < source_start + range_length
                ):
                    humidity = temperature + (destination_start - source_start)

                if (
                    mode == "humidity-to-location map:"
                    and source_start <= humidity < source_start + range_length
                ):
                    location = humidity + (destination_start - source_start)

        locations.append(location)

    return min(locations)


@pytest.mark.parametrize(
    "filename,seeds,total",
    [
        ("example-1.txt", [79, 14, 55, 13], 35),
        (
            "example-2.txt",
            [
                1972667147,
                405592018,
                1450194064,
                27782252,
                348350443,
                61862174,
                3911195009,
                181169206,
                626861593,
                138786487,
                2886966111,
                275299008,
                825403564,
                478003391,
                514585599,
                6102091,
                2526020300,
                15491453,
                3211013652,
                546191739,
            ],
            662197086,
        ),
    ],
)
def test_runner(filename: str, seeds: list[int], total: int) -> None:
    with open(Path(__file__).with_name(filename)) as file:
        result = runner(file.read().splitlines(), seeds)

        assert result == total
`}),e.jsxs("p",{children:["Answer: ",e.jsx("code",{children:"662,197,086"})]}),e.jsx(n,{}),e.jsx(t,{hash:"part-2-prompt",children:"Part 2 – Prompt"}),e.jsxs("p",{children:["Everyone will starve if you only plant such a small number of seeds. Re-reading the almanac, it looks like the seeds: line actually describes"," ",e.jsx("strong",{children:"ranges of seed numbers"}),"."]}),e.jsxs("p",{children:["The values on the initial ",e.jsx("code",{children:"seeds:"})," line come in pairs. Within each pair, the first value is the ",e.jsx("strong",{children:"start"})," of the range and the second value is the ",e.jsx("strong",{children:"length"})," of the range. So, in the first line of the example above:"]}),e.jsx("pre",{children:e.jsx("code",{children:"seeds: 79 14 55 13"})}),e.jsxs("p",{children:["This line describes two ranges of seed numbers to be planted in the garden. The first range starts with seed number ",e.jsx("code",{children:"79"})," and contains ",e.jsx("code",{children:"14"})," ","values: ",e.jsx("code",{children:"79"}),", ",e.jsx("code",{children:"80"}),", ..., ",e.jsx("code",{children:"91"}),", ",e.jsx("code",{children:"92"}),". The second range starts with seed number ",e.jsx("code",{children:"55"})," and contains ",e.jsx("code",{children:"13"})," ","values: ",e.jsx("code",{children:"55"}),", ",e.jsx("code",{children:"56"}),", ..., ",e.jsx("code",{children:"66"}),", ",e.jsx("code",{children:"67"}),"."]}),e.jsxs("p",{children:["Now, rather than considering four seed numbers, you need to consider a total of"," ",e.jsx("strong",{children:e.jsx("code",{children:"27"})})," ","seed numbers."]}),e.jsxs("p",{children:["In the above example, the lowest location number can be obtained from seed number"," ",e.jsx("code",{children:"82"}),", which corresponds to soil ",e.jsx("code",{children:"84"}),", fertilizer"," ",e.jsx("code",{children:"84"}),", water ",e.jsx("code",{children:"84"}),", light ",e.jsx("code",{children:"77"}),", temperature"," ",e.jsx("code",{children:"45"}),", humidity ",e.jsx("code",{children:"46"}),", and"," ",e.jsxs("strong",{children:["location ",e.jsx("code",{children:"46"})]}),". So, the lowest location number is"," ",e.jsx("strong",{children:e.jsx("code",{children:"46"})}),"."]}),e.jsxs("p",{children:["Consider all of the initial seed numbers listed in the ranges on the first line of the almanac.",e.jsx("strong",{children:"What is the lowest location number that corresponds to any of the initial seed numbers?"})]}),e.jsx(t,{hash:"part-2-solution",children:"Part 2 – Solution"}),e.jsx("p",{children:"Instead of iterating through one seed at a time, we instead fully check each layer one at a time. To fully check a layer, iterate through each seed/range combination, and see where the bounds of the seeds are in comparison to the bounds of each position-set. There are five possible scenarios, which I'll demonstrate with some examples:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Seed start/stop = [5, 10], position start/stop = [6, 9]: Seed range fully contains the position range"}),e.jsx("li",{children:"Seed start/stop = [5, 9], position start/stop = [6, 10]: Seed range overlaps the position range on the high end"}),e.jsx("li",{children:"Seed start/stop = [6, 10], position start/stop = [5, 9]: Seed range overlaps the position range on the low end"}),e.jsx("li",{children:"Seed start/stop = [6, 9], position start/stop = [5, 10]: Seed range is fully contained within the position range"}),e.jsx("li",{children:"Seed start/stop = [1, 5], position start/stop = [6, 10]: Seed range does not overlap the position range"})]}),e.jsx("p",{children:"Depending on what scenario occurs, we need to add more checks to the current layer and/or add more checks to the next layer."}),e.jsx("p",{children:"By checking bounds, we can cover an enormous range of values very quickly."}),e.jsx(o,{content:`from collections.abc import Iterator
from dataclasses import dataclass
from pathlib import Path
from typing import Any

import pytest


@dataclass(frozen=True)
class Location:
    start: int
    end: int


@dataclass(frozen=True)
class Map:
    start: int
    end: int
    offset: int


def chunks(data: list[Any], size: int) -> Iterator[list[Any]]:
    """Yield successive chunks from data."""
    for i in range(0, len(data), size):
        yield data[i : i + size]


def runner(document: list[str], seeds: list[int]) -> int:
    modes = [
        "seed-to-soil map:",
        "soil-to-fertilizer map:",
        "fertilizer-to-water map:",
        "water-to-light map:",
        "light-to-temperature map:",
        "temperature-to-humidity map:",
        "humidity-to-location map:",
        "final",
    ]

    mode_to_locations: dict[str, list[Location]] = {
        "seed-to-soil map:": [
            Location(start=start, end=start + size - 1)
            for start, size in chunks(seeds, 2)
        ],
        "soil-to-fertilizer map:": [],
        "fertilizer-to-water map:": [],
        "water-to-light map:": [],
        "light-to-temperature map:": [],
        "temperature-to-humidity map:": [],
        "humidity-to-location map:": [],
    }

    mode_to_map: dict[str, list[Map]] = {
        "seed-to-soil map:": [],
        "soil-to-fertilizer map:": [],
        "fertilizer-to-water map:": [],
        "water-to-light map:": [],
        "light-to-temperature map:": [],
        "temperature-to-humidity map:": [],
        "humidity-to-location map:": [],
    }

    mode = "seed-to-soil map:"

    for line in document:
        if not line:
            pass

        elif ":" in line:
            mode = line

        else:
            destination_start_str, source_start_str, range_length_str = line.split(" ")

            destination_start = int(destination_start_str)
            source_start = int(source_start_str)
            range_length = int(range_length_str)

            mode_to_map[mode].append(
                Map(
                    start=source_start,
                    end=source_start + range_length - 1,
                    offset=destination_start - source_start,
                )
            )

    for index, mode in enumerate(modes[:-1]):
        maps = mode_to_map[mode]
        locations = mode_to_locations[mode]

        next_locations: list[Location] = []

        while locations:
            location = locations.pop()
            found = False

            for map in maps:
                if (
                    map.start <= location.start <= map.end
                    and map.start <= location.end <= map.end
                ):
                    next_locations.append(
                        Location(
                            start=location.start + map.offset,
                            end=location.end + map.offset,
                        )
                    )
                    found = True
                    break

                elif map.start <= location.start <= map.end:
                    next_locations.append(
                        Location(
                            start=location.start + map.offset,
                            end=map.end + map.offset,
                        )
                    )
                    locations.append(
                        Location(
                            start=map.end + 1,
                            end=location.end,
                        )
                    )
                    found = True
                    break

                elif map.start <= location.end <= map.end:
                    locations.append(
                        Location(
                            start=location.start,
                            end=map.start - 1,
                        )
                    )
                    next_locations.append(
                        Location(
                            start=map.start + map.offset,
                            end=location.end + map.offset,
                        )
                    )
                    found = True
                    break

                elif map.start > location.start and map.end < location.end:
                    locations.append(
                        Location(
                            start=map.end + 1,
                            end=location.end,
                        )
                    )
                    locations.append(
                        Location(
                            start=location.start,
                            end=map.start - 1,
                        )
                    )
                    next_locations.append(
                        Location(
                            start=map.start + map.offset,
                            end=map.end + map.offset,
                        )
                    )
                    found = True
                    break

            if not found:
                next_locations.append(location)

        mode_to_locations[modes[index + 1]] = next_locations

    final_locations = mode_to_locations["final"]

    return min([location.start for location in final_locations])


@pytest.mark.parametrize(
    "filename,seeds,total",
    [
        ("example-1.txt", [79, 14, 55, 13], 46),
        (
            "example-2.txt",
            [
                1972667147,
                405592018,
                1450194064,
                27782252,
                348350443,
                61862174,
                3911195009,
                181169206,
                626861593,
                138786487,
                2886966111,
                275299008,
                825403564,
                478003391,
                514585599,
                6102091,
                2526020300,
                15491453,
                3211013652,
                546191739,
            ],
            52510809,
        ),
    ],
)
def test_runner(filename: str, seeds: list[int], total: int) -> None:
    with open(Path(__file__).with_name(filename)) as file:
        result = runner(file.read().splitlines(), seeds)

        assert result == total
`}),e.jsxs("p",{children:["Answer: ",e.jsx("code",{children:"52,510,809"})]}),e.jsx(n,{}),e.jsx(t,{hash:"recap",children:"Recap"}),e.jsxs(a,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Day"}),e.jsx("th",{children:"Part 1 Time"}),e.jsx("th",{children:"Part 1 Rank"}),e.jsx("th",{children:"Part 2 Time"}),e.jsx("th",{children:"Part 2 Rank"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"5"}),e.jsx("td",{children:"00:35:47"}),e.jsx("td",{children:"4,028"}),e.jsx("td",{children:"02:31:26"}),e.jsx("td",{children:"5,566"})]})})]}),e.jsx("p",{children:"This was very hard to reason about and work through 😖."}),e.jsx("p",{children:"I'm just happy I made it through this problem without needing to go super late into the night."})]})};export{f as component};
