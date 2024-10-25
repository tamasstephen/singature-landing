/***
 * We assume that the user has the following structure:
 * @interface User
 * @property {number} id - Unique identifier for the user.
 * @property {string} name - Name of the user.
 *
 * We assume that the users list has the following structure
 * @type { User[] }
 *
 * We assume that the colors have the following sturcture:
 * @type { string[] }
 */

const TEST_ENDPOINT_ONE = "https://jsonplaceholder.typicode.com/users";
const TEST_ENDPOINT_TWO = "https://jsonplaceholder.typicode.com/posts";

async function fetchUsers() {
  try {
    const [users, colors] = await Promise.all([
      fetch(TEST_ENDPOINT_ONE),
      fetch(TEST_ENDPOINT_TWO),
    ]);

    if (!users.ok || !colors.ok) {
      /* if the status is not a success we assume that we did not get the proper data back  */
      console.log("An error has occured");
    } else {
      const userData = await users.json();
      const colorData = await colors.json();

      // If one of the lists does not have any members we are unable to pair the users with colors
      if (colorData.length < 0 || userData.length < 0) {
        // We log the users and return them as they are, since we assume this array is the main data that we want to recieve
        console.log(userData);
        return userData;
      }

      // Map the colors to the users
      const usersWithColors = userData.map((user, idx) => {
        const colorIdx = idx % colorData.length;
        user.color = colorData[colorIdx];
        return user;
      });
      // Log the result
      console.log(usersWithColors);
      // Return the result
      return usersWithColors;
    }
    // if an error occurs we catch the error
  } catch (e) {
    // Log the error, if something went wrong
    console.log(`Some error occured: ${e}`);
  } finally {
    // Finally log, when the process ends
    console.log("Process done");
  }
}

fetchUsers();
