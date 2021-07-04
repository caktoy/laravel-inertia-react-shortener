import React from "react";
import Layout from "../Components/Layout";

const About = () => {
    let foo: string = "React";
    const bar: string = "TypeScript";

    return (
        <div>
            About Us
        </div>
    );
};

About.title = 'About';
About.layout = (page: React.ReactChild) => <Layout children={page} title={About.title} />

export default About;
