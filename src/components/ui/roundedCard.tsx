
interface CardTypes extends React.HTMLAttributes<HTMLDivElement> {
  children: any;
};


const RoundedCard: React.FC<CardTypes> = ({ children, ...props }) => {
  return (
    <div {...props} className="rounded-2xl shadow-xl bg-white dark:bg-dark-800 dark:text-gray-200 border border-[#53819733]">
      {children}
    </div>
  );
};

export default RoundedCard;
