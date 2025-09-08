import React from "react"
import { useState, useEffect } from "react"



const PrepTime = () => {
    const [totalTime, setTotalTime] = useState("");
    const [preparation, setPreparation] = useState("");
    const [cooking, setCooking] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!totalTime || !preparation || !cooking) {
            setError("All feilds are required!");
            return;
        }
        setError("");
        fetch("http://localhost:8000/preparation/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                total: totalTime,
                preparation,
                cooking,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("Saved:", data);
            })
            .catch((err) => console.error("Error:", err));

     
        // fetch(`http://127.0.0.1:5000/preparation/${id}`, {
        //     method: "DELETE",
        // })
        //     .then((res) => res.json())
        //     .then((data) => console.log("Deleted:", data))
        //     .catch((err) => console.error("Error:", err));
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Total time"
                    value={totalTime}
                    onChange={(e) => setTotalTime(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Preparation time"
                    value={preparation}
                    onChange={(e) => setPreparation(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Cooking time"
                    value={cooking}
                    onChange={(e) => setCooking(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </>
    )
}

export default PrepTime