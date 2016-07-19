'use strict';

var gulp = require("gulp");
var zip = require('gulp-zip');
var Client = require('ssh2').Client;
var sftp = require("gulp-sftp");

gulp.task("deploy",[],function(){

  gulp.src('dist/**')
    .pipe(zip('we-farmss.zip'))
    .pipe(gulp.dest('./'))
    .pipe(sftp({
        host: '192.168.186.5',
        user: 'root',
        pass: '1989219liping',
		remotePath:'/usr/local/nginx/we-farmss/',
        callback : function(){
            var conn = new Client();
            conn.on('ready', function() {
                console.log('exec unzip we-farmss.zip...');
                conn.exec('cd /usr/local/nginx/we-farmss/ && unzip -o we-farmss.zip', function(err, stream) {
                    if (err) throw err;
                    stream.on('close', function(code, signal) {
                      console.log('exec end :: code: ' + code );
                      conn.end();
                    }).on('data', function(data) {
                      //console.log('STDOUT: ' + data);
                    }).stderr.on('data', function(data) {
                      console.log('STDERR: ' + data);
                    });
              });
            }).connect({
                    host: '192.168.186.5',
                    port: 22,
                    username: 'root',
                    password: '1989219liping'
            });
        }
    }));

});
