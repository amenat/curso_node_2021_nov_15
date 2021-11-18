const redis = {};

const sendPost = async (url, body) => fetch(url, {
    method: "post",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
})
    .then(res => res.json());

redis.addUser = async (user) => {
    sendPost("/user", user);
};


redis.addUser({
    name: "Juan",
    jobArea: "IT"
});



