import React, { useState } from "react"

type Props = {
  saveTodo: (e: React.FormEvent, formData: ITodo) => void
}

const AddTodo: React.FC<Props> = ({ saveTodo }) => {
  const [formData, setFormData] = useState<Pick<ITodo, "name" | "description">>({
    name: "",
    description: "",
  })

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const field = e.currentTarget.id
    if (field !== "name" && field !== "description") {
      return
    }
    setFormData({
      ...formData,
      [field]: e.currentTarget.value,
    })
  }

  return (
    <form
      className="Form"
      onSubmit={(e) =>
        saveTodo(e, {
          _id: "",
          name: formData.name,
          description: formData.description,
          status: false,
        })
      }
    >
      <div>
        <div>
          <label htmlFor="name">Name</label>
          <input onChange={handleForm} type="text" id="name" value={formData.name} />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            onChange={handleForm}
            type="text"
            id="description"
            value={formData.description}
          />
        </div>
      </div>
      <button
        disabled={formData.name.trim() === "" || formData.description.trim() === ""}
      >
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo
