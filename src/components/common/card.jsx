import React from "react";

const Card = ({ children, ...props }) => {
  return <div className={`flex flex-col ${props.className}`}>{children}</div>;
};

const CardHeader = ({ children, ...props }) => {
  return (
    <div className={`flex flex-col gap-2 ${props.className}`}>{children}</div>
  );
};

const CardContent = ({ children, ...props }) => {
  return (
    <div className={`flex flex-col gap-0 text-sm ${props.className}`}>
      {children}
    </div>
  );
};

const CardFooter = ({ children, ...props }) => {
  return (
    <div className={`flex flex-col gap-0 text-sm ${props.className}`}>
      {children}
    </div>
  );
};

export { Card, CardHeader, CardContent, CardFooter };
