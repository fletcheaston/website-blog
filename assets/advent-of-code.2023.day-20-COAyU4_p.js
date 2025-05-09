import{j as e,aW as l}from"./main-DdHQErvU.js";import{P as t,a as o}from"./code-block-aPXLCB2L.js";import{B as i}from"./layout-DvqNAMRu.js";import{H as s}from"./header-D86GcD9X.js";import{T as r}from"./table-Dgl1a-zm.js";import{S as n}from"./separator-LnusGYe2.js";import"./button-CFX2dUjs.js";const x=function(){return e.jsxs(e.Fragment,{children:[e.jsx(i,{to:l.fullPath}),e.jsx(s,{hash:"part-1-prompt",children:"Part 1 – Prompt"}),e.jsx("p",{children:"With your help, the Elves manage to find the right parts and fix all of the machines. Now, they just need to send the command to boot up the machines and get the sand flowing again."}),e.jsxs("p",{children:["The machines are far apart and wired together with long ",e.jsx("strong",{children:"cables"}),". The cables don't connect to the machines directly, but rather to communication"," ",e.jsx("strong",{children:"modules"})," attached to the machines that perform various initialization tasks and also act as communication relays."]}),e.jsxs("p",{children:["Modules communicate using ",e.jsx("strong",{children:"pulses"}),". Each pulse is either a"," ",e.jsx("strong",{children:"high pulse"})," or a ",e.jsx("strong",{children:"low pulse"}),". When a module sends a pulse, it sends that type of pulse to each module in its list of"," ",e.jsx("strong",{children:"destination modules"}),"."]}),e.jsx("p",{children:"There are several different types of modules:"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Flip-flop"})," modules (prefix ",e.jsx("code",{children:"%"}),") are either"," ",e.jsx("strong",{children:"on"})," or ",e.jsx("strong",{children:"off"}),"; they are initially ",e.jsx("strong",{children:"off"}),". If a flip-flop module receives a high pulse, it is ignored and nothing happens. However, if a flip-flop module receives a low pulse, it"," ",e.jsx("strong",{children:"flips between on and off"}),". If it was off, it turns on and sends a high pulse. If it was on, it turns off and sends a low pulse."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Conjunction"})," modules (prefix ",e.jsx("code",{children:"&"}),")"," ",e.jsx("strong",{children:"remember"})," the type of the most recent pulse received from"," ",e.jsx("strong",{children:"each"})," of their connected input modules; they initially default to remembering a ",e.jsx("strong",{children:"low pulse"})," for each input. When a pulse is received, the conjunction module first updates its memory for that input. Then, if it remembers ",e.jsx("strong",{children:"high pulses"})," for all inputs, it sends a"," ",e.jsx("strong",{children:"low pulse"}),"; otherwise, it sends a ",e.jsx("strong",{children:"high pulse"}),"."]}),e.jsxs("p",{children:["There is a single ",e.jsx("strong",{children:"broadcast module"})," (named ",e.jsx("code",{children:"broadcaster"}),"). When it receives a pulse, it sends the same pulse to all of its destination modules."]}),e.jsxs("p",{children:["Here at Desert Machine Headquarters, there is a module with a single button on it called, aptly, the ",e.jsx("strong",{children:"button module"}),". When you push the button, a single ",e.jsx("strong",{children:"low pulse"})," is sent directly to the ",e.jsx("code",{children:"broadcaster"})," ","module."]}),e.jsx("p",{children:"After pushing the button, you must wait until all pulses have been delivered and fully handled before pushing it again. Never push the button if modules are still processing pulses."}),e.jsxs("p",{children:["Pulses are always processed ",e.jsx("strong",{children:"in the order they are sent"}),". So, if a pulse is sent to modules ",e.jsx("code",{children:"a"}),", ",e.jsx("code",{children:"b"}),", and ",e.jsx("code",{children:"c"}),", and then module a processes its pulse and sends more pulses, the pulses sent to modules"," ",e.jsx("code",{children:"b"})," and ",e.jsx("code",{children:"c"})," would have to be handled first."]}),e.jsx("p",{children:"The module configuration (your puzzle input) lists each module. The name of the module is preceded by a symbol identifying its type, if any. The name is then followed by an arrow and a list of its destination modules. For example:"}),e.jsx(t,{content:`broadcaster -> a, b, c
%a -> b
%b -> c
%c -> inv
&inv -> a`}),e.jsxs("p",{children:["In this module configuration, the broadcaster has three destination modules named"," ",e.jsx("code",{children:"a"}),", ",e.jsx("code",{children:"b"}),", and ",e.jsx("code",{children:"c"}),". Each of these modules is a flip-flop module (as indicated by the ",e.jsx("code",{children:"%"})," prefix).",e.jsx("code",{children:"a"})," outputs to ",e.jsx("code",{children:"b"})," which outputs to ",e.jsx("code",{children:"c"})," which outputs to another module named ",e.jsx("code",{children:"inv"}),".",e.jsx("code",{children:"inv"})," is a conjunction module (as indicated by the ",e.jsx("code",{children:"&"})," prefix) which, because it has only one input, acts like an inverter (it sends the opposite of the pulse type it receives); it outputs to ",e.jsx("code",{children:"a"}),"."]}),e.jsx("p",{children:"By pushing the button once, the following pulses are sent:"}),e.jsx(t,{content:`button -low-> broadcaster
broadcaster -low-> a
broadcaster -low-> b
broadcaster -low-> c
a -high-> b
b -high-> c
c -high-> inv
inv -low-> a
a -low-> b
b -low-> c
c -low-> inv
inv -high-> a`}),e.jsxs("p",{children:["After this sequence, the flip-flop modules all end up ",e.jsx("strong",{children:"off"}),", so pushing the button again repeats the same sequence."]}),e.jsx("p",{children:"Here's a more interesting example:"}),e.jsx(t,{content:`broadcaster -> a
%a -> inv, con
&inv -> b
%b -> con
&con -> output`}),e.jsxs("p",{children:["This module configuration includes the ",e.jsx("code",{children:"broadcaster"}),", two flip-flops (named ",e.jsx("code",{children:"a"})," and ",e.jsx("code",{children:"b"}),"), a single-input conjunction module (",e.jsx("code",{children:"inv"}),"), a multi-input conjunction module (",e.jsx("code",{children:"con"}),"), and an untyped module named ",e.jsx("code",{children:"output"})," (for testing purposes). The multi-input conjunction module ",e.jsx("code",{children:"con"})," watches the two flip-flop modules and, if they're both on, sends a ",e.jsx("strong",{children:"low pulse"})," to the ",e.jsx("code",{children:"output"})," ","module."]}),e.jsx("p",{children:"Here's what happens if you push the button once:"}),e.jsx(t,{content:`button -low-> broadcaster
broadcaster -low-> a
a -high-> inv
a -high-> con
inv -low-> b
con -high-> output
b -high-> con
con -low-> output`}),e.jsxs("p",{children:["Both flip-flops turn on and a low pulse is sent to ",e.jsx("code",{children:"output"}),"! However, now that both flip-flops are on and ",e.jsx("code",{children:"con"})," remembers a high pulse from each of its two inputs, pushing the button a second time does something different:"]}),e.jsx(t,{content:`button -low-> broadcaster
broadcaster -low-> a
a -low-> inv
a -low-> con
inv -high-> b
con -high-> output`}),e.jsxs("p",{children:["Flip-flop ",e.jsx("code",{children:"a"})," turns off! Now, ",e.jsx("code",{children:"con"})," remembers a low pulse from module ",e.jsx("code",{children:"a"}),", and so it sends only a high pulse to ",e.jsx("code",{children:"output"}),"."]}),e.jsx("p",{children:"Push the button a third time:"}),e.jsx(t,{content:`button -low-> broadcaster
broadcaster -low-> a
a -high-> inv
a -high-> con
inv -low-> b
con -low-> output
b -low-> con
con -high-> output`}),e.jsxs("p",{children:["This time, flip-flop ",e.jsx("code",{children:"a"})," turns on, then flip-flop ",e.jsx("code",{children:"b"})," turns off. However, before ",e.jsx("code",{children:"b"})," can turn off, the pulse sent to ",e.jsx("code",{children:"con"})," ","is handled first, so it ",e.jsx("strong",{children:"briefly remembers all high pulses"})," for its inputs and sends a low pulse to ",e.jsx("code",{children:"output"}),". After that, flip-flop b turns off, which causes con to update its state and send a high pulse to output."]}),e.jsxs("p",{children:["Finally, with ",e.jsx("code",{children:"a"})," on and ",e.jsx("code",{children:"b"})," off, push the button a fourth time:"]}),e.jsx(t,{content:`button -low-> broadcaster
broadcaster -low-> a
a -low-> inv
a -low-> con
inv -high-> b
con -high-> output`}),e.jsxs("p",{children:["This completes the cycle: ",e.jsx("code",{children:"a"})," turns off, causing ",e.jsx("code",{children:"con"})," to remember only low pulses and restoring all modules to their original states."]}),e.jsxs("p",{children:["To get the cables warmed up, the Elves have pushed the button ",e.jsx("code",{children:"1000"})," ","times. How many pulses got sent as a result (including the pulses sent by the button itself)?"]}),e.jsxs("p",{children:["In the first example, the same thing happens every time the button is pushed:"," ",e.jsx("code",{children:"8"})," low pulses and ",e.jsx("code",{children:"4"})," high pulses are sent. So, after pushing the button ",e.jsx("code",{children:"1000"})," times, ",e.jsx("code",{children:"8000"})," low pulses and"," ",e.jsx("code",{children:"4000"})," high pulses are sent. Multiplying these together gives"," ",e.jsx("strong",{children:e.jsx("code",{children:"32000000"})}),"."]}),e.jsxs("p",{children:["In the second example, after pushing the button ",e.jsx("code",{children:"1000"})," times,"," ",e.jsx("code",{children:"4250"})," low pulses and ",e.jsx("code",{children:"2750"})," high pulses are sent. Multiplying these together gives"," ",e.jsx("strong",{children:e.jsx("code",{children:"11687500"})}),"."]}),e.jsxs("p",{children:["Consult your module configuration; determine the number of low pulses and high pulses that would be sent after pushing the button ",e.jsx("code",{children:"1000"})," times, waiting for all pulses to be fully handled after each push of the button.",e.jsx("strong",{children:"What do you get if you multiply the total number of low pulses sent by the total number of high pulses sent?"})]}),e.jsx(s,{hash:"part-1-solution",children:"Part 1 – Solution"}),e.jsx("p",{children:"Check the comments in the code below."}),e.jsx(o,{content:`import abc
from dataclasses import dataclass, field
from pathlib import Path
from typing import Literal

import pytest

State = Literal["Low", "High"]


@dataclass
class Event:
    from_module: str

    to_module: str

    state: State


@dataclass
class BaseModule(abc.ABC):
    key: str
    next_modules: list[str]

    @property
    @abc.abstractmethod
    def output(self) -> State: ...

    @abc.abstractmethod
    def pulse(self, module: str, state: State) -> list[Event]: ...


@dataclass
class Broadcast(BaseModule):
    @property
    def output(self) -> State:
        return "Low"

    def pulse(self, module: str, state: State) -> list[Event]:
        return [
            Event(
                from_module=self.key,
                to_module=next_module,
                state=self.output,
            )
            for next_module in self.next_modules
        ]


@dataclass
class FlipFlop(BaseModule):
    on: bool = False

    @property
    def output(self) -> State:
        if self.on:
            return "High"

        return "Low"

    def pulse(self, module: str, state: State) -> list[Event]:
        if state == "High":
            return []

        elif state == "Low":
            self.on = not self.on

            return [
                Event(
                    from_module=self.key,
                    to_module=next_module,
                    state=self.output,
                )
                for next_module in self.next_modules
            ]


@dataclass
class Conjunction(BaseModule):
    inputs: dict[str, State] = field(default_factory=dict)

    @property
    def output(self) -> State:
        if all([state == "High" for state in self.inputs.values()]):
            return "Low"

        return "High"

    def add_input(self, module: str) -> None:
        self.inputs[module] = "Low"

    def pulse(self, module: str, state: State) -> list[Event]:
        self.inputs[module] = state

        return [
            Event(
                from_module=self.key,
                to_module=next_module,
                state=self.output,
            )
            for next_module in self.next_modules
        ]


def runner(document: list[str]) -> int:
    module_map: dict[str, BaseModule] = {}
    conjunctions: set[str] = set()

    # Parse inputs to a "module map"
    # Also pull out the conjunction keys
    for line in document:
        key, output = line.split(" -> ")
        outputs = [value.strip() for value in output.split(",")]

        if key == "broadcaster":
            module_map[key] = Broadcast(key=key, next_modules=outputs)

        elif key.startswith("%"):
            key = key.replace("%", "")
            module_map[key] = FlipFlop(key=key, next_modules=outputs)

        elif key.startswith("&"):
            key = key.replace("&", "")
            module_map[key] = Conjunction(key=key, next_modules=outputs)
            conjunctions.add(key)

        else:
            raise ValueError

    # Run through all modules
    # If they have any conjunctions, update said conjunction
    for key, module in module_map.items():
        for next_module in module.next_modules:
            if next_module in conjunctions:
                # Add to module inputs
                conjunction_module = module_map[next_module]
                assert isinstance(conjunction_module, Conjunction)
                conjunction_module.add_input(key)

    # Get the initial output state of all modules
    initial_state: dict[str, State] = {}

    for key, module in module_map.items():
        initial_state[key] = module.output

    # Callback for comparing against initial state
    def matches_initial_state() -> bool:
        for _key, _module in module_map.items():
            if initial_state[_key] != _module.output:
                return False

        return True

    steps_to_cycle = 0
    button_presses = 0
    pulses: dict[State, int] = {
        "High": 0,  # 11
        "Low": 0,  # 17
    }
    events: list[Event] = []

    while steps_to_cycle < 1 or not matches_initial_state():
        events.append(Event(to_module="broadcaster", from_module="button", state="Low"))
        button_presses += 1
        pulses["Low"] += 1

        while events:
            steps_to_cycle += 1
            event = events.pop(0)

            if event.to_module not in module_map:
                continue

            event_module = module_map[event.to_module]

            new_events = event_module.pulse(event.from_module, event.state)
            events += new_events

            for new_event in new_events:
                pulses[new_event.state] += 1

        if button_presses >= 1000:
            break

    button_cycles = 1000 // button_presses

    return (pulses["Low"] * button_cycles * pulses["High"]) * button_cycles


@pytest.mark.parametrize(
    "filename,output",
    [
        ("example-1.txt", 32000000),
        ("example-2.txt", 11687500),
        ("example-3.txt", 731517480),
    ],
)
def test_runner(filename: str, output: int) -> None:
    with open(Path(__file__).with_name(filename)) as file:
        result = runner(file.read().splitlines())

        assert result == output
`}),e.jsxs("p",{children:["Answer: ",e.jsx("code",{children:"731,517,480"})]}),e.jsx(n,{}),e.jsx(s,{hash:"part-2-prompt",children:"Part 2 – Prompt"}),e.jsxs("p",{children:["The final machine responsible for moving the sand down to Island Island has a module attached named ",e.jsx("code",{children:"rx"}),". The machine turns on when a"," ",e.jsx("strong",{children:"single low pulse"})," is sent to ",e.jsx("code",{children:"rx"}),"."]}),e.jsxs("p",{children:["Reset all modules to their default states. Waiting for all pulses to be fully handled after each button press,"," ",e.jsxs("strong",{children:["what is the fewest number of button presses required to deliver a single low pulse to the module named ",e.jsx("code",{children:"rx"}),"?"]})]}),e.jsx(s,{hash:"part-2-solution",children:"Part 2 – Solution"}),e.jsxs("p",{children:["Find the inputs to ",e.jsx("code",{children:"rx"})," and count the number of button presses required to switch their outputs to ",e.jsx("code",{children:"High"}),". Then just calculate the least common multiple of these button presses."]}),e.jsx(o,{content:`import abc
import math
from dataclasses import dataclass, field
from pathlib import Path
from typing import Literal

import pytest

State = Literal["Low", "High"]


@dataclass
class Event:
    from_module: str

    to_module: str

    state: State


@dataclass
class BaseModule(abc.ABC):
    key: str
    next_modules: list[str]

    @property
    @abc.abstractmethod
    def output(self) -> State: ...

    @abc.abstractmethod
    def pulse(self, module: str, state: State) -> list[Event]: ...


@dataclass
class Broadcast(BaseModule):
    @property
    def output(self) -> State:
        return "Low"

    def pulse(self, module: str, state: State) -> list[Event]:
        return [
            Event(
                from_module=self.key,
                to_module=next_module,
                state=self.output,
            )
            for next_module in self.next_modules
        ]


@dataclass
class FlipFlop(BaseModule):
    on: bool = False

    @property
    def output(self) -> State:
        if self.on:
            return "High"

        return "Low"

    def pulse(self, module: str, state: State) -> list[Event]:
        if state == "High":
            return []

        elif state == "Low":
            self.on = not self.on

            return [
                Event(
                    from_module=self.key,
                    to_module=next_module,
                    state=self.output,
                )
                for next_module in self.next_modules
            ]


@dataclass
class Conjunction(BaseModule):
    inputs: dict[str, State] = field(default_factory=dict)

    @property
    def output(self) -> State:
        if all([state == "High" for state in self.inputs.values()]):
            return "Low"

        return "High"

    def add_input(self, module: str) -> None:
        self.inputs[module] = "Low"

    def pulse(self, module: str, state: State) -> list[Event]:
        self.inputs[module] = state

        return [
            Event(
                from_module=self.key,
                to_module=next_module,
                state=self.output,
            )
            for next_module in self.next_modules
        ]


def runner(document: list[str]) -> int:
    module_map: dict[str, BaseModule] = {}
    conjunctions: set[str] = set()

    # Parse inputs to a "module map"
    # Also pull out the conjunction keys
    for line in document:
        key, output = line.split(" -> ")
        outputs = [value.strip() for value in output.split(",")]

        if key == "broadcaster":
            module_map[key] = Broadcast(key=key, next_modules=outputs)

        elif key.startswith("%"):
            key = key.replace("%", "")
            module_map[key] = FlipFlop(key=key, next_modules=outputs)

        elif key.startswith("&"):
            key = key.replace("&", "")
            module_map[key] = Conjunction(key=key, next_modules=outputs)
            conjunctions.add(key)

        else:
            raise ValueError

    # Run through all modules
    # If they have any conjunctions, update said conjunction
    for key, module in module_map.items():
        for next_module in module.next_modules:
            if next_module in conjunctions:
                # Add to module inputs
                conjunction_module = module_map[next_module]
                assert isinstance(conjunction_module, Conjunction)
                conjunction_module.add_input(key)

    # Get the initial output state of all modules
    initial_state: dict[str, State] = {}

    for key, module in module_map.items():
        initial_state[key] = module.output

    # Callback for comparing against initial state
    def matches_initial_state() -> bool:
        for _key, _module in module_map.items():
            if initial_state[_key] != _module.output:
                return False

        return True

    rx_caller = module_map["kh"]
    assert isinstance(rx_caller, Conjunction)

    triggers: dict[str, float] = {_input: math.inf for _input in rx_caller.inputs}

    button_presses = 0
    events: list[Event] = []

    while button_presses < 1 or not matches_initial_state():
        events.append(Event(to_module="broadcaster", from_module="button", state="Low"))
        button_presses += 1

        while events:
            event = events.pop(0)

            if event.to_module not in module_map:
                continue

            event_module = module_map[event.to_module]

            new_events = event_module.pulse(event.from_module, event.state)
            events += new_events

            if event_module.key in triggers and event_module.output == "High":
                triggers[event_module.key] = min(
                    triggers[event_module.key], button_presses
                )

        if all([value != math.inf for value in triggers.values()]):
            break

    return math.lcm(*triggers.values())


@pytest.mark.parametrize(
    "filename,output",
    [
        ("example-3.txt", 244178746156661),
    ],
)
def test_runner(filename: str, output: int) -> None:
    with open(Path(__file__).with_name(filename)) as file:
        result = runner(file.read().splitlines())

        assert result == output
`}),e.jsxs("p",{children:["Answer: ",e.jsx("code",{children:"244,178,746,156,661"})]}),e.jsx(n,{}),e.jsx(s,{hash:"recap",children:"Recap"}),e.jsxs(r,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Day"}),e.jsx("th",{children:"Part 1 Time"}),e.jsx("th",{children:"Part 1 Rank"}),e.jsx("th",{children:"Part 2 Time"}),e.jsx("th",{children:"Part 2 Rank"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"20"}),e.jsx("td",{children:"02:00:44"}),e.jsx("td",{children:"3,521"}),e.jsx("td",{children:"02:15:45"}),e.jsx("td",{children:"1,801"})]})})]}),e.jsx("p",{children:"I got stuck for a long time (at least ~45 minutes) just trying to figure out how the modules actually worked. I had a solution that worked for the first input but not the second. And when I fixed the code to work for the second input, it broke for the first. I really just needed to read the prompt carefully 🙃."}),e.jsxs("p",{children:["The second part was surprisingly easy. I've seen enough problems to know when to pull out"," ",e.jsx("a",{href:"https://docs.python.org/3/library/math.html#math.lcm",target:"_blank",children:e.jsx("code",{children:"math.lcm"})}),"."]}),e.jsxs("p",{children:["I did try running the problem without using ",e.jsx("code",{children:"math.lcm"}),", but considering that my answer was ",e.jsx("code",{children:"244,178,746,156,661"}),", I don't think that would've ever finished."]})]})};export{x as component};
