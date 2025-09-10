import React from "react"
import { useState, useEffect } from "react"



const PrepTime = ({ fetchPrepTimes,prepTime,setPrepTime }) => {
   return (
    <div>
      <label>
        Total:
        <input
          type="text"
          value={prepTime.total}
          onChange={(e) => setPrepTime({ ...prepTime, total: e.target.value })}
        />
      </label>

      <label>
        Preparation:
        <input
          type="text"
          value={prepTime.preparation}
          onChange={(e) =>
            setPrepTime({ ...prepTime, preparation: e.target.value })
          }
        />
      </label>

      <label>
        Cooking:
        <input
          type="text"
          value={prepTime.cooking}
          onChange={(e) => setPrepTime({ ...prepTime, cooking: e.target.value })}
        />
      </label>
    </div>
  );
}

export default PrepTime