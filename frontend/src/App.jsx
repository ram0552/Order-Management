// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "./HomePage";
// import CreateOrder from "./orders/CreateOrder";
// import ViewAllOrders from "./orders/ViewAllOrders";
// import EditOrder from "./orders/EditOrder";
// import "./App.css";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/orders" element={<ViewAllOrders />} />
//         <Route path="/orders/create" element={<CreateOrder />} />
//         <Route path="/orders/edit/:id" element={<EditOrder />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import CreateOrder from "./orders/CreateOrder";
import ViewAllOrders from "./orders/ViewAllOrders";
import EditOrder from "./orders/EditOrder";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/orders" element={<ViewAllOrders />} />
        <Route path="/orders/create" element={<CreateOrder />} />
        <Route path="/orders/edit/:id" element={<EditOrder />} />
      </Routes>
    </Router>
  );
}

export default App;
