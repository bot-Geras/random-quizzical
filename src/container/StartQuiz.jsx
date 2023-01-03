import {Link} from "react-router-dom"
export default function StartQuiz() {
  return (
    <div>
      <h1>Quizzical</h1>
      <p>Some description if needed</p>
      <Link to="home"><button>Start quiz</button></Link>
    </div>
  );
}
