"use client";

import TransitionLink from "@/components/utils/TransitionLink";

import "./button.scss";

const Button = ({ text, href, onClick, disabled, variant }) => {
  const classes = `button ${variant ? `button--${variant}` : ""}`;
  return (
    <>
      {href && (
        // TO DO: Replace all <TransitionLink href={path}><Button>Text</Button></TransitionLink> in project with <Button href={path}>Text</Button>
        <TransitionLink href={href} className={classes}>
          {text}
        </TransitionLink>
      )}

      {!href && (
        <button className={classes} onClick={onClick} disabled={disabled}>
          {text}
        </button>
      )}
    </>
  );
};

export default Button;
