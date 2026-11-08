interface RatingBadgeProps {
  rating: number;
  editorsChoice?: boolean;
}

export default function RatingBadge({ rating, editorsChoice }: RatingBadgeProps) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  const stars = Array.from({ length: 5 }, (_, i) => {
    if (i < full) return '★';
    if (i === full && half) return '⯨';
    return '☆';
  }).join('');
  return (
    <div className="rating">
      <span className="stars" aria-label={`${rating} out of 5 stars`}>
        {stars}
      </span>
      <span className="score">{rating.toFixed(1)}</span>
      {editorsChoice && <span className="ec-badge">Editors’ Choice</span>}
    </div>
  );
}
