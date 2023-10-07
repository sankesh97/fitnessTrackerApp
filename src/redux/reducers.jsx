const initialState = {
  goals: {
    goalsList: [],
    loading: false,
    error: null,
  },
  exercise: {
    exerciseList: [],
    loading: false,
    error: null,
  },
  food: {
    foodsList: [],
    loading: false,
    error: null,
  },
};

const fitnessTrackerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_GOAL':
      return {
        ...state,
        goals: action.payload,
        loading: false,
        error: null,
      };

    case 'FETCH_GOAL_FAILURE':
      return {
        ...state,
        loading: false,
        error: 'Error fetching goal data',
      };
    case 'FETCH_GOAL_LOADING':
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default fitnessTrackerReducer;
