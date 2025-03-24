import{j as e}from"./index-PqC9iza9.js";import{P as t,a as s}from"./code-block-D1IX-jam.js";import{B as n}from"./layout-BDi6-wQ4.js";import{H as r}from"./header-DiOk6VOn.js";import{T as a}from"./table-BDCiqE9D.js";import"./button-DlkBeRnu.js";import"./routeInfo-BgSgfEJj.js";const b=function(){return e.jsxs(e.Fragment,{children:[e.jsx(n,{}),e.jsx(r,{hash:"part-1-prompt",children:"Part 1 – Prompt"}),e.jsx("p",{children:"You're launched high into the atmosphere! The apex of your trajectory just barely reaches the surface of a large island floating in the sky. You gently land in a fluffy pile of leaves. It's quite cold, but you don't see much snow. An Elf runs over to greet you."}),e.jsx("p",{children:"The Elf explains that you've arrived at Snow Island and apologizes for the lack of snow. He'll be happy to explain the situation, but it's a bit of a walk, so you have some time. They don't get many visitors up here; would you like to play a game in the meantime?"}),e.jsx("p",{children:"As you walk, the Elf shows you a small bag and some cubes which are either red, green, or blue. Each time you play this game, he will hide a secret number of cubes of each color in the bag, and your goal is to figure out information about the number of cubes."}),e.jsx("p",{children:"To get information, once a bag has been loaded with cubes, the Elf will reach into the bag, grab a handful of random cubes, show them to you, and then put them back in the bag. He'll do this a few times per game."}),e.jsxs("p",{children:["You play several games and record the information from each game (your puzzle input). Each game is listed with its ID number (like the ",e.jsx("code",{children:"11"})," in"," ",e.jsx("code",{children:"Game 11: ..."}),") followed by a semicolon-separated list of subsets of cubes that were revealed from the bag (like ",e.jsx("code",{children:"3 red, 5 green, 4 blue"}),")."]}),e.jsx("p",{children:"For example, the record of a few games might look like this:"}),e.jsx(t,{content:`Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`}),e.jsx("p",{children:"In game 1, three sets of cubes are revealed from the bag (and then put back again). The first set is 3 blue cubes and 4 red cubes; the second set is 1 red cube, 2 green cubes, and 6 blue cubes; the third set is only 2 green cubes."}),e.jsxs("p",{children:["The Elf would first like to know which games would have been possible if the bag contained ",e.jsx("strong",{children:"only 12 red cubes, 13 green cubes, and 14 blue cubes"}),"?"]}),e.jsxs("p",{children:["In the example above, games 1, 2, and 5 would have been possible if the bag had been loaded with that configuration. However, game 3 would have been"," ",e.jsx("strong",{children:"impossible"})," because at one point the Elf showed you 20 red cubes at once; similarly, game 4 would also have been ",e.jsx("strong",{children:"impossible"})," because the Elf showed you 15 blue cubes at once. If you add up the IDs of the games that would have been possible, you get"," ",e.jsx("strong",{children:e.jsx("code",{children:"8"})}),"."]}),e.jsxs("p",{children:["Determine which games would have been possible if the bag had been loaded with only 12 red cubes, 13 green cubes, and 14 blue cubes.",e.jsx("strong",{children:"What is the sum of the IDs of those games?"})]}),e.jsx(r,{hash:"part-1-solution",children:"Part 1 – Solution"}),e.jsx("p",{children:"Extract the game number from each line, check if each cube counts were possible, and add the game numbers for the possible games up."}),e.jsx(s,{content:`from pathlib import Path

import pytest


def is_possible(score: str, red: int, green: int, blue: int) -> bool:
    if "red" in score and int(score.replace(" red", "")) > red:
        return False

    if "green" in score and int(score.replace(" green", "")) > green:
        return False

    if "blue" in score and int(score.replace(" blue", "")) > blue:
        return False

    return True


def runner(document: list[str], red: int, green: int, blue: int) -> int:
    total = 0

    for line in document:
        possible = True

        game_text, ball_text = line.split(": ")

        # Extract game number
        game_number = int(str(game_text).replace("Game ", ""))

        # Check if scores are possible
        for scores in ball_text.split(";"):
            for score in scores.split(", "):
                if not is_possible(score, red, green, blue):
                    possible = False

        if possible:
            total += game_number

    return total


@pytest.mark.parametrize(
    "filename,total",
    [
        ("example-1.txt", 8),
        ("example-2.txt", 2505),
    ],
)
def test_runner(filename: str, total: int) -> None:
    with open(Path(__file__).with_name(filename)) as file:
        result = runner(file.read().splitlines(), red=12, green=13, blue=14)
        assert result == total
`}),e.jsxs("p",{children:["Answer: ",e.jsx("code",{children:"2,505"})]}),e.jsx(r,{hash:"part-2-prompt",children:"Part 2 – Prompt"}),e.jsx("p",{children:"The Elf says they've stopped producing snow because they aren't getting any water! He isn't sure why the water stopped; however, he can show you how to get to the water source to check it out for yourself. It's just up ahead!"}),e.jsxs("p",{children:["As you continue your walk, the Elf poses a second question: in each game you played, what is the ",e.jsx("strong",{children:"fewest number of cubes of each color"})," that could have been in the bag to make the game possible?"]}),e.jsx("p",{children:"Again consider the example games from earlier:"}),e.jsx(t,{content:`Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`}),e.jsxs("ul",{children:[e.jsx("li",{children:"In game 1, the game could have been played with as few as 4 red, 2 green, and 6 blue cubes. If any color had even one fewer cube, the game would have been impossible."}),e.jsx("li",{children:"Game 2 could have been played with a minimum of 1 red, 3 green, and 4 blue cubes."}),e.jsx("li",{children:"Game 3 must have been played with at least 20 red, 13 green, and 6 blue cubes."}),e.jsx("li",{children:"Game 4 required at least 14 red, 3 green, and 15 blue cubes."}),e.jsx("li",{children:"Game 5 needed no fewer than 6 red, 3 green, and 2 blue cubes in the bag."})]}),e.jsxs("p",{children:["The ",e.jsx("strong",{children:"power"})," of a set of cubes is equal to the numbers of red, green, and blue cubes multiplied together. The ",e.jsx("strong",{children:"power"})," of the minimum set of cubes in game 1 is ",e.jsx("code",{children:"48"}),". In games 2-5 it was ",e.jsx("code",{children:"12"}),","," ",e.jsx("code",{children:"1560"}),", ",e.jsx("code",{children:"630"}),", and ",e.jsx("code",{children:"36"}),", respectively. Adding up these five powers produces the sum"," ",e.jsx("strong",{children:e.jsx("code",{children:"2286"})}),"."]}),e.jsxs("p",{children:["For each game, find the minimum set of cubes that must have been present.",e.jsx("strong",{children:"What is the sum of the power of these sets?"})]}),e.jsx(r,{hash:"part-2-solution",children:"Part 2 – Solution"}),e.jsx("p",{children:"The solution for Part 2 is unrelated to Part 1."}),e.jsx("p",{children:"Simply extract the cube counts for each color and set the max cube count accordingly."}),e.jsx(s,{content:`from pathlib import Path

import pytest


def runner(document: list[str]) -> int:
    powers = 0

    for line in document:
        red = 0
        green = 0
        blue = 0

        _, ball_text = line.split(": ")

        for scores in ball_text.split(";"):
            for score in scores.split(", "):
                if "red" in score:
                    red = max(red, int(score.replace(" red", "")))

                if "green" in score:
                    green = max(green, int(score.replace(" green", "")))

                if "blue" in score:
                    blue = max(blue, int(score.replace(" blue", "")))

        powers += red * green * blue

    return powers


@pytest.mark.parametrize(
    "filename,total",
    [
        ("example-1.txt", 2286),
        ("example-2.txt", 70265),
    ],
)
def test_runner(filename: str, total: int) -> None:
    with open(Path(__file__).with_name(filename)) as file:
        result = runner(file.read().splitlines())

        assert result == total
`}),e.jsxs("p",{children:["Answer: ",e.jsx("code",{children:"70,265"})]}),e.jsx(r,{hash:"recap",children:"Recap"}),e.jsxs(a,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Day"}),e.jsx("th",{children:"Part 1 Time"}),e.jsx("th",{children:"Part 1 Rank"}),e.jsx("th",{children:"Part 2 Time"}),e.jsx("th",{children:"Part 2 Rank"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"2"}),e.jsx("td",{children:"00:15:33"}),e.jsx("td",{children:"3,061"}),e.jsx("td",{children:"00:21:22"}),e.jsx("td",{children:"3,179"})]})})]}),e.jsx("p",{children:"Much better than yesterday, my time was much better and I got the correct solution on my first submission for each part 😎."}),e.jsx("p",{children:"This was another super simple puzzle, the most time-consuming part was figuring out how to extract data from the string. My solution is fine, but I really hate the hardcoded color checks. But it works so ¯\\_(ツ)_/¯."}),e.jsx("p",{children:"May be worth doing some code cleanup and figure out some reusable utility functions. I'd really like to have a cleaner way to extract structured data from strings (and I don't really want to use regex 😒)."})]})};export{b as component};
