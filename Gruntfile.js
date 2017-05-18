// Generated on 2015-01-21 using generator-angular 0.9.2
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Configurable paths for the application
    var appConfig = {
        app: require('./bower.json').appPath || 'app',
        dist: 'dist'
    };

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        yeoman: appConfig,


        // configure nodemon
        nodemon: {
            dev: {
                script: 'server.js',
                ignore:  ['node_modules/**','public/**']
            }
        },

        // Watches files for changes and runs tasks based on the changed files
        watch: {


            compass: {
                files: ['**/*.{scss,sass}'],
                tasks: ['compass']
            }
        },

        compass: {
            dist: {
                options: {
                    sassDir: './public/styles/scss',
                    cssDir: './public/styles/css',
                    environment: 'development',

                }
            }
        },

        // The actual grunt server settings
        connect: {
            options: {
                port: 3000,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: 'localhost',
                livereload: 35729
            },
            livereload: {
                options: {
                    open: true,
                    middleware: function (connect) {
                        return [
                            connect.static('.tmp'),
                            connect().use(
                                '/libs',
                                connect.static('./libs')
                            ),
                            connect.static(appConfig.app)
                        ];
                    }
                }
            },
            test: {
                options: {
                    port: 9001,
                    middleware: function (connect) {
                        return [
                            connect.static('.tmp'),
                            connect.static('test'),
                            connect().use(
                                '/libs',
                                connect.static('./libs')
                            ),
                            connect.static(appConfig.app)
                        ];
                    }
                }
            },
            dist: {
                options: {
                    open: true,
                    base: '<%= yeoman.dist %>'
                }
            }
        },

        // Make sure code styles are up to par and there are no obvious mistakes
        // jshint: {
        //   options: {
        //     jshintrc: '.jshintrc',
        //     reporter: require('jshint-stylish')
        //   },
        //   all: {
        //     src: [
        //       'Gruntfile.js',
        //       '<%= yeoman.app %>/scripts/{,*/}*.js'
        //     ]
        //   },
        //   test: {
        //     options: {
        //       jshintrc: 'test/.jshintrc'
        //     },
        //     src: ['test/spec/{,*/}*.js']
        //   }
        // },

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= yeoman.dist %>/{,*/}*',
                        '!<%= yeoman.dist %>/.git*'
                    ]
                }]
            },
            server: '.tmp'
        },

        // Add vendor prefixed styles
        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: '{,*/}*.css',
                    dest: '.tmp/styles/'
                }]
            }
        },

        // Automatically inject Bower components into the app
        /*    wiredep: {
         options: {
         cwd: '<%= yeoman.app %>'
         },
         app: {
         src: ['<%= yeoman.app %>/index.html'],
         ignorePath:  /\.\.\//
         }
         },
         */
        // Renames files for browser caching purposes
        filerev: {
            dist: {
                src: [
                    '<%= yeoman.dist %>/scripts/{,*/}*.js',
                    '<%= yeoman.dist %>/styles/{,*/}*.css',
                    '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
                    '<%= yeoman.dist %>/styles/fonts/*'
                ]
            }
        },

        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            html: '<%= yeoman.app %>/index.html',
            options: {
                dest: '<%= yeoman.dist %>',
                flow: {
                    html: {
                        steps: {
                            js: ['concat', 'uglifyjs'],
                            css: ['cssmin']
                        },
                        post: {}
                    }
                }
            }
        },

        // Performs rewrites based on filerev and the useminPrepare configuration
        usemin: {
            html: ['<%= yeoman.dist %>/{,*/}*.html'],
            css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
            options: {
                assetsDirs: ['<%= yeoman.dist %>','<%= yeoman.dist %>/images']
            }
        },

        // The following *-min tasks will produce minified files in the dist folder
        // By default, your `index.html`'s <!-- Usemin block --> will take care of
        // minification. These next options are pre-configured if you do not wish
        // to use the Usemin blocks.

        // cssmin: {
        //   dist: {
        //     files: [{
        //       expand: true,
        //       cwd: '<%= yeoman.dist %>',
        //       src: 'styles/*.css',
        //       dest: '<%= yeoman.dist %>'
        //     }]
        //   }
        // },

        cssmin: {
            combine: {
                files: {
                    'public/dist/application.min.css': [
                        'public/libs/bootstrap/dist/css/bootstrap.min.css',
                        'public/libs/bootstrapvalidator/dist/css/bootstrapValidator.min.css',
                        'public/libs/select2/select2.css',
                        'public/libs/sweetalert/dist/sweetalert.css',
                        'public/styles/css/main.css',
                    ]
                }
            }
        },


        // uglify: {
        //   build: {
        //     files: [{
        //         expand: true,
        //         src: '**/*.js',
        //         dest: '<%= yeoman.dist %>/scripts',
        //         cwd: '<%= yeoman.app %>/scripts'
        //     }]
        //   },
        //   options: {
        //     mangle:false
        //   },
        // },

        uglify: {
            production: {
                options: {
                    mangle: true
                },
                files: {
                    'public/dist/application.min.js': 'public/dist/application.js',
                    'public/dist/lib.min.js': 'public/dist/lib.js'
                }
            }
        },


        // concat: {
        //   dist: {}
        // },

        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.{png,jpg,jpeg,gif}',
                    dest: '<%= yeoman.dist %>/images'
                }]
            }
        },

        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.svg',
                    dest: '<%= yeoman.dist %>/images'
                }]
            }
        },

        htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true,
                    conservativeCollapse: true,
                    collapseBooleanAttributes: true,
                    removeCommentsFromCDATA: true,
                    removeOptionalTags: true
                },
                files: [{
                    expand: true,
                    cwd: 'public/views/',
                    src: '{,*/*/}*.html',
                    dest: 'public/dist/views',
                }]
            }
        },

        // ngAnnotate tries to make the code safe for minification automatically by
        // using the Angular long form for dependency injection. It doesn't work on
        // things like resolve or inject so those have to be done manually.
        // ngAnnotate: {
        //   dist: {
        //     files: [{
        //       expand: true,
        //      cwd: '<%= yeoman.app %>/scripts',
        //       src: '**/*.js',
        //      dest: '<%= yeoman.dist %>/scripts',
        //     }]
        //   }
        // },
        ngAnnotate: {
            production: {
                files: {
                    'public/dist/application.js': [
                        'public/js/app.js',
                        'public/js/controllers/*.js',
                        'public/js/controllers/dashboard/*/*.js',
                        'public/js/directives/*.js',
                        'public/js/directives/dashboard/*.js',
                        'public/js/services/*.js',
                        'public/js/services/dashboard/*/*.js'
                    ],
                    'public/dist/lib.js': [
                        'public/libs/lodash/lodash.min.js',
                        'public/libs/modernizr/modernizr.js',
                        'public/libs/jquery/dist/jquery.min.js',
                        'public/libs/angular/angular.min.js',
                        'public/libs/angular-touch/angular-touch.js',
                        'public/libs/angular-animate/angular-animate.js',
                        'public/libs/angular-sanitize/angular-sanitize.min.js',
                        'public/libs/bootstrap/dist/js/bootstrap.min.js',
                        'public/libs/bootstrapvalidator/dist/js/bootstrapValidator.min.js',
                        'public/libs/angular-ui-router/release/angular-ui-router.min.js',
                        'public/libs/angular-bootstrap/ui-bootstrap-tpls.min.js',
                        'public/libs/oclazyload/dist/ocLazyLoad.min.js',
                        'public/libs/ng-google-signin/dist/ng-google-signin.js',
                        'public/libs/angular-md5/angular-md5.js',
                        'public/libs/spin.js/spin.js',
                        'public/libs/angular-spinner/angular-spinner.js',
                        'public/libs/ng-file-upload/ng-file-upload.min.js',
                        'public/libs/angular-base64/angular-base64.min.js',
                        'public/libs/sweetalert/dist/sweetalert.min.js',
                        'public/libs/angular-environment/dist/angular-environment.min.js',

                    ]
                }
            }
        },

        jshint: {
            all: {
                src: [
                    'public/js/app.js',
                    'public/js/controllers/*.js',
                    'public/js/controllers/dashboard/*/*.js',
                    'public/js/directives/*.js',
                    'public/js/directives/dashboard/*.js',
                    'public/js/services/*.js',
                    'public/js/services/dashboard/*/*.js'
                ],
                options: {
                    jshintrc: true
                }
            }
        },

        // Replace Google CDN references
        cdnify: {
            dist: {
                html: ['<%= yeoman.dist %>/*.html']
            }
        },

        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [ '**']
                },{

                    expand:true,
                    cwd:'bower_components',
                    dest:'<%= yeoman.dist %>/bower_components',
                    src:['**']
                } ,

                    {
                        expand: true,
                        cwd: '.tmp/images',
                        dest: '<%= yeoman.dist %>/images',
                        src: ['generated/*']
                    }, {
                        expand: true,
                        cwd: 'bower_components/bootstrap/dist',
                        src: 'fonts/*',
                        dest: '<%= yeoman.dist %>'
                    }]
            },
            styles: {
                expand: true,
                cwd: '<%= yeoman.app %>/styles',
                dest: '.tmp/styles/',
                src: '{,*/}*.css'
            }
        },

        sass: {
            src: ['<%= yeoman.app %>/css/{,*/}*.{scss,sass}'],
            ignorePath: /(\.\.\/){1,2}libs\//

        },

        // Run some tasks in parallel to speed up the build process
        concurrent: {
            server: {
                tasks: [
                    'compass',
                    'nodemon',
                    'watch'
                ],
                options: {
                    logConcurrentOutput: true
                }
            },
            test: [
                'compass'
            ],
            dist: [
                'imagemin',
                'svgmin'
            ]
        },

        // Test settings
        karma: {
            unit: {
                configFile: 'test/karma.conf.js',
                singleRun: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'concurrent:server',
            'autoprefixer',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function (target) {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run(['serve:' + target]);
    });

    grunt.registerTask('test', [
        'clean:server',
        'concurrent:test',
        'autoprefixer',
        'connect:test',
        'karma'
    ]);

    // grunt.registerTask('build', [
    //   'clean:dist',
    //   'concurrent:dist',
    //   'copy:dist',
    //   'cssmin',
    //   'ngAnnotate',
    //   'uglify',
    //   'htmlmin'
    // ]);

    // Build task(s).
    grunt.registerTask('build', [  'ngAnnotate' , 'uglify' , 'cssmin' ]);

    //grunt.registerTask('default', [
    // 'newer:jshint',
    // 'test',
    // 'build'
    //]);
    grunt.registerTask('default', ['concurrent:server']);
};
