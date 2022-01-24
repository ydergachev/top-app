import { GetStaticProps } from "next";
import React from "react";
import { Htag, P, Tag, Button, Rating } from "../components";
import { Layout, withLayot } from "../layout/Layout/Layout";
import { MenuItem } from "../interfaces/menu.interface";
import axios from "axios";

function Home({ menu, firstCategory }): JSX.Element {
  const [counter, setCounter] = React.useState<number>(0);

  return (
    <>
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
      <Rating rating={4} isEditable />
      <ul>
        {menu.map((m) => (
          <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
        ))}
      </ul>
    </>
  );
}

export default withLayot(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;

  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    {
      firstCategory,
    }
  );

  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
