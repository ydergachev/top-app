import { Htag, Button } from "../components";

export default function Home(): JSX.Element {
  return (
    <div className={""}>
      <Htag tag="h3">Текст</Htag>
      <Button appearance='primary' arrow="right">Кнопка</Button>
      <Button appearance='ghost'>Кнопка</Button>
    </div>
  );
}
