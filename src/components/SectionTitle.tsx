interface propsTypes {
  title: string;
  position: string;
}

const SectionTitle = ({ title, position }: propsTypes) => {
  return (
    <div className={`section-title ${position}`}>
      <h2 className={``}>{title}</h2>
    </div>
  );
};

export default SectionTitle;
