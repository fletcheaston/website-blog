import{j as e,b8 as t}from"./main-4SycZPY2.js";import{P as s,a as r}from"./code-block-BW2cNKoo.js";import{B as o}from"./layout-DVJpTeKt.js";import{H as n}from"./header-z1l8V5th.js";import{T as a}from"./table-DCpUFErF.js";import{S as i}from"./separator-DAE-boxv.js";import"./button-BBme8Wym.js";const f=function(){return e.jsxs(e.Fragment,{children:[e.jsx(o,{to:t.fullPath}),e.jsx(n,{hash:"part-1-prompt",children:"Part 1 – Prompt"}),e.jsx("p",{children:"The gondola takes you up. Strangely, though, the ground doesn't seem to be coming with you; you're not climbing a mountain. As the circle of Snow Island recedes below you, an entire new landmass suddenly appears above you! The gondola carries you to the surface of the new island and lurches into the station."}),e.jsxs("p",{children:["As you exit the gondola, the first thing you notice is that the air here is much"," ",e.jsx("strong",{children:"warmer"})," than it was on Snow Island. It's also quite"," ",e.jsx("strong",{children:"humid"}),". Is this where the water source is?"]}),e.jsx("p",{children:"The next thing you notice is an Elf sitting on the floor across the station in what seems to be a pile of colorful square cards."}),e.jsx("p",{children:'"Oh! Hello!" The Elf excitedly runs over to you. "How may I be of service?" You ask about water sources.'}),e.jsxs("p",{children:[`"I'm not sure; I just operate the gondola lift. That does sound like something we'd have, though - this is `,e.jsx("strong",{children:"Island Island"}),", after all! I bet the"," ",e.jsx("strong",{children:"gardener"})," would know. He's on a different island, though - er, the small kind surrounded by water, not the floating kind. We really need to come up with a better naming scheme. Tell you what: if you can help me with something quick, I'll let you ",e.jsx("strong",{children:"borrow my boat"}),` and you can go visit the gardener. I got all these scratchcards as a gift, but I can't figure out what I've won."`]}),e.jsxs("p",{children:["The Elf leads you over to the pile of colorful cards. There, you discover dozens of scratchcards, all with their opaque covering already scratched off. Picking one up, it looks like each card has two lists of numbers separated by a vertical bar (|): a list of ",e.jsx("strong",{children:"winning numbers"})," and then a list of"," ",e.jsx("strong",{children:"numbers you have"}),". You organize the information into a table (your puzzle input)."]}),e.jsxs("p",{children:["As far as the Elf has been able to figure out, you have to figure out which of the"," ",e.jsx("strong",{children:"numbers you have"})," appear in the list of"," ",e.jsx("strong",{children:"winning numbers"}),". The first match makes the card worth one point and each match after the first ",e.jsx("strong",{children:"doubles"})," the point value of that card."]}),e.jsx("p",{children:"For example:"}),e.jsx(s,{content:`Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`}),e.jsxs("p",{children:["In the above example, card 1 has five winning numbers (",e.jsx("code",{children:"41"}),","," ",e.jsx("code",{children:"48"}),", ",e.jsx("code",{children:"83"}),", ",e.jsx("code",{children:"86"}),", and ",e.jsx("code",{children:"17"}),") and eight numbers you have (",e.jsx("code",{children:"83"}),", ",e.jsx("code",{children:"86"}),", ",e.jsx("code",{children:"6"}),", ",e.jsx("code",{children:"31"}),","," ",e.jsx("code",{children:"17"}),", ",e.jsx("code",{children:"9"}),", ",e.jsx("code",{children:"48"}),", and ",e.jsx("code",{children:"53"}),"). Of the numbers you have, four of them (",e.jsx("code",{children:"48"}),", ",e.jsx("code",{children:"83"}),", ",e.jsx("code",{children:"17"}),", and ",e.jsx("code",{children:"86"}),") are winning numbers! That means card 1 is worth"," ",e.jsx("strong",{children:e.jsx("code",{children:"8"})})," ","points (1 for the first match, then doubled three times for each of the three matches after the first)."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Card 2 has two winning numbers (",e.jsx("code",{children:"32"})," and ",e.jsx("code",{children:"61"}),"), so it is worth"," ",e.jsx("strong",{children:e.jsx("code",{children:"2"})})," ","points."]}),e.jsxs("li",{children:["Card 3 has two winning numbers (",e.jsx("code",{children:"1"})," and ",e.jsx("code",{children:"21"}),"), so it is worth"," ",e.jsx("strong",{children:e.jsx("code",{children:"2"})})," ","points."]}),e.jsxs("li",{children:["Card 4 has one winning number (",e.jsx("code",{children:"84"}),"), so it is worth"," ",e.jsx("strong",{children:e.jsx("code",{children:"1"})})," ","point."]}),e.jsx("li",{children:"Card 5 has no winning numbers, so it is worth no points."}),e.jsx("li",{children:"Card 6 has no winning numbers, so it is worth no points."})]}),e.jsxs("p",{children:["So, in this example, the Elf's pile of scratchcards is worth"," ",e.jsx("strong",{children:e.jsx("code",{children:"13"})})," ","points."]}),e.jsxs("p",{children:["Take a seat in the large pile of colorful cards."," ",e.jsx("strong",{children:"How many points are they worth in total?"})]}),e.jsx(n,{hash:"part-1-solution",children:"Part 1 – Solution"}),e.jsx("p",{children:"For each line:"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Extract the winning numbers and my numbers"}),e.jsx("li",{children:"Check for which of my numbers are in the winning numbers"}),e.jsxs("li",{children:["Keep a running score for each card of matches numbers",e.jsxs("ul",{children:[e.jsx("li",{children:"1 match = 1 score"}),e.jsx("li",{children:"N matches = 2**(N - 1) score (for N > 1)"})]})]}),e.jsx("li",{children:"Keep a running total of score for all cards"})]}),e.jsx(r,{content:`from pathlib import Path

import pytest


def runner(document: list[str]) -> int:
    total = 0

    for line in document:
        rest = line.split(": ")[1]
        winning_str, my_str = rest.split(" | ")

        winning_numbers: list[int] = [
            int(num) for num in winning_str.strip().split(" ") if num
        ]
        my_numbers: list[int] = [int(num) for num in my_str.strip().split(" ") if num]

        score = 0

        for num in my_numbers:
            if num in winning_numbers:
                if score == 0:
                    score = 1
                else:
                    score *= 2

        total += score

    return total


@pytest.mark.parametrize(
    "filename,total",
    [
        ("example-1.txt", 13),
        ("example-2.txt", 15205),
    ],
)
def test_runner(filename: str, total: int) -> None:
    with open(Path(__file__).with_name(filename)) as file:
        result = runner(file.read().splitlines())

        assert result == total
`}),e.jsxs("p",{children:["Answer: ",e.jsx("code",{children:"15,205"})]}),e.jsx(i,{}),e.jsx(n,{hash:"part-2-prompt",children:"Part 2 – Prompt"}),e.jsx("p",{children:"Just as you're about to report your findings to the Elf, one of you realizes that the rules have actually been printed on the back of every card this whole time."}),e.jsxs("p",{children:[`There's no such thing as "points". Instead, scratchcards only cause you to`," ",e.jsx("strong",{children:"win more scratchcards"})," equal to the number of winning numbers you have."]}),e.jsxs("p",{children:["Specifically, you win ",e.jsx("strong",{children:"copies"})," of the scratchcards below the winning card equal to the number of matches. So, if card 10 were to have 5 matching numbers, you would win one copy each of cards 11, 12, 13, 14, and 15."]}),e.jsxs("p",{children:["Copies of scratchcards are scored like normal scratchcards and have the"," ",e.jsx("strong",{children:"same card number"})," as the card they copied. So, if you win a copy of card 10 and it has 5 matching numbers, it would then win a copy of the same cards that the original card 10 won: cards 11, 12, 13, 14, and 15. This process repeats until none of the copies cause you to win any more cards. (Cards will never make you copy a card past the end of the table.)"]}),e.jsx("p",{children:"This time, the above example goes differently:"}),e.jsx(s,{content:`Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`}),e.jsxs("ul",{children:[e.jsx("li",{children:"Card 1 has four matching numbers, so you win one copy each of the next four cards: cards 2, 3, 4, and 5."}),e.jsx("li",{children:"Your original card 2 has two matching numbers, so you win one copy each of cards 3 and 4."}),e.jsx("li",{children:"Your copy of card 2 also wins one copy each of cards 3 and 4."}),e.jsxs("li",{children:["Your four instances of card 3 (one original and three copies) have two matching numbers, so you win ",e.jsx("strong",{children:"four"})," copies each of cards 4 and 5."]}),e.jsxs("li",{children:["Your eight instances of card 4 (one original and seven copies) have one matching number, so you win ",e.jsx("strong",{children:"eight"})," copies of card 5."]}),e.jsx("li",{children:"Your fourteen instances of card 5 (one original and thirteen copies) have no matching numbers and win no more cards."}),e.jsx("li",{children:"Your one instance of card 6 (one original) has no matching numbers and wins no more cards."})]}),e.jsxs("p",{children:["Once all of the originals and copies have been processed, you end up with"," ",e.jsx("strong",{children:e.jsx("code",{children:"1"})})," ","instance of card 1,"," ",e.jsx("strong",{children:e.jsx("code",{children:"2"})})," ","instances of card 2,"," ",e.jsx("strong",{children:e.jsx("code",{children:"4"})})," ","instances of card 3,"," ",e.jsx("strong",{children:e.jsx("code",{children:"8"})})," ","instances of card 4,"," ",e.jsx("strong",{children:e.jsx("code",{children:"14"})})," ","instances of card 5, and"," ",e.jsx("strong",{children:e.jsx("code",{children:"1"})})," ","instance of card 6. In total, this example pile of scratchcards causes you to ultimately have"," ",e.jsx("strong",{children:e.jsx("code",{children:"30"})})," ","scratchcards!"]}),e.jsxs("p",{children:["Process all of the original and copied scratchcards until no more scratchcards are won. Including the original set of scratchcards,"," ",e.jsx("strong",{children:"how many total scratchcards do you end up with?"})]}),e.jsx(n,{hash:"part-2-solution",children:"Part 2 – Solution"}),e.jsxs("p",{children:["First, we need to set up a pre-filled map (",e.jsx("code",{children:"copies"}),") from card index (0 based) to number of copies."]}),e.jsx("p",{children:"Then, for each line:"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Extract the winning numbers and my numbers"}),e.jsx("li",{children:"Check for which of my numbers are in the winning numbers"})]}),e.jsx("p",{children:"Then, for each matching number:"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Increment the number of matches we've made for the current card"}),e.jsxs("li",{children:["Increase the number of copies for the next card by the number of copies we have for the current card",e.jsx("ul",{children:e.jsx("li",{children:"The next card (index) is the current card index + running number of matches for this card"})})]})]}),e.jsx("p",{children:"Finally, add the number of copies for the current card to the running total."}),e.jsx(r,{content:`from pathlib import Path

import pytest


def runner(document: list[str]) -> int:
    total = 0

    # Map from index to count
    copies: dict[int, int] = {index: 1 for index in range(len(document))}

    for index, line in enumerate(document):
        rest = line.split(": ")[1]
        winning_str, my_str = rest.split(" | ")

        winning_numbers: list[int] = [
            int(num) for num in winning_str.strip().split(" ") if num
        ]
        my_numbers: list[int] = [int(num) for num in my_str.strip().split(" ") if num]

        matches = 0

        for num in my_numbers:
            if num in winning_numbers:
                matches += 1
                copies[index + matches] += copies[index]

        total += copies[index]

    return total


@pytest.mark.parametrize(
    "filename,total",
    [
        ("example-1.txt", 30),
        ("example-2.txt", 6189740),
    ],
)
def test_runner(filename: str, total: int) -> None:
    with open(Path(__file__).with_name(filename)) as file:
        result = runner(file.read().splitlines())

        assert result == total
`}),e.jsx("p",{children:"This is the most important line:"}),e.jsx(r,{content:"copies[index + matches] += copies[index]"}),e.jsxs("p",{children:["I increase the number of copies for the ",e.jsx("strong",{children:"next card"})," by the"," ",e.jsx("strong",{children:"number of copies we have of the existing card"}),"."]}),e.jsx("p",{children:"My initial solution was something like this:"}),e.jsx(r,{content:`for _ in range(copies[index]):
    ...

    copies[index + matches] += 1`}),e.jsx("p",{children:"This closely matches what I did in Part 1, and this worked for the example input. However, when I ran this on the real input, my solution didn't complete (at least not within 10 seconds)."}),e.jsxs("p",{children:["Answer: ",e.jsx("code",{children:"6,189,740"})]}),e.jsx(i,{}),e.jsx(n,{hash:"recap",children:"Recap"}),e.jsxs(a,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Day"}),e.jsx("th",{children:"Part 1 Time"}),e.jsx("th",{children:"Part 1 Rank"}),e.jsx("th",{children:"Part 2 Time"}),e.jsx("th",{children:"Part 2 Rank"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"4"}),e.jsx("td",{children:"00:04:14"}),e.jsx("td",{children:"426"}),e.jsx("td",{children:"00:19:36"}),e.jsx("td",{children:"2,104"})]})})]}),e.jsx("p",{children:"Hot out the gate in T500 for Part 1, I'm really happy about that 😁. I made some major mistakes on Part 2:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"COMPLETELY"})," misread the prompt (~5 minutes wasted)"]}),e.jsxs("li",{children:["Came up with a solution that worked for the example input but didn't complete for the real input (~5 minutes wasted)",e.jsx("ul",{children:e.jsx("li",{children:"Nested loops are bad 😅"})})]})]}),e.jsx("p",{children:"... So my rank was pretty bad compared to Part 1."}),e.jsx("p",{children:"But overall, I'm really happy! I'm figuring out some of the obvious time-saving strategies, such as:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Scaffolded project, designed for quick feedback cycles",e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsxs("code",{children:["pytest ","{","path to test file","}"," -s"]})," ","is ",e.jsx("em",{children:"extremely"})," helpful"]}),e.jsx("li",{children:"Script file with scaffolded functions for Part 1 and Part 2"})]})]}),e.jsxs("li",{children:['Skipping the "story time" part of the prompts',e.jsx("ul",{children:e.jsx("li",{children:"This part caused me to misread the prompt on Part 2 so ¯\\_(ツ)_/¯ don't skip everything 🙃"})})]}),e.jsx("li",{children:"Pulling test inputs ASAP"}),e.jsx("li",{children:"Pulling your real input ASAP (loading this webpage in a separate window, refreshing when the puzzle is released)"})]}),e.jsx("p",{children:"I'm really excited for tomorrow, hoping I can remedy the mistakes I made on Part 2 and further the excellent performance on Part 1."})]})};export{f as component};
