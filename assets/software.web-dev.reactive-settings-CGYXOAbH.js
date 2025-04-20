import{j as e,K as o,I as r}from"./main-D9G3XBrV.js";import{T as t}from"./code-block-hQgQ5wpU.js";import{B as a}from"./layout-CJ5V7MbM.js";import{H as s,a as n}from"./header-DTrf65Je.js";import{C as i}from"./callout-B4Z6dmDh.js";import"./button-l-Wcb_eN.js";const g=function(){return e.jsxs(e.Fragment,{children:[e.jsx(a,{to:o.fullPath}),e.jsxs("p",{className:"mt-4",children:["How I'm building settings into my server-side rendered apps (i.e. apps built with the"," ",e.jsx("a",{href:"https://nextjs.org/docs/app",target:"_blank",children:"Next.js App Router"}),")."]}),e.jsx(s,{hash:"requirements",children:"Requirements"}),e.jsx("p",{children:"What are we actually trying to accomplish here?"}),e.jsx(n,{hash:"type-safety",children:"1) Settings Should Be Type-Safe"}),e.jsx("p",{children:"TypeScript is good and you should be using it. There are some obvious ways to make settings type-safe, such as making every setting have the same type, but those have some obvious limitations."}),e.jsxs("p",{children:["If a setting uses the incorrect type, we should know ASAP. This means that we should see the issue within our IDE and/or at build time, ",e.jsx("em",{children:"NOT"})," just at runtime."]}),e.jsx(n,{hash:"automatic-re-rendering-on-change",children:"2) Components Should Automatically Re-Render"}),e.jsx("p",{children:"This may seem fairly obvious (we are building React apps after all), but it's worth stating nonetheless."}),e.jsx("p",{children:"We should be able to write code like this..."}),e.jsx(t,{content:`function Component() {
    const value = useSetting("my-setting-identifier");
    ...
}`}),e.jsxs("p",{children:["...where ",e.jsx("code",{children:"value"})," always contains the most up-to-date state of the setting."]}),e.jsx(n,{hash:"re-rendering-opt-out",children:"3) Components Can Opt-Out of Automatic Re-Rendering"}),e.jsxs("p",{children:["This one is a little less obvious than the above requirement, but think of this as the"," ",e.jsxs("a",{href:"https://react.dev/reference/react/useRef",target:"_blank",children:[e.jsx("code",{children:"useRef"})," hook that React provides"]}),"."]}),e.jsx("p",{children:"We should be able to write code like this..."}),e.jsx(t,{content:`function Component() {
    const valueRef = useSettingRef("my-setting-identifier");
    ...
}`}),e.jsxs("p",{children:["...where ",e.jsx("code",{children:"valueRef.current"})," always contains the most up-to-date state of the setting, but changes to the underlying setting value do ",e.jsx("em",{children:"NOT"})," cause our"," ",e.jsx("code",{children:"Component"})," to re-render."]}),e.jsx(s,{hash:"components",children:"Components"}),e.jsx("p",{children:"The React code that powers this whole thing!"}),e.jsx(n,{hash:"settings-definitions",children:"1) Settings Definitions"}),e.jsx("p",{children:"If we want our settings to allow for a variety of types but still remain type-safe, we need to define these settings and their types in our app."}),e.jsxs("p",{children:["This uses"," ",e.jsx("a",{href:"https://zod.dev/",target:"_blank",children:e.jsx("code",{children:"zod"})})," ","for parsing and validating our settings. If we load settings from an external system that isn't quite as type-safe as our app, we need the runtime parsing and validation that ",e.jsx("code",{children:"zod"})," provides."]}),e.jsx(t,{content:`import { z } from "zod";

export const settingsParser = z.object({
    animationDelay: z.coerce.number().catch(100),
    sidebarExpanded: z.coerce.boolean().catch(true),
    themePrimary: z.coerce.string().catch("red"),
});

export type Settings = z.infer<typeof settingsParser>;`}),e.jsxs(i,{level:"question",header:e.jsxs(e.Fragment,{children:["What's up with the ",e.jsx("code",{children:"z.coerce"})," and ",e.jsx("code",{children:".catch(...)"}),"?"]}),children:[e.jsxs("p",{children:[e.jsx("code",{children:"z.coerce"}),' will attempt to "coerce" any inputted value into the following primitive type. This allows us to load in settings data from an untrusted source while still validating the data type.']}),e.jsxs("p",{children:[e.jsx("code",{children:".catch(...)"}),` will provide a fallback value for our setting if the validation fails for whatever reason. Validation may fail if we pass a value that cannot be coerced (ex: passing the string "hello" as a number) or if a value isn't present (ex: the user has never used the app before and doesn't have any established settings yet).`]})]}),e.jsx("p",{className:"mt-4",children:"This works to provide both build-time and runtime type-safety into our app surrounding settings."}),e.jsx(r,{src:"/blog/software/settings/type-safety.png",alt:"My IDE correctly throws an error when I create a 'settings' object with missing values."}),e.jsx(n,{hash:"settings-provider",children:"2) Settings Context Provider"}),e.jsx("p",{children:"We want a centralized place settings are managed, which provides the necessary hooks for the rest of our components."}),e.jsx(t,{content:`"use client";

import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";

import { Settings } from "./definitions";

const SettingsContext = createContext<Settings | undefined>(undefined);

type UpdateSetting = <T extends keyof Settings>(key: T, value: Settings[T]) => void;
const UpdateSettingContext = createContext<UpdateSetting | undefined>(undefined);

export function SettingsProvider(props: { initialSettings: Settings; children: React.ReactNode }) {
    /**************************************************************************/
    /* State */
    const [settings, setSettings] = useState<Settings>(props.initialSettings);

    const updateSetting = useCallback(
        <T extends keyof Settings>(key: T, value: Settings[T]) => {
            // Update local state
            setSettings((prevState) => {
                return {
                    ...prevState,
                    [key]: value,
                };
            });

            // Save setting change somewhere externally
            ...
        },
        [setSettings]
    ) satisfies UpdateSetting;

    /**************************************************************************/
    /* Render */
    return (
        <SettingsContext.Provider value={settings}>
            <UpdateSettingContext.Provider value={updateSetting}>
                {props.children}
            </UpdateSettingContext.Provider>
        </SettingsContext.Provider>
    );
}

// Use this when you want a setting change to re-render components
export function useSetting<T extends keyof Settings>(key: T): Settings[T] {
    const context = useContext(SettingsContext);

    if (!context) {
        throw new Error("Missing SettingsProvider context provider.");
    }

    return useMemo(() => context[key], [context, key]);
}

// Use this when you don't want a setting change to re-render components
export function useSettingRef<T extends keyof Settings>(
    key: T
): React.MutableRefObject<Settings[T]> {
    const context = useContext(SettingsContext);

    if (!context) {
        throw new Error("Missing SettingsProvider context provider.");
    }

    const valueRef = useRef(context[key]);

    useEffect(() => {
        valueRef.current = context[key];
    }, [context, key]);

    return valueRef;
}

export function useUpdateSetting() {
    const context = useContext(UpdateSettingContext);

    if (!context) {
        throw new Error("Missing SettingsProvider context provider.");
    }

    return context;
}
`}),e.jsxs(i,{level:"question",header:e.jsxs(e.Fragment,{children:["What's up with the types on the ",e.jsx("code",{children:"useSetting"})," hook?"]}),children:[e.jsx("p",{children:"Let's break it down:"}),e.jsx(t,{content:"useSetting<T extends keyof Settings>(key: T): Settings[T]"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsxs("code",{children:["<","T extends keyof Settings",">"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:["This makes our ",e.jsx("code",{children:"useSetting"})," function a"," ",e.jsx("a",{href:"https://www.typescriptlang.org/docs/handbook/2/generics.html",target:"_blank",children:"generic function"})]}),e.jsx("li",{children:"In this case, it means that the output type of our function depends on the input type"}),e.jsxs("li",{children:["Now, when we reference the type ",e.jsx("code",{children:"T"})," anywhere in our function, we know that variable is constrained to be a key of our"," ",e.jsx("code",{children:"settingsParser"}),":",e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("code",{children:"animationDelay"})}),e.jsx("li",{children:e.jsx("code",{children:"sidebarExpanded"})}),e.jsx("li",{children:e.jsx("code",{children:"themePrimary"})})]})]})]})]}),e.jsxs("li",{children:[e.jsx("code",{children:"key: T"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"key"})," is our function argument (or the function input)"]}),e.jsxs("li",{children:[e.jsx("code",{children:": T"})," means that our variable ",e.jsx("code",{children:"key"})," is constrained to the previously narrowed ",e.jsx("code",{children:"T"})," type"]}),e.jsxs("li",{children:["In this case, it means ",e.jsx("code",{children:"key"})," must be one of these string literals:",e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("code",{children:'"animationDelay"'})}),e.jsx("li",{children:e.jsx("code",{children:'"sidebarExpanded"'})}),e.jsx("li",{children:e.jsx("code",{children:'"themePrimary"'})})]})]})]})]}),e.jsxs("li",{children:[e.jsx("code",{children:"Settings[T]"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"Settings"})," is the type derived from our"," ",e.jsx("code",{children:"settingsParser"})," object"]}),e.jsxs("li",{children:[e.jsx("code",{children:"[T]"})," is an"," ",e.jsx("a",{href:"https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html",target:"_blank",children:"indexed access type"})," ","into our ",e.jsx("code",{children:"Settings"})," type"]}),e.jsxs("li",{children:["This means that whatever our input value ",e.jsx("code",{children:"key"})," is, the type we'll get out will match the type on the ",e.jsx("code",{children:"Settings"})," ","type for that ",e.jsx("code",{children:"key"}),":",e.jsxs("ul",{children:[e.jsxs("li",{children:["If ",e.jsx("code",{children:"key"})," is ",e.jsx("code",{children:'"animationDelay"'}),", the output will be a ",e.jsx("code",{children:"number"})]}),e.jsxs("li",{children:["If ",e.jsx("code",{children:"key"})," is ",e.jsx("code",{children:'"sidebarExpanded"'}),", the output will be a ",e.jsx("code",{children:"boolean"})]}),e.jsxs("li",{children:["If ",e.jsx("code",{children:"key"})," is ",e.jsx("code",{children:'"themePrimary"'}),", the output will be a ",e.jsx("code",{children:"string"})]})]})]})]})]})]}),e.jsxs("p",{children:["All of this gives us type-safety for our ",e.jsx("code",{children:"useSetting"}),","," ",e.jsx("code",{children:"useSettingRef"}),", and ",e.jsx("code",{children:"useUpdateSetting"})," hooks."]})]}),e.jsx(n,{hash:"get-settings-early",children:"3) Get Settings Early"}),e.jsxs("p",{children:["Make sure you get your settings ",e.jsx("em",{children:"EARLY"})," in your application, before almost anything else loads."]}),e.jsx("p",{children:"If you're using Next.js, this will almost certainly opt you into dynamically-rendered pages."}),e.jsx(t,{content:`import React from "react";

import { fetchSettings } from "@/components/settings/fetch-settings";
import { SettingsProvider } from "@/components/settings/provider";

export default async function RootLayout(props: { children: React.ReactNode }) {
    /**************************************************************************/
    /* Fetch data */
    const initialSettings = await fetchSettings();

    /**************************************************************************/
    /* Render */
    return (
        <html lang="en">
            <body>
                <SettingsProvider initialSettings={initialSettings}>
                    {props.children}
                </SettingsProvider>
            </body>
        </html>
    );
}
`}),e.jsx(n,{hash:"use-settings",children:"4) Use Settings"}),e.jsx("p",{children:"Using the settings hooks should be relatively straightforward."}),e.jsx(t,{content:`"use client";

import { z } from "zod";

import {
    Label,
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@fletcheaston/ui";

import { useSetting, useUpdateSetting } from "@/components/settings/provider";

export function ModifySettings() {
    /**************************************************************************/
    /* State */
    const updateSetting = useUpdateSetting();

    const animationDelay = useSetting("animationDelay");

    /**************************************************************************/
    /* Render */
    return (
        <div className="flex flex-col gap-8">
            <div>
                <Label>Animation Delay</Label>

                <Select
                    value={animationDelay.toString()}
                    onValueChange={(rawValue) => {
                        const value = z.coerce.number().parse(rawValue);
                        updateSetting("animationDelay", value);
                    }}
                >
                    <SelectTrigger>
                        <SelectValue placeholder="Animation Delay" />
                    </SelectTrigger>

                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="0">No Delay (May Cause Lag)</SelectItem>
                            <SelectItem value="1">Minimum Delay (1ms)</SelectItem>
                            <SelectItem value="10">Very Low Delay (10ms)</SelectItem>
                            <SelectItem value="100">Low Delay (100ms)</SelectItem>
                            <SelectItem value="500">Moderate Delay (500ms)</SelectItem>
                            <SelectItem value="1000">Large Delay (1,000ms)</SelectItem>
                            <SelectItem value="5000">Very Large Delay (5,000ms)</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
}
`})]})};export{g as component};
