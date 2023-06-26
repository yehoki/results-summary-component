import Image from 'next/image';

interface ScoreCategoryProps {
  bgColor: string;
  textColor: string;
  icon: string;
  title: string;
  score: number;
}

const ScoreCategory: React.FC<ScoreCategoryProps> = ({
  bgColor,
  textColor,
  icon,
  title,
  score,
}) => {
  return (
    <div
      className={`
  flex justify-between items-center
  rounded-lg
  py-4 px-4 gap-20 text-sm 
  ${bgColor} 
  `}
    >
      <div className="flex items-center gap-2">
        <Image
          src={icon ? icon : ''}
          alt={`${title} icon`}
          height={20}
          width={20}
        />
        <div className={`font-semibold ${textColor}`}>{title}</div>
      </div>
      <div className="text-gray-400">
        <span className="text-dark-gray-blue font-semibold">{score} </span>/ 100
      </div>
    </div>
  );
};

export default ScoreCategory;
