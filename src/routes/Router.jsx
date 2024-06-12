import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "../App";
import EventsPage from "../pages/events/EventsPage";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/*' element={<Navigate to='/inicio' />} />
                <Route path='/inicio' element={<App/>}/>
                <Route path='/eventos' element={<EventsPage/>}/>
            </Routes>
        </BrowserRouter>
    );
    }
    export default AppRoutes;