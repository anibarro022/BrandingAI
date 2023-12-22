'use client'

import React from "react";
import Form from "./form";
import Results from "./results";
import Image from "next/image";
import Logo from "../public/copykittLogo.svg"

const CopyKitt: React.FC = () => {
    const CHARACTER_LIMIT: number = 32;
    const ENDPOINT: string =
        "https://4gfvsaube2.execute-api.us-west-2.amazonaws.com/prod/generate_snippit_and_keywords";
    const [prompt, setPrompt] = React.useState("");
    const [snippet, setSnippet] = React.useState("");
    const [keywords, setKeywords] = React.useState([]);
    const [hasResult, setHasResult] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    console.log(prompt);

    const onSubmit = () => {
        console.log("Submitting: " + prompt)
        setIsLoading(true);
        fetch(`${ENDPOINT}?prompt=${prompt}`)
            .then((res) => res.json())
            .then(onResult)
    };

    const onResult = (data: any) => {
        setSnippet(data.snippet);
        setKeywords(data.keywords);
        setHasResult(true);
        setIsLoading(false);
    };

    const onReset = (data: any) => {
        setPrompt("");
        setHasResult(false);
        setIsLoading(false);
    };

    let displayedElement = null;

    if (hasResult) {
        displayedElement = (
            <Results
                snippet={snippet}
                keywords={keywords}
                onBack={onReset}
                prompt={prompt}
            />
        );
    } else {
        displayedElement = (
            <Form
                prompt={prompt}
                setPrompt={setPrompt}
                onSubmit={onSubmit}
                isLoading={isLoading}
                characterLimit={CHARACTER_LIMIT}
            />
        );
    };

    const gradientTextStyle =
        " text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500";

    return (
        <>
            <div className="h-screen flex">
                <div className="max-w-md m-auto p-2">
                    <div className="bg-slate-800 p-6 rounded-md text-white">
                        <div className=" flex flex-col justify-center align-middle items-center my-6">
                            <Image src={Logo} width={42} height={42} alt="Copykitt Logo" />
                            <h1 className={gradientTextStyle + " text-3xl font-light"}>CopyKitt!</h1>
                            <div className={gradientTextStyle}>Your AI branding assistant</div>
                        </div>
                        {displayedElement}
                    </div>
                </div>
            </div>
        </>
    );
}

export default CopyKitt