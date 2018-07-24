/*export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};
*/

// add like to news story
export function addLike(index) {
  return {
    type: 'ADD_LIKE',
    index
  };
}
