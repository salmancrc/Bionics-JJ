const LoaderSpinner = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-60 z-50">
    <div className="w-8 h-8 border-4 border-red-400 border-t-transparent rounded-full animate-spin" />
  </div>
);

export default LoaderSpinner; 