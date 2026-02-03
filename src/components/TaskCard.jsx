export default function TaskCard({ task, onDelete, onToggle, onEdit }) {
  return (
    <div className="task-card">
      <div className="task-header">
        <h3 className={task.completed ? "completed" : ""}>{task.title}</h3>

        <span className={task.completed ? "badge-complete" : "badge-pending"}>
          {task.completed ? "Completed" : "Pending"}
        </span>
      </div>

      <p>{task.description}</p>

      <div className="buttons">
        <button className="btn-complete" onClick={() => onToggle(task)}>
          {task.completed ? "Undo" : "Complete"}
        </button>

        <button className="btn-edit" onClick={() => onEdit(task)}>
          Edit
        </button>

        <button className="btn-delete" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
