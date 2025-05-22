import { useState } from "react";
import { cn, getGradeColor } from "@/lib/utils";

interface GradeLevelSelectorProps {
  onGradeSelect?: (grade: number) => void;
}

const GradeLevelSelector = ({ onGradeSelect }: GradeLevelSelectorProps) => {
  const [selectedGrade, setSelectedGrade] = useState<number | null>(null);

  const handleGradeClick = (grade: number) => {
    setSelectedGrade(grade);
    if (onGradeSelect) {
      onGradeSelect(grade);
    }
  };

  const grades = [
    { id: 1, label: "1" },
    { id: 2, label: "2" },
    { id: 3, label: "3" },
    { id: 4, label: "4" },
    { id: 5, label: "5" },
    { id: 6, label: "6" },
    { id: 7, label: "7" }
  ];

  return (
    <div className="bg-white p-4 rounded-2xl shadow-lg w-fit">
      <p className="font-bold text-dark mb-3">Choose Your Grade:</p>
      <div className="flex flex-wrap gap-3">
        {grades.map((grade) => (
          <button
            key={grade.id}
            className={cn(
              "w-12 h-12 rounded-full font-fredoka shadow-md hover:shadow-lg transition-all hover:-translate-y-1",
              selectedGrade === grade.id 
                ? getGradeColor(grade.id)
                : "bg-gray-200 text-dark hover:" + getGradeColor(grade.id).replace("bg-", "hover:bg-")
            )}
            onClick={() => handleGradeClick(grade.id)}
          >
            {grade.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GradeLevelSelector;
