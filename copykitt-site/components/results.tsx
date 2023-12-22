import { La_Belle_Aurore } from "next/font/google";

interface ResultsProps {
    prompt: string;
    snippet: string;
    keywords: string[];
    onBack: any;
}

const Results: React.FC<ResultsProps> = (props) => {

    const keywordsElements = [];
    for (let i = 0; i < props.keywords.length; i++) {
        const element = <div key={i} className=" bg-gradient-to-r from-teal-600
        to-blue-500 rounded-md px-1 text-sm">#{props.keywords[i]}</div>;
        keywordsElements.push(element);
    }

    const keywordsElementsHolder = <div className="flex flex-wrap gap-2">{keywordsElements}</div>

    const resultSection = (label: string, body: any) => {
        return (
            <div className="bg-slate-700 p-4 my-3 rounded-md">
                <div className="text-slate-400 text-sm font-bold mb-4">
                    {label}:
                </div>
                <div>
                    {body}
                </div>
            </div>
        );
    };

    return (
        <>
            <div className="mb-6">
                {resultSection(
                    "Prompt",
                    <div className="text-lg font-bold">{props.prompt}</div>
                )}
                {resultSection(
                    "Branding Snippet",
                    props.snippet
                )}
                {resultSection(
                    "Keywords",
                    keywordsElementsHolder
                )}
            </div>
            <button
                className="bg-gradient-to-r from-teal-400
                to-blue-500 disabled:opacity-35 p-2 w-full rounded-md text-lg"
                onClick={props.onBack}
            >Back
            </button>
        </>
    );
};

export default Results;