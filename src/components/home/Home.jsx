
import { homepage } from "../../imports";
import { Markdown } from "../markdown";
import React from "react";

const CreateHome = () => {
    const Home = homepage.map((home, index) => {
        return (
          <div key={index}>
            <Markdown markdownText={home} />
          </div>
        );
      });
      return <>{Home}</>;
}

export default CreateHome;