import ReactDOM from "react-dom";
import AppHeader from "./components/AppHeader";
import myComponents from "./components/AppContent";
import AppFooter from "./components/AppFooter";

var root = ReactDOM.createRoot(document.getElementById("root"));
root.render((
    <div>
        <AppHeader></AppHeader><hr /><br />
        <myComponents.AppContentRenamed userName="Mayank" userAge="30"></myComponents.AppContentRenamed>
        <myComponents.AppContentUpdated userName="Anshul" userAge="20"></myComponents.AppContentUpdated><hr /><br />
        <AppFooter></AppFooter>
    </div>
));
 