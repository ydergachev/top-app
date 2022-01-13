import { Htag, P, Tag, Button } from "../components";

export default function Home(): JSX.Element {
  return (
    <div className={""}>
      <Htag tag="h3">Текст</Htag>
      <Button appearance='primary' arrow="right">Кнопка</Button>
      <Button appearance='ghost'>Кнопка</Button>
      <P size="l">Большой</P>
      <P size="m">Средний</P>
      <P size="s">Маленький</P>
      <Tag size="s">Маленький</Tag>
      <Tag size="m" color="red">Маленький</Tag>
      <Tag size="s" color="green">Маленький</Tag>

    </div>
  );
}
