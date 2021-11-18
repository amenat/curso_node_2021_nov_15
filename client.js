const redis = {};

const sendPost = async (url, body) => fetch(url, {
    method: "post",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
})
    .then(res => res.json());

const sendDelete = async (url) => fetch(url, {
    method: "delete",
})
    .then(res => res.text());



redis.addUser = async (user) => {
    sendPost("/user", user);
};

redis.getUsers = async () => fetch("/user").then(res => res.json());

