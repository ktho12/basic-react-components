import React from "react";

const MainContent = ({ title, content }: { title: string, content: string }) => {
    return (
        <article style={{
            border: '5px solid white', padding: '20px', textAlign: 'center', margin: '20px 0 0 0'
        }}>
            <h1>{title}</h1>
            <p>{content}</p>
        </article>
    );
};

    export default MainContent;