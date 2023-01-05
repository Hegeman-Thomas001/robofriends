//
const Scroll = (props) => {
  return (
    <section
      style={{
        overflow: "scroll",
        borderTop: "3px solid black",
        height: "800px",
      }}
    >
      {props.children}
    </section>
  );
};

export default Scroll;
