function Spinner({ size = "6", color = "border-green-500" }) {
  return (
    <div
      className={`animate-spin rounded-full border-4 ${color} border-t-transparent`}
      style={{
        width: `${size}rem`,
        height: `${size}rem`,
      }}
    ></div>
  );
}

export default Spinner;
