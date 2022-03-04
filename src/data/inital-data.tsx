const initaldata = {
  tasks: {
    task1: { id: "task-1", content: "Takeout food" },
    task2: { id: "task-2", content: "Takeout food x2" },
    task3: { id: "task-3", content: "Takeout food x3" },
    task4: { id: "task-4", content: "Takeout food x4" },
  },
  columns: {
    column1: {
      id: "column-1",
      title: " to do ",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    },
    column2: {
      id: "column-2",
      title: " to do2 ",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    },
  },

  columnOrder: ["column-1"],
};

export default initaldata;
