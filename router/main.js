module.exports = function(app)
{
    app.get('/',function(req,res){
        res.render('index.html')
    });

    app.get('/result', function(req, res) {
        res.render('result.html')
    });
}