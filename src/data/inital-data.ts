const initaldata = {
  tasks: {
    task1: { id: "task1", content: "Takeout food" },
    task2: { id: "task2", content: "Takeout food x2" },
    task3: { id: "task3", content: "Takeout food x3" },
    task4: { id: "task4", content: "Takeout food x4" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: " to do ",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    },
  },

  columnOrder: ["column-1"],
};

export default initaldata;
