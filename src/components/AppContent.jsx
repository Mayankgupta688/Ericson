function AppContent(props) {
    return (
        <div>
            <h2>Welcome to the Content Component User {props.userName}</h2>
            <h3>User Age is {+props.userAge + 5}</h3>
        </div>
    )
} 

function AppContentUpdated(props) {
    return (
        <div>
            <h2>Welcome to the Content Component User Updated {props.userName}</h2>
            <h3>User Age is {+props.userAge + 5}</h3>
        </div>
    )
} 

var myComponents = {
    AppContentRenamed: AppContent,
    AppContentUpdated: AppContentUpdated
}

export default myComponents;
