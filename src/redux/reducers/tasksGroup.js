const initState = {
  groups: [],
  activeTasks: []
};

const tasksGroup = (state = initState, action) => {
  switch (action.type) {
    case "SET_GROUP":
      return {
        ...state,
        groups: action.payload,
      };
    case "ADD_GROUP":
      return {
        ...state,
        groups: [...state.groups, action.payload],
      };
    case "REMOVE_GROUP":
      return {
        ...state,
        groups: [
          ...state.groups.filter((group) => group.id !== action.payload),
        ],
      };
    case "SET_ACTIVE_TASKS":
      const activeTsk = state.groups.find(
        (group) => group.id === action.payload
      );
      return {
        ...state,
        activeTasks: activeTsk ? activeTsk : [],
      };
    case "UPDATE_TASKS":
      let actTsk = state.groups.find((group) => group.id === action.id);
      actTsk.tasks = [...actTsk.tasks, action.payload];
      
      return {
        ...state,
        activeTasks: actTsk,
      };
    case "REMOVE_ACTIVE_TASKS":
      const newList = state.groups.map((group) => {
        if (group.id === action.groupId) {
          group.tasks = group.tasks.filter((task) => task.id !== action.taskId);
        }
        return group;
      });
      return {
        ...state,
        groups: newList,
      };
    case "EDIT_GROUP":
      const editGroup = state.groups.map((group) => {
        if (group.id === action.id) {
          group.title = action.title
          group.color = action.color
        }
        return group;
      });

      return {
        ...state,
        groups: editGroup,
      };
    case "EDIT_TASK":
      const editTask = state.activeTasks.tasks.map((task) => {
        if (task.id === action.id) {
          task.title = action.title
          task.description = action.description
        }
        return task;
      })

      return {
        ...state,
        activeTasks: {
          ...state.activeTasks,
          tasks: editTask
        },
      };  
    case "COMPLETE_ACTIVE_TASKS":
      const doneTasks = state.groups.map((group) => {
        if (group.id === action.groupId) {
          group.tasks = group.tasks.map((task) => {
            if(task.id === action.taskId) {
              task.done = !task.done;
            }
            return task;
          });
        }
        return group;
      });
      return {
        ...state,
        groups: doneTasks,
      };
    default:
      return state;
  }
};

export default tasksGroup;
