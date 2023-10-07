///////////////////
// Goals
export const fetchGoals = async (dispatch) => {
  try {
    dispatch({ type: 'FETCH_GOAL_LOADING' });
    const response = await fetch(
      'fitness-tracker-api.sankeshjain.repl.co/api/goals'
    );
    const data = await response.json();
    dispatch({ type: 'FETCH_GOAL', payload: data });
  } catch (error) {
    console.error('Error fetching goal data:', error);
    dispatch({ type: 'FETCH_GOAL_FAILURE' });
  }
};
