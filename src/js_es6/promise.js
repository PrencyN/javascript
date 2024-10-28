// Simulating two asynchronous operations
function fetchPosts() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(["Post1", "Post2", "Post3"]), 2000);
    });
  }
  
  function fetchComments() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(["Comment1", "Comment2"]), 1000);
    });
  }
  
  // Async function to wait for both promises to resolve
  async function displayContent() {
    try {
      console.log("Fetching posts and comments...");
      const [posts, comments] = await Promise.all([fetchPosts(), fetchComments()]);
      console.log("Posts:", posts);
      console.log("Comments:", comments);
    } catch (error) {
      console.error("Error fetching content:", error);
    } finally {
      console.log("Finished fetching content.");
    }
  }
  
  // Call the async function
  displayContent();
  