import {User} from '../types/userTypes';

export const sortByBananas = (users: User[]): User[] => {
  return users.sort((a, b) => {
    if (b.bananas === a.bananas) {
      return a.name.localeCompare(b.name); // Sort alphabetically if bananas are equal
    }
    return b.bananas - a.bananas; // Sort by bananas otherwise
  });
};
export const sortByName = (users: User[]): User[] => {
  return users.sort((a, b) => {
    // If one of the names is empty, prioritize the non-empty name
    if (!a.name && !b.name) {
      return 0; // Keep the current order if both names are empty
    } else if (!a.name) {
      return 1; // Place the user with an empty name after the user with a non-empty name
    } else if (!b.name) {
      return -1; // Place the user with a non-empty name before the user with an empty name
    }
    return a.name.localeCompare(b.name); // Sort alphabetically by name otherwise
  });
};
