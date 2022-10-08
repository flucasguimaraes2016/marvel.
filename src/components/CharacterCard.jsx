export const CharacterCard = ({ name, description, thumbnail = {} }) => {
  const bgUrl = `${thumbnail.path}.${thumbnail.extension}`;
  return (
    <section className="p-4 border border-gray-200 rounded-lg">
      <div
        style={{ "--bg-url": `url(${bgUrl})` }}
        className="flex justify-center mb-4 border w-full h-96 rounded-lg bg-[image:var(--bg-url)] bg-cover bg-no-repeat bg-center grayscale hover:grayscale-0"
      ></div>
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-sm">{description}</p>
    </section>
  );
};
