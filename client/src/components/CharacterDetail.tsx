import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export const CharacterDetail = ({ character }) => {
  if (!character) {
    return null;
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 max-w-md mx-auto">
      <h2 className={`${character.textColor} text-2xl font-semibold`}>{character.name}</h2>
      <p className="text-gray-600 my-2">{character.description}</p>
      <div className="flex flex-wrap justify-center gap-2 mt-4">
        {character.skills.map((skill) => (
          <span
            key={skill}
            className={`${character.color} text-white px-3 py-1 rounded-full text-sm`}
          >
            {skill}
          </span>
        ))}
      </div>
      <Link href={`/characters/${character.id}`}>
        <Button className="mt-6 text-white">Learn More</Button>
      </Link>
    </div>
  );
};
