const { Socket } = require('socket.io');


/**
 * @param {Socket} socket 
 */
const socketController = (parent) => (socket) => {

    console.log("Cliente conectado", socket.id);

    socket.emit("tu-id", socket.id);

    parent.users.push({
        id: socket.id,
        name: socket.name
    });

    // parent.emitUsers();
    socket.broadcast.emit("users", parent.users);
    socket.emit("users", parent.users);

    socket.on("user-updated", (user) => {
        const { id, name } = user;
        parent.users = parent.users.map(u => {
            // if (u === id) return name;

            if(u.id === id){
                return {
                    ...u,
                    name: name
                }
            }

            return u;
        });
        socket.broadcast.emit("users", parent.users);
        socket.emit("users", parent.users);
        // parent.emitUsers();
    });

    socket.on("disconnect", () => {
        console.log("cliente desconectado", socket.id);
        parent.users = parent.users.filter(user => user !== socket.id);
        // parent.emitUsers();
        socket.broadcast.emit("users", parent.users);
        socket.emit("users", parent.users);
    });

    socket.on("mensaje", (payload, callback) => {
        console.log(payload);
        const { message, selectedUsers } = payload;
        if (selectedUsers.length) {
            for (const { id } of selectedUsers) {
                socket.to(id).emit("global-message", message);
                callback(`to ${id}:<br>${message}`);
            }
            return;
        }
        socket.broadcast.emit("global-message", message);
        callback("callback: " + message);
    });

};

module.exports = socketController;