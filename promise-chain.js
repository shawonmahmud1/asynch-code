/* 
1. user? username = [username];
2. post? useId = [userId]
3. comments? postId = [postId]
4. user? username = [username]
*/

const get = (url) => Promise.resolve();

get(`/user?username = Shawon`)
  .then((user) => {
    return get(`/post?user_Id = userId: ${user.id}`);
  })
  .then((posts) => {
    const latestPost = posts[0];
    return get(`/comments? post_id = ${latestPost.id}`);
  })
  .then((comments) => {
    const latestComment = comments[0];
    return get(`/user?username = ${latestComment.username}`);
  })
  .then((user) => {
    console.log(user);
  })
  .catch(() => {
    console.log("Catch the error");
  });

//   using async await

async function getUserName(username) {
  try {
    const mainUser = await get(`/user?username = ${username}`);
    const posts = await get(`/posts?user_id = ${mainUser.id}`);
    const comments = await get(`/comments? post_id = ${posts[0].id}`);
    const user = await get(`/user?username = ${comments[0].username}`);

    console.log(user);
  } catch (e) {
    console.log(e);
  }
}
