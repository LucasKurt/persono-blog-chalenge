export const LoadingSpinner = () => {
  return (
    <>
      <span
        className="spinner-border spinner-border-sm"
        role="status"
        aria-hidden="true"
      />
      <span className="visually-hidden">Carregando...</span>
    </>
  );
};
