// CHALLENGE 4

/**
 * Function that wraps a promise with a timeout mechanism.
 * If the promise takes longer than the specified timeout, it is rejected.
 * @param {Promise} promise - The promise to execute.
 * @param {number} [timeout=3000] - Timeout in milliseconds (default: 3000ms).
 * @returns {Promise} A new promise that resolves with the original promise result or rejects if timed out.
 */
const fetchWithTimeout = (promise, timeout = 3000) => {
    return new Promise((resolve, reject) => {
        // Set a timer that will reject the promise if it exceeds the timeout
        const timer = setTimeout(() => reject(new Error("Request timed out")), timeout);

        promise
            .then((result) => {
                clearTimeout(timer); // Clear the timeout if the promise resolves successfully
                resolve(result); // Resolve with the result of the original promise
            })
            .catch(reject);
    });
};

/**
 * Function that fetches user data (profile, posts, and followers) in parallel.
 * If any request fails, the entire function fails.
 * @param {number} userId - The ID of the user.
 * @returns {Promise<Object>} A promise that resolves with an object containing user data.
 */
async function fetchUserData(userId) {
    try {
        // Execute all three API calls in parallel using Promise.all
        const [profile, posts, followers] = await Promise.all([
            fetchUserProfile(userId),
            fetchUserPosts(userId),
            fetchUserFollowers(userId)
        ]);

        // Return an object containing all the retrieved user data
        return { profile, posts, followers };
    } catch (error) {
        // Log the error and rethrow it so that the calling function can handle it
        console.error("Failed to fetch user data:", error);
        throw error;
    }
}

/**
 * Function that fetches a sample API and logs the response data.
 */
const fetchApi = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1'); // Fetch data from a placeholder API
        const data = await response.json(); // Convert response to JSON
        console.log(data); // Log the fetched data
    } catch (error) {
        // Log an error message if fetching fails
        console.error("Error fetching data:", error);
    }
};

// Fetch user data for user ID 1 and log the result or error
fetchUserData(1)
    .then((data) => console.log("User data", data))
    .catch((error) => console.log("Error:", error.message));

// Call fetchApi function to fetch a sample API and log the response
fetchApi();