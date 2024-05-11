export default function Pagination({ children, drink }) {
  return (
    <div className={drink === 1 ? 'pagination-right' : 'pagination'}>
      {children}
    </div>
  );
}
