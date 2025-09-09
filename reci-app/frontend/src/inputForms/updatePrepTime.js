
import { useState, useEffect } from "react"



const UpdatePrepTime = ({ props }) => {
    const [totalTime, setTotalTime] = useState("");
    const [preparation, setPreparation] = useState("");
    const [cooking, setCooking] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        //this fetch function fetches the data from backend and helps
        //in the state to repopulate the feilds
        if(!id)return;
        fetch(`http://127.0.0.1:8000/preparation/${id}/`)
            .then((res) => res.json())
            .then((data) => {
                setTotalTime(data.total);
                setPreparation(data.preparation);
                setCooking(data.cooking);
            })
            .catch((err) => console.error("Error fetching prep time:", err));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!totalTime || !preparation || !cooking) {
            setError("All feilds are required!");
            return;
        }
        setError("");
        //this fetch sends the updated values to backend
        fetch(`http://127.0.0.1:8000/preparation/${id}/`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },//tell server that data in body in JSON format
            body: JSON.stringify({ //JSON.stringify converts object to string
                total: totalTime,
                preparation,
                cooking,
            }),
        })
            .then((res) => res.json()) //parses the response from server and convert to obj
            .then((data) => console.log("Updated:", data))
            .catch((err) => console.error("Error:", err));
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder=" Update Total time"
                    value={totalTime}
                    onChange={(e) => setTotalTime(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Update Preparation time"
                    value={preparation}
                    onChange={(e) => setPreparation(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Update Cooking time"
                    value={cooking}
                    onChange={(e) => setCooking(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </>
    )
}

export default UpdatePrepTime