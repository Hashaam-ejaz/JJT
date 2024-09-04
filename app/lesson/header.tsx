type props = {
  hearts: number;
  percentage: number;
  hasActiveSubscription: boolean;
};

export const Header = ({
  hearts,
  percentage,
  hasActiveSubscription,
}: props) => {
  return (
    <div>
      <h1>This is the header</h1>
    </div>
  );
};
