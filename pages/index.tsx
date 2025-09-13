import React from "react";
import Header from '../components/header';
import MainContent from '../components/MainContent';

export default function Home() {
  return (
    <div>
    <Header />
      <MainContent title="These are props" content="Lorem ipsum" />
      </div>
  )
}