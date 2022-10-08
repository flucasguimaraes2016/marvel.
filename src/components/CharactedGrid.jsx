import { CharacterCard } from "./CharacterCard";

export const CharacterGrid = ({ characters = [], showLoading = true }) => {
  return (
    <section className="grid gap-2 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
      {!showLoading &&
        characters.map((character) => (
          <CharacterCard key={character.id} {...character} />
        ))}
    </section>
  );
};
