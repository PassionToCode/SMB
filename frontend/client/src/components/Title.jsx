import React from "react";
import { Helmet } from "react-helmet";

const Title = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

Title.defaultProps = {
  title: "Welcome to SMB",
  description: "App for Small Medium Business",
  keywords: "SMB",
};

export default Title;
