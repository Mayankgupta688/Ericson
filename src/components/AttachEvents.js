export default function AttachEvent() {
    function getData(name) {
        alert(name)
    }
    
    return (
        <>
            <input value="Click" type="button" onClick={() => { getData("Mayank") }} />
            <input value="Click" type="button" onClick={function() { getData("Mayank") }} />
        </>
    )
}