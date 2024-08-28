type props = {
  children: React.ReactNode;
};

export const FeedWrapper = ({ children }: props) => {
  return <div className="relative top-0 flex-1 pb-10">{children}</div>;
};
