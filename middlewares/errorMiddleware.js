const handleErrors = (err, req, res, next) => {
    console.error(err.stack);
    
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.status(400).json({ error: 'Invalid JSON' });
    }

    res.status(500).json({ error: 'Something went wrong!' });
};

module.exports = handleErrors;
