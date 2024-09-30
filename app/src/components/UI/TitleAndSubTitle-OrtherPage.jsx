export default function TitleAndSubTitlePageOrther({ title, subTitle }) {
  return (
    <div className="text-center sm:w-4/5 m-auto mb-12">
      <h1 className="font-bold text-3xl uppercase mb-2 title-gradient">
        {title}
      </h1>
      <h2 className="mb-4">{subTitle}</h2>
    </div>
  );
}
