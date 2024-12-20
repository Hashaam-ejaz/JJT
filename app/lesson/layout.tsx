type props = {
  children: React.ReactNode;
};

const lessonLayout = ({ children }: props) => {
  return (
    <div className="flex h-full flex-col">
      <div className="flex h-full w-full flex-col">{children}</div>
    </div>
  );
};

export default lessonLayout;
