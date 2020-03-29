let i = 0;

const handler = (req, res) => {
    i++;
    res.end(`Hi guys. ${i}`);
}

module.exports = handler;