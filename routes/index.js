exports.index = function(req,res){
    res.render('index');
}

/** serve jade enabled partials */
exports.partials = function(req, res) {
    console.log(req.params);
    res.render('partials/' + req.params.name);
}