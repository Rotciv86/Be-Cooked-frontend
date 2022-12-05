import LoaderStyled from "./LoaderStyled";

const Loader = (): JSX.Element => {
  return (
    <LoaderStyled>
      <div
        aria-label="Un huevo frito siendo salteado en una sarten"
        className="loader"
      ></div>
    </LoaderStyled>
  );
};

export default Loader;
