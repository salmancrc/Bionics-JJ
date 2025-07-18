
interface RoundedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const RoundedCard = ({ children, ...props }: RoundedCardProps) => {
  return (
    <div {...props} className="rounded-2xl shadow-xl p-4 m-4 bg-white dark:bg-dark-800 dark:text-gray-200 border border-[#53819733]">
      {children}
    </div>
  );
}

export default RoundedCard;
