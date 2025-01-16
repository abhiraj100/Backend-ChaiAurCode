const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const githubData = {
    "login": "abhiraj100",
    "id": 102871390,
    "node_id": "U_kgDOBiGxXg",
    "avatar_url": "https://avatars.githubusercontent.com/u/102871390?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/abhiraj100",
    "html_url": "https://github.com/abhiraj100",
    "followers_url": "https://api.github.com/users/abhiraj100/followers",
    "following_url": "https://api.github.com/users/abhiraj100/following{/other_user}",
    "gists_url": "https://api.github.com/users/abhiraj100/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/abhiraj100/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/abhiraj100/subscriptions",
    "organizations_url": "https://api.github.com/users/abhiraj100/orgs",
    "repos_url": "https://api.github.com/users/abhiraj100/repos",
    "events_url": "https://api.github.com/users/abhiraj100/events{/privacy}",
    "received_events_url": "https://api.github.com/users/abhiraj100/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "ABHIRAJ YADAV",
    "company": "Student In VIT",
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 56,
    "public_gists": 1,
    "followers": 1,
    "following": 2,
    "created_at": "2022-04-02T16:28:09Z",
    "updated_at": "2024-10-19T19:14:20Z"
    }

    

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/twitter", (req, res) => {
  res.send("abhiraj.com");
});

app.get("/login", (req, res) => {
  res.send("<h1>please login at chai aur code</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Chai aur code</h2>");
});

app.get("/github", (req, res) => {
    res.json(githubData);
})

app.listen(PORT, () => {
  console.log(`Server is listening at PORT: ${PORT}`);
});
