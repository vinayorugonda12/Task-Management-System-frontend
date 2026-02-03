export default function EditModal({ task, onClose, onSave }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Task</h2>

        <input
          className="input"
          value={task.title}
          onChange={(e) => onSave({ ...task, title: e.target.value })}
        />

        <textarea
          className="input"
          value={task.description}
          onChange={(e) =>
            onSave({ ...task, description: e.target.value })
          }
        ></textarea>

        <button className="btn-save" onClick={() => onClose("save")}>
          Save
        </button>

        <button className="btn-cancel" onClick={() => onClose("cancel")}>
          Cancel
        </button>
      </div>
    </div>
  );
}
