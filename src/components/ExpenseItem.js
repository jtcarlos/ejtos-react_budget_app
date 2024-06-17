import React, { useContext } from "react"
import { TiDelete } from "react-icons/ti"

import { AppContext } from "../context/AppContext"

const ExpenseItem = ({ id, name, cost }) => {
  const { dispatch } = useContext(AppContext)

  const handleDeleteExpense = () =>
    dispatch({
      type: "DELETE_EXPENSE",
      payload: id,
    })

  const increaseAllocation = () =>
    dispatch({
      type: "ADD_EXPENSE",
      payload: { name, cost: 10 },
    })

  return (
    <tr>
      <td>{name}</td>
      <td>£{cost}</td>
      <td>
        <button onClick={() => increaseAllocation(name)}>+</button>
      </td>
      <td>
        <TiDelete size="1.5em" onClick={handleDeleteExpense}></TiDelete>
      </td>
    </tr>
  )
}

export default ExpenseItem
