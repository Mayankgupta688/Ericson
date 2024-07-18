import React, { useState, useContext, useEffect } from "react";

var FamilyContext = React.createContext();

export default function GrandFather() {
    var [familyDetails, setFamilyDetails] = useState({
        village: "Haryana",
        surName: "Goel"
    })
    
    function changeData() {
        setFamilyDetails({
            village: "Kanpur",
            surName: "ABC"
        })
    }
    
    return (
        <>
            <FamilyContext.Provider value={{ familyDetails: familyDetails, changeData: changeData }}>
                <h1>This is Grand Father {familyDetails.village}</h1><hr/>
                <Father></Father>
            </FamilyContext.Provider>
        </>
    )
}

function Father() {
    return (
        <>
            <h2>This is Father</h2><hr/>
            <Child></Child>
        </>
    )
}

function Child() {
    var data = useContext(FamilyContext);
    return (
        <>
            <h1>This is Child {data.familyDetails.village}</h1><hr/>
            <GrandChild></GrandChild>
        </>
    )
}

function GrandChild() {
    var data = useContext(FamilyContext);
    return (
        <>
            <h1>This is Child Father {data.familyDetails.village} {data.familyDetails.surName}</h1>
            <input type="button" onClick={data.changeData} value="Change Data" /><hr />
        </>
    )
}
