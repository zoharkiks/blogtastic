import axios from "axios";

// Fetch Comments
export const fetchComments = async (id, setComments) => {
  await axios
    .get(
      `https://blog-zohar.herokuapp.com/comments?article=${id}&_sort=updatedAt:DESC`
    )
    .then((res) => {
      const data = res.data;
      setComments(data);
    });
};

// Submit Comment
export const submitComment = async (
  setLoading,
  content,
  articleId,
  setComments,
  clearComment,
  setContent
) => {
  setLoading(true);
  await axios
    .post(
      "https://blog-zohar.herokuapp.com/comments",
      {
        content,
        article: articleId,
      },
      {
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
    .then(() =>
      fetch(
        `https://blog-zohar.herokuapp.com/comments?article=${articleId}&_sort=updatedAt:DESC`
      )
        .then((res) => res.json())
        .then((val) => setComments(val))
    );

  clearComment();
  setContent("");
  setLoading(false);
};

// Login
export const handleLogin = async (
  setLoading,
  password,
  username,
  email,
  setError,
  clearInput,
  tokenCheck
) => {
  setLoading(true);
  await axios
    .post("https://blog-zohar.herokuapp.com/auth/local", {
      password: password,
      identifier: username || email,
    })
    .then((res) => {
      localStorage.setItem("token", res.data.jwt);
      localStorage.setItem("user", res.data.user.username);
      setError(false);
    })
    .catch((err) => {
      if (err.response) {
        setError(true);
        clearInput();
      }
    });

  tokenCheck();
  setLoading(false);
};

//   Sign Up
export const handleRegister = async (
  setLoading,
  password,
  email,
  username,
  setError,
  clearInput,
  tokenCheck
) => {
  setLoading(true);
  await axios
    .post(
      "https://blog-zohar.herokuapp.com/auth/local/register",
      {
        password: password,
        email,
        username: username,
      },
      {
        headers: {
          "content-type": "application/json",
        },
      }
    )
    .then((res) => {
      localStorage.setItem("token", res.data.jwt);
      localStorage.setItem("user", res.data.user.username);
    })
    .catch((err) => {
      console.log(err.response);
      if (err.response) {
        setError(true);
        clearInput();
      }
    });
  tokenCheck();
  setLoading(false);
};
