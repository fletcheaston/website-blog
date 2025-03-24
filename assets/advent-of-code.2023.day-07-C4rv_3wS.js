import{j as e,aH as d}from"./index-CwtsGJj3.js";import{P as t,a as s}from"./code-block-CHCiU50r.js";import{B as o}from"./layout-Cohubq0h.js";import{H as r}from"./header-B7Z-ZQsD.js";import{T as i}from"./table-C6tbeujV.js";import{S as n}from"./separator-B6g9dnjl.js";import"./button-D317vur7.js";import"./routeInfo-Bh0-5ykf.js";const j=function(){return e.jsxs(e.Fragment,{children:[e.jsx(o,{to:d.fullPath}),e.jsx(r,{hash:"part-1-prompt",children:"Part 1 – Prompt"}),e.jsxs("p",{children:["Your all-expenses-paid trip turns out to be a one-way, five-minute ride in an airship. (At least it's a ",e.jsx("strong",{children:"cool"})," airship!) It drops you off at the edge of a vast desert and descends back to Island Island."]}),e.jsx("p",{children:'"Did you bring the parts?"'}),e.jsx("p",{children:"You turn around to see an Elf completely covered in white clothing, wearing goggles, and riding a large camel."}),e.jsx("p",{children:`"Did you bring the parts?" she asks again, louder this time. You aren't sure what parts she's looking for; you're here to figure out why the sand stopped.`}),e.jsx("p",{children:'"The parts! For the sand, yes! Come with me; I will show you." She beckons you onto the camel.'}),e.jsxs("p",{children:["After riding a bit across the sands of Desert Island, you can see what look like very large rocks covering half of the horizon. The Elf explains that the rocks are all along the part of Desert Island that is directly above Island Island, making it hard to even get there. Normally, they use big machines to move the rocks and filter the sand, but the machines have broken down because Desert Island recently stopped receiving the ",e.jsx("strong",{children:"parts"})," they need to fix the machines."]}),e.jsx("p",{children:"You've already assumed it'll be your job to figure out why the parts stopped when she asks if you can help. You agree automatically."}),e.jsxs("p",{children:["Because the journey will take a few days, she offers to teach you the game of"," ",e.jsx("strong",{children:"Camel Cards"}),". Camel Cards is sort of similar to poker except it's designed to be easier to play while riding a camel."]}),e.jsxs("p",{children:["In Camel Cards, you get a list of ",e.jsx("strong",{children:"hands"}),", and your goal is to order them based on the ",e.jsx("strong",{children:"strength"})," of each hand. A hand consists of"," ",e.jsx("strong",{children:"five cards"})," labeled one of ",e.jsx("code",{children:"A"}),", ",e.jsx("code",{children:"K"}),","," ",e.jsx("code",{children:"Q"}),", ",e.jsx("code",{children:"J"}),", ",e.jsx("code",{children:"T"}),", ",e.jsx("code",{children:"9"}),", ",e.jsx("code",{children:"8"}),","," ",e.jsx("code",{children:"7"}),", ",e.jsx("code",{children:"6"}),", ",e.jsx("code",{children:"5"}),", ",e.jsx("code",{children:"4"}),", ",e.jsx("code",{children:"3"}),", or"," ",e.jsx("code",{children:"2"}),". The relative strength of each card follows this order, where"," ",e.jsx("code",{children:"A"})," is the highest and ",e.jsx("code",{children:"2"})," is the lowest."]}),e.jsxs("p",{children:["Every hand is exactly one ",e.jsx("strong",{children:"type"}),". From strongest to weakest, they are:"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Five of a kind"}),", where all five cards have the same label:"," ",e.jsx("code",{children:"AAAAA"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Four of a kind"}),", where four cards have the same label and one card has a different label: ",e.jsx("code",{children:"AA8AA"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Full house"}),", where three cards have the same label, and the remaining two cards share a different label: ",e.jsx("code",{children:"23332"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Three of a kind"}),", where three cards have the same label, and the remaining two cards are each different from any other card in the hand:"," ",e.jsx("code",{children:"TTT98"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Two pair"}),", where two cards share one label, two other cards share a second label, and the remaining card has a third label:"," ",e.jsx("code",{children:"23432"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"One pair"}),", where two cards share one label, and the other three cards have a different label from the pair and each other: ",e.jsx("code",{children:"A23A4"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"High card"}),", where all cards' labels are distinct:"," ",e.jsx("code",{children:"23456"})]})]}),e.jsxs("p",{children:["Hands are primarily ordered based on type; for example, every"," ",e.jsx("strong",{children:"full house"})," is stronger than any ",e.jsx("strong",{children:"three of a kind"}),"."]}),e.jsxs("p",{children:["If two hands have the same type, a second ordering rule takes effect. Start by comparing the ",e.jsx("strong",{children:"first card in each hand"}),". If these cards are different, the hand with the stronger first card is considered stronger. If the first card in each hand have the ",e.jsx("strong",{children:"same label"}),", however, then move on to considering the ",e.jsx("strong",{children:"second card in each hand"}),". If they differ, the hand with the higher second card wins; otherwise, continue with the third card in each hand, then the fourth, then the fifth."]}),e.jsxs("p",{children:["So, ",e.jsx("code",{children:"33332"})," and ",e.jsx("code",{children:"2AAAA"})," are both"," ",e.jsx("strong",{children:"four of a kind"})," hands, but ",e.jsx("code",{children:"33332"})," is stronger because its first card is stronger. Similarly, ",e.jsx("code",{children:"77888"})," and ",e.jsx("code",{children:"77788"})," are both a ",e.jsx("strong",{children:"full house"}),", but ",e.jsx("code",{children:"77888"})," is stronger because its third card is stronger (and both hands have the same first and second card)."]}),e.jsx("p",{children:"To play Camel Cards, you are given a list of hands and their corresponding bid (your puzzle input). For example:"}),e.jsx(t,{content:`32T3K 765
T55J5 684
KK677 28
KTJJT 220
QQQJA 483`}),e.jsxs("p",{children:["This example shows five hands; each hand is followed by its ",e.jsx("strong",{children:"bid"})," ","amount. Each hand wins an amount equal to its bid multiplied by its rank, where the weakest hand gets rank 1, the second-weakest hand gets rank 2, and so on up to the strongest hand. Because there are five hands in this example, the strongest hand will have rank 5 and its bid will be multiplied by 5."]}),e.jsx("p",{children:"So, the first step is to put the hands in order of strength:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"32T3K"})," is the only ",e.jsx("strong",{children:"one pair"})," and the other hands are all a stronger type, so it gets rank ",e.jsx("strong",{children:"1"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"KK677"})," and ",e.jsx("code",{children:"KTJJT"})," are both ",e.jsx("strong",{children:"two pair"}),". Their first cards both have the same label, but the second card of"," ",e.jsx("code",{children:"KK677"})," is stronger (",e.jsx("code",{children:"K"})," vs ",e.jsx("code",{children:"T"}),"), so"," ",e.jsx("code",{children:"KTJJT"})," gets rank ",e.jsx("strong",{children:"2"})," and ",e.jsx("code",{children:"KK677"})," gets rank"," ",e.jsx("strong",{children:"3"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"T55J5"})," and ",e.jsx("code",{children:"QQQJA"})," are both"," ",e.jsx("strong",{children:"three of a kind"}),". ",e.jsx("code",{children:"QQQJA"})," has a stronger first card, so it gets rank ",e.jsx("strong",{children:"5"})," and ",e.jsx("code",{children:"T55J5"})," gets rank"," ",e.jsx("strong",{children:"4"}),"."]})]}),e.jsxs("p",{children:["Now, you can determine the total winnings of this set of hands by adding up the result of multiplying each hand's bid with its rank (",e.jsx("code",{children:"765"})," _ 1 +"," ",e.jsx("code",{children:"220"})," _ 2 + ",e.jsx("code",{children:"28"})," _ 3 + ",e.jsx("code",{children:"684"})," _ 4 + ",e.jsx("code",{children:"483"})," ","* 5). So the ",e.jsx("strong",{children:"total winnings"})," in this example are"," ",e.jsx("strong",{children:e.jsx("code",{children:"6440"})}),"."]}),e.jsxs("p",{children:["Find the rank of every hand in your set.",e.jsx("strong",{children:"What are the total winnings?"})]}),e.jsx(r,{hash:"part-1-solution",children:"Part 1 – Solution"}),e.jsx("p",{children:"Builds a hand for each line and calculates the maximum number of points for each hand by checking hand types. After that, it's just sorting the hands by points/cards, then a little bit of math to calculate the final total."}),e.jsx(s,{content:`from dataclasses import dataclass
from pathlib import Path

import pytest

CARD_ORDER = ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"]


def card_position(card: str) -> int:
    return CARD_ORDER.index(card)


@dataclass
class Hand:
    cards: list[str]
    card_count: dict[str, int]

    bid: int

    @property
    def is_five_of_kind(self) -> bool:
        return len(set(self.cards)) == 1

    @property
    def is_four_of_kind(self) -> bool:
        return any(count == 4 for count in self.card_count.values())

    @property
    def is_full_house(self) -> bool:
        found_three = False
        found_two = False

        for count in self.card_count.values():
            if count == 3:
                found_three = True

            if count == 2:
                found_two = True

        return found_three and found_two

    @property
    def is_three_of_kind(self) -> bool:
        found_three = False
        found_two = False

        for count in self.card_count.values():
            if count == 3:
                found_three = True

            if count == 2:
                found_two = True

        return found_three and not found_two

    @property
    def is_two_pair(self) -> bool:
        found_pair = 0

        for count in self.card_count.values():
            if count == 2:
                found_pair += 1

        return found_pair == 2

    @property
    def is_one_pair(self) -> bool:
        found_pair = 0

        for count in self.card_count.values():
            if count == 2:
                found_pair += 1

        return found_pair == 1

    @property
    def is_high_card(self) -> bool:
        return len(set(self.cards)) == 5

    @property
    def points(self) -> int:
        if self.is_five_of_kind:
            return 1

        if self.is_four_of_kind:
            return 2

        if self.is_full_house:
            return 3

        if self.is_three_of_kind:
            return 4

        if self.is_two_pair:
            return 5

        if self.is_one_pair:
            return 6

        if self.is_high_card:
            return 7

        raise AssertionError

    def __gt__(self, other: "Hand"):
        if self.points == other.points:
            for self_card, other_card in zip(self.cards, other.cards, strict=False):
                if self_card != other_card:
                    return card_position(self_card) > card_position(other_card)

        return self.points > other.points


def runner(document: list[str]) -> int:
    hands: list[Hand] = []

    for line in document:
        hand_str, bid_str = line.split(" ")

        hands.append(
            Hand(
                cards=list(hand_str),
                card_count={
                    card: list(hand_str).count(card) for card in list(hand_str)
                },
                bid=int(bid_str),
            ),
        )

    hands.sort(reverse=True)
    return sum([hand.bid * (index + 1) for index, hand in enumerate(hands)])


@pytest.mark.parametrize(
    "filename,output",
    [
        ("example-1.txt", 6440),
        ("example-2.txt", 251545216),
    ],
)
def test_runner(filename: str, output: int) -> None:
    with open(Path(__file__).with_name(filename)) as file:
        result = runner(file.read().splitlines())

        assert result == output
`}),e.jsxs("p",{children:["Answer: ",e.jsx("code",{children:"251,545,216"})]}),e.jsx(n,{}),e.jsx(r,{hash:"part-2-prompt",children:"Part 2 – Prompt"}),e.jsxs("p",{children:["To make things a little more interesting, the Elf introduces one additional rule. Now, ",e.jsx("code",{children:"J"})," cards are jokers - wildcards that can act like whatever card would make the hand the strongest type possible."]}),e.jsxs("p",{children:["To balance this,"," ",e.jsxs("strong",{children:[e.jsx("code",{children:"J"})," cards are now the weakest"]})," ","individual cards, weaker even than ",e.jsx("code",{children:"2"}),". The other cards stay in the same order: ",e.jsx("code",{children:"A"}),", ",e.jsx("code",{children:"K"}),", ",e.jsx("code",{children:"Q"}),", ",e.jsx("code",{children:"T"}),","," ",e.jsx("code",{children:"9"}),", ",e.jsx("code",{children:"8"}),", ",e.jsx("code",{children:"7"}),", ",e.jsx("code",{children:"6"}),", ",e.jsx("code",{children:"5"}),","," ",e.jsx("code",{children:"4"}),", ",e.jsx("code",{children:"3"}),", ",e.jsx("code",{children:"2"}),", ",e.jsx("code",{children:"J"}),"."]}),e.jsxs("p",{children:[e.jsx("code",{children:"J"})," cards can pretend to be whatever card is best for the purpose of determining hand type; for example, ",e.jsx("code",{children:"QJJQ2"})," is now considered"," ",e.jsx("strong",{children:"four of a kind"}),". However, for the purpose of breaking ties between two hands of the same type, ",e.jsx("code",{children:"J"})," is always treated as ",e.jsx("code",{children:"J"}),", not the card it's pretending to be: ",e.jsx("code",{children:"JKKK2"})," is weaker than ",e.jsx("code",{children:"QQQQ2"})," ","because ",e.jsx("code",{children:"J"})," is weaker than ",e.jsx("code",{children:"Q"}),"."]}),e.jsx("p",{children:"Now, the above example goes very differently:"}),e.jsx(t,{content:`32T3K 765
T55J5 684
KK677 28
KTJJT 220
QQQJA 483`}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"32T3K"})," is still the only ",e.jsx("strong",{children:"one pair"}),"; it doesn't contain any jokers, so its strength doesn't increase."]}),e.jsxs("li",{children:[e.jsx("code",{children:"KK677"})," is now the only ",e.jsx("strong",{children:"two pair"}),", making it the second-weakest hand."]}),e.jsxs("li",{children:[e.jsx("code",{children:"T55J5"}),", ",e.jsx("code",{children:"KTJJT"}),", and ",e.jsx("code",{children:"QQQJA"})," are now all"," ",e.jsx("strong",{children:"four of a kind"}),"! ",e.jsx("code",{children:"T55J5"})," gets rank 3,"," ",e.jsx("code",{children:"QQQJA"})," gets rank 4, and ",e.jsx("code",{children:"KTJJT"})," gets rank 5."]})]}),e.jsxs("p",{children:["With the new joker rule, the total winnings in this example are"," ",e.jsx("strong",{children:e.jsx("code",{children:"5905"})}),"."]}),e.jsxs("p",{children:["Using the new joker rule, find the rank of every hand in your set.",e.jsx("strong",{children:"What are the new total winnings?"})]}),e.jsx(r,{hash:"part-2-solution",children:"Part 2 – Solution"}),e.jsxs("p",{children:["Builds off of Part 1, but has to treat ",e.jsx("code",{children:"J"})," cards as wildcards, and slightly rearranges the card strength ordering."]}),e.jsxs("p",{children:["To treat ",e.jsx("code",{children:"J"})," cards as wildcards, let's look at the"," ",e.jsx("code",{children:"is_four_of_kind"})," property."]}),e.jsx(s,{content:`def is_four_of_kind(self) -> bool:
    j_count = self.card_count.get("J", 0)

    temp_cards = {
        card: count for card, count in self.card_count.items() if card != "J"
    }

    card_counts = list(temp_cards.items())
    card_counts.sort(key=lambda x: x[1], reverse=True)

    for _card, count in card_counts:
        if count == 4:
            return True

        if count + j_count == 4:
            return True

    return False
`}),e.jsxs("p",{children:["Sorting the hand doesn't matter for ",e.jsx("code",{children:"is_four_of_kind"}),", but it does matter for other hands."]}),e.jsx("p",{children:e.jsx("strong",{children:"Full solution below"})}),e.jsx(s,{content:`from dataclasses import dataclass
from functools import cached_property
from pathlib import Path

import pytest

CARD_ORDER = ["A", "K", "Q", "T", "9", "8", "7", "6", "5", "4", "3", "2", "J"]


def card_position(card: str) -> int:
    return CARD_ORDER.index(card)


@dataclass
class Hand:
    cards: list[str]
    card_count: dict[str, int]

    bid: int

    @property
    def is_five_of_kind(self) -> bool:
        if "J" in self.card_count and len(set(self.cards)) == 2:
            return True

        return len(set(self.cards)) == 1

    @property
    def is_four_of_kind(self) -> bool:
        j_count = self.card_count.get("J", 0)

        temp_cards = {
            card: count for card, count in self.card_count.items() if card != "J"
        }

        card_counts = list(temp_cards.items())
        card_counts.sort(key=lambda x: x[1], reverse=True)

        for _card, count in card_counts:
            if count == 4:
                return True

            if count + j_count == 4:
                return True

        return False

    @property
    def is_full_house(self) -> bool:
        j_count = self.card_count.get("J", 0)

        temp_cards = {
            card: count for card, count in self.card_count.items() if card != "J"
        }

        card_counts = list(temp_cards.items())
        card_counts.sort(key=lambda x: x[1], reverse=True)

        found_three = False
        found_two = False

        for _card, count in card_counts:
            if count == 3:
                found_three = True

            elif count + j_count == 3:
                j_count = 0
                found_three = True

            elif count == 2:
                found_two = True

            elif count + j_count == 2:
                j_count = 0
                found_two = True

        return found_three and found_two

    @property
    def is_three_of_kind(self) -> bool:
        j_count = self.card_count.get("J", 0)

        temp_cards = {
            card: count for card, count in self.card_count.items() if card != "J"
        }

        card_counts = list(temp_cards.items())
        card_counts.sort(key=lambda x: x[1], reverse=True)

        found_three = False
        found_two = False

        for _card, count in card_counts:
            if count == 3:
                found_three = True

            elif count + j_count == 3:
                j_count = 0
                found_three = True

            elif count == 2:
                found_two = True

            elif count + j_count == 2:
                j_count = 0
                found_two = True

        return found_three and not found_two

    @property
    def is_two_pair(self) -> bool:
        found_pair = 0

        card_counts = list(self.card_count.items())
        card_counts.sort(key=lambda x: x[1], reverse=True)

        for _card, count in card_counts:
            if count == 2:
                found_pair += 1

        return found_pair == 2

    @property
    def is_one_pair(self) -> bool:
        j_count = self.card_count.get("J", 0)

        temp_cards = {
            card: count for card, count in self.card_count.items() if card != "J"
        }

        card_counts = list(temp_cards.items())
        card_counts.sort(key=lambda x: x[1], reverse=True)

        found_pair = 0

        for _card, count in card_counts:
            if count == 2:
                found_pair += 1

            elif count + j_count == 2:
                j_count = 0
                found_pair += 1

        return found_pair == 1

    @property
    def is_high_card(self) -> bool:
        return "J" not in self.card_count and len(set(self.cards)) == 5

    @cached_property
    def points(self) -> int:
        if self.is_five_of_kind:
            return 1

        if self.is_four_of_kind:
            return 2

        if self.is_full_house:
            return 3

        if self.is_three_of_kind:
            return 4

        if self.is_two_pair:
            return 5

        if self.is_one_pair:
            return 6

        if self.is_high_card:
            return 7

        raise AssertionError

    def __gt__(self, other: "Hand") -> bool:
        if self.points == other.points:
            for self_card, other_card in zip(self.cards, other.cards, strict=False):
                if self_card != other_card:
                    return card_position(self_card) > card_position(other_card)

        return self.points > other.points


def runner(document: list[str]) -> int:
    hands: list[Hand] = []

    for line in document:
        hand_str, bid_str = line.split(" ")

        hand = Hand(
            cards=list(hand_str),
            card_count={card: list(hand_str).count(card) for card in list(hand_str)},
            bid=int(bid_str),
        )

        hands.append(hand)

    hands.sort(reverse=True)

    return sum([hand.bid * (index + 1) for index, hand in enumerate(hands)])


@pytest.mark.parametrize(
    "cards,points",
    [
        ("JJJJJ", 1),
        ("JJJJK", 1),
        ("JJJKK", 1),
        ("JJKKK", 1),
        ("JKKKK", 1),
        ("A2KJJ", 4),
        ("ATJKT", 4),
    ],
)
def test_hand_part_2(cards: str, points: int) -> None:
    hand = Hand(
        cards=list(cards),
        card_count={card: list(cards).count(card) for card in list(cards)},
        bid=0,
    )

    assert hand.points == points


@pytest.mark.parametrize(
    "filename,output",
    [
        ("example-1.txt", 5905),
        ("example-2.txt", 250384185),
    ],
)
def test_runner(filename: str, output: int) -> None:
    with open(Path(__file__).with_name(filename)) as file:
        result = runner(file.read().splitlines())

        assert result == output
`}),e.jsxs("p",{children:["Answer: ",e.jsx("code",{children:"250,384,185"})]}),e.jsx(n,{}),e.jsx(r,{hash:"recap",children:"Recap"}),e.jsxs(i,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Day"}),e.jsx("th",{children:"Part 1 Time"}),e.jsx("th",{children:"Part 1 Rank"}),e.jsx("th",{children:"Part 2 Time"}),e.jsx("th",{children:"Part 2 Rank"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"7"}),e.jsx("td",{children:"00:21:33"}),e.jsx("td",{children:"1,156"}),e.jsx("td",{children:"01:42:55"}),e.jsx("td",{children:"7,255"})]})})]}),e.jsx("p",{children:"Part 1 was fairly straightforward, it was an interesting challenge in data modelling that I quite enjoyed 😁."}),e.jsxs("p",{children:["I got tripped up on edge cases for Part 2, so much so that I had to result to making another small test suite of individual hands to ensure I was counting points correctly 😒. The last few edge cases were ",e.jsx("code",{children:"A2KJJ"})," and ",e.jsx("code",{children:"ATJKT"}),"."]}),e.jsxs("p",{children:["For ",e.jsx("code",{children:"A2KJJ"}),", I was double-counting the ",e.jsx("code",{children:"J"})," cards, which results in a higher score than I should have gotten. For ",e.jsx("code",{children:"ATJKT"}),", I was pairing the ",e.jsx("code",{children:"J"})," card with the ",e.jsx("code",{children:"A"})," card, getting"," ",e.jsx("strong",{children:"two pair"})," instead of ",e.jsx("strong",{children:"three of a kind"}),"."]}),e.jsxs("p",{children:["The first was solved by removing the ",e.jsx("code",{children:"J"})," cards before checking each hand. The second was solved by ordering the remaining cards by the card count, descending."]}),e.jsx("p",{children:"Kinda silly mistakes, and I struggled with them (and other edge cases) for so long because I didn't create a smaller test suite until well over an hour in."}),e.jsx("p",{children:"I was pretty happy that I got to use dataclasses though, those are always fun!"})]})};export{j as component};
