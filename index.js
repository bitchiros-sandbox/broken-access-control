// DELETE /users/:id
app.delete('/users/:id', (req, res) => {
    const userId = req.params.id;

    // 💀 No check if the authenticated user is allowed to delete this ID
    db.deleteUser(userId)
        .then(() => res.send('User deleted'))
        .catch(err => res.status(500).send('Error'));
});
