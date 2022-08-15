import { Provider } from 'react-redux'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import store from "./store"

import LoginRoutes from './layout/LoginRoutes'
import Login from "./pages/Login/Login"

import NewsRoutes from "./layout/NewsRoutes"
import Home from './pages/news/Home'
import AddNews from './pages/news/AddNews'
import EditNews from './pages/news/EditNews'

import SolutionRoutes from './layout/SolutionRoutes'
import Solutions from './pages/solutions/Solutions'
import ProblemSelected from './pages/solutions/ProblemSelected'
import AddCategory from './pages/solutions/AddCategory'
import AddProblem from './pages/solutions/AddProblem'
import AddSolution from './pages/solutions/AddSolution'
import EditCategory from './pages/solutions/EditCategory'
import EditProblem from './pages/solutions/EditProblem'
import EditSolution from './pages/solutions/EditSolution'

import CredentialsRoutes from "./layout/CredentialsRoutes"
import Credentials from './pages/credentials/Credentials'

import Error404 from './pages/Error404'

import "bootstrap/js/dist/collapse";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/modal";
import "bootstrap/js/dist/carousel";

function App() {
    return (
        <Router>
            <Provider
                store={store}
            >
                <div className="container-fluid">
                    <Routes>
                        <Route path="login" element={<LoginRoutes />} >
                            <Route index element={<Login />} />
                        </Route>

                        <Route path="/" element={<NewsRoutes />} >
                            <Route index element={<Home />} />
                            <Route path="addnews" element={<AddNews />} />
                            <Route path=":id" element={<EditNews />} />
                        </Route>

                        <Route path="solutions" element={<SolutionRoutes />} >
                            <Route index element={<Solutions />} />
                            <Route path=":id" element={<ProblemSelected />} />
                            <Route path="addcategory" element={<AddCategory />} />
                            <Route path="addproblem" element={<AddProblem />} />
                            <Route path="addsolution" element={<AddSolution />} />
                            <Route path="editcategory/:id" element={<EditCategory />} />
                            <Route path="editproblem/:id" element={<EditProblem />} />
                            <Route path="editsolution/:id" element={<EditSolution />} />
                        </Route>

                        <Route path="credentials" element={<CredentialsRoutes />} >
                            <Route index element={<Credentials />} />
                        </Route>

                        <Route path="*" element={<Error404/>} />
                    </Routes>
                </div>
            </Provider>
        </Router>
    )
}

export default App
