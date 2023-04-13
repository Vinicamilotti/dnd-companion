export const Sheet = ({ props }: { props: string | Boolean }) => {
  if (typeof props == "string") {
    return <p>{props}</p>;
  }
  return <p>error</p>;
};
