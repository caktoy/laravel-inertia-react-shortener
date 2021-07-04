import React, {useState} from "react";
import { toast } from 'react-toastify';

interface IResultLink {
    result: string,
    onCopy(): void;
}

export default function ResultLink(props: IResultLink) {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = (e: any) => {
        props.onCopy();

        setCopied(true);

        toast.success('Copied to clipboard.');
    }

    return (
        <div className="text-center w-full">
            <div className="text-2xl font-bold">Result URL</div>
            <div className="text-gray-400">berikut adalah hasil URL yang sudah disederhanakan.</div>
            <input type="url" className="w-full rounded text-center focus:border-red-400 border p-2 my-4 text-xl bg-gray-200 text-gray-700" placeholder="https://giveawayindo.com/sample" value={props.result || ''} readOnly />
            <button type="button" className={`w-full rounded text-center text-white p-2 mt-2 text-lg ${(props.result ? "bg-red-700 hover:bg-red-900" : "bg-red-300")}`} disabled={props.result === ''} onClick={copyToClipboard}>
                { !copied ? 'Copy to Clipboard' : 'Copied!' }
            </button>
        </div>
    )
}
