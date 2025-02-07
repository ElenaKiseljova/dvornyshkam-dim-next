"use client";

import { useState } from "react";

import AccordionItem from "@/app/_components/accordion/AccordionItem";

import "./accordion.scss";

const Accordion = ({ data }) => {
  const [openId, setOpenId] = useState(null);

  return (
    <ul className="accordion">
      {data.map((el, id) => (
        <AccordionItem
          onClick={() => (id === openId ? setOpenId(null) : setOpenId(id))}
          data={el}
          isOpen={id === openId}
          key={id}
        />
      ))}
    </ul>
  );
};

export default Accordion;
