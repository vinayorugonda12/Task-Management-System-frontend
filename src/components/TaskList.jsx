import TaskCard from "./TaskCard";

export default function TaskList({
  tasks,
  onDelete,
  onToggle,
  onEdit,
}) {
  return (
    <>
      {tasks.length === 0 ? (
        <p className="empty">No tasks found</p>
      ) : (
        tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onDelete={onDelete}
            onToggle={onToggle}
            onEdit={onEdit}
          />
        ))
      )}
      
    </>
  );
}
