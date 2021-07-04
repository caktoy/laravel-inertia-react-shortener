import React, { useState } from "react";

interface ICreateLink {
    onSubmit(url: string): void,
    processing: boolean,
}

export default function CreateLink(props: ICreateLink) {
    const [url, setUrl] = useState('');

    const onSubmit = (e: any) => {
        e.preventDefault();

        props.onSubmit(url);
    }

    return (
        <div className="text-center w-full">
            <div className="text-2xl font-bold">Origin URL</div>
            <div className="text-gray-400">Silahkan masukkan URL yang Anda inginkan untuk disederhanakan.</div>
            <input type="url" className="w-full rounded text-center focus:border-red-400 border p-2 my-4 text-xl" placeholder="https://giveawayindo.com/sample" value={url} onChange={e => setUrl(e.target.value)} />
            <button type="button" className="w-full rounded text-center bg-red-700 hover:bg-red-900 text-white p-2 mt-2 text-lg" onClick={e => onSubmit(e)} disabled={props.processing}>
                Shrink
            </button>
        </div>
    );
}