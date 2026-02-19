exports.login = (req, res) => {
    const { user, pass, captcha } = req.body;

    // Simulación de validación de CAPTCHA (Criterio de evaluación)
    if (captcha !== "4") { 
        return res.status(400).send("Captcha incorrecto. Suma de 2+2 es 4.");
    }

    if (user === "admin" && pass === "1234") {
        req.session.loggedin = true;
        req.session.username = user;
        res.send("¡Autenticación Exitosa!");
    } else {
        res.status(401).send("Credenciales inválidas.");
    }
};

exports.logout = (req, res) => {
    req.session.destroy();
    res.send("Sesión cerrada correctamente.");
};

exports.checkStatus = (req, res) => {
    if (req.session.loggedin) {
        res.send(`Sesión activa para: ${req.session.username}`);
    } else {
        res.send("No hay sesión activa.");
    }
};
