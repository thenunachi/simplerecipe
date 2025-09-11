import { useState } from "react"

const Instruction = ({ instructions, setInstructions }) => {

    const handleSubmit = (index, field, value) => {
        const newInstructions = [...instructions]
        newInstructions[index][field] = value;
        setInstructions(newInstructions)
    }
    const removeStep = (index) => {
        setInstructions(instructions.filter((_, i) => i != index))
    }
    const addStep = () => {
        setInstructions([...instructions, { "title": "", "description": "" }])
    }
    return (
        <form onSubmit={handleSubmit}>
            {instructions.map((step, index) => (
                <div key={index} style={{ marginBottom: "15px" }}>
                    <input
                        type="text"
                        placeholder={`Step ${index + 1} Title`}
                        value={step.title}
                        onChange={(e) => handleSubmit(index, "title", e.target.value)}
                    />
                    <textarea
                        placeholder="Step description"
                        value={step.description}
                        onChange={(e) => handleSubmit(index, "description", e.target.value)}
                    />
                    <button type="button" onClick={() => removeStep(index)}>
                        Remove
                    </button>
                </div>
            ))}
            <button type="button" onClick={addStep}>+ Add Step</button>
        </form>
    )
}
export default Instruction