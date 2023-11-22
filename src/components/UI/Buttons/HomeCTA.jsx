const HomeCTA = ({ label, background, color, src, type }) => {
  return (
    <button
      className="rounded-md p-2  w-[225px] h-[60px] flex gap-2 justify-center items-center"
      type={type}
      style={{
        background: background,
        color: color,
      }}
    >
      <img src={src} alt="userIcon" className="" />
      {label}
    </button>
  );
};

export default HomeCTA;
