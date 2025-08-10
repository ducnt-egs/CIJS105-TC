import Card from "../Card/Card";
import { tasks } from "/data.js"
function MainContent() {
  return (
    <div className="column">
      <div className="tasklist_head">
        <div className="tasklist_head_left">
          <p>Todo</p>
          <div className="tasklist_head_detail">3</div>
        </div>
        <div className="tasklist_head_right">
          <div className="tasklist_head_detail">3</div>
          <div className="tasklist_head_detail">3</div>
        </div>
      </div>
      {tasks.map((item) => (<Card {...item}></Card>)

      )}
    </div>
  )
}

export default MainContent;