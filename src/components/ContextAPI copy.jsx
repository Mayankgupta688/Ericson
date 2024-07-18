import { useState } from "react";
export default function GrandFather() {
    var [familyDetails, setFamilyDetails] = useState({
        village: "Haryana",
        surName: "Gupta"
    })
    
    return (
        <>
            <h1>This is Grand Father</h1><hr/>
            <Father familyDetails={familyDetails}></Father>
        </>
    )
}

function Father(props) {
    return (
        <>
            <h2>This is Father</h2><hr/>
            <Child familyDetails={familyDetails}></Child>
        </>
    )
}

function Child(props) {
    return (
        <>
            <h1>This is Child</h1><hr/>
            <GrandChild familyDetails={props.familyDetails}></GrandChild>
        </>
    )
}

function GrandChild(props) {
    return (
        <>
            <h1>This is Grand Child {props.familyDetails.village} {props.familyDetails.surName}</h1><hr/>
        </>
    )
}
