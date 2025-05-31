import { CharacterAvatars } from "@/assets/svg/characters";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

export const mockCharacters = [
  {
    id: "professor-byte",
    name: "MathBot",
    bio: "I love solving equations!",
  },
  {
    id: "hootie",
    name: "SciencePro",
    bio: "Exploring the mysteries of the universe.",
  },
  {
    id: "rex",
    name: "Rex",
    bio: "Rawr! I'm here to dig into history.",
  },
  {
    id: "astro",
    name: "Astro",
    bio: "Blast off into the world of astronomy!",
  },
  {
    id: "pixie",
    name: "Pixie",
    bio: "Sprinkling creativity everywhere.",
  },
  {
    id: "gizmo",
    name: "Gizmo",
    bio: "Tinkering with technology and making magic happen.",
  },
];

export const CharacterDetail = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-fredoka text-center mb-12 text-gray-800">
        Meet Our AI Chatbots
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockCharacters.map((character) => (
          <div
            key={character.id}
            className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-24 h-24 mx-auto mb-4">
              {character.avatar && CharacterAvatars[character.avatar]}
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">
              {character.name}
            </h2>
            <p className="text-gray-600 my-2">{character.description}</p>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {character.skills.map((skill) => (
                <Badge key={skill} className={`${character.color} text-white`}>
                  {skill}
                </Badge>
              ))}
            </div>
            <Link href={`/characters/${character.id}`}>
              <Button className="mt-6">Learn More</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
