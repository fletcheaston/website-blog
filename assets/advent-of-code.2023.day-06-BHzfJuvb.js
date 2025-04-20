import{j as e,b6 as l,aG as i,I as o}from"./main-CV-jdQ_C.js";import{P as r,a as n}from"./code-block-BIvcJb77.js";import{B as d}from"./layout-BHv86BKp.js";import{H as t}from"./header-BtPm5KK-.js";import{T as a}from"./table-Dn-AaJC3.js";import{S as s}from"./separator-eCvJb-7k.js";import"./button-DiQvsG2T.js";const g=function(){return e.jsxs(e.Fragment,{children:[e.jsx(d,{to:l.fullPath}),e.jsx(t,{hash:"part-1-prompt",children:"Part 1 – Prompt"}),e.jsx("p",{children:"The ferry quickly brings you across Island Island. After asking around, you discover that there is indeed normally a large pile of sand somewhere near here, but you don't see anything besides lots of water and the small island where the ferry has docked."}),e.jsx("p",{children:'As you try to figure out what to do next, you notice a poster on a wall near the ferry dock. "Boat races! Open to the public! Grand prize is an all-expenses-paid trip to Desert Island!" That must be where the sand comes from! Best of all, the boat races are starting in just a few minutes.'}),e.jsxs("p",{children:["As part of signing up, you get a sheet of paper (your puzzle input) that lists the"," ",e.jsx("strong",{children:"time"})," allowed for each race and also the best"," ",e.jsx("strong",{children:"distance"})," ever recorded in that race. To guarantee you win the grand prize, you need to make sure you ",e.jsx("strong",{children:"go farther in each race"})," than the current record holder."]}),e.jsxs("p",{children:["The organizer brings you over to the area where the boat races are held. The boats are much smaller than you expected - they're actually ",e.jsx("strong",{children:"toy boats"}),", each with a big button on top. Holding down the button"," ",e.jsx("strong",{children:"charges the boat"}),", and releasing the button"," ",e.jsx("strong",{children:"allows the boat to move"}),". Boats move faster if their button was held longer, but time spent holding the button counts against the total race time. You can only hold the button at the start of the race, and boats don't move until the button is released."]}),e.jsx("p",{children:"For example:"}),e.jsx(r,{content:`Time:      7  15   30
Distance:  9  40  200`}),e.jsx("p",{children:"This document describes three races:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"The first race lasts 7 milliseconds. The record distance in this race is 9 millimeters."}),e.jsx("li",{children:"The second race lasts 15 milliseconds. The record distance in this race is 40 millimeters."}),e.jsx("li",{children:"The third race lasts 30 milliseconds. The record distance in this race is 200 millimeters."})]}),e.jsxs("p",{children:["Your toy boat has a starting speed of"," ",e.jsx("strong",{children:"zero millimeters per millisecond"}),". For each whole millisecond you spend at the beginning of the race holding down the button, the boat's speed increases by ",e.jsx("strong",{children:"one millimeter per millisecond"}),"."]}),e.jsx("p",{children:"So, because the first race lasts 7 milliseconds, you only have a few options:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Don't hold the button at all (that is, hold it for"," ",e.jsxs("strong",{children:[e.jsx("code",{children:"0"})," milliseconds"]}),") at the start of the race. The boat won't move; it will have traveled"," ",e.jsxs("strong",{children:[e.jsx("code",{children:"0"})," millimeters"]})," ","by the end of the race."]}),e.jsxs("li",{children:["Hold the button for"," ",e.jsxs("strong",{children:[e.jsx("code",{children:"1"})," millisecond"]})," ","at the start of the race. Then, the boat will travel at a speed of 1 millimeter per millisecond for 6 milliseconds, reaching a total distance traveled of"," ",e.jsxs("strong",{children:[e.jsx("code",{children:"6"})," millimeters"]}),"."]}),e.jsxs("li",{children:["Hold the button for"," ",e.jsxs("strong",{children:[e.jsx("code",{children:"2"})," milliseconds"]}),", giving the boat a speed of ",e.jsx("code",{children:"2"})," millimeters per millisecond. It will then get 5 milliseconds to move, reaching a total distance of"," ",e.jsxs("strong",{children:[e.jsx("code",{children:"10"})," millimeters"]}),"."]}),e.jsxs("li",{children:["Hold the button for"," ",e.jsxs("strong",{children:[e.jsx("code",{children:"3"})," milliseconds"]}),". After its remaining ",e.jsx("code",{children:"4"})," milliseconds of travel time, the boat will have gone"," ",e.jsxs("strong",{children:[e.jsx("code",{children:"12"})," millimeters"]}),"."]}),e.jsxs("li",{children:["Hold the button for"," ",e.jsxs("strong",{children:[e.jsx("code",{children:"4"})," milliseconds"]}),". After its remaining ",e.jsx("code",{children:"3"})," milliseconds of travel time, the boat will have gone"," ",e.jsxs("strong",{children:[e.jsx("code",{children:"12"})," millimeters"]}),"."]}),e.jsxs("li",{children:["Hold the button for"," ",e.jsxs("strong",{children:[e.jsx("code",{children:"5"})," milliseconds"]}),", causing the boat to travel a total of"," ",e.jsxs("strong",{children:[e.jsx("code",{children:"10"})," millimeters"]}),"."]}),e.jsxs("li",{children:["Hold the button for"," ",e.jsxs("strong",{children:[e.jsx("code",{children:"6"})," milliseconds"]}),", causing the boat to travel a total of"," ",e.jsxs("strong",{children:[e.jsx("code",{children:"6"})," millimeters"]}),"."]}),e.jsxs("li",{children:["Hold the button for"," ",e.jsxs("strong",{children:[e.jsx("code",{children:"7"})," milliseconds"]}),". That's the entire duration of the race. You never let go of the button. The boat can't move until you let you of the button. Please make sure you let go of the button so the boat gets to move."," ",e.jsxs("strong",{children:[e.jsx("code",{children:"0"})," millimeters"]}),"."]})]}),e.jsxs("p",{children:["Since the current record for this race is ",e.jsx("code",{children:"9"})," millimeters, there are actually"," ",e.jsx("strong",{children:e.jsx("code",{children:"4"})})," ","different ways you could win: you could hold the button for ",e.jsx("code",{children:"2"}),","," ",e.jsx("code",{children:"3"}),", ",e.jsx("code",{children:"4"}),", or ",e.jsx("code",{children:"5"})," milliseconds at the start of the race."]}),e.jsxs("p",{children:["In the second race, you could hold the button for at least ",e.jsx("code",{children:"4"})," ","milliseconds and at most ",e.jsx("code",{children:"11"})," milliseconds and beat the record, a total of"," ",e.jsx("strong",{children:e.jsx("code",{children:"8"})})," ","different ways to win."]}),e.jsxs("p",{children:["In the third race, you could hold the button for at least ",e.jsx("code",{children:"11"})," ","milliseconds and no more than ",e.jsx("code",{children:"19"})," milliseconds and still beat the record, a total of"," ",e.jsx("strong",{children:e.jsx("code",{children:"9"})})," ","ways you could win."]}),e.jsxs("p",{children:["To see how much margin of error you have, determine the"," ",e.jsx("strong",{children:"number of ways you can beat the record"})," in each race; in this example, if you multiply these values together, you get"," ",e.jsx("strong",{children:e.jsx("code",{children:"288"})})," ","(",e.jsx("code",{children:"4"})," _ ",e.jsx("code",{children:"8"})," _ ",e.jsx("code",{children:"9"}),")."]}),e.jsxs("p",{children:["Determine the number of ways you could beat the record in each race.",e.jsx("strong",{children:"What do you get if you multiply these numbers together?"})]}),e.jsx(t,{hash:"part-1-solution",children:"Part 1 – Brute-Force Solution"}),e.jsx("p",{children:"A very simple brute-force solution to the problem. For each time/distance pair:"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Iterate over all possible start times"}),e.jsx("li",{children:"Calculate the final speed"}),e.jsx("li",{children:"Calculate the remaining time"}),e.jsx("li",{children:"Calculate the distance covered"}),e.jsx("li",{children:"If the distance covered is greater than the required distance, increment the number of wins for this time/distance pair"}),e.jsx("li",{children:"Multiply all win counts together using a running total"})]}),e.jsx(n,{content:`def runner(times: list[int], distances: list[int]) -> int:
    total: int = 1

    for time, distance in zip(times, distances):
        race_wins = 0

        for time_start in range(time):
            speed = time_start
            remaining_time = time - time_start
            covered_distance = speed * remaining_time

            if covered_distance > distance:
                race_wins += 1

        total *= race_wins

    return total
`}),e.jsx(s,{}),e.jsx(t,{hash:"part-2-prompt",children:"Part 2 – Prompt"}),e.jsxs("p",{children:["As the race is about to start, you realize the piece of paper with race times and record distances you got earlier actually just has very bad kerning. There's really"," ",e.jsx("strong",{children:"only one race"})," - ignore the spaces between the numbers on each line."]}),e.jsx("p",{children:"So, the example from before:"}),e.jsx(r,{content:`Time:      7  15   30
Distance:  9  40  200`}),e.jsx("p",{children:"...now instead means this:"}),e.jsx(r,{content:`Time:      71530
Distance:  940200`}),e.jsxs("p",{children:["Now, you have to figure out how many ways there are to win this single race. In this example, the race lasts for"," ",e.jsxs("strong",{children:[e.jsx("code",{children:"71530"})," milliseconds"]})," ","and the record distance you need to beat is"," ",e.jsxs("strong",{children:[e.jsx("code",{children:"940200"})," millimeters"]}),". You could hold the button anywhere from ",e.jsx("code",{children:"14"})," to ",e.jsx("code",{children:"71516"})," ","milliseconds and beat the record, a total of"," ",e.jsx("strong",{children:e.jsx("code",{children:"71503"})})," ","ways!"]}),e.jsx("p",{children:e.jsx("strong",{children:"How many ways can you beat the record in this one much longer race?"})}),e.jsx(t,{hash:"part-2-solution",children:"Part 2 – Brute-Force Solution"}),e.jsx("p",{children:"Just a simplified version of the Part 1 solution, accepting only one time and distance."}),e.jsx(n,{content:`def runner(time: int, distance: int) -> int:
    race_wins = 0

    for time_start in range(time):
        speed = time_start
        remaining_time = time - time_start
        covered_distance = speed * remaining_time

        if covered_distance > distance:
            race_wins += 1

    return race_wins
`}),e.jsx(s,{}),e.jsx(t,{hash:"recap",children:"Recap"}),e.jsxs(a,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Day"}),e.jsx("th",{children:"Part 1 Time"}),e.jsx("th",{children:"Part 1 Rank"}),e.jsx("th",{children:"Part 2 Time"}),e.jsx("th",{children:"Part 2 Rank"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"6"}),e.jsx("td",{children:"00:09:44"}),e.jsx("td",{children:"2,544"}),e.jsx("td",{children:"00:11:33"}),e.jsx("td",{children:"1,636"})]})})]}),e.jsx("p",{children:"This was extremely easy, especially compared to the insanely difficult day 5 problem."}),e.jsxs("p",{children:["I went with a brute-force solution, which (thankfully) completed in a reasonable amount of time for Part 2 (~6 seconds). I really thought I would need to optimize this to get the solution, so maybe I was just lucky with a relatively small input value (",e.jsx("code",{children:"47,986,698"}),")."]}),e.jsx(s,{}),e.jsx(t,{hash:"optimized-solution-proof",children:"Optimized Solution (Proof)"}),e.jsx(s,{}),e.jsx("h3",{children:"Given:"}),e.jsx(i,{content:`$$
\\text{speed} = \\text{start time}
$$

$$
\\text{remaining time} = \\text{total time} - \\text{start time}
$$

$$
\\text{covered distance} = \\text{speed} * \\text{remaining time}
$$`}),e.jsx(s,{}),e.jsx("h3",{children:"Substitute:"}),e.jsx(i,{content:`$$
\\text{covered distance} = \\text{start time} * (\\text{total time} - \\text{start time})
$$`}),e.jsx(s,{}),e.jsx("h3",{children:"Distribute:"}),e.jsx(i,{content:`$$
\\text{covered distance} = (\\text{total time} * \\text{start time}) - \\text{start time}^2
$$`}),e.jsx(s,{}),e.jsxs("p",{children:["We know the ",e.jsx("code",{children:"start time"})," ranges from ",e.jsx("code",{children:"0"})," to ",e.jsx("code",{children:"time"}),". If we treat ",e.jsx("code",{children:"start time"})," as the x-axis and ",e.jsx("code",{children:"covered distance"})," ","as the y-axis, we can see the points form a parabola."]}),e.jsx(o,{src:"/blog/advent-of-code/2023/day-06/parabola.png",alt:"Parabola from points using Desmos",caption:e.jsxs(e.Fragment,{children:["Parabola from points using"," ",e.jsx("a",{href:"https://www.desmos.com/calculator",target:"_blank",children:"Desmos"})]})}),e.jsx("p",{children:"We want to find what points on the x-axis result in points on the y-axis above a certain value. If we use this formula:"}),e.jsx(i,{content:`$$
\\text{covered distance} = (\\text{total time} * \\text{start time}) - \\text{start time}^2
$$`}),e.jsxs("p",{children:["We can plug in the provided distance for ",e.jsx("code",{children:"covered distance"}),", the provided time for ",e.jsx("code",{children:"total time"}),", and solve for ",e.jsx("code",{children:"start time"}),". In our example above, let's find all ",e.jsx("code",{children:"start time"}),"(s) that result in"," ",e.jsx("code",{children:"covered distance"})," greater than a provided distance of ",e.jsx("code",{children:"20"}),"."]}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("code",{children:"covered distance = 20"})}),e.jsx("li",{children:e.jsx("code",{children:"total time = 10"})})]}),e.jsx(i,{content:`$$
20 = (10 * \\text{start time}) - \\text{start time}^2
$$

$$
0 = (10 * \\text{start time}) - \\text{start time}^2 - 20
$$

$$
0 = -\\text{start time}^2 + (10 * \\text{start time})  - 20
$$`}),e.jsx("p",{children:"We can then use the quadratic equation to solve for the roots."}),e.jsx(i,{content:`$$
x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}
$$`}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("code",{children:"a = -1"})}),e.jsx("li",{children:e.jsx("code",{children:"b = -10"})}),e.jsx("li",{children:e.jsx("code",{children:"c = -20"})})]}),e.jsx(i,{content:`$$
x = {-10 \\pm \\sqrt{10^2-4*-1*-20} \\over 2 * -1}
$$

$$
x = {-10 \\pm \\sqrt{100-80} \\over -2}
$$

$$
x = {-10 \\pm \\sqrt{20} \\over -2}
$$

$$
x = {-10 \\over -2} \\pm {\\sqrt{20} \\over -2}
$$

$$
x = {-10 \\over -2} \\pm {\\sqrt{5*4} \\over -2}
$$

$$
x = {-10 \\over -2} \\pm {2 * \\sqrt{5} \\over -2}
$$

$$
x = {-10 \\over -2} \\pm \\sqrt{5}
$$

$$
x = 5 \\pm \\sqrt{5}
$$

$$
x = 2.764, 7.236
$$`}),e.jsx(s,{}),e.jsx("h3",{children:"What does this mean?"}),e.jsxs("p",{children:["If we wait for more than"," ",e.jsxs("strong",{children:[e.jsx("code",{children:"2.764"})," milliseconds"]})," ","but less than"," ",e.jsxs("strong",{children:[e.jsx("code",{children:"7.236"})," milliseconds"]}),", our boat will have enough speed to cross the required"," ",e.jsx("strong",{children:"20 millimeter"})," distance."]}),e.jsxs("p",{children:["We simply add ",e.jsx("code",{children:"1"})," to the lower value and round it down (",e.jsx("code",{children:"2.764"})," ->",e.jsx("code",{children:"3.764"})," -> ",e.jsx("code",{children:"3"}),") and subtract ",e.jsx("code",{children:"1"})," from the upper value and round it up (",e.jsx("code",{children:"7.236"})," -> ",e.jsx("code",{children:"6.236"})," ->"," ",e.jsx("code",{children:"7"}),"), and count the integers between them (inclusive)."]}),e.jsxs("p",{children:["This addition/subtraction ",e.jsx("em",{children:"before"})," rounding covers cases when our"," ",e.jsx("code",{children:"covered distance"})," exactly matches our ",e.jsx("code",{children:"distance"}),", which we want to avoid including (",e.jsx("code",{children:"covered distance"})," needs to ",e.jsx("em",{children:"beat"})," ",e.jsx("code",{children:"distance"}),"). For example, if our times were exactly ",e.jsx("code",{children:"2"})," and exactly ",e.jsx("code",{children:"7"}),", we would exclude those times, and our winning times would be"," ",e.jsx("code",{children:"3"}),", ",e.jsx("code",{children:"4"}),", ",e.jsx("code",{children:"5"}),", and ",e.jsx("code",{children:"6"}),"."]}),e.jsxs("p",{children:["For our example of ",e.jsx("code",{children:"2.764"})," and ",e.jsx("code",{children:"7.236"}),", these values are"," ",e.jsx("code",{children:"3"}),", ",e.jsx("code",{children:"4"}),", ",e.jsx("code",{children:"5"}),", ",e.jsx("code",{children:"6"}),", and ",e.jsx("code",{children:"7"}),". If we look at an annotated version of the earlier graph, we can trivially see that these points along the x-axis result in a y-axis value above ",e.jsx("code",{children:"20"}),"."]}),e.jsx(o,{src:"/blog/advent-of-code/2023/day-06/parabola-annotated.png",alt:"Annotated parabola from points using Desmos",caption:e.jsxs(e.Fragment,{children:["Annotated parabola from points using"," ",e.jsx("a",{href:"https://www.desmos.com/calculator",target:"_blank",children:"Desmos"})]})}),e.jsx(t,{hash:"optimized-solution-code",children:"Optimized Solution (Code)"}),e.jsx(n,{content:`import math

import pytest


def runner(time: int, distance: int) -> int:
    minimum_time = math.floor(
        (-time + math.sqrt(time**2 - 4 * -1 * -distance)) / -2 + 1
    )
    maximum_time = math.ceil((-time - math.sqrt(time**2 - 4 * -1 * -distance)) / -2 - 1)

    return maximum_time - minimum_time + 1


@pytest.mark.parametrize(
    "time,distance,output",
    [
        (71530, 940200, 71503),
        (47986698, 400121310111540, 26499773),
    ],
)
def test_runner(time: int, distance: int, output: int) -> None:
    result = runner(time, distance)

    assert result == output
`}),e.jsx(t,{hash:"comparisons",children:"Comparison"}),e.jsx("h3",{children:"Brute-Force Solution"}),e.jsx(r,{content:`===== test session starts =====
platform darwin -- Python 3.12.0, pytest-7.4.3, pluggy-1.3.0
collected 1 item

brute_force.py .

===== 1 passed in 6.37s =====`}),e.jsx("h3",{children:"Optimized Solution"}),e.jsx(r,{content:`===== test session starts =====
platform darwin -- Python 3.12.0, pytest-7.4.3, pluggy-1.3.0
collected 1 item

optimized.py .

===== 1 passed in 0.02s =====`})]})};export{g as component};
