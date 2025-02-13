import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import CreateGDG from "./pages/CreateGDG";
import ListGenerations from "./pages/ListGenerations";
import ModifyAttributes from "./pages/ModifyAttributes";
import DeleteGeneration from "./pages/DeleteGeneration";
import RenameGDG from "./pages/RenameGDG";
import ViewMetadata from "./pages/ViewMetadata";
import ArchiveGenerations from "./pages/ArchiveGenerations";
import AddTransactionLogs from "./pages/AddTransactionLogs";
import GraphicalRepresentation from "./pages/GraphicalRepresentation";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="create-gdg" element={<CreateGDG />} />
        <Route path="list-generations" element={<ListGenerations />} />
        <Route path="modify-attributes" element={<ModifyAttributes />} />
        <Route path="delete-generation" element={<DeleteGeneration />} />
        <Route path="rename-gdg" element={<RenameGDG />} />
        <Route path="view-metadata" element={<ViewMetadata />} />
        <Route path="archive-generations" element={<ArchiveGenerations />} />
        <Route path="add-transaction-logs" element={<AddTransactionLogs />} />
        <Route path="graphical-representation" element={<GraphicalRepresentation />} />
      </Route>
    </Routes>
  );
};

export default App;
