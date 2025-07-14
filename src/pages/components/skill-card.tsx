const SkillCard = ({
  icon,
  name,
  description,
}: {
  icon: any;
  name: string;
  description: string;
  delay?: number;
}) => {
  return (
    <div className="item-tech flex cursor-pointer overflow-hidden items-center gap-2 rounded-lg border-2 border-gray-300 dark:border-slate-600 p-3 bg-white dark:bg-slate-800 hover:border-cyan-500 dark:hover:border-cyan-400 hover:bg-gradient-to-br hover:from-cyan-500/10 hover:to-cyan-400/10 hover:bg-opacity-10 dark:hover:bg-opacity-10 md:gap-3 lg:px-4">
      <div className="flex h-12 w-12 items-center justify-center p-0 lg:h-16 lg:w-16 lg:p-2 cursor-zoom-in">
        <div className="img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[75%] lg:w-[75%]">
          {icon}
        </div>
      </div>
      <div className="flex items-center text-sm lg:text-md xxl:text-lg">
        <div className="tech font-medium text-secondary transition-all duration-300 translate-y-0">
          {name}
        </div>
        <div className="status-tech opacity-0 absolute mt-5 text-[10px] text-cyan-200 transition-all duration-300 md:text-xs lg:text-sm">
          {description}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
