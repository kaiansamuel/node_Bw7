"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.send('Hello World');
});
router.get('/contato', (req, res) => {
    res.send('Formulário de Contato');
});
router.get('/sobre', (req, res) => {
    res.send('Pagina institucional');
});
exports.default = router;
