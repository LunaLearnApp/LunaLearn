import { CharacterAvatars } from "@/assets/svg/characters";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

export interface CharacterDetailProps {
  character: {
    id: string;
    name: string;
    color: string;
    description: string;
    skills: string[];
  };
}

export const CharacterDetail = ({ character }: CharacterDetailProps) => {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-1/3 flex justify-center">
          <div className={`w-40 h-40 md:w-48 md:h-48 rounded-full border-4 ${character.color.replace('bg-', 'border-')} shadow-lg overflow-hidden`}>
            {CharacterAvatars[character.id as keyof typeof CharacterAvatars]}
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <h3 className={`font-fredoka text-3xl ${character.color.replace('bg-', 'text-')} mb-3`}>{character.name}</h3>
          <p className="text-lg text-gray-600 mb-4">{character.description}</p>
          <div className="flex flex-wrap gap-3 mb-4">
            {character.skills.map((skill, index) => {
              let bgColor = "";
              let textColor = "";
              
              switch (index % 3) {
                case 0:
                  bgColor = "bg-yellow-100";
                  textColor = "text-yellow-800";
                  break;
                case 1:
                  bgColor = "bg-blue-100";
                  textColor = "text-blue-800";
                  break;
                case 2:
                  bgColor = "bg-green-100";
                  textColor = "text-green-800";
                  break;
              }
              
              return (
                <Badge 
                  key={index} 
                  className={`${bgColor} ${textColor} font-bold px-3 py-1 rounded-full text-sm`}
                  variant="outline"
                >
                  {skill}
                </Badge>
              );
            })}
          </div>
          <Link href={`/games?character=${character.id}`}>
            <Button 
              className={`${character.color} text-white font-bold px-6 py-3 rounded-full shadow hover:shadow-lg transition-all hover:-translate-y-1 duration-300`}
            >
              Learn with {character.name}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
