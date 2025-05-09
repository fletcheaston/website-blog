import{j as e,aX as l}from"./main-a2_r2NC5.js";import{P as o,a as r}from"./code-block-4pH2gWIb.js";import{B as n}from"./layout-CaECEKTw.js";import{H as s}from"./header-CENws30L.js";import{T as a}from"./table-BxsQC4Ah.js";import{S as t}from"./separator-C0OyYgS-.js";import"./button-C7m1cdz4.js";const m=function(){return e.jsxs(e.Fragment,{children:[e.jsx(n,{to:l.fullPath}),e.jsx(s,{hash:"part-1-prompt",children:"Part 1 – Prompt"}),e.jsx("p",{children:"The Elves of Gear Island are thankful for your help and send you on your way. They even have a hang glider that someone stole from Desert Island; since you're already going that direction, it would help them a lot if you would use it to get down there and return it to them."}),e.jsxs("p",{children:["As you reach the bottom of the"," ",e.jsx("strong",{children:"relentless avalanche of machine parts"}),", you discover that they're already forming a formidable heap. Don't worry, though - a group of Elves is already here organizing the parts, and they have a ",e.jsx("strong",{children:"system"}),"."]}),e.jsx("p",{children:"To start, each part is rated in each of four categories:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"x"}),": E",e.jsx("strong",{children:"x"}),"tremely cool looking"]}),e.jsxs("li",{children:[e.jsx("code",{children:"m"}),": ",e.jsx("strong",{children:"M"}),"usical (it makes a noise when you hit it)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"a"}),": ",e.jsx("strong",{children:"A"}),"erodynamic"]}),e.jsxs("li",{children:[e.jsx("code",{children:"s"}),": ",e.jsx("strong",{children:"S"}),"hiny"]})]}),e.jsxs("p",{children:["Then, each part is sent through a series of ",e.jsx("strong",{children:"workflows"})," that will ultimately ",e.jsx("strong",{children:"accept"})," or ",e.jsx("strong",{children:"reject"})," the part. Each workflow has a name and contains a list of rules; each rule specifies a condition and where to send the part if the condition is true. The first rule that matches the part being considered is applied immediately, and the part moves on to the destination described by the rule. (The last rule in each workflow has no condition and always applies if reached.)"]}),e.jsxs("p",{children:["Consider the workflow"," ",e.jsxs("code",{children:["ex","{","x>10:one,m<20:two,a>30:R,A","}"]}),". This workflow is named ",e.jsx("code",{children:"ex"})," and contains four rules. If workflow"," ",e.jsx("code",{children:"ex"})," were considering a specific part, it would perform the following steps in order:"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:['Rule "',e.jsx("code",{children:"x>10:one"}),`": If the part's `,e.jsx("code",{children:"x"})," is more than"," ",e.jsx("code",{children:"10"}),", send the part to the workflow named ",e.jsx("code",{children:"one"}),"."]}),e.jsxs("li",{children:['Rule "',e.jsx("code",{children:"m<20:two"}),`": Otherwise, if the part's `,e.jsx("code",{children:"m"})," is less than ",e.jsx("code",{children:"20"}),", send the part to the workflow named ",e.jsx("code",{children:"two"}),"."]}),e.jsxs("li",{children:['Rule "',e.jsx("code",{children:"a>30:R"}),`": Otherwise, if the part's `,e.jsx("code",{children:"a"})," is more than ",e.jsx("code",{children:"30"}),", the part is immediately rejected (",e.jsx("code",{children:"R"}),")."]}),e.jsxs("li",{children:['Rule "',e.jsx("code",{children:"A"}),'": Otherwise, because no other rules matched the part, the part is immediately accepted (',e.jsx("code",{children:"A"}),")."]})]}),e.jsxs("p",{children:["If a part is sent to another workflow, it immediately switches to the start of that workflow instead and never returns. If a part is ",e.jsx("strong",{children:"accepted"})," (sent to"," ",e.jsx("code",{children:"A"}),") or ",e.jsx("strong",{children:"rejected"})," (sent to ",e.jsx("code",{children:"R"}),"), the part immediately stops any further processing."]}),e.jsx("p",{children:"The system works, but it's not keeping up with the torrent of weird metal shapes. The Elves ask if you can help sort a few parts and give you the list of workflows and some part ratings (your puzzle input). For example:"}),e.jsx(o,{content:`px{a<2006:qkq,m>2090:A,rfg}
pv{a>1716:R,A}
lnx{m>1548:A,A}
rfg{s<537:gd,x>2440:R,A}
qs{s>3448:A,lnx}
qkq{x<1416:A,crn}
crn{x>2662:A,R}
in{s<1351:px,qqz}
qqz{s>2770:qs,m<1801:hdj,R}
gd{a>3333:R,R}
hdj{m>838:A,pv}

{x=787,m=2655,a=1222,s=2876}
{x=1679,m=44,a=2067,s=496}
{x=2036,m=264,a=79,s=2244}
{x=2461,m=1339,a=466,s=291}
{x=2127,m=1623,a=2188,s=1013}`}),e.jsx("p",{children:"The workflows are listed first, followed by a blank line, then the ratings of the parts the Elves would like you to sort. All parts begin in the workflow named in. In this example, the five listed parts go through the following workflows:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsxs("code",{children:["{","((x = 787), (m = 2655), (a = 1222), (s = 2876))","}"]}),": ",e.jsx("code",{children:"in"})," -> ",e.jsx("code",{children:"qqz"})," ->",e.jsx("code",{children:"qs"})," -> ",e.jsx("code",{children:"lnx"})," ->"," ",e.jsx("strong",{children:e.jsx("code",{children:"A"})})]}),e.jsxs("li",{children:[e.jsxs("code",{children:["{","((x = 1679), (m = 44), (a = 2067), (s = 496))","}"]}),": ",e.jsx("code",{children:"in"})," -> ",e.jsx("code",{children:"px"})," ->",e.jsx("code",{children:"rfg"})," -> ",e.jsx("code",{children:"gd"})," ->"," ",e.jsx("strong",{children:e.jsx("code",{children:"R"})})]}),e.jsxs("li",{children:[e.jsxs("code",{children:["{","((x = 2036), (m = 264), (a = 79), (s = 2244))","}"]}),": ",e.jsx("code",{children:"in"})," -> ",e.jsx("code",{children:"qqz"})," ->",e.jsx("code",{children:"hdj"})," -> ",e.jsx("code",{children:"pv"})," ->"," ",e.jsx("strong",{children:e.jsx("code",{children:"A"})})]}),e.jsxs("li",{children:[e.jsxs("code",{children:["{","((x = 2461), (m = 1339), (a = 466), (s = 291))","}"]}),": ",e.jsx("code",{children:"in"})," -> ",e.jsx("code",{children:"px"})," ->",e.jsx("code",{children:"qkq"})," -> ",e.jsx("code",{children:"crn"})," ->"," ",e.jsx("strong",{children:e.jsx("code",{children:"R"})})]}),e.jsxs("li",{children:[e.jsxs("code",{children:["{","((x = 2127), (m = 1623), (a = 2188), (s = 1013))","}"]}),": ",e.jsx("code",{children:"in"})," -> ",e.jsx("code",{children:"px"})," ->",e.jsx("code",{children:"rfg"})," ->"," ",e.jsx("strong",{children:e.jsx("code",{children:"A"})})]})]}),e.jsxs("p",{children:["Ultimately, three parts are ",e.jsx("strong",{children:"accepted"}),". Adding up the ",e.jsx("code",{children:"x"}),","," ",e.jsx("code",{children:"m"}),", ",e.jsx("code",{children:"a"}),", and ",e.jsx("code",{children:"s"})," rating for each of the accepted parts gives ",e.jsx("code",{children:"7540"})," for the part with ",e.jsx("code",{children:"x=787"}),","," ",e.jsx("code",{children:"4623"})," for the part with ",e.jsx("code",{children:"x=2036"}),", and ",e.jsx("code",{children:"6951"})," for the part with ",e.jsx("code",{children:"x=2127"}),". Adding all of the ratings for"," ",e.jsx("strong",{children:"all"})," of the accepted parts gives the sum total of"," ",e.jsx("strong",{children:e.jsx("code",{children:"19114"})}),"."]}),e.jsxs("p",{children:["Sort through all of the parts you've been given;"," ",e.jsx("strong",{children:"what do you get if you add together all of the rating numbers for all of the parts that ultimately get accepted?"})]}),e.jsx(s,{hash:"part-1-solution",children:"Part 1 – Solution"}),e.jsx("p",{children:"Create a map of each key to each workflow, and walk each part through the workflows."}),e.jsx(r,{content:`import json
from dataclasses import dataclass
from pathlib import Path

import pytest

Result = str


@dataclass
class Part:
    x: int
    m: int
    a: int
    s: int
    raw: dict[str, int]

    result: Result | None = None

    @property
    def total(self) -> int:
        return self.x + self.m + self.a + self.s

    def __repr__(self) -> str:
        return f"{self.x} | {self.m} | {self.a} | {self.s}"


@dataclass
class Step:
    field: str | None
    operator: str | None
    value: int | None

    result: Result

    @property
    def does_math(self) -> bool:
        return (
            self.field is not None
            and self.operator is not None
            and self.value is not None
        )

    def __repr__(self) -> str:
        if self.field and self.operator and self.value:
            return f"{self.field} {self.operator} {self.value} => {self.result}"

        return self.result

    def result_for_part(self, part: Part) -> Result | None:
        # Returns self.result if passes
        if self.field is None or self.operator is None or self.value is None:
            return self.result

        if self.operator == ">" and part.raw[self.field] > self.value:
            return self.result

        if self.operator == "<" and part.raw[self.field] < self.value:
            return self.result

        # Returns None if fails
        return None

    @classmethod
    def from_str(cls, raw_value: str) -> "Step":
        if ":" in raw_value:
            condition, result = raw_value.split(":")
            field = condition[0]
            operator = condition[1]
            value = condition[2:]

            return cls(field=field, operator=operator, value=int(value), result=result)

        else:
            return cls(field=None, operator=None, value=None, result=raw_value)


@dataclass
class Workflow:
    steps: list[Step]

    def __repr__(self) -> str:
        return f"{self.steps}"

    def result_for_part(self, part: Part) -> Result:
        for step in self.steps:
            result = step.result_for_part(part)

            if isinstance(result, str):
                return result


def runner(document: list[str]) -> int:
    reading_workflows = True
    workflows: dict[str, Workflow] = {}
    parts: list[Part] = []

    for line in document:
        # Switch modes
        if line == "":
            reading_workflows = False
            continue

        if reading_workflows:
            key, rest = line.split("{")
            step_strings = rest.replace("}", "").split(",")

            steps = [Step.from_str(value) for value in step_strings]

            workflows[key] = Workflow(steps=steps)

        else:
            json_line = (
                line.replace("x", '"x"')
                .replace("m", '"m"')
                .replace("a", '"a"')
                .replace("s", '"s"')
                .replace("=", ":")
            )
            data = json.loads(json_line)
            parts.append(
                Part(
                    **data,
                    raw=data,
                ),
            )

    for part in parts:
        next_workflow: Workflow | None = workflows["in"]

        while part.result not in ["A", "R"]:
            part.result = next_workflow.result_for_part(part)

            if part.result not in ["A", "R"]:
                next_workflow = workflows[part.result]

    return sum([part.total for part in parts if part.result == "A"])


@pytest.mark.parametrize(
    "filename,output",
    [
        ("example-1.txt", 19114),
        ("example-2.txt", 348378),
    ],
)
def test_runner(filename: str, output: int) -> None:
    with open(Path(__file__).with_name(filename)) as file:
        result = runner(file.read().splitlines())

        assert result == output
`}),e.jsxs("p",{children:["Answer: ",e.jsx("code",{children:"348,378"})]}),e.jsx(t,{}),e.jsx(s,{hash:"part-2-prompt",children:"Part 2 – Prompt"}),e.jsxs("p",{children:["Even with your help, the sorting process ",e.jsx("strong",{children:"still"})," isn't fast enough."]}),e.jsx("p",{children:"One of the Elves comes up with a new plan: rather than sort parts individually through all of these workflows, maybe you can figure out in advance which combinations of ratings will be accepted or rejected."}),e.jsxs("p",{children:["Each of the four ratings (",e.jsx("code",{children:"x"}),", ",e.jsx("code",{children:"m"}),", ",e.jsx("code",{children:"a"}),","," ",e.jsx("code",{children:"s"}),") can have an integer value ranging from a minimum of ",e.jsx("code",{children:"1"})," ","to a maximum of ",e.jsx("code",{children:"4000"}),". Of"," ",e.jsx("strong",{children:"all possible distinct combinations"})," of ratings, your job is to figure out which ones will be ",e.jsx("strong",{children:"accepted"}),"."]}),e.jsxs("p",{children:["In the above example, there are"," ",e.jsx("strong",{children:e.jsx("code",{children:"167409079868000"})})," ","distinct combinations of ratings that will be accepted."]}),e.jsxs("p",{children:["Consider only your list of workflows; the list of part ratings that the Elves wanted you to sort is no longer relevant.",e.jsx("strong",{children:"How many distinct combinations of ratings will be accepted by the Elves' workflows?"})]}),e.jsx(s,{hash:"part-2-solution",children:"Part 2 – Solution"}),e.jsx("p",{children:"Same start as Part 1, but we ignore the back-half of the input. Instead, we calculate the number of possible ranges for each step."}),e.jsx(r,{content:`from copy import deepcopy
from dataclasses import dataclass
from pathlib import Path

import pytest

Result = str


@dataclass
class Part:
    x: int
    m: int
    a: int
    s: int
    raw: dict[str, int]

    result: Result | None = None

    @property
    def total(self) -> int:
        return self.x + self.m + self.a + self.s

    def __repr__(self) -> str:
        return f"{self.x} | {self.m} | {self.a} | {self.s}"


@dataclass
class Step:
    field: str | None
    operator: str | None
    value: int | None

    result: Result

    @property
    def does_math(self) -> bool:
        return (
            self.field is not None
            and self.operator is not None
            and self.value is not None
        )

    def __repr__(self) -> str:
        if self.field and self.operator and self.value:
            return f"{self.field} {self.operator} {self.value} => {self.result}"

        return self.result

    def result_for_part(self, part: Part) -> Result | None:
        # Returns self.result if passes
        if self.field is None or self.operator is None or self.value is None:
            return self.result

        if self.operator == ">" and part.raw[self.field] > self.value:
            return self.result

        if self.operator == "<" and part.raw[self.field] < self.value:
            return self.result

        # Returns None if fails
        return None

    @classmethod
    def from_str(cls, raw_value: str) -> "Step":
        if ":" in raw_value:
            condition, result = raw_value.split(":")
            field = condition[0]
            operator = condition[1]
            value = condition[2:]

            return cls(field=field, operator=operator, value=int(value), result=result)

        else:
            return cls(field=None, operator=None, value=None, result=raw_value)


@dataclass
class Workflow:
    steps: list[Step]

    def __repr__(self) -> str:
        return f"{self.steps}"

    def result_for_part(self, part: Part) -> Result:
        for step in self.steps:
            result = step.result_for_part(part)

            if isinstance(result, str):
                return result


@dataclass
class Range:
    lower: int
    upper: int


Ranges = dict[str, Range]


def range_combos(ranges: Ranges) -> int:
    count = 1

    for _range in ranges.values():
        count *= _range.upper - _range.lower + 1

    return count


def runner(document: list[str]) -> int:
    reading_workflows = True
    workflows: dict[str, Workflow] = {}

    for line in document:
        # Switch modes
        if line == "":
            reading_workflows = False
            continue

        if reading_workflows:
            key, rest = line.split("{")
            step_strings = rest.replace("}", "").split(",")

            steps = [Step.from_str(value) for value in step_strings]

            workflows[key] = Workflow(steps=steps)

    def calculate_combos(ranges: Ranges, workflow_id: str) -> int:
        combos = 0

        for step in workflows[workflow_id].steps:
            if step.does_math:
                new_ranges = deepcopy(ranges)

                if step.operator == ">":
                    if new_ranges[step.field].upper > step.value:
                        new_ranges[step.field].lower = max(
                            new_ranges[step.field].lower, step.value + 1
                        )

                        # Step results in accept, get all combos for the new ranges
                        if step.result == "A":
                            combos += range_combos(new_ranges)

                        # We're not counting the rejects
                        elif step.result == "R":
                            pass

                        # Everything else refers to another workflow
                        else:
                            combos += calculate_combos(new_ranges, step.result)

                        # Update base ranges for next steps
                        ranges[step.field].upper = min(
                            ranges[step.field].upper, step.value
                        )

                elif step.operator == "<" and new_ranges[step.field].lower < step.value:
                    new_ranges[step.field].upper = min(
                        new_ranges[step.field].upper, step.value - 1
                    )

                    # Step results in accept, get all combos for the new ranges
                    if step.result == "A":
                        combos += range_combos(new_ranges)

                    # We're not counting the rejects
                    elif step.result == "R":
                        pass

                    # Everything else refers to another workflow
                    else:
                        combos += calculate_combos(new_ranges, step.result)

                    # Update base ranges for next steps
                    ranges[step.field].lower = max(ranges[step.field].lower, step.value)

            else:
                # Base case, our step results in accept
                if step.result == "A":
                    combos += range_combos(ranges)

                # We're not counting the rejects
                elif step.result == "R":
                    pass

                # Everything else refers to another workflow
                else:
                    combos += calculate_combos(ranges, step.result)

        return combos

    return calculate_combos(
        {
            "x": Range(lower=1, upper=4000),
            "m": Range(lower=1, upper=4000),
            "a": Range(lower=1, upper=4000),
            "s": Range(lower=1, upper=4000),
        },
        "in",
    )


@pytest.mark.parametrize(
    "filename,output",
    [
        ("example-1.txt", 167409079868000),
        ("example-2.txt", 121158073425385),
    ],
)
def test_runner(filename: str, output: int) -> None:
    with open(Path(__file__).with_name(filename)) as file:
        result = runner(file.read().splitlines())

        assert result == output
`}),e.jsxs("p",{children:["Answer: ",e.jsx("code",{children:"121,158,073,425,385"})]}),e.jsx(t,{}),e.jsx(s,{hash:"recap",children:"Recap"}),e.jsxs(a,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Day"}),e.jsx("th",{children:"Part 1 Time"}),e.jsx("th",{children:"Part 1 Rank"}),e.jsx("th",{children:"Part 2 Time"}),e.jsx("th",{children:"Part 2 Rank"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"19"}),e.jsx("td",{children:"00:31:38"}),e.jsx("td",{children:"1,809"}),e.jsx("td",{children:"01:21:18"}),e.jsx("td",{children:"1,528"})]})})]}),e.jsx("p",{children:"I hate range problems 😖"})]})};export{m as component};
