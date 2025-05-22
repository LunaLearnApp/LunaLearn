import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { CharacterAvatars } from "@/assets/svg/characters";
import { CharacterDetail } from "@/components/CharacterDetail";

export type Character = {
  id: string;
  name: string;
  color: string;
  description: string;
  skills: string[];
};

const CharacterGuides = () => {
  const [activeCharacter, setActiveCharacter] = useState<string | null>(null);

  const { data: characters, isLoading } = useQuery({
    queryKey: ['/api/characters'],
    select: (data: Character[]) => data,
  });

  const activeCharacterData = characters?.find(char => char.id === activeCharacter) || characters?.[0];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 relative">
      <div className="container mx-auto px-4">
        <h2 className="font-fredoka text-4xl text-center mb-16">Meet Your Learning Companions</h2>
        
        {isLoading ? (
          <div className="flex justify-center">
            <div className="animate-spin h-10 w-10 rounded-full border-t-2 border-primary border-t-primary"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
              {characters?.map((character) => (
                <button
                  key={character.id}
                  onClick={() => setActiveCharacter(character.id)}
                  className={`character-bubble ${character.color} hover:${character.color.replace('bg-', 'bg-')}-dark`}
                >
                  <div className="w-20 h-20 rounded-full bg-white p-1 mb-3">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      {CharacterAvatars[character.id as keyof typeof CharacterAvatars]}
                    </div>
                  </div>
                  <h3 className="font-fredoka text-white text-center">{character.name}</h3>
                </button>
              ))}
            </div>
            
            {/* Character Details */}
            {activeCharacterData && (
              <CharacterDetail character={activeCharacterData} />
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default CharacterGuides;
