import { FC } from "react";
import Other from './other';
import './ReactHello.css';

interface HelloProps {
  name: string;
}
const ReactHello: FC<HelloProps> = (props: HelloProps) => {
  const name = props.name;
  return (
    <section className="react-hello">
      <h1 className='title'>Say Hello to {name} with TypeScript and React!</h1>
      <p>We are ready to go!</p>
      <Other name={'More'} />
    </section>
  );
};
export default ReactHello;
