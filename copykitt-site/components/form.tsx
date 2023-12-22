interface FormProps {
    prompt: string;
    setPrompt: any;
    onSubmit: any;
    isLoading: boolean;
    characterLimit: number;
}

const Form: React.FC<FormProps> = (props) => {
    const isPromptValid = props.prompt.length <= props.characterLimit;

    const handleEnterSubmit = (e: { keyCode: number; }) => {
        if (e.keyCode === 13) {
            props.onSubmit();
        }
    };

    const updatePromptValue = (text: string) => {
        if (text.length <= props.characterLimit) {
            props.setPrompt(text);
        }
    };

    let statusColor = "text-slate-500";
    let statusText = null;
    if (props.prompt.length >= props.characterLimit) {
        statusColor = "text-red-400"
        statusText = `Input must be less than ${props.characterLimit} characters`
    }

    return (
        <>
            <div className="mb-6 text-slate-400">
                <p>
                    Tell me what your brand is about and I will generate copy and keywords for you
                </p>
            </div>
            <input
                onKeyDown={handleEnterSubmit}
                className="p-2 w-full rounded-md focus-within:outline-teal-500 text-slate-800"
                type="text"
                placeholder="coffee"
                onChange={(e) => updatePromptValue(e.currentTarget.value)}
                value={props.prompt}
            ></input>
            <div className={statusColor + " flex justify-between my-2 text-sm mb-6"}>
                <div>{statusText}</div>
                <div>
                    {props.prompt.length}/{props.characterLimit}
                </div>
            </div>
            <button
                type="submit"
                className="bg-gradient-to-r from-teal-400
                to-blue-500 disabled:opacity-35 p-2 w-full rounded-md text-lg"
                onClick={props.onSubmit}
                disabled={props.isLoading || !isPromptValid}>Submit</button>
        </>
    );
};

export default Form;