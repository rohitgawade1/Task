import "./App.css";
import Card from "./components/Card";
import { useEffect, useState } from "react";
import axios from "axios";


function App() {
  const [question1, setQuestion1] = useState(null);
  const [question2, setQuestion2] = useState(null);
  const [question3, setQuestion3] = useState(null);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const que1 = await axios.get(
      "https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=AreaUnderTheCurve_901"
    );
    const que2 = await axios.get(
      "https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=BinomialTheorem_901"
    );
    const que3 = await axios.get(
      "https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=DifferentialCalculus2_901"
    );

    setQuestion1(que1.data[0].Question);
    setQuestion2(que2.data[0].Question);
    setQuestion3(que3.data[0].Question);
  };

  return (
    <div className="App">
        <Card que1={question1} que2={question2} que3={question3}/>
    </div>
  );
}

export default App;
