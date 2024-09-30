export default function TitleAndSubTitleHomePage({ title, subTitle }) {
  return (
    <div className="lg:text-center">
      <h1 className="font-bold text-3xl uppercase mb-2 title-gradient">
        {title}
      </h1>
      <h2 className="mb-4">{subTitle}</h2>
    </div>
  );
}
