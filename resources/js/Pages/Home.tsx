import React, { useState } from "react";
import Layout from "../Components/Layout";
import CreateLink from "../Components/CreateLink";
import ResultLink from "../Components/ResultLink";
import route from 'ziggy-js';
import { Inertia, Page } from "@inertiajs/inertia";

const Home = () => {
    const [generated, setGenerated] = useState('');
    const [processing, setProcessing] = useState(false);

    const submitUrl = (origin: string) => {
        Inertia.post(route('generate'), {
            'origin': origin
        }, {
            preserveState: true,
            preserveScroll: true,
            onBefore: (visit) => {
                setProcessing(true);
            },
            onSuccess: (page: Page) => {
                const { result } = page.props;
                if (result) {
                    setGenerated(String(result));
                }
            },
            onError: errors => {
                const { origin } = errors;
                if (origin) alert(origin);
            },
            onFinish: (visit) => {
                setProcessing(false);
            },
        });
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(generated);
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-white shadow-lg rounded p-2 m-2 border">
                <CreateLink onSubmit={submitUrl} processing={processing} />
            </div>
            <div className="bg-white shadow-lg rounded p-2 m-2 border">
                <ResultLink result={generated} onCopy={copyToClipboard} />
            </div>
        </div>
    );
};

Home.title = 'Home';
Home.layout = (page: React.ReactChild) => <Layout children={page} title={Home.title} />

export default Home;
