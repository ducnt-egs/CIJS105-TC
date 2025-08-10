function Card(props) {
  return (
    <div className="Card_content">
      <p className="card_head">{props.title}</p>
      <p>{props.description}</p>
      <button>Mindx</button>
    </div>
  )
}
export default Card; 