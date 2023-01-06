import {Link} from "react-router-dom"
export default function StartQuiz() {
  return (
    <div className="text-blue-900 h-screen tracking-widest flex flex-col justify-center items-center">
      <h1 className="font-black text-3xl">Quizzical</h1>
      <p className="text-blue-00 mt-2">Some description if needed</p>
      <Link to="home"><button className="mt-8 px-16 py-4 bg-blue-900 rounded-lg text-white">Start Quiz</button></Link>
    </div>
  );
}
