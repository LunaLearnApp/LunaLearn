import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { CharacterAvatars } from "@/assets/svg/characters";
import { CharacterDetail } from "@/components/CharacterDetail";

export type Character = {
  id: string;
  name: string;
  color: string;
  textColor: string,
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
    <section className="py-20 overflow-hidden bg-gradient-to-br from-blue-200 to-purple-200 relative">
      <div className="container mx-auto px-4">
        <h2 className="font-fredoka text-primary text-4xl text-center mb-16">Meet Your Learning Companions</h2>
        
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
                  className={`character-bubble ${character.color} hover:${character.color.replace('bg-', 'bg-')}-dark`}>
                  <div className="w-36 h-36 rounded-full bg-white p-1 mb-3">
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

        <div className="flex-1 relative z-0 text-center">
          <div className="absolute top-[-800px] right-[250px] w-[200px] h-[200px] bg-primary opacity-60 rounded-full"></div>
          <div className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] bg-purple-400 opacity-60 rounded-full"></div>
          <div className="absolute bottom-[-200px] left-[-150px] w-[500px] h-[500px] bg-blue-400 opacity-60 rounded-full"></div>
        
          <div className="absolute bottom-40 left-[5rem] text-purple-700 text-2xl">✦</div>
          <div className="absolute bottom-50 right-[20rem] text-black text-xl">✦</div>
          <div className="absolute bottom-60 right-[20rem] text-primary text-2xl">✦</div>

          <div className="absolute top-[-35rem] left-[25rem] text-green-500 text-3xl">✦</div>
          <div className="absolute top-[-15rem] right-[70rem] text-teal-700 text-3xl">✦</div>
          <div className="absolute top-[-40rem] right-[7rem] text-purple-500 text-3xl">✦</div>
        </div>
      </div>
    </section>
  );
};

export default CharacterGuides;
