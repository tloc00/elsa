import {lazy} from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Quiz = lazy(
  () => import('../Quiz'),
);

const QuizRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Quiz />} >
        </Route>
      </Routes>
  </Router>
  )
}

export default QuizRoutes