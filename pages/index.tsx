import React from "react";
import { Htag, P, Tag, Button, Rating } from "../components";

export default function Home(): JSX.Element {
  const [counter, setCounter] = React.useState<number>(0);

  return (
    <div className={""}>
      <Htag tag="h3">{counter}</Htag>
      <Button
        appearance="primary"
        arrow="right"
        onClick={() => setCounter((x) => x + 1)}
      >
        Кнопка
      </Button>
      <Button appearance="ghost">Кнопка</Button>
      <P size="l">Большой</P>
      <P size="m">Средний</P>
      <P size="s">Маленький</P>
      <Tag size="s">Маленький</Tag>
      <Tag size="m" color="red">
        Маленький
      </Tag>
      <Tag size="s" color="green">
        Маленький
      </Tag>
      <Rating rating={4} isEditable/>
    </div>
  );
}
