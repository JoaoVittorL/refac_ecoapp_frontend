const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full">
      {children}
    </div>
  );
};

export default AuthLayout;
