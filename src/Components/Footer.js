export function Footer({ items }) {
  if (!items.length) {
    return <p className="footer">Start adding some items to your packing list</p>;
  }
  const packed = items.filter((item) => item.packing).length;
  const percentage = Math.trunc(packed / items.length * 100);
  return (
    <footer className="footer">
      <p>{percentage == 100 ? `You got everthing! Ready to go✈️` : `You have ${items.length} items on your list,and you already packed ${packed} (${percentage}%)`}</p>
    </footer>
  );
}
