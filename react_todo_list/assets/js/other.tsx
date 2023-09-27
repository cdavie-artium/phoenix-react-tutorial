import { FC } from "react";

interface OtherProps {
  name: string;
}
const Other: FC<OtherProps> = (props: OtherProps) => {
  const name = props.name;
  return (
    <section className="react-hello">
      <h1>Other {name} Stuff!</h1>
    </section>
  );
};
export default Other;
