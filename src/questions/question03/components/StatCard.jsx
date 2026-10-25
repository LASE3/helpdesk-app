function StatCard(props) {
  props.value = props.value || 0;
  return (
    <article className="stat-card">
      <h3>{props.title}</h3>
      <p>{props.value}</p>
    </article>
  );
}
export default StatCard;
