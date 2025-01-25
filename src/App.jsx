import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "./i18n/LanguageContext";
import { Route, Routes } from "react-router-dom";
import Home from "./components";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
    return (
        <LanguageProvider>
            <BrowserRouter>
                <div className="bg-slate-100">
                    <Navbar />
                    <div className="w-full">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="*" element={<Home />} />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </LanguageProvider>
    );
}

export default App;
